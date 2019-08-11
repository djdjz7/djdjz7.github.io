# Switcher LTS 帮助与支持

## 一、帮助与问题
### 1. 如果你无法运行 Switcher：
**请安装Microsoft .Net  Framework 4.6 和 Visual C++ Runtime**  
*注：Switcher 只能在 Windows 7 或以上的并装有上面运行库的Windows上运行*
### 2. 为什么我打不开AAS或肖亚林的故事？
1. **64位系统：检查 C:\Program Files(x86)\Switcher\Resources\AAS.exe 和 C:\Program Files(x86)\Switcher\Resources\xyl.exe 是否存在**  
**32位系统：检查 C:\Program Files\Switcher\Resources\AAS.exe 和 C:\Program Files\Switcher\Resources\xyl.exe 是否存在**  
1. **(1)如果存在：尝试重新启动Switcher**  
**(2)如果不存在，请重新安装Switcher**
### 3.1 为什么我运行肖亚林的故事时，要求我提供管理员权限?
**Program Files 或 Program Files(x86) 需要管理员权限才能写入文件，肖亚林的故事存档功能需要写入该文件夹，所以要求提供管理员权限。**  
### 3.2 如果我不提供管理员权限呢?
**您有可能无法打开肖亚林的故事**  
### 为什么我无法下载组件？  
**1.请检查您的网络状况**  
**2.若网络正常，请尝试：**  
切换服务器
### 5.更新内容  
见下  
### 6.如何切换服务器  
#### Switcher LTS 中提供了两个服务器：  
**默认的 Gitee 服务器（服务器在国内，访问速度较快，但是 AAS 无法下载）和 Github 服务器（服务器在国外，访问速度较慢，且会间接性失灵）**  
#### 切换服务器的方法  
**在 Switcher 主程序左下角找到“更新服务器：XXXXX”字样，点击并按提示继续**  
## 二、支持
### 我的项目首页
**访问：[Github](https://github.com/AASQuanDeng/AAS/)**  
**访问：[Gitee](https://gitee.com/cswitcher/AAS/tree/Switcher/)**
### 重新下载Switcher
**从[Github](https://raw.githubusercontent.com/AASQuanDeng/AAS/Switcher/Setup.exe)**  
**从[Gitee](https://gitee.com/cswitcher/AAS/raw/Switcher/Setup.exe)**  
## 三、文件目录表
**首次安装Switcher后，文件目录表如下表所示：**

|     文件      |                作用                 |
| :-----------: | :---------------------------------: |
| Activator.exe |                激活                 |
|    app.ico    |            Switcher图标             |
|    sv.sver    | Switcher & Switcher Core 版本号文件 |
| support.html  |           帮助与支持网页            |
|  Updater.exe  |                更新                 |
|  License.rtf  |             条款与约定              |
|  addon.sver  |         初始化的附加更新版本号        |

**第一次检查更新后，文件目录新增：**  

|  文件   |        作用        |
| :-----: | :----------------: |
| AAS.exe |     AAS 主程序     |
| av.sver |     AAS 版本号     |
| xyl.exe | 肖亚林的故事主程序 |
| xv.sver | 肖亚林的故事版本号 |

**激活时，文件目录新增：**  

|  文件  | 作用  |
| :----: | :---: |
| SN.ssn |   *   |

**激活后，文件目录新增：**  

|     文件      | 作用  |
| :-----------: | :---: |
| Activate.sact |   *   |

## 四、错误解决：  

|    错误代码   | 解决方案 |
| :----------: | :------: |
| ERR:COMP/ERR:FILE | 直接重新下载 |
| 检查更新失败 | 确保从 Switcher 启动 Updater，Resources文件夹存在，网络连接正常或切换服务器 |
| 下载失败 | 同上 |

## 五、Updater 2.2 启动参数：  
*单独开启的 Updater 的方法仅适用于紧急情况*  

|  启动参数   |        用途         |
| :--------: | :-----------------: |
|  S  | 忽略所有配置，从 Github 下载最新安装包  |
|  E  | 忽略所有配置，从 Gitee 下载最新安装包  |
|  H  | 忽略所有配置，从 Github 检查更新  |
|  F  | 忽略所有配置，从 Gitee 检查更新  |

*在使用前，先将 Updater 拷贝至 Switcher 根目录。*  

*帮助与支持到此结束*

Switcher Core LTS  
Switcher GUI LTS  
*Long Term Support Channel*  
Finished time: 2019/8/4



## 六、更新日志  
A Brief History of Switcher   
---------------------------------------
Switcher 1.0：诞生  
使用 Dev C++ 编译，控制台应用程序  
---------------------------------------  
Switcher 1.1  
添加了对于新版 AAS 和 肖亚林的故事 支持  
新增了关于板块  
使用 Dev C++ 编译，控制台应用程序  
---------------------------------------
Switcher 1.2  
关于板块首次出现动态版本指示  
使用 Dev C++ 编译，控制台应用程序  
---------------------------------------
Switcher 1.3：迷失  
隐藏了一个彩蛋  
使用 Dev C++ 编译，控制台应用程序  
由于源代码丢失，此版本最终没有发布  
---------------------------------------
Switcher GUI 0.5：追随现代的脚步  
Switcher 首次采用了图形界面  
删除了动态版本指示  
使用 Visual Studio 编译，Windows 窗体应用。  
---------------------------------------
Switcher GUI 1.0  
Switcher GUI 0.5 的正式版  
界面微调  
使用 Visual Studio 编译，Windows 窗体应用。  
---------------------------------------
Switcher GUI 1.0 Update / Switcher Core 3.1  
动态版本指示回归  
界面微调  
设立 Switcher Core 项目  
使用 Visual Studio 编译，Windows 窗体应用。  
---------------------------------------  
Switcher 2.0 / Switcher Core 4.0：重生  
重构代码  
界面大量修改  
加入更新和激活机制  
取消了对 Windows xp SP3, Windows Vista 的支持  
使用 Visual Studio 编译，Windows 窗体应用。  
June 7, 2019  
---------------------------------------
Switcher 2.1 / Switcher Core 4.1  
取消了最大化按钮  
更改了Switcher的退出方式，使退出时不在有cmd窗口闪过；  
使用 Visual Studio 编译，Windows 窗体应用。  
由于该版本中的 Updater 存在变量错乱的严重问题，已经停止使用  
June 30, 2019  
---------------------------------------
Switcher LTS Public Beta / Switcher Core LTS Public Beta：终结，还是起点？  
解决 Updater 中的严重问题  
推出附加更新  
使用 Visual Studio 编译，Windows 窗体应用。  
July 24, 2019  
---------------------------------------
Switcher LTS / Switcher Core LTS  
使用新图标  
界面中央图片更改  
精简了 Updater 中的内容  
在 Activator 中添加错误指示。  
增加 Gitee 服务器并设为默认  
在应用启动时弹窗警告未激活  
使用 Visual Studio 编译，Windows 窗体应用。  
July 26，2019
从此版本起，Updater 采用新的文件格式，之前的 Updater 版本全部失效  
---------------------------------------
Switcher LTS Build 1907  
2019 年 7 月累计更新  
重新设计了图标  
修复 Updater 中的部分排版问题  
取消 Switcher Core 项目  
公开了非核心代码部分  
使用 Visual Studio 编译，Windows 窗体应用。  
July 31, 2019  
---------------------------------------
Switcher LTS 2019 年夏季创意者更新  
重构代码，重新设计界面  
移除了主程序中残留的 Switcher Core 版本
主程序由 Visual Studio 2010 升级为 2015 Update 3  
解决窗口最大化重新出现的问题  
增加安全性，允许以启动参数的方式从外部启动 Updater 以进入恢复模式  
Updater 整合，升级至 2.2，废除开始菜单内的“切换服务器”  
Updater 新增附加更新的名称  
Switcher 主程序现已支持更长的 AAS 前缀  
使用 Visual Studio 编译，Windows 窗体应用。  
October 4, 2019  
---------------------------------------
Switcher LTS Build 1908
内部版本：190800.0.1
全部组件使用 Visual Studio 2019 编译
更改 肖亚林的故事 图标
新增 错误指示
界面微调 
Updater 添加激活判断
Activator 现已支持不同服务器的激活
添加当 AAS 和 肖亚林的故事 主程序不存在时，打开的提醒
此版本尝试对 Windows XP 和 Windows Vista 恢复支持，但由于 Visual Studio 2019 的兼容性放弃 
使用 Visual Studio 编译，Windows 窗体应用。
October 25, 2019
---------------------------------------
