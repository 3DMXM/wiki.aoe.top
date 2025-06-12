# 📘 AlertMessage 数据指南

## 🧩 结构体: FB1AlertMessageTableRow

定义可向用户显示的消息，包含标题和描述内容。

### 属性

- **Id** (`FName`):  
  告警消息的唯一标识符  
  *(本地化名称对应Title字段，描述对应Desc字段)*

- **Title** (`FString`):  
  消息标题的本地化键值  
  *(字符串表键值)*

- **Desc** (`FString`):  
  消息描述的本地化键值  
  *(字符串表键值)*

## 📚 参考资料

- [EB1AlertType](Enum/EB1AlertType.html)