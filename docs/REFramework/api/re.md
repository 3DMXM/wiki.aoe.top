包含一些实用函数和回调函数生成器。

## 方法
### `re.msg(text)`
创建一个带有 `text` 的消息框。请注意，这将暂停游戏执行，直到用户按下 OK。

## 回调函数生成器
大多数生成器都有一个预处理和后处理函数。预处理指的是在调用原始方法之前触发回调函数，而后处理指的是在调用原始方法之后触发回调函数。
### `re.on_script_reset(function)`
当重置脚本时调用 `function`。用于清理内容。调用 `on_config_save()`。

### `re.on_config_save(function)`
当 REFramework 想要保存其配置时被调用。

### `re.on_draw_ui(function)`
当菜单中的 "Script Generated UI" 打开时，每帧调用一次。

可以在此处调用 `imgui` 函数，并将它们放置在 REFramework 菜单中的自己的下拉菜单中。

### `re.on_frame(function)`
每帧调用一次。可以在此处使用 `draw` 函数。除非使用 `begin_window` 等，否则不要使用 `imgui` 函数...

请尽量减少在 `on_frame` 和 `on_draw_ui` 中调用游戏方法。

### `re.on_pre_application_entry(name, function)`
### `re.on_application_entry(name, function)`
在执行与 `name` 关联的应用程序/模块入口时触发 `function`。

这非常强大，可以用于在引擎逻辑循环的许多重要点运行代码。

### `re.on_pre_gui_draw_element(function)`
### `re.on_gui_draw_element(function)`
函数原型：`function on_*_draw_element(element, context)`

当正在绘制 GUI 元素时触发 `function`。

在 `on_pre_gui_draw_element` 中需要返回一个 `bool`。当返回 `false` 时，不会绘制 GUI 元素。

`element` 是一个 `REComponent*`。

例如：
```
re.on_pre_gui_draw_element(function(element, context)
    local game_object = element:call("get_GameObject")
    if game_object == nil then return true end

    local name = game_object:call("get_Name")

    log.info("drawing element: " .. name)

    -- Stops the crosshair from being drawn in most RE Engine games.
    if name == "GUIReticle" or name == "GUI_Reticle" then
        return false
    end

    return true
end)
```

## re.on_application_entry 的有效名称
可以通过查看对象浏览器中的 `via.ModuleEntry` 找到它们。

```
Initialize
InitializeLog
InitializeGameCore
InitializeStorage
InitializeResourceManager
InitializeScene
InitializeRemoteHost
InitializeVM
InitializeSystemService
InitializeHardwareService
InitializePushNotificationService
InitializeDialog
InitializeShareService
InitializeUserService
InitializeUDS
InitializeModalDialogService
InitializeGlobalUserData
InitializeSteam
InitializeWeGame
InitializeXCloud
InitializeRebe
InitializeBcat
InitializeEffectMemorySettings
InitializeRenderer
InitializeVR
InitializeSpeedTree
InitializeHID
InitializeEffect
InitializeGeometry
InitializeLandscape
InitializeHoudini
InitializeSound
InitializeWwiselib
InitializeSimpleWwise
InitializeWwise
InitializeAudioRender
InitializeGUI
InitializeSpine
InitializeMotion
InitializeBehaviorTree
InitializeAutoPlay
InitializeScenario
InitializeOctree
InitializeAreaMap
InitializeFSM
InitializeNavigation
InitializePointGraph
InitializeFluidFlock
InitializeTimeline
InitializePhysics
InitializeDynamics
InitializeHavok
InitializeBake
InitializeNetwork
InitializePuppet
InitializeVoiceChat
InitializeVivoxlib
InitializeStore
InitializeBrowser
InitializeDevelopSystem
InitializeBehavior
InitializeMovie
InitializeMame
InitializeSkuService
InitializeTelemetry
InitializeHansoft
InitializeNNFC
InitializeMixer
InitializeThreadPool
Setup
SetupJobScheduler
SetupResourceManager
SetupStorage
SetupGlobalUserData
SetupScene
SetupDevelopSystem
SetupUserService
SetupSystemService
SetupHardwareService
SetupPushNotificationService
SetupShareService
SetupModalDialogService
SetupVM
SetupHID
SetupRenderer
SetupEffect
SetupGeometry
SetupLandscape
SetupHoudini
SetupSound
SetupWwiselib
SetupSimpleWwise
SetupWwise
SetupAudioRender
SetupMotion
SetupNavigation
SetupPointGraph
SetupPhysics
SetupDynamics
SetupHavok
SetupMovie
SetupMame
SetupNetwork
SetupPuppet
SetupStore
SetupBrowser
SetupVoiceChat
SetupVivoxlib
SetupSkuService
SetupTelemetry
SetupHansoft
StartApp
SetupOctree
SetupAreaMap
SetupBehaviorTree
SetupFSM
SetupGUI
SetupSpine
SetupSpeedTree
SetupNNFC
Start
StartStorage
StartResourceManager
StartGlobalUserData
StartPhysics
StartDynamics
StartGUI
StartTimeline
StartOctree
StartAreaMap
StartBehaviorTree
StartFSM
StartSound
StartWwise
StartAudioRender
StartScene
StartRebe
StartNetwork
Update
UpdateDialog
UpdateRemoteHost
UpdateStorage
UpdateScene
UpdateDevelopSystem
UpdateWidget
UpdateAutoPlay
UpdateScenario
UpdateCapture
BeginFrameRendering
UpdateVR
UpdateHID
UpdateMotionFrame
BeginDynamics
PreupdateGUI
BeginHavok
UpdateAIMap
CreatePreupdateGroupFSM
CreatePreupdateGroupBehaviorTree
UpdateGlobalUserData
UpdateUDS
UpdateUserService
UpdateSystemService
UpdateHardwareService
UpdatePushNotificationService
UpdateShareService
UpdateSteam
UpdateWeGame
UpdateBcat
UpdateXCloud
UpdateRebe
UpdateNNFC
BeginPhysics
BeginUpdatePrimitive
BeginUpdatePrimitiveGUI
BeginUpdateSpineDraw
UpdatePuppet
UpdateGUI
PreupdateBehavior
PreupdateBehaviorTree
PreupdateFSM
PreupdateTimeline
UpdateBehavior
CreateUpdateGroupBehaviorTree
CreateNavigationChain
CreateUpdateGroupFSM
UpdateTimeline
PreUpdateAreaMap
UpdateOctree
UpdateAreaMap
UpdateBehaviorTree
UpdateTimelineFsm2
UpdateNavigationPrev
UpdateFSM
UpdateMotion
UpdateSpine
EffectCollisionLimit
UpdatePhysicsAfterUpdatePhase
UpdateGeometry
UpdateLandscape
UpdateHoudini
UpdatePhysicsCharacterController
BeginUpdateHavok2
UpdateDynamics
UpdateNavigation
UpdatePointGraph
UpdateFluidFlock
UpdateConstraintsBegin
LateUpdateBehavior
EditUpdateBehavior
LateUpdateSpine
BeginUpdateHavok
BeginUpdateEffect
UpdateConstraintsEnd
UpdatePhysicsAfterLateUpdatePhase
PrerenderGUI
PrepareRendering
UpdateSound
UpdateWwiselib
UpdateSimpleWwise
UpdateWwise
UpdateAudioRender
CreateSelectorGroupFSM
UpdateNetwork
UpdateHavok
EndUpdateHavok
UpdateFSMSelector
UpdateBehaviorTreeSelector
BeforeLockSceneRendering
EndUpdateHavok2
UpdateJointExpression
UpdateBehaviorTreeSelectorLegacy
UpdateEffect
EndUpdateEffect
UpdateWidgetDynamics
LockScene
WaitRendering
EndDynamics
EndPhysics
BeginRendering
UpdateSpeedTree
RenderDynamics
RenderGUI
RenderGeometry
RenderLandscape
RenderHoudini
UpdatePrimitiveGUI
UpdatePrimitive
UpdateSpineDraw
EndUpdatePrimitive
EndUpdatePrimitiveGUI
EndUpdateSpineDraw
GUIPostPrimitiveRender
ShapeRenderer
UpdateMovie
UpdateMame
UpdateTelemetry
UpdateHansoft
DrawWidget
DevelopRenderer
EndRendering
UpdateStore
UpdateBrowser
UpdateVoiceChat
UpdateVivoxlib
UnlockScene
UpdateVM
StepVisualDebugger
WaitForVblank
Terminate
TerminateScene
TerminateRemoteHost
TerminateHansoft
TerminateTelemetry
TerminateMame
TerminateMovie
TerminateSound
TerminateSimpleWwise
TerminateWwise
TerminateWwiselib
TerminateAudioRender
TerminateVoiceChat
TerminateVivoxlib
TerminatePuppet
TerminateNetwork
TerminateStore
TerminateBrowser
TerminateSpine
TerminateGUI
TerminateAreaMap
TerminateOctree
TerminateFluidFlock
TerminateBehaviorTree
TerminateFSM
TerminateNavigation
TerminatePointGraph
TerminateEffect
TerminateGeometry
TerminateLandscape
TerminateHoudini
TerminateRenderer
TerminateHID
TerminateDynamics
TerminatePhysics
TerminateResourceManager
TerminateHavok
TerminateModalDialogService
TerminateShareService
TerminateGlobalUserData
TerminateStorage
TerminateVM
TerminateJobScheduler
Finalize
FinalizeThreadPool
FinalizeHansoft
FinalizeTelemetry
FinalizeMame
FinalizeMovie
FinalizeBehavior
FinalizeDevelopSystem
FinalizeTimeline
FinalizePuppet
FinalizeNetwork
FinalizeStore
FinalizeBrowser
finalizeAutoPlay
finalizeScenario
FinalizeBehaviorTree
FinalizeFSM
FinalizeNavigation
FinalizePointGraph
FinalizeAreaMap
FinalizeOctree
FinalizeFluidFlock
FinalizeMotion
FinalizeDynamics
FinalizePhysics
FinalizeHavok
FinalizeBake
FinalizeSpine
FinalizeGUI
FinalizeSound
FinalizeWwiselib
FinalizeSimpleWwise
FinalizeWwise
FinalizeAudioRender
FinalizeEffect
FinalizeGeometry
FinalizeSpeedTree
FinalizeLandscape
FinalizeHoudini
FinalizeRenderer
FinalizeHID
FinalizeVR
FinalizeBcat
FinalizeRebe
FinalizeXCloud
FinalizeSteam
FinalizeWeGame
FinalizeNNFC
FinalizeGlobalUserData
FinalizeModalDialogService
FinalizeSkuService
FinalizeUDS
FinalizeUserService
FinalizeShareService
FinalizeSystemService
FinalizeHardwareService
FinalizePushNotificationService
FinalizeScene
FinalizeVM
FinalizeResourceManager
FinalizeRemoteHost
FinalizeStorage
FinalizeDialog
FinalizeMixer
FinalizeGameCore
```
