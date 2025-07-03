
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

# #在终端使用命令重置聚焦搜索
1、关闭spotlight，输入命令：
sudo mdutil -a -i off
2、不加载控制聚焦参数的文件，输入命令：
sudo launchctl unload -w /System/Library/LaunchDaemons/com.apple.metadata.mds.plist
3、重新加载控制聚焦参数的文件，输入命令：
sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.metadata.mds.plist
4、打开聚焦，输入命令：
sudo mdutil -a -i on
————————————————

                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/zjj778899/article/details/123824611、

#Mac系统】解决gitclone速度慢-阿里云开发者社区](https://developer.aliyun.com/article/1576025)
## 1 查询两个网址最新IP地址

通过[Ipaddress网站](https://www.ipaddress.com/)查询以下两个网站的服务器IP

- github.com
![[8eec57278035a460aabc86773ce907aa.png]]
- github.global.ssl.fastly.net
    ![[3bc99b2fc8cc198b8a0fdf319ca63d84.png]]

## 2 修改hosts文件

（1）打开hosts文件

> sudo vim /etc/hosts

（2）在文件末尾添加：以上查询到的IP地址+映射网址

```accesslog
140.82.114.3 github.com
199.232.69.194 github.global.ssl.fastly.net
```

Esc后输入wq回车，就保存退出  
（3）刷新生效

> sudo dscacheutil -flushcache

此时git clone速度会有所提升的

# infuse
Infuse想必很多人都知道，目前为止最好的居家观影播放器（[Apple TV](https://zhida.zhihu.com/search?content_id=258772085&content_type=Article&match_order=1&q=Apple+TV&zhida_source=entity)）。

![](https://pic3.zhimg.com/v2-c3f17a1861c09766bdd7452ef8c3dbda_1440w.jpg)

我在家一般都用Infuse看片追剧。Infuse功能很强大，但有一个功能缺失，我一直耿耿于怀，就是他不能同时显示2种语言的字幕（也有称之为“副字幕”功能），虽然它可以很方便的切换多语言，但就不能同时显示2个，而我一直习惯于看中英双语字幕。

也有人在官方论坛上提出了这个需求，但官方就是死活不支持……

[Render multiple subtitles at once​community.firecore.com/t/render-multiple-subtitles-at-once/19588/31](https://link.zhihu.com/?target=https%3A//community.firecore.com/t/render-multiple-subtitles-at-once/19588/31)

设想

既然官方不给力，只能自己想办法。其实也有简单的方法，就是自己去找双语字幕，下载，然后和视频文件放到一起，把文件名改成一样的。这样Infuse就能识别到。但我觉得这样很繁琐。

Infuse除了可以支持影片内嵌的多语言字幕的切换显示，还支持在线字幕匹配。它用的源是OpenSubtitles的，一个开放的字幕网站。作为程序员的我，先前通过抓包，搞清楚了它请求查找的方式，曾打算通过诸如通过代理服务器拦截请求，抓取双语字幕，然后实时合并，返回给Infuse，从而实现一劳永逸。不过这个方法一直没正式开始，因为对我来说，里面存在太多的技术盲区。

也是偶然的，我试着通过Infuse的在线匹配，查找了几次影片的中文字幕，发现找到的标记为简体中文的字幕，很多都是中英文双语的，而且也都是个人自发的合并中英文字幕后上传，分享给大家来用。

我一直很喜欢这种行为，于是便不假思索，也想加入这个“队伍”。

##实施

以下是我实践可行的方法（会持续完善，希望最终能实现自动化）：

##一。用ffmpeg导出内封的中英文字幕

条件：

1. 先假设你手头的视频文件(input.mkv)原本就内嵌多语言字幕。  
    其实现在很多片源都是来源于在线流媒体，内嵌多语言字幕很普遍。  
    这里我用一部美剧The Pitt的S01E03，文件名：`匹兹堡医护前线.The.Pitt.S01E03.2025.2160p.Max.WEB-DL.DDP5.1.H265-ZeroTV.mkv`，举例。
2. 假设你已经安装了`ffmpeg`

先查看字幕的索引号：

```text
ffprobe -i input.mkv -hide_banner -select_streams s -show_entries stream=index,codec_name:stream_tags=language,title -of csv=p=0
```

`ffprobe`是随`ffmpeg`一起安装的工具。

得到如下输出：

```text
2,subrip,chi,简体
3,subrip,chi,繁體（香港）
4,subrip,chi,繁體
5,subrip,bul
6,subrip,cze
7,subrip,dan
8,subrip,gre
9,subrip,eng
10,subrip,eng,SDH
11,subrip,spa,Latin American
12,subrip,spa,Latin American (SDH)
```

我们需要的是简体中文（索引号：`2`）以及英语（索引号：`9`）。注意"eng,SDH"（Subtitles for the Deaf and Hard of Hearing） 并不是我们所要的，它是为听障人士设计的特殊字幕，里面会包含很多声音描述文字。

然后导出这两个字幕文件：

```text
ffmpeg -i input.mkv -map 0:2 -c copy chs.srt -map 0:9 -c copy eng.srt
```

##二。合成双语字幕

其实首选应该是使用[SubtitleEdit](https://zhida.zhihu.com/search?content_id=258772085&content_type=Article&match_order=1&q=SubtitleEdit&zhida_source=entity)工具合并处理，但目前手头只有台Mac，而Mac上要想用上SubtitleEdit并不容易。于是我暂时找到了另一个备选方案，也就是这个在线字幕合并网站，很符合我的需求：

[Subtitle Tools - Merge Subtitles​subtitletools.com/merge-subtitles-online](https://link.zhihu.com/?target=https%3A//subtitletools.com/merge-subtitles-online)

他实现了以下几个要点功能：

- 把两种字幕的多行文本，都转换成一行的（Remove line breaks）  
    有些字幕原本会输出多行，但在合并时，处理成单行可能更合适。
- 可以处理两种字幕中存在的时间线偏差（Nearest cue / Cue combining threshold）  
    比如针对下面这种两个字幕的时间线并不重叠的情况，合并时可以进行容错处理。

![](https://pic4.zhimg.com/v2-504d7113834b053a289d11837867e165_1440w.jpg)

![](https://pic2.zhimg.com/v2-6484166b0eda6231dde437c6787996eb_1440w.jpg)

合并完后，下载字幕文件，把文件名重命名为`匹兹堡医护前线.The.Pitt.S01E03.2025.2160p.Max.WEB-DL.DDP5.1.H265-ZeroTV.chs-eng.srt`。

后缀`chs-eng`表示中文在上，英文在下。如果是英文在上，可以改成`eng-chs` 。此规则为本人自研。

### **三。上传到 OpenSubtitles**

其实现在你把这个字幕放到视频文件同目录下，Infuse就可以自动读取它，你的问题也就已经解决了。

![](https://pic2.zhimg.com/v2-30825ed2a039f82786ae79f23363bee1_1440w.jpg)

但如果上传到OpenSubtitles，就可以让更多的人使用。

Open Subtitles现在有2个网站，一个是[http://opensubtitles.com](https://link.zhihu.com/?target=http%3A//opensubtitles.com)，另一个是[http://opensubtitles.org](https://link.zhihu.com/?target=http%3A//opensubtitles.org)。前者看上去界面更现代化一些，后者相对更老气。我同时注册后发现，好像上传字幕，只能通过[http://opensubtitles.org](https://link.zhihu.com/?target=http%3A//opensubtitles.org)。

通过搜索影片名，找到对应的影片页面：

[https://www.opensubtitles.org/zh/search/sublanguageid-chi/idmovie-2117933](https://link.zhihu.com/?target=https%3A//www.opensubtitles.org/zh/search/sublanguageid-chi/idmovie-2117933)

点击【上传字幕】，填写表单：

![](https://picx.zhimg.com/v2-8dff5e1520aba4dc7e062ca5eb5207a7_1440w.jpg)

表单里有个可选的“每秒帧数”，可以帮助使用者了解字幕匹配度。如果你不知道的话，可以通过这个命令获取：

```text
ffprobe -v error -select_streams v -of default=noprint_wrappers=1:nokey=1 -show_entries stream=r_frame_rate input.mkv | awk -F/ '{ print ($1 / $2) }'
```

输出：`23.976`

上传成功后，可以回到刚才的影片字幕列表页看下是否出现了。

![](https://pic1.zhimg.com/v2-9e23f723c8e3710affc1560d8408fa48_1440w.jpg)

##四。在Infuse上加载你的字幕

![](https://pica.zhimg.com/v2-6f922201536f2da4aa20de01e55ab0b2_1440w.jpg)

第一个下载量多的是中文单语言，第二个是我上传的。

![](https://pic2.zhimg.com/v2-bc5f1e6e6a88058e9c923942dd8833d1_1440w.jpg)

（这个字幕在转换时忘了转单行，其实也还好）

需要注意的是，Infuse在查找OpenSubtitles字幕的时候，查询是在服务器端做了代理缓存的，缓存大概有1-2天。设置那么长的缓存，我猜测是跟OpenSubtitles的查询API收费有关系。OpenSubtitles好像从几年前开始就不再提供免费API使用了，也就意味着每次查询都是有成本的。

所以，如果你要想在Infuse上用，最好是先上传，再用Infuse去查找。（或者，把你做的字幕存放到视频同目录）

##五 几种不同的字幕显示效果对比

1. 原始的多行文本

![](https://pic1.zhimg.com/v2-543ffea64abda83b01295b236795a672_1440w.jpg)

2. （转单行）英文在上 / 中文在下

![](https://pic1.zhimg.com/v2-2cf3ba0abd673966f72a99fe7e9ec850_1440w.jpg)

3. （转单行）中文在上 / 英文在下

![](https://pic4.zhimg.com/v2-271eaf0453a53b85e19796d99d3ef961_1440w.jpg)

- 英文改成橙色  
    试了下，Infuse并不支持带颜色标签的srt字幕。`<font color="#ffa500">- Oh, shit. - What?</font>`

你喜欢哪种？我感觉单行的中文在上（3）看着比较舒服。

## 附录

### **Open Subtitles 网站URL说明**

[IMDB](https://zhida.zhihu.com/search?content_id=258772085&content_type=Article&match_order=1&q=IMDB&zhida_source=entity) https://www.imdb.com/title/tt31938062/

该剧下所有的字幕，汇总到每个Episode（path同时支持站内id和imdb ID）：

https://www.opensubtitles.org/zh/ssearch/sublanguageid-all/idmovie-2117207

https://www.opensubtitles.org/zh/ssearch/sublanguageid-all/imdbid-31938062 (302)

S1下的所有字幕：

https://www.opensubtitles.org/zh/search/sublanguageid-all/pimdbid-31938062/season-1

S1E03下的所有字幕（path同时支持站内id和imdb ID）：

https://www.opensubtitles.org/zh/search/sublanguageid-all/idmovie-2117933

https://www.opensubtitles.org/zh/search/sublanguageid-all/imdbid-32561845

https://www.opensubtitles.org/zh/search/sublanguageid-/idmovie-2117933

S1E03下的所有中文字幕：

https://www.opensubtitles.org/zh/search/sublanguageid-chi/idmovie-2117933

https://www.opensubtitles.org/zh/search/sublanguageid-chi/imdbid-32561845 (这个页面应该等同于Infuse API抓取的内容)

字幕详情页面（带字幕ID）：

https://www.opensubtitles.org/zh/subtitles/13139844/the-pitt-9-00-a-m-zh