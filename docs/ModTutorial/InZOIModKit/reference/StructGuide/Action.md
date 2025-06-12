# 📘 Action Data Guide

## 🧩 结构体: FB1ActionTableRow

定义动作数据表中的一行，包含一个或多个动作及相关标签。

### 属性

- **Id** (`FName`):  
  该动作条目的唯一标识符（用作数据表中的行键）。

- **Actions** (`TArray<FB1ActionInfo>`):  
  要执行的单个动作列表。

- **ActionTags** (`TArray<FName>`):  
  用于分类或搜索此动作组的标签。

## 📚 参考资料

- [FB1ActionInfo](Struct/FB1ActionInfo.html)
- [EB1ActionType](Enum/EB1ActionType.html)
- [FB1Condition](Struct/FB1Condition.html)
- [EB1BaseObject](Enum/EB1BaseObject.html)
- [EB1CompareType](Enum/EB1CompareType.html)
- [EB1ConditionType](Enum/EB1ConditionType.html)