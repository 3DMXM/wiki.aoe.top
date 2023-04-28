# aria2 相关使用教程

> 官方文档： https://aria2.github.io/manual/en/html/aria2c.html

### node.js 启动aria2：

``` typescript
// aria2.ts

const { exec } = require('node:child_process');
const { join } = require('path');

// 启动aria2
function startAria2() {
    let mainPath = join(__dirname, '../../../');
    let aria2cPath = join(mainPath, 'electron/main/aria2/');
    let aria2c = join(aria2cPath, '/aria2c.exe');
    let aria2cConf = join(aria2cPath, 'aria2.conf');
    console.log(mainPath);
    exec(`${aria2c} --conf-path=${aria2cConf}`, (err: any, stdout: any, stderr: any) => {
        if (!err) {
            console.log(stdout);
        }else{
            console.error(err);
            return;
        }
        console.log(stdout);
    });
}

// 停止aria2
function stopAria2() {
    exec('taskkill /F /IM aria2c.exe', (err: any, stdout: any, stderr: any) => {
        if (!err) {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        }else{
            console.error(`exec error: ${err}`);
            return;
        }
    });
}

export default {
    startAria2, stopAria2
}

```

----

## aria2 配置


``` ini
###############################
# Motrix Windows Aria2 config file
#
# @see https://aria2.github.io/manual/en/html/aria2c.html
#
###############################


################ RPC ################
# 启用 JSON-RPC/XML-RPC 服务器.
enable-rpc=true
# 将值为 * 的 Access-Control-Allow-Origin 标头字段添加到 RPC 响应.
rpc-allow-origin-all=true
# 在所有网络接口上侦听传入的 JSON-RPC/XML-RPC 请求.
rpc-listen-all=true


################ File system ################
# 每 SEC 秒保存一个控制文件 (*.aria2).
auto-save-interval=10
# 启用磁盘缓存.
disk-cache=32M
# 指定文件分配方法.
file-allocation=falloc
# 每隔 SEC 秒将错误/未完成的下载保存到 --save-session 选项指定的文件中.
save-session-interval=10


################ Task ################
# 计算并发活动下载时仅排除种子下载
bt-detach-seed-only=true
# 使用 --ca-certificate 选项中指定的证书验证对等方.
check-certificate=false
# 如果 aria2 从远程 HTTP/FTP 服务器收到“文件未找到”状态 NUM 次
# 没有得到一个字节，然后强制下载失败.
max-file-not-found=5
# 设置尝试次数.
max-tries=5
# aria2 不拆分小于 2*SIZE 字节范围.
min-split-size=1M
# 为 HTTP(S) 下载设置用户代理.
user-agent=Transmission/2.94
# Send Accept: deflate, gzip request header
# 发送接受：deflate, gzip 请求头
http-accept-gzip=true


################ BT Task ################
# 启用本地文件匹配.
bt-enable-lpd=true
# 需要使用 arc4 对 BitTorrent 消息有效负载进行加密.
# bt-force-encryption=true
# 如果给出 true，则在使用 --check-integrity 选项进行哈希检查并且文件完成后，继续种子文件.
bt-hash-check-seed=true
# 指定每个 torrent 的最大对等点数.
bt-max-peers=255
# 尝试先下载每个文件的第一个和最后一个片段。 这对于预览文件很有用.
bt-prioritize-piece=head
# 在 BitTorrent 中完成下载时删除未选择的文件.
bt-remove-unselected-file=true
# 在不验证片段哈希的情况下播种以前下载的文件.
bt-seed-unverified=true
# 将主机和端口设置为 IPv4 DHT 网络的入口点.
dht-entry-point=dht.transmissionbt.com:6881
# 将主机和端口设置为 IPv6 DHT 网络的入口点.
dht-entry-point6=dht.transmissionbt.com:6881
# 启用 IPv4 DHT 功能。 它还启用了 UDP 跟踪器支持.
enable-dht=true
# 启用 IPv6 DHT 功能.
enable-dht6=true
# 启用对等交换扩展.
enable-peer-exchange=true
# 指定在对等端客户端版本的 bitorrent 扩展握手期间使用的字符串.
peer-agent=Transmission/2.94
# 指定peer ID前缀.
peer-id-prefix=-TR2940-

```

## WebSocket 监听 jsonrpc 

``` typescript
const socket = new WebSocket('ws://localhost:6800/jsonrpc')
socket.addEventListener('open', () => {
    socket.send(JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "aria2.tellActive",
        params: []
    }))
})
socket.addEventListener('message',(event: any)=>{
    let data = JSON.parse(event.data)
    if (data.method == "aria2.onDownloadStart"){                
        // 监听开始下载时 操作
    }
    if (data.method == "aria2.onDownloadComplete"){
       // 监听下载完成时 操作
    }
    if (data.method == "aria2.onDownloadError"){
        // 监听下载错误时 操作
    }
    if (data.method == "aria2.onDownloadPause"){
        // 监听下载暂停时 操作
    }
    if (data.method == "aria2.onDownloadStop"){
        // 监听下载停止时 操作
    }
})

```

## aria2c 常用指令

``` typescript
let gid = '2089b05ecca3d829'

// 开始下载 aria2.addUri
socket.send(JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "aria2.addUri",
    params: [
        ['https://github.com/3DMXM/OneD/archive/refs/heads/master.zip'], // 下载地址 以数组的形式 可以有多个下载地址 但必须指向同一个文件
            {
                out: "OneD.zip", // 保存的文件名
                dir: "C:\\Users\\xiaom\\Downloads\\test", // 保存到本地的文件夹名称
            }
    ]
}))

// 开始下载种子 aria2.addTorrent
let torrent = base64.b64encode(open('file.torrent').read())
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: gid,
    method: "aria2.addTorrent",
    params: [
        torrent
    ]
}))

// 开始下载Meta aria2.addMetalink
let metalink = base64.b64encode(open('file.meta4').read())
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: gid,
    method: "aria2.addMetalink",
    params: [
        metalink
    ]
}))

// aria2.remove 根据 gid 删除下载任务
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.remove",
    params: [
        gid
    ]
}))

// aria2.forceRemove 根据 gid 强制删除下载任务
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.forceRemove",
    params: [
        gid
    ]
}))

// aria2.pause 根据 gid 暂停下载任务
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.pause",
    params: [
        gid
    ]
}))

// aria2.pauseAll 暂停所有下载任务
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.pauseAll",
    params: []
}))

// aria2.forcePause 根据 gid 强制暂停下载任务
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.forcePause",
    params: [
        gid
    ]
}))

// aria2.forcePauseAll 强制暂停所有下载任务
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.forcePauseAll",
    params: []
}))

// aria2.unpause 根据 gid 恢复下载任务
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.unpause",
    params: [
        gid
    ]
}))

// aria2.unpauseAll 恢复所有下载任务
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.unpauseAll",
    params: []
}))

// aria2.tellStatus 根据 gid 获取下载任务状态
//// 获取有关下载的信息
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.tellStatus",
    params: [
        gid
    ]
}))
//// 仅获取特定键：
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.tellStatus",
    params: [
        gid,
        ['status', 'totalLength', 'completedLength', 'downloadSpeed', 'uploadSpeed', 'connections', 'files']
    ]
}))

// aria2.getUris 根据 gid 获取下载任务的下载地址
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.getUris",
    params: [
        gid
    ]
}))

// aria2.getFiles 根据 gid 获取下载任务的文件信息
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.getFiles",
    params: [
        gid
    ]
}))

// aria2.getPeers 根据 gid 获取下载任务的连接信息
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.getPeers",
    params: [
        gid
    ]
}))

// aria2.getServers 根据 gid 获取下载任务的服务器信息
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.getServers",
    params: [
        gid
    ]
}))

// aria2.tellActive 获取下载中的任务列表
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.tellActive",
    params: [
    ]
}))

// aria2.tellWaiting 获取等待下载的任务列表
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.tellWaiting",
    params: []
}))

// aria2.tellStopped 获取已停止下载的任务列表
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.tellStopped",
    params: []
}))

// aria2.changePosition 更改下载顺序
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.changePosition",
    params: [
        gid,
        'POS_CUR',
        'POS_SET',
        0
    ]
}))

// aria2.changeUri 更改下载地址
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.changeUri",
    params: [
        gid,
        1,
        ['https://github.com/3DMXM/OneD/archive/refs/heads/master.zip']
    ]
}))

// aria2.getOption 根据 gid 获取下载任务的下载选项
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.getOption",
    params: [
        gid
    ]
}))

// aria2.changeOption 根据 gid 更改下载选项
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.changeOption",
    params: [
        gid,
        {
            'max-connection-per-server': '1'
        }
    ]
}))

// aria2.getGlobalOption 获取全局下载选项
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.getGlobalOption",
    params: []
}))

// aria2.changeGlobalOption 更改全局下载选项
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.changeGlobalOption",
    params: [
        {
            'max-connection-per-server': '1'
        }
    ]
}))

// aria2.getGlobalStat 获取全局状态
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.getGlobalStat",
    params: []
}))

// aria2.purgeDownloadResult 清除已完成/错误/已删除的下载以释放内存
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.purgeDownloadResult",
    params: []
}))

// aria2.removeDownloadResult 删除由gid表示的已完成/错误/已删除的下载
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.removeDownloadResult",
    params: [
        gid
    ]
}))

// aria2.getVersion 获取版本信息
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.getVersion",
    params: []
}))

// aria2.getSessionInfo 获取当前会话的信息
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.getSessionInfo",
    params: []
}))

// aria2.shutdown 关闭aria2c进程
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.shutdown",
    params: []
}))

// aria2.forceShutdown 强制关闭aria2c进程
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.forceShutdown",
    params: []
}))

// aria2.saveSession 将当前会话保存到文件
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "aria2.saveSession",
    params: []
}))

// system.multicall 同时创建多个下载任务 并返回结果
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "system.multicall",
    params: [
       [
            {
                'methodName':'aria2.addUri',
                'params':[['http://example.org']]
            },
            {
                'methodName':'aria2.addTorrent',
                'params':[base64.b64encode(open('file.torrent').read())]
            }
       ]
    ]
}))
                        
// system.listMethods 获取全部可用的方法名称
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "system.listMethods",
    params: []
}))

// system.listNotifications 以字符串数组的形式返回所有可用的 RPC 通知
socket.end(JSON.stringify({
    jsonrpc: "2.0",
    id: 'qwer',
    method: "system.listNotifications",
    params: []
}))

```

