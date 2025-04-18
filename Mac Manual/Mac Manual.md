# macOS 第三方输入法使用 caps_lock 切换中英文和大小写

因为iPhone和mac之间的接力总是抽风，经常复制粘贴不好用，所以我还是全面转到稳定好用的微信输入法作为跨设备的剪切板传输工具。但是因为macOS的限制，我们可以看到：

iPhone无法读取最新复制的信息
mac如果没有在微信输入法状态下，则无法获取最新的剪切板信息
那这个文章就来分享一下我是如何解决mac中的abc输入法难题以及如何快速方便的剪切板跨设备共享。

通过SIP来关闭ABC输入法（稳定高效、博主在用，推荐）
可以点击这里查看最新教程

通过KeyboardHolder自动切换输入法（偶尔抽风，切屏恢复，不推荐）
这个是帮助你在不同软件中切换输入法的小工具。这个工具可以实现等同于“删除ABC输入法”的效果。我们将所有的设置都改为微信输入法，这样就可以避免在奇怪的场景下莫名其妙切换到abc输入法的问题。

软件官网



设置方法：


都换成微信输入法

那么当我们需要不同软件使用不同的输入语言怎么办呢？我们可以使用微信输入法的指定「应用」默认使用英文即可。


配置

我是将开发软件与utools都设置为英文了。然后我们需要开启使用shift切换中英文：


切换中英文

我们就完成了基本的配置。现在可以实现全程使用微信输入法了。如果想避免误触中英文键切换到abc，我们可以在系统设置中设置一下，关闭使用大写锁定键切换 “ABC”输入法：


关闭设置

让中/英按键发挥作用（可选）
像是我这种深度mac用户，还是比较习惯使用中/英来切换输入法的。因为按shift总是按着不习惯，太靠下了。但是使用这种方法切换到abc输入法又违背了我们全程使用微信输入法的初衷。所以我使用了Karabiner-Elements来进行改键。

软件官网


软件官网

安装过程虽然有些繁琐但是过程还是比较简单的。安装完之后我们进入Karabiner-Elements中，进行改键设置。


配置

选择for all device，然后右侧选择caps_lock改成left_shift即可。

这两个按键都在Modifier keys中


按键分组

这样等同于按下中/英键实现等同于按下shift的效果。当然输入大写的时候需要按住中/英键之后再按其他字母实现输入大写，并不支持大写锁定。不过大写锁定我是几乎没有使用场景，感觉对于中文语言的人来说，全程大写英文输入还是抽象了点。

iPhone将剪切板内容传递到微信输入法
我的方法就是复制内容之后，回到主页下拉调用搜索。因为搜索的时候会呼出输入法，实现剪切板内容传递到微信输入法的效果。


## Mac下删除系统自带输入法ABC，正解！


一、背景说明
MacOS 在 14.2 以下的系统存在中文输入法 BUG，会造成系统卡顿，出现彩虹圆圈。如果为了解决这个问题，有两种方法：

升级到最新的 14.5 系统
使用第三方输入法
在使用第三方输入法的时候，会发现系统自带的 ABC 输入法无法删除，在网上看过部分教程但是最后都不好用，主要是忽略了一点。
关键点在于在 com. apple. HIToolbox. Plist 删除 Item 的方法是对的，但是很多人会遇到一个问题，删除之后，Item 马上就又回来了，导致一直无法删除成功。

现在详细的说一下删除方法：

二、关闭系统完整性保护 SIP
重启电脑，M 系列芯片长按开机键即可进入。
点击顶部菜单栏中的终端
输入命令关闭 SIP 机制：csrutil disable
如弹出以下信息则表示禁用成功：Successfully disabled System Integrity Protection. Please restart the machine for the changes to take effect.
再次重启即可
详细可看他人图文。

三、找到 com. apple. HIToolbox. plist 文件
提前准备好 Xcode（可以在 app store 下载）或者 PlistEdit Pro (网上自行下载)
在终端输入以下命令：sudo open ~/Library/Preferences/ 会弹出访达，找到文件 com. Apple. HIToolbox. Plist 打开。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/ceafb74b42261c156b8f43bfc5d4077c.jpeg)
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/08b89254612455d772b965c48614ad77.jpeg)3. 具体操作如图？，根据自己的文件位置找到其中 KeyboardLayout Name 为 ABC 的那一列，将整列 item 删掉，然后 command + S 保存 。te
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d18c11a23d744fe7eacce5875cb020d2.jpeg)
4. 重点来了，这个时候如果你只是保存（command+s）的话，马上就回被系统改回来。右键点击 com.apple.HIToolbox.plist 文件，显示简介 - 勾选已锁定。


锁定文件这步操作非常重要，否则你无法更改成功。然后重启系统，则发现再也不用切换输入法了。
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/qq_43921353/article/details/139477924
# 复原 
直接在键盘 添加ABC 英语 关闭上面文件提到的已锁定u

Enter passphrase for key '/Users/loki/.ssh/id_rsa':328592414

Mac OS下Git的SSH配置以及遇到的“Enter passphrase for key”问题

安装了git后，在终端中设置git的user name和email

git config --global user.name "用户名"
git config --global user.email "邮箱地址"
然后终端输入

cd ~/.ssh
如果没有此路径或者此路径下为空，说明没有创建ssh key，终端输入

ssh-keygen -t rsa -C "邮箱地址"
三个回车后生成密钥，获取公钥，并将其添加到你的GitHub上

cat id_rsa.pub
这个时候你会发现每次clone等操作都会遇到“Enter passphrase for key”让你输入私钥密码，终端输入以下命令解决。

ssh-add -K ~/.ssh/id_rsa 
一般来说到这里就结束了，但是我重启电脑后还是需要私钥。这个时候终端输入
vim ~/.ssh/config
然后插入以下内容解决
Host *
    UseKeychain yes

————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/weixin_40498616/article/details/103309418