# mac连接easyconnnect显示“本地环境出现异常”。亲测已解决

### [](https://link.csdn.net/?target=)两种解决方法亲测都可以用

### [](https://link.csdn.net/?target=)第一种：打开电脑的登录项，打开如下服务，然后重启软件

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/6185370f60ddcb09384fd3a99b03358f.png)

### [](https://link.csdn.net/?target=)第二种：ma[c](https://link.csdn.net/?target=https%3A%2F%2Fgitcode.com%2FopenHiTLS%2Fopenhitls%3Futm_source%3Ddevpress_gitcode_keyword%26login%3Dfrom_csdn)连接easyconnnect显示“本地环境出现异常”

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/3bef88965476270482f16c71746f92f5.png)  
**解决方法：**

1. 终端下输入：`vim ~/.zprofile`
2. 文件内加入如下内容，如下图：

####解决连接easyconnnect显示“本地环境出现异常问题
function EC_start(){
    /Applications/EasyConnect.app/Contents/Resources/bin/EasyMonitor > /dev/null 2>&1 &
    /Applications/EasyConnect.app/Contents/MacOS/EasyConnect > /dev/null 2>&1 &
    open /Applications/EasyConnect.app
}

function EC_kill(){
    pkill EasyMonitor
    pkill ECAgent
    pkill ECAgentProxy
    pkill EasyConnect
}

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/3cd18fd957851c5ef67a340dcaa334fa.png)  
3. 终端输入：`source ~/.zprofile`  
4. 命令行启动：`EC_start`  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/4b3bb6ebe955f6b221976f528118fefe.png)  
5. 命令行结束：`EC_kill`  
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/709c45ae3601422112e972738310aec8.png)