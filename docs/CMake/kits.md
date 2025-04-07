# CMake 工具包

一个“工具包”定义的是项目独立和配置独立的信息，用于构建代码。 工具包可以包括：

- 一组编译器：这些被锁定到特定版本，以便您可以快速轻松地切换编译器版本。
- 导入的 Visual Studio 工具集：为了构建 Visual Studio 需要不仅是找到所需的编译器可执行文件，Visual C++ 还需要设置某些环境变量来告诉它如何找到并链接 Visual C++ 工具链头文件和库文件。
- 工具链文件：指导 CMake 如何编译和链接到目标的低级方式。CMake Tools 使用工具包来处理工具链文件。

工具包大多是独立于 CMake 生成器（CMake 生成器会为本机构建系统编写输入文件）的。Visual Studio 工具包有一个首选生成器，当没有与 Visual C++ 编译器匹配的 MSBuild 和 .sln 生成器时，它将用作回退。

> **注意：**
> 如果您使用 [Ninja](https://ninja-build.org/) 构建系统，则无需担心 Visual Studio CMake 生成器。CMake Tools 将首选 Ninja（除非另有配置）。
> 如果在配置项目时更改活动的工具包，将使用所选择的工具包重新生成项目配置。
> 建议使用工具包但不是强制的。 如果不使用工具包，CMake 会进行自己的自动检测。

## 工具包是如何找到和定义的

第一次运行 CMake Tools 扩展时，它会[扫描工具包](#scan-for-kits)以查找可用的工具链。 通过查看已知编译器通常安装的目录，并使用 `vswhere` 搜索 Visual Studio 安装，以填充初始化的工具包列表。

### 用户本地工具包

用户本地工具包是对于所有使用 CMake Tools 的项目而提供给特定用户的工具包。

用户本地工具包列表存储在 `cmake-tools-kits.json` 文件中，可以通过从命令面板中调用“**Edit User-Local CMake Kits**”来编辑此文件。

![Example cmake_kits_json file](https://github.com/microsoft/vscode-cmake-tools/raw/main/docs/images/cmake_kits_json.png)

可以手动编辑此文件以定义新的全局工具包，但是在[扫描工具包](#scan-for-kits)期间，CMake Tool 将自动更新此文件的内容。

> **提示：**
> 为了避免在下一次[扫描工具包](#scan-for-kits)时以获得想要的效果而覆盖您的更改，请定义具有所需设置的新工具包，而不是更改 CMake 工具创建的工具包。

### 项目工具包

默认的用户本地工具包对于使用 CMake 工具的所有项目都可用。 要定义项目本地工具包，请在项目目录中创建 `.vscode/cmake-kits.json` 文件。 您手动管理此文件的内容，但是在添加、删除或更改此文件时，CMake Tools会自动加载并刷新。 切换工具包时，可以从用户本地和项目本地工具包选择。

当项目定义自己的 CMake 工具链文件时，项目本地工具包非常有用。[工具链工具包](#specify-a-toolchain) 可以指定要加载的文件。您可以将 `.vscode/cmake-kits.json` 提交到源代码控制中，并与其他开发人员共享名称工具链，以更轻松地协作。

### 扫描工具包

从 VS Code 命令面板运行 **Scan for Kits** 来更新[用户本地工具包](#user-local-kits)。 使用以下过程来查找可用的工具包：

**1. 在当前路径中搜索编译器**

- CMake 工具使用 `PATH` 环境变量来获取可以找到编译器的目录列表。
- CMake Tools 在 `PATH` 上查找 `gcc` 和 `clang` 二进制文件，并从找到的每个可执行文件获取版本信息。对于 `gcc`，如果相应的 `g++` 可执行文件位于同一目录中，它将作为相应的 C++ 编译器添加到工具包中。 对于 `clang` 可执行文件位于同一目录中的 `clang++` 二进制文件同理。
> **注意：** CMake 工具仅会自动检测 `Clang` 和 `GCC` 。如果您希望为更多工具实现自动检测，则请[打开 Github 问题](https://github.com/microsoft/vscode-cmake-tools/issues)，提供关于编译器二进制文件名称和如何解析其版本信息的信息。

**2. 查找 Visual Studio 安装**

- CMake 工具包已包含 `vswhere.exe`，它用于查找系统上安装的 Visual Studio 实例。
- 对于 `x86`、`amd64`、`x86_amd64`、`x86_arm`、`x86_arm64`、`amd64_x86`、`amd64_arm` 和 `amd64_arm64` 中的每个环境，CMake Tools 检查安装的 Visual C++ 环境。找到每个现有的 MSVC 工具链时都会生成一个工具包。

**3. 将结果保存到用户本地工具包文件**

- 用户本地工具包 `cmake-tooks-kits.json` 文件将使用新的工具包信息进行更新。

> **警告：**
> 工具包名称是根据工具包编译器和版本信息生成的。同名的工具包会被覆盖。为了防止用户自定义工具包被覆盖，给它们取唯一的名称。CMake 工具将不会从 `cmake-tools-kits.json` 中删除条目。它只会添加和更新现有条目。

## 工具包选项

CMake 在 `cmake-tools-kits.json`（用户本地）或 `.vscode/cmake-kits.json`（项目级别）定义工具包期间定义了不同的选项，并且可以根据需要逐个混合和混搭这些选项。例如，一个工具包可能需要 Visual Studio 环境，同时指定 `clang-cl` 作为编译器。

有关在配置期间如何应用工具包的更多信息，请参见 [Configure CMake](configure.md)。

### 指定编译器

要指定编译器，请在 `cmake-tools-kits.json` 或 `.vscode/cmake-kits.json` 文件中列出编译器的路径。

最常用的 CMake 语言是 “C” 和 “CXX”，而 CMake 工具具有内置的支持，可以找到这些语言。但是，可以指定任何语言：

```json
[
    {
        "name": "My Compiler Kit",
        "compilers": {
            "C": "/usr/bin/gcc",
            "CXX": "/usr/bin/g++",
            "Fortran": "/usr/bin/gfortran"
        }
    }
]
```

### 指定工具链

CMake 工具不会自动检测工具链，但是可以在工具包中指定一个 CMake 工具链文件，例如：

```json
[
    {
        "name": "Emscripten",
        "toolchainFile": "/path/to/emscripten/toolchain.cmake"
    }
]
```

CMake 工具将传递此路径作为 `CMAKE_TOOLCHAIN_FILE` 进行配置。

### Visual Studio

CMake 工具已自动设置适用于 Visual C++ 的环境。最好先让 CMake Tools 生成工具包，然后再复制并修改它们：

```json
[
    {
        "name": "A Visual Studio",
        "visualStudio": "Visual Studio Build Tools 2017",
        "visualStudioArchitecture": "amd64"
    }
]
```

键：
> `visualStudio`：通过“VSWhere”获取的 Visual Studio 安装文件夹名称。\
> `visualStudioArchitecture`：在输入 VS 开发环境时, 支持批处理文件 `vcvarsall.bat` 的 Visual Studio 目标体系结构。

> **注意：**
> 要使用 Visual C++，必须指定`visualStudio`和`visualStudioArchitecture`。省略其中之一将无法正常工作。

### 通用选项

可以指定以下其他选项：

`preferredGenerator`

> 用于在该工具包中使用的 CMake 生成器（如果不是默认值）。 CMake Tools 仍会在 `settings.json` 中搜索 `cmake.preferredGenerators`，但如果用户设置中未提供生成器，则会转换为此选项。

`cmakeSettings`

> 在运行 CMake 配置时作为缓存设置的 JSON 对象列表。不要将其用于特定于项目的设置和选项。 相反，请使用 `settings.json` 来做这件事。
>
> 该设置最有用的情况是当工具链文件遵循可以传递为高速缓存变量的附加选项时。

`environmentVariables`

> 指定使用此工具包时要定义的其他环境变量的 JSON 对象（键值对）。

`environmentSetupScript`

> 修改/添加环境变量以供工具包使用的脚本的绝对路径。在 Windows 上使用`call` ，其他情况下使用 `bash source`。

`description`

> 工具包的简短描述，在选择菜单中与名称一起显示。

## 下一步操作

- 探索[CMake 工具文档](README.md)