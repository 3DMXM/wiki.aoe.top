# CMake 变量

CMake 工具包引入了 _CMake 变量_ 的概念，它们是将一组常见的构建选项分组并给它们命名的一种方式。

创建变量的主要方法是使用 `cmake-variants.json` 或 `cmake-variants.yaml` 文件。

变量是不同于工具链或工具集的概念。这些由[CMake 工具包](kits.md)处理。

默认情况下，如果不存在变量文件，则 CMake 工具包会加载与默认 CMake 构建类型相对应的四个变量：**Release**、**Debug**、**MinSizeRel**和**RelWithDebInfo**。这些变量执行以下操作：

| 选项             | 描述                             |
| ---------------- | -------------------------------- |
| `Debug`          | 禁用优化并包含调试信息。         |
| `Release`        | 包含优化但没有调试信息。         |
| `MinSizeRel`     | 为大小进行优化。无调试信息。     |
| `RelWithDebInfo` | 为速度进行优化但也包含调试信息。 |

选择其中一个变量将配置并构建相应的构建类型。

> **重要提示：**
> CMake 工具包不遵循 `CMAKE_CONFIGURATION_TYPES`。只有上面列出的默认配置类型存在。需要自定义变量文件才能加载其他构建类型。

对于较小的项目，您无需提供自定义的 `cmake-variants.yaml` 文件。默认的 CMake 构建类型很好地完成了此工作。

具有更复杂配置选项的大型项目可以指定其他构建变量。

变量文件可以放置在项目目录的根目录或项目的 `.vscode` 子目录中。

> **注意：**
> CMake 工具包提供了 YAML 验证模式，但仅在使用 **YAML Support by Red Hat** 扩展时在编辑器中进行检查。

您可以使用 `cmake-variants.json` 或 `cmake-variants.yaml`，结果将相同。本文例子采用 YAML 格式，但也可以在 JSON 中定义。

## 示例 YAML 变量文件

一个简单的两设置 `cmake-variants.yaml` 可能看起来像这样：

![示例 cmake-variants.yaml 文件](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/variants_yaml.png)

该文件定义了两个变量设置：`buildType` 和 `useOpenGL`。`choices` 定义了每个选项的两个选项。一组设置中的选项组合形成一个变量。

总的来说，可能变量数量由可选项的笛卡尔积定义。例如，两个设置，每个设置有两个选项，则会创建四个变量。当您更改构建类型时，CMake 工具包将在“快速选择”列表中显示可能的组合：

![变种快速选择列表示例](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/custom_variant_selector.png)

当存在 `cmake-variants.json` 或 `cmake-variants.yaml` 文件时，它们定义的选项将替换默认的变量集。这使得项目所有者可以定义自己的常见构建配置集合，并将其分发给其他用户。

## 变量架构

变量的根必须是一个对象，其中每个键表示一种变量选项。在上述示例中，为 `CMAKE_BUILD_TYPE` 定义了一个 `buildType` 选项。它还公开了一个控制 `ENABLE_OPENGL` 的选项 `useOpenGL`。

### 变量设置

变量中的每个设置都可以是一个对象，它可能带有以下键：

| 键            | 描述                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| `default`     | 要设置为变量选项的默认选择的字符串。此处的字符串必须对应于 `choices` 中的一个选项。 |
| `description` | 可选字符串，描述该选项的控制内容。CMake 工具包将忽略此字符串。                      |
| `choices`     | 此设置的可能选项的映射。一个变量设置可以有任意多的选项。下一节将描述选项。          |

### 变量选项

变量选项出现在变量设置的 `choices` 键下。每个选项必须具有唯一名称，但是名称本身对于 CMake 工具包而言并不重要。

一个选择可以指定以下任何选项，但必须包括 `short`选项：

| 选项                | 描述                                                                                                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `short`             | 描述该选项的简短易懂的字符串。                                                                                                                                                |
| `long（可选）`      | 表示该选项的文字说明。                                                                                                                                                        |
| `buildType（可选）` | 活动选项时要设置的可选字符串，用于 `CMAKE_BUILD_TYPE`。                                                                                                                       |
| `linkage（可选）`   | `static` 或 `shared`。设置 `CMAKE_BUILD_SHARED_LIBS` 的值。                                                                                                                   |
| `settings（可选）`  | 要通过 `-D` 在 CMake 命令行中传递的任意 CMake 缓存选项的映射。类似于 `settings.json` 中的 `cmake.configureSettings`。                                                         |
| `env（可选）`       | 指定要在 CMake _configure_（而不是构建）期间设置的附加环境变量的键值字符串对的映射。这些环境变量会覆盖 `settings.json`、当前的 [CMake 工具包](kits.md) 和系统设置的环境变量。 |

上述选项仅在 `choices` 映射条目下有效。

## 应用变量的方法

变量是从每个设置的一个选项中组合形成的特定组合。当 CMake 工具包执行配置步骤时，它使用当前活动的选项中的值来确定传递给 CMake 进程的值，如下所示：

1. 合并所有活动选项的属性。对于 `env` 和 `settings`，这些对象本身会被合并。合并顺序未指定，因此选项中的冲突属性将导致未指定的行为。

1. 将所选选项中的所有`settings` 作为 `-D` 参数传递到 CMake 进程。

1. `buildType` 用于 `CMAKE_BUILD_TYPE`，用于构建的 `--config` 标志（对于多配置生成器），以及用于 CTest 的 `--config` 标志。

1. 如果 `linkage` 是 `true`，则将 `BUILD_SHARED_LIBS` 设置为 `ON`。如果 `linkage` 是 `false`，则将 `BUILD_SHARED_LIBS` 设置为 `OFF`。如果未指定，则不会在 CMake 命令行上设置 `BUILD_SHARED_LIBS`。

1. `env` 中的环境变量将用于 CMake 进程。

## 大型变量文件示例 

给定以下变量文件：

```yaml
    buildType:
      default: debug
      choices:
        debug:
          short: Debug
          long: Emit debug information
          buildType: Debug
        release:
          short: Release
          long: Optimize generated code
          buildType: Release
        asan:
          short: Asan
          long: Instrument with Address Sanitizer
          buildType: Asan
        tsan:
          short: Tsan
          long: Instrument with Thread Sanitizer
          buildType: Tsan

    linkage:
      default: static
      choices:
        static:
          short: Static
          long: Create static libraries
          linkage: static
        shared:
          short: Shared
          long: Create shared libraries/DLLs
          linkage: shared

    engine:
      default: ogl
      choices:
        ogl:
          short: OpenGL
          long: OpenGL rendering
          settings:
            ENGINE: OpenGL
        d3d:
          short: Direct3D
          long: Direct3D rendering
          settings:
            ENGINE: Direct3D
        vulkan:
          short: Vulkan
          long: Vulkan rendering
          settings:
            ENGINE: Vulkan
        software:
          short: Software
          long: Software rendering
          settings:
            ENGINE: Software

    network:
      default: boost
      choices:
        boost:
          short: Boost.Asio
          long: Use Boost.Asio for networking
          settings:
            NETWORK: Boost
        asio:
          short: Asio
          long: Use standalone-Asio for networking
          settings:
            NETWORK: Asio
        net-ts:
          short: NetTS
          long: Use the C++ Networking TS for networking
          settings:
            NETWORK: net-ts
```

CMake 工具包将呈现所有可能的组合笛卡尔积。对于上述示例，它将产生 4 × 2 × 4 × 3 = 96 种不同的变量：

![许多变异体的示例](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/many_variants_example.png)

此示例创建了许多可能的变量，但如果您正在构建复杂软件，则可能并非不切实际。CMake 工具包显示所有可能的组合，并在不同会话之间保持您的选择。