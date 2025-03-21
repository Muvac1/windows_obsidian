# Proj0：2048
## Assignment Philosophy and Program Design
<p>The  skeleton exhibits two design patterns in common use：the Model-View-Controller Pattern(MVC),and the Observer Pattern</p>
>设计模式:Design Pattern

**MVC模式将问题分为三个部份**
- M(model)代表所代表和操作的主题，In this case incorporating the state of a board game ad the rules by which it may be modified
- A view of the model, which displays the game state to the user. Our view resides in the GUI and BoardWidget classes.
-  A controller for the game ,which translates user actions into operations on the model.Our controller resides mainly in the Game class , although it alse usees the GUI class to read keystrokes.
**Observer pattern** 
- 这意味着模型实际上没有报告对视图的更改，相反，视图将自身注册为Model对象的观察者
           



# Git 踩坑记录
你在操作 Git 仓库时遇到了多种错误，主要涉及以下几个方面：

• **无法找到分支**：如 fatal: couldn't find remote ref skeleton/master。

• **网络连接问题**：如 Error in the HTTP2 framing layer 和 Failed to connect to github.com port 443。

• **分支合并冲突**：如 fatal: refusing to merge unrelated histories。
**2. 问题分类与分析**

  

**2.1 无法找到分支**

  

错误原因：你尝试从 origin 拉取 skeleton/master，但 skeleton/master 实际上属于 skeleton 远程仓库而不是 origin。

• **关键点**：理解远程仓库的配置，并明确每个远程的职责（origin 是你的主仓库，skeleton 是官方框架仓库）。

• **解决方案**：正确指定远程仓库和分支，如 git fetch skeleton master:refs/remotes/skeleton/master。

  

**2.2 网络连接问题**

  

错误原因：网络环境阻碍了 HTTPS 访问 GitHub。

- **关键点**：识别并解决网络问题，例如防火墙、DNS 配置或使用代理。

- **解决方案**：切换到 SSH 或调整 DNS，确保稳定访问 GitHub。修改为了谷歌的公共DNS：8.8.8.8

-  

**2.3 合并冲突**

  

错误原因：本地分支与远程分支历史完全不同，Git 默认拒绝合并。

• **关键点**：理解分支历史的不相关性，并通过参数或手动操作解决冲突。

• **解决方案**：

• 使用 --allow-unrelated-histories 强制合并。

• 重置本地分支为远程分支状态。

出现了，又是折腾公钥，
fatal: Need to specify how to reconcile divergent branches.
解决方法
分析：这是由于你拉取pull分支前，进行过merge合并更新分支操作，而其他人在你之前已经push过一个版本，导致版本不一致

第一种解决方法：比较简单

执行git config pull.rebase false
默认将pull下来的代码与现有改动的代码进行合并
但是可能会造成代码冲突，需要处理下这个问题，代码冲突如果2个人都改了同一个文件，需要联系之前push的同学，看看这块代码怎么保存
第二种解决方法：回退到合并之前的代码，在进行pull拉取最新代码

注意：这种解决方法仅适用于2个分支之间的合并（git merge）操作，比如你是将dev开发分支合并到test分支之前没pull，那这时候test分支需要回退到未合并前的版本。
test上合并上去的代码将会丢失，等你test分支能成功pull后，需要重新合并（merge）开发分支dev上的代码合并到test上。所以记得保留dev开发分支这个版本的代码再把test回退到上一个版本，等pull成功，再重新在test分支上合并dev分支代码


# Lab 3 
#Alist `public class Alist<Item>`

library-sp21是一个Git子模块，包含CS61B课程所需的Java库文件。您之前无法打开它是因为子模块尚未初始化。我已经运行了git submodule update --init --recursive命令，现在该文件夹已经正确加载。

这个文件夹主要包含：

1. 各种Java库文件（.jar）

2. Maven构建系统配置文件（masterpom.xml）

3. 单元测试库（junit-4.12.jar）

4. CS61B特定的库（jh61b.jar）

这些库文件被课程中的各个项目和实验引用，为您的Java项目提供必要的依赖。现在您应该可以正常访问和使用这个文件夹了。

TimeSLList.java

pom.xml