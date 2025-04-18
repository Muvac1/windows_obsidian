Microsoft Edge 虽然跟 Google Chrome 同样用了 Chromium 作为引擎，但是相对于 Chrome 而言，Edge 自己实现了一个纯解释器的 js 和 wasm 引擎用来做安全防护。  
  
首先说一下背景知识：  
  
v8是Chromium默认的js和wasm引擎，这是一个JIT编译器，相对于解释器而言，JIT可以将js/wasm编译到机器码然后执行，从而大幅度提升网页的性能。但是v8其实隔三岔五都在爆出来各种漏洞，因此微软为了缓解这个安全问题，自己做了个纯解释器版本的js和wasm引擎，这样就算v8有漏洞被利用了也攻击不到Edge上。  
  
默认情况下，Edge只对白名单内的网站以及你经常访问的网站启用v8的JIT，否则全都直接走解释器。这么做虽然能够大幅增强安全性，但是会极大的影响性能（性能影响甚至能达到50%以上）。  
  
  
如果你不需要这样的安全功能，可以简单的到 Edge 设置——隐私设置页面——安全那里关掉“增强安全模式”，这样所有的网站都会默认走v8的JIT了。关掉之后你的 Edge 即可立即恢复跟 Chrome 同样的流畅度。  
当然如果你不想关掉这个安全功能的话，也可以在设置里把你经常浏览的网站加入它的白名单网站列表里。  
  
此外，Edge 为了省电还引入了效率模式，但是效率模式可能会对视频播放性能造成影响。如果你需要关闭的话，可以转到 Edge 设置——系统和性能——关闭“效率模式”即可。  
  
然后你就能拥有丝滑流畅的 Edge 了。  
  
Edge 被人诟病的速度慢其实根本不是因为它加入各种新功能，罪魁祸首其实就是那个“增强安全模式”。