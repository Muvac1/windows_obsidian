# 解决Windows电脑点睡眠后仍在运行、风扇还在转的问题
相关文章：电脑睡眠后主机仍然在工作，风扇还转，怎么回事？

今天下载了Steam，装了一个Wallpaper Engine后获得了一个不错的桌面，但电脑点睡眠之后仍在运行，风扇转个不停。经过一两个小时的折腾之后终于解决了！！！必须要好好记录下来！！！

一、按Win+R，在弹出的窗口中输入regedit，打开注册表：



二、在路径那输入：HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Power



三、找到AwayModeEnabled，右击后点【修改(M)】，将数值数据改为0





修改完后，问题就解决了！！！

有人说是因为网易UU网游加速器导致的，我确实安装了这个软件用来加速，后来卸载了。

于是我重新安装网易UU网游加速器试验一下，果然，一安装完后，AwayModeEnabled的数值就被改成1了！！！
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/weixin_43826681/article/details/109371158



# 文件夹大小查看/内存管理软件：WizTree
WizTree是一个非常高速的磁盘空间分析工具，适用于Windows。它会扫描你的硬盘，并显示哪些文件和文件夹使用了最多的硬盘空间。你的整个硬盘的文件系统显示出来，使它非常容易定位大文件和文件夹。使用WizTree提供的信息来快速定位和清除硬盘上的“空间大盗”。

WizTree 个人版免费，支持 Windows 系统，支持中文版。下载之后解压，不用安装，直接打开，然后选取扫描的硬盘进行扫描。

下载：

Release WizTree · moshowgame/ra2yuri (github.com)
https://github.com/moshowgame/ra2yuri/releases/tag/WizTree_v416

Older Versions - WizTree
Download older version of WizTree here
https://www.diskanalyzer.com/wiztree-old-versions

扫描结果首页会显示各文件夹的空间占用情况、大小排序、修改时间非常清晰直观 （可按文件大小排序、修改时间排序），我们能非常容易地找到那些占用硬盘空间的大型文件和文件夹，对它们进行分析，解决是否清除。


————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/moshowgame/article/details/134389465

# 2 
