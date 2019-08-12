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
**见“A Brief History Of Switcher.txt”**    
### 6.如何切换服务器  
#### Switcher LTS 中提供了两个服务器：  
**默认的 Gitee 服务器（服务器在国内，访问速度较快，但是 AAS 无法下载）和 Github 服务器（服务器在国外，访问速度较慢，且会间接性失灵）**  
#### 切换服务器的方法  
**在 Switcher 主程序左下角找到“更新服务器：XXXXX”字样，点击并按提示继续**  
## 二、支持
### 我的项目首页
**访问：[Github](https://github.com/AASQuanDeng/AAS/)**  
**访问：[Gitee](https://gitee.com/cswitcher/AAS/tree/Switcher/)**
### 重新下载 Switcher
**从[Github](https://raw.githubusercontent.com/AASQuanDeng/AAS/Switcher/Setup.exe)**  
**从[Gitee](https://gitee.com/cswitcher/AAS/raw/Switcher/Setup.exe)**  
### Switcher 开源项目
**[Github](https://aasquandeng.github.io/pages/OpenSourceLicense.html)**
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

Switcher LTS   
*Long Term Support Channel*  
2019