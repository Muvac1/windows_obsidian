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