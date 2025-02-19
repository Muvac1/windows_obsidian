 IM 即时通讯设计 高并发聊天服务：服务器➕QT客户端
目录

- [IM即时通信程序设计](https://www.cnblogs.com/deroy/p/15684737.html#im%E5%8D%B3%E6%97%B6%E9%80%9A%E4%BF%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)
- [IM即时通讯](https://www.cnblogs.com/deroy/p/15684737.html#im%E5%8D%B3%E6%97%B6%E9%80%9A%E8%AE%AF)
- [设计一款高并发聊天服务需要注意什么](https://www.cnblogs.com/deroy/p/15684737.html#%E8%AE%BE%E8%AE%A1%E4%B8%80%E6%AC%BE%E9%AB%98%E5%B9%B6%E5%8F%91%E8%81%8A%E5%A4%A9%E6%9C%8D%E5%8A%A1%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BB%80%E4%B9%88)
- [如何设计可靠的消息处理服务](https://www.cnblogs.com/deroy/p/15684737.html#%E5%A6%82%E4%BD%95%E8%AE%BE%E8%AE%A1%E5%8F%AF%E9%9D%A0%E7%9A%84%E6%B6%88%E6%81%AF%E5%A4%84%E7%90%86%E6%9C%8D%E5%8A%A1)
    - [什么是粘包](https://www.cnblogs.com/deroy/p/15684737.html#%E4%BB%80%E4%B9%88%E6%98%AF%E7%B2%98%E5%8C%85)
    - [什么是半包](https://www.cnblogs.com/deroy/p/15684737.html#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%8A%E5%8C%85)
    - [解决粘包和半包](https://www.cnblogs.com/deroy/p/15684737.html#%E8%A7%A3%E5%86%B3%E7%B2%98%E5%8C%85%E5%92%8C%E5%8D%8A%E5%8C%85)
- [IM通信协议](https://www.cnblogs.com/deroy/p/15684737.html#im%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE)
    - [应用层协议设计](https://www.cnblogs.com/deroy/p/15684737.html#%E5%BA%94%E7%94%A8%E5%B1%82%E5%8D%8F%E8%AE%AE%E8%AE%BE%E8%AE%A1)
        - [文本协议](https://www.cnblogs.com/deroy/p/15684737.html#%E6%96%87%E6%9C%AC%E5%8D%8F%E8%AE%AE)
        - [二进制协议](https://www.cnblogs.com/deroy/p/15684737.html#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%8D%8F%E8%AE%AE)
        - [流式XML协议](https://www.cnblogs.com/deroy/p/15684737.html#%E6%B5%81%E5%BC%8Fxml%E5%8D%8F%E8%AE%AE)
- [数据传输格式](https://www.cnblogs.com/deroy/p/15684737.html#%E6%95%B0%E6%8D%AE%E4%BC%A0%E8%BE%93%E6%A0%BC%E5%BC%8F)
- [聊天服务设计](https://www.cnblogs.com/deroy/p/15684737.html#%E8%81%8A%E5%A4%A9%E6%9C%8D%E5%8A%A1%E8%AE%BE%E8%AE%A1)
    - [消息处理](https://www.cnblogs.com/deroy/p/15684737.html#%E6%B6%88%E6%81%AF%E5%A4%84%E7%90%86)
    - [消息分发](https://www.cnblogs.com/deroy/p/15684737.html#%E6%B6%88%E6%81%AF%E5%88%86%E5%8F%91)
    - [用户注册](https://www.cnblogs.com/deroy/p/15684737.html#%E7%94%A8%E6%88%B7%E6%B3%A8%E5%86%8C)
    - [用户登陆](https://www.cnblogs.com/deroy/p/15684737.html#%E7%94%A8%E6%88%B7%E7%99%BB%E9%99%86)
    - [用户登出](https://www.cnblogs.com/deroy/p/15684737.html#%E7%94%A8%E6%88%B7%E7%99%BB%E5%87%BA)
    - [群聊](https://www.cnblogs.com/deroy/p/15684737.html#%E7%BE%A4%E8%81%8A)
    - [私聊](https://www.cnblogs.com/deroy/p/15684737.html#%E7%A7%81%E8%81%8A)
    - [添加好友](https://www.cnblogs.com/deroy/p/15684737.html#%E6%B7%BB%E5%8A%A0%E5%A5%BD%E5%8F%8B)
    - [获取好友信息](https://www.cnblogs.com/deroy/p/15684737.html#%E8%8E%B7%E5%8F%96%E5%A5%BD%E5%8F%8B%E4%BF%A1%E6%81%AF)
    - [获取群列表](https://www.cnblogs.com/deroy/p/15684737.html#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%88%97%E8%A1%A8)
    - [获取群信息](https://www.cnblogs.com/deroy/p/15684737.html#%E8%8E%B7%E5%8F%96%E7%BE%A4%E4%BF%A1%E6%81%AF)
- [github源码](https://www.cnblogs.com/deroy/p/15684737.html#github%E6%BA%90%E7%A0%81)

### IM即时通信程序设计

界面相对简陋，主要界面如下

- 登录界面

![登录界面](https://img-blog.csdnimg.cn/f36bb2c05e6047f2b1213c3d3c2c29cf.png)
		
- 注册界面

![注册界面](https://img-blog.csdnimg.cn/c54a115dbcde41048198c8234092e068.png)

- 聊天界面

![聊天界面](https://img-blog.csdnimg.cn/7a6d203c6b9748a49c8aef4ef68340e2.jpg)

- 添加好友界面

![添加好友界面](https://img-blog.csdnimg.cn/dab3bb85e38f4a63a29766b2ef74d9c8.png)

支持的功能

- 注册账号
- 登录账号
- 添加好友
- 群聊

![群聊](https://img-blog.csdnimg.cn/addb8ab2aad6457483374f31b0443bcb.png)

- 私聊

![私聊](https://img-blog.csdnimg.cn/ae10b2edf19f45f789aaf711a85c9a5b.png)

后续UI美化以及功能增加持续更新，关注微信公众号「编程学习基地」最快咨询..

### IM即时通讯

本系列将带大家从零开始搭建一个轻量级的IM服务端，麻雀虽小，五脏俱全，我们搭建的IM服务端实现以下**功能**：

- 注册
- 登录
- 私聊
- 群聊
- 好友关系

第一版只实现了IM即时通讯的基础功能，其他功能后续增加.

### 设计一款高并发聊天服务需要注意什么

1. 实时性

在网络良好的状态下服务器能够及时处理用户消息

1. 可靠性

服务端如何防止粘包，半包，保证数据完全接收，不丢数据，不重数据

1. 一致性

保证发送方发送顺序与接收方展现顺序一致

实时性就不必细说了，保证服务器能够及时处理用户消息就行，重点说下可靠性

### 如何设计可靠的消息处理服务

简单来说就是客户端每次发送的数据长度不定，服务端需要保证能够解析每一个用户发送过来的消息。

这就涉及到粘包和半包，这里说下粘包和半包是什么情况

#### 什么是粘包

> 多个数据包被连续存储于连续的缓存中，在对数据包进行读取时无法确定发生方的发送边界.

例如：客户端需要给服务端发送两条消息，发送数据如下

```c
char msg[1024] = "hello world";
int nSend = write(sockFd, msg, strlen(msg));
nSend = write(sockFd, "粘包", strlen("粘包"));
```

服务端接收

```c
char buff[1024];
read(connect_fd,buff,1024);
printf("recv msg:%s\n",buff);
```

结果就是服务端将两条消息当成一条消息全部存入buff中。输出如下

```c
recv msg:hello world粘包
```

当客户端两条消息发的很快的时候，服务端无法判断消息边界导致照单全收的情况就是粘包。

#### 什么是半包

> 单个数据包过大，服务端预定缓冲不够，导致对数据包接收不全

例如：客户端需要给服务端发送一条消息，发送数据如下

```c
char msg[1024] = "hello world";
int nSend = write(sockFd, msg, 1024);	//发送字节大小为1024
```

服务端接收

```c
char buff[128];
read(connect_fd,buff,128);
printf("recv msg:%s\n",buff);
```

结果就是服务端缓冲不够，只能读取部分包内容。

#### 解决粘包和半包

如何解决粘包和半包的问题？

通过自定义应用协议，客户端给数据包进行封包，服务端进行拆包。

以项目实例来说，定义包头 + 包 +负载  
![传输协议](https://img-blog.csdnimg.cn/092e3cb1024941afab1a7ce7375e82ca.png)

其实就是发送数据包的时候先发一个包头，包头里面有一个字段表示包的大小

包头后紧跟着包，这个包还不是数据包，只是数据包的描述信息，例如发送消息代表一个命令，字段command用来从存储命令，让服务器能够解析这是群聊数据包还是私聊数据包。包头和包定义付下

```c
struct DeMessageHead{
    char mark[2];   // "DE" 认证deroy的协议
    char version;
    char encoded;   //0 不加密，1 加密
    int length;
};

struct DeMessagePacket
{
    int mode;  //1 请求,2 应答,3 消息通知
    int error; //0 成功,非0,对应的错误码

    int sequence;   //序列号
    int command;    //命令号
};
```

负载就是你真正要发送的数据包结构了，可能是msg消息，又或者其他的自定义消息。

### IM通信协议

> 所谓“协议”是双方共同遵守的规则.

协议有语法、语义、时序三要素：

（1）语法：即数据与控制信息的结构或格式

（2）语义：即需要发出何种控制信息，完成何种动作以及做出何种响应

（3）时序：即事件实现顺序的详细说明

一套典型的IM通信协议设计分为三层：应用层、安全层、传输层。

![通信协议设计](https://img-blog.csdnimg.cn/img_convert/b2140f809e0dbeb129e7bf9c9a26c37a.png)

#### 应用层协议设计

在通信过程中，chat_room使用的是tcp作为传输层的协议，暂时未引入数据加密解密，所以未涉及安全层协议。

应用层协议选型，常见的有三种：文本协议、二进制协议、流式XML协议。

##### 文本协议

文本协议是指 “贴近人类书面语言表达”的通讯传输协议，典型的协议是http协议。

一个http协议大致长成这样：

```makefile
GET / HTTP/1.1
User-Agent: curl
Host: musicml.net
Accept: */*
```

文本协议的特点是：

a. 可读性好，便于调试

b. 扩展性也好（通过key:value扩展）

c. 解析效率一般（一行一行读入，按照冒号分割，解析key和value）

d. 对二进制的支持不好 ，比如语音／视频

##### 二进制协议

二进制协议是指binary协议，典型是ip协议。二进制协议一般定长包头和可扩展变长包体 ，每个字段固定了含义，此次项目设计chat_room采用的就是二进制协议作为应用层的传输协议。

二进制协议有这样一些特点：

a. 可读性差，难于调试

b. 扩展性不好 ，如果要扩展字段，旧版协议就不兼容了。

c. 解析效率超高

> QQ使用的就是二进制协议

##### 流式XML协议

这个一般场景用的比较少了，我所接触的就是Onvif协议交互用的就是流式XML协议。

XML协议特点：

a.它是准标准协议，可以跨域互通

b.XML的优点，可读性好，扩展性好

c.解析代价超高

d.有效数据传输率超低（大量的标签）

### 数据传输格式

即时通讯应用（包括IM聊天应用、实时消息推送应用等）在选择数据传输格式的时候比较纠结，不过我个人建议将Protobuf作为即时通讯应用的首选通讯协议格式。此次项目设计未使用Protobuf是因为不想导入第三方库，怕有些同学直接劝退。

> 据说，手机QQ的数据传输协议已在使用Protobuf了，而从官方流出资料来看微信很早就在使用Protobuf（而且为了尽可能地压缩流量，甚至对Protobuf进行了极致优化）。

此次项目使用的是二进制数据流作为数据传输格式，其实就是一堆结构体变量。

例如登陆的数据包定义如下:

```c
struct LoginInfoReq{
    int m_account;
    char m_password[32];
};
```

服务端和客户端双方约定好一个数据结构就可以了，特点就是简单。

### 聊天服务设计

目前采用的是多线程处理客户端请求，即一个客户端一个线程，这周会改成IO多路复用，用epoll来接受更高的并发。

整体设计如下:  
![架构](https://img-blog.csdnimg.cn/477402adba32467eb0410f799744f4ae.png)

第一步:客户端发送数据包

第二步:服务端解析数据包，传递给各个业务处理模块

第三步:业务处理模块按照通信协议解析并处理消息

#### 消息处理

对客户端的消息处理就是接受一个完整的数据包，传递给服务器。

由于采用封包-拆包作为通信的传输协议，所以在处理数据包的时候需要一个健壮的数据处理逻辑

此次项目处理逻辑如下

```c
int Session::readEvent()
{
    int ret = 0;
    switch (m_type)
    {
    case RECV_HEAD:
        ret = recvHead();
        break;
    case RECV_BODY:
        ret = recvBody();
        break;
    default:
        break;
    }
    if (ret == RET_AGAIN)
        return readEvent();
    return ret;
}
```

先读取头，在读取到head包头之后申请body(包+负载)所需空间，再读取body,body读取完毕之后传给消息分发的逻辑。

#### 消息分发

服务端是如何区分群聊消息和私聊消息？在我们解决粘包和半包问题的时候就给出了答案。

客户端封包结构为：包头 + 包 +负载

![传输协议](https://img-blog.csdnimg.cn/092e3cb1024941afab1a7ce7375e82ca.png)

在Pack包里面有一个代表命令的字段 `command`.

```c
struct DeMessagePacket
{
    int mode;  //1 请求,2 应答,3 消息通知
    int error; //0 成功,非0,对应的错误码
    int sequence;   //序列号
    int command;    //命令号
};
```

服务端可客户端双方约定的 `cmmand` 如下

```c
//命令枚举
enum{
    CommandEnum_Registe,
    CommandEnum_Login,
    CommandEnum_Logout,
    CommandEnum_GroupChat,
    CommandEnum_AddFriend,
    CommandEnum_delFriend,
    CommandEnum_PrivateChat,
    CommandEnum_CreateGroup,
    CommandEnum_GetGroupList,
    CommandEnum_GetGroupInfo,
    CommandEnum_GetFriendInfo,
};
```

服务端通过switch匹配各个命令，进而对每个命令进行处理。

#### 用户注册

用户注册请求，响应的数据格式如下

```c
/**
 * @brief 注册用户信息
 */
struct RegistInfoReq{
    char m_userName[32];
    char m_password[32];
};
struct RegistInfoResp{
    int m_account;
};
```

在用户注册时，服务端生成一个唯一的账号发送给客户端，客户端只能通过该账号与服务端交互。

用户注册完成之后会存放在服务端的一个全局map表中,方便集中管理

```c
typedef std::map<int,RegistInfoReq*>    mapAccountInfo;      //注册用户表
static mapAccountInfo   g_AccountInfoMap;   //注册账户信息表
```

#### 用户登陆

用户登陆请求，响应的数据格式如下

```c
struct LoginInfoReq{
    int m_account;      //账号
    char m_password[32];
};
```

用户登陆成功后会创建一个用户信息 `UserInfo` 并将该用户信息添加到全局的一个用户map表中集中管理

```c
typedef std::map<int,UserInfo*>         mapUserInfo;          //在线用户表
static mapUserInfo      g_UserInfoMap;      //在线用户信息表
```

登陆成功之后发回给客户端的是一个没有负载的包，包中的error字段置0.

#### 用户登出

客户端直接断开即可，具体登出数据格式暂未实现.

#### 群聊

此次设计中有一个公共群聊（账号为0），所有用户都在群聊里面。

用户群聊请求，响应的数据格式如下

```c
truct GroupChatReq
{
    int m_UserAccount;      //发送的账号
    int m_msgLen;
    int m_type;             //数据类型 0:文本,1:图片 ...
    int m_GroupAccount;     //发送群号 0:广播
};
```

看着没啥毛病但是群消息在哪？要发送的数据在哪？

还记得我们客户端封包结构：包头 + 包 +负载

![传输协议](https://img-blog.csdnimg.cn/092e3cb1024941afab1a7ce7375e82ca.png)

负载里面包含了 数据传输格式+其他数据

在群聊请求里面有一个 `m_msgLen`字段用来区分消息的边界，因为客户端发送的消息是不定长的，所以需要这么一个字段来区分消息的边界。

#### 私聊

用户私聊请求，响应的数据格式如下

```c
struct PrivateChatReq
{
    int m_UserAccount;      //发送的账号
    int m_msgLen;
    int m_type;             //数据类型 0:文本,1:图片 ...
    int m_FriendAccount;    //发送好友账号
};
```

跟群聊类似，其实这两个数据格式可以用同一个。

#### 添加好友

用户添加好友请求，响应的数据格式如下

```c
struct AddFriendInfoReq
{
    int m_friendAccount;    //好友账号
    int m_senderAccount;    //发送端账号
    char m_reqInfo[64];    //请求信息 例如我是xxx
};
struct AddFriendInfoResp
{
    int m_friendAccount;    //好友账号
    int m_senderAccount;    //发送端账号
    int status;             //同意0，不同意-1
};
```

添加好友的流畅比较复杂，我在设计的时候也卡了一下。

主要流程如图

![请添加图片描述](https://img-blog.csdnimg.cn/e70193fc549d419ca7eedc8d5e636c8c.png)

1. 客户端A给服务器发送添加好友的请求 `AddFriendInfoReq`,服务器解析请求将B的信息添加到客户端A的好友表中。
2. 服务器B给客户端B转发好友请求。
3. 客户端B同意或者拒绝，给服务器发送添加好友的响应 `AddFriendInfoResp`，服务器解析请求将A的信息添加到客户端B的好友表中，将客户端A的好友表中属于客户端B的好友状态字段m_status置1或0。

#### 获取好友信息

用户获取好友信息请求，响应的数据格式如下

```c
/*  好友请求接口封装  */
struct GetFriendInfoResp
{
    int m_size;         //群成员大小
};
struct FriendInfo{
    char m_userName[32];//好友用户名
    int  m_account;     //账号
    int  m_status;      //是否添加成功 0:等待添加   1：同意
};
```

这里大伙可能有点蒙了，又是包头，又是包，又是负载的，拿着数据格式到底属于那块的

其实数据格式（例如GetFriendInfoResp结构体）和数据都属于负载里面的,如图所示。

![请添加图片描述](https://img-blog.csdnimg.cn/ae379b0e3337446c865e79159ce9b904.png)

对于通信协议为二进制的协议来说，解析起来效率是最快的。

#### 获取群列表

用户获取群列表信息请求，响应的数据格式如下

```c
struct GetGroupListResp
{
    int m_size;             //群数量大小
};
struct GroupChatInfo
{
    char m_groupName[32]; //群名称
    int  m_account;       //群账号
    int  m_size;          //群大小
};
```

数据的传输同获取好友信息，在这里群列表也有一个map表统一管理。

#### 获取群信息

用户获取群信息请求，响应的数据格式如下

```c
struct GetGroupInfoReq
{
    int m_GroupAccount;    //群号 0:广播   
};

struct GetGroupInfoResp
{
    char m_groupName[32];   //群名称
    int m_GroupAccount;     //群号 0:广播   
    int m_size;             //群成员大小
};
struct GroupUserInfo{
    char m_userName[32];
    int  m_account;     //账号
    int  m_right;       //权限 0:群成员 1:群管 2:群主
};
```

这里的数据传输和获取好友信息一样。

到这里我们的服务端介绍完了，比较复杂，但是知识点超多。客户端设计相对容易些，但是我感觉单纯的终端客户端太掉逼格了，就又写个一个qt的客户端，重温了一边qt的UI设计，简直不要太爽，qt的客户端设计会另外再补一篇文章。

### github源码

> chat_room:[https://github.com/ADeRoy/chat_room](https://github.com/ADeRoy/chat_room)

欢迎慷慨 star