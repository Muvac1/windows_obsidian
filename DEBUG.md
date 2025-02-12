  Mac在使用obsidian 同步仓库时，未使用SSH进行连接 ，导致了IOS上不能进行SSH同步
### kex_exchange_identification 报错
1. 临时关闭代理
2. 修改代理软件配置，22端口走直连 -


3. 改用HTTPS 协议 
在~/.ssh/config 文件中添加下面的配置即可，之后就可以正常使用git pull等操作了
```
Host github.com
	Hostname ssh.github.com
	prot 443 
	user git 
```
### Pull 分支报错 fatal:Need to specify how to concile divergent branches..
 分析：这是由于pull 分支前，进行过merge合并更新分支操作，而在其他人在你之前push过了一个版本，导致版本不一致
##### 解决办法

1. 执行 `git config pull.rebase false` 
默认将pull下来的代码与现有的代码进行合并但是会造成代码冲突
2. 回退到合并之前到代码，在进行pull拉取最新代码
适用于两个分支之间的合并(git merge)操作
git log
## Git 当远程分支和本地分支冲突时的处理办法
1. Git 强制覆盖本地目录
	git fetch 拉取所有更新，不同步；
	git reset --hard origin/master 本地代码同步线上最新版本（会覆盖本地所有与远程仓库上同名的文件)；
	git pull 再更新一次（其实也可以不用，第二步命令已经做过了）
	
	git fetch --all && git reset --hard origin/master && git pull 
	强制覆盖本地命令(单条执行)
1. git 命令解决
	git stash 将工作区的修改提交到栈区，目的是保存工作区的修改；
	git pull  拉取远程分支上的代码并合并到本地分支，目的是消除冲突；
	git stash pop 把保存在栈区的修改部份合并到最新的工作空间中；
3. IDEA解决
	拉取远程代码
	打开Merge
	修改冲突部份
>遇到的问题
```
fetch-pack: unexpected disconnect while reading sideband packet
fatal: early EOF
fatal: fetch-pack: invalid index-pack output
error: Could not fetch origin

```
输入GitHub帐号密码之后
```
error: RPC failed; curl 18 HTTP/2 stream 9 was not closed cleanly before end of the underlying connection
error: 3503 bytes of body are still expected
fetch-pack: unexpected disconnect while reading sideband packet
fatal: early EOF
fatal: fetch-pack: invalid index-pack output
error: Could not fetch Q
```
但再次使用git status时候，nothing to change ,working tree clean

Git远程分支合并技巧
[【随笔】Git 高级篇 -- 远程与本地不一致导致提交冲突 git push --rebase（三十一）-CSDN博客](https://blog.csdn.net/csh1807266489/article/details/137637497)