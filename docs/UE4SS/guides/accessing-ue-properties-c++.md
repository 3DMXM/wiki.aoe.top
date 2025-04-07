# 在C++中与UE属性交互

当制作模组时，你很可能需要读取或写入UE属性。  
传统且不推荐的方法是设置与游戏内存匹配的自定义结构，或者手动向基指针添加偏移量。  
这两种方法的缺点是，当游戏或引擎更新时，它们很容易过时。  
与属性交互的更好方法是使用我们为C++模组提供的API。  
这些API不依赖于编译时已知的结构，也不依赖于容易过时的偏移量。  
它通过使用每个UE游戏中可用的元数据来实现这一点。

## 模板化API

我们提供模板化函数，使获取所需类型变得更加容易。  
这些是访问属性值的最简单方法。

### UObject::GetValuePtrByPropertyNameInChain

此函数返回属性值的指针。  
它会在整个类层次结构（继承）中搜索'PropertyName'，因此比非InChain变体更加推荐。

```c++
// 对于这个例子，假设这个UObject*是通过某种方式正确获取的，并且不是nullptr。
UObject* PlayerController{};
FVector* SpawnLocation = PlayerController->GetValuePtrByPropertyNameInChain<FVector>(STR("SpawnLocation"));
Output::send(STR("{} {} {}\n"), SpawnLocation->X(), SpawnLocation->Y(), SpawnLocation->Z());
```

### UObject::GetValuePtrByPropertyName

与[UObject::GetValuePtrByPropertyNameInChain](#uobjectgetvalueptrbypropertynameinchain)相同，只是它只检查最内层的类。  
例如，对于`APlayerController`，它只会查找`APlayerController`内部，而不会查找`AController`或它继承的任何其他类。

## 访问UStruct值

不建议创建自己的C++结构来模仿游戏结构。  
相反，你应该利用UE的元数据来单独检索每个成员的指针。  
这是为了防止你的代码与游戏不同步，而且这样做更容易，因为它不需要逆向工程。  
我们提供了一些不会过时的结构，如`FVector`和`FRotator`，但在大多数情况下我们不提供。

下面是一些示例代码，展示如何从UObject内部的结构中检索值。

```c++
// 检索：Engine->TinyFontName.SubPathString
// 对于这个例子，假设这个UObject*是通过某种方式正确获取的，并且不是nullptr。
UObject* Engine{};
// 1. 检索TinyFontName变量的属性。
//    就游戏而言，真正的类型是FSoftObjectPath。
//    我们确实在UE4SS中提供了一个'FSoftObjectPath'结构，但让我们假装我们没有。
auto TinyFontNameProperty = static_cast<FStructProperty*>(Engine->GetPropertyByNameInChain(STR("TinyFontName")));
// 2. 检索与属性相对应的UStruct。
UStruct* SoftObjectPath = TinyFontNameProperty->GetStruct();
// 3. 检索UEngine实例中TinyFontName值的指针。
auto TinyFontName = TinyFontNameProperty->ContainerPtrToValuePtr<void>(Engine);
// 4. 检索FSoftObjectPath UStruct中SubPathString的属性。
FProperty* SubPathStringProperty = SoftObjectPath->GetPropertyByNameInChain(STR("SubPathString"));
// 5. 检索FSoftObjectPath结构实例'TinyFontName'中SubPathString值的指针。
//    注意，我们在这里提供了一个模板参数，因为我们知道它是一个FString，而UE4SS有一个安全的FString实现。
//    如果你不提供模板参数，它将返回一个void*。
auto SubPathString = SubPathStringProperty->ContainerPtrToValuePtr<FString>(TinyFontName);
// 6. 输出值。
Output::send(STR("TinyFontName: {}\n"), SubPathString->GetCharArray());
```

你可以深入任意数量的容器，这意味着结构中的结构不是问题。  
例如：

```c++
// 检索：Engine->TinyFontName.AssetPath.AssetName
// 继续上面的例子。
// 7. 检索FSoftObjectPath UStruct中AssetPath变量的属性。
//    就游戏而言，真正的类型是FTopLevelAssetPath。
auto AssetPathProperty = static_cast<FStructProperty*>(SoftObjectPath->GetPropertyByNameInChain(STR("AssetPath")));
// 8. 检索与属性相对应的UStruct。
auto TopLevelAssetPath = AssetPathProperty->GetStruct();
// 9. 检索FSoftObjectPath结构实例'TinyFontName'中AssetPath值的指针。
auto AssetPath = AssetPathProperty->ContainerPtrToValuePtr<void>(TinyFontName);
// 10. 检索FTopLevelAssetPath UStruct中AssetName变量的属性。
auto AssetNameProperty = TopLevelAssetPath->GetPropertyByNameInChain(STR("AssetName"));
// 11. 检索FTopLevelAssetPath结构实例'AssetPath'中AssetName值的指针。
auto AssetName = AssetNameProperty->ContainerPtrToValuePtr<FName>(AssetPath);
// 12. 输出值。
Output::send(STR("AssetName: {}\n"), AssetName->ToString());
```

`ContainerPtrToValuePtr`函数总是返回指向`T`的指针。  
在上面的例子中，`T` == `FName`，所以函数返回`FName*`。  
因为它总是返回一个指针，所以更改属性值变得很简单：

```c++
// 继续上面的例子。
// 13. 通过解引用指针并将值设置为新的FName，把'AssetName'的值设置为"THIS IS A TEST"。
*AssetName = FName(STR("THIS IS A TEST"), FNAME_Add);
// 14. 输出新值。
Output::send(STR("AssetName: {}\n"), AssetName->ToString());
```
