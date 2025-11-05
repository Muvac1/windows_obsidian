![](https://pic3.zhimg.com/v2-4a928d01a3d7d91f3c7f71e9cc9bb292_1440w.jpg)

RWKV爱好者们又要来说[KDA](https://zhida.zhihu.com/search?content_id=265812102&content_type=Article&match_order=1&q=KDA&zhida_source=entity) DPLR的形式抄[RWKV7](https://zhida.zhihu.com/search?content_id=265812102&content_type=Article&match_order=1&q=RWKV7&zhida_source=entity)了，那不妨来捋一捋，RWKV7是不是真的有DPLR的独家冠名解释权？

首先RWKV7的论文里面对于DPLR的描述是这样的：

![](https://picx.zhimg.com/v2-3fa8dc2909f4a0f4604a89026f36cc6b_1440w.jpg)

引用了我NeurIPS‘24 paper里面对[deltanet](https://zhida.zhihu.com/search?content_id=265812102&content_type=Article&match_order=1&q=deltanet&zhida_source=entity)和DPLR和[S4](https://zhida.zhihu.com/search?content_id=265812102&content_type=Article&match_order=1&q=S4&zhida_source=entity)的discussion

![](https://pic1.zhimg.com/v2-c43cdae05f4993aa74e8321e29b0a5a2_1440w.jpg)

可以看到，DPLR这个概念早就在S4的时候就被提到了。**从这个角度来看，RWKV爱好者如果非要坚称[transition matrix](https://zhida.zhihu.com/search?content_id=265812102&content_type=Article&match_order=1&q=transition+matrix&zhida_source=entity)长得像就是抄袭的话，那么RWKV7也属于抄袭S4。**

#DPLR的全称 是Diagonal-Plus-Low-Rank，是一类「structured matrices」，性质就是 #累乘计算 。[RNN](https://zhida.zhihu.com/search?content_id=265812102&content_type=Article&match_order=1&q=RNN&zhida_source=entity)并行的时候往往需要展开循环，其中会有一些转移矩阵的累乘的项，那么高效计算转移矩阵的累乘就至关重要，所以大家来选择DPLR矩阵来作为RNN的transition matrices就是一个非常合理的决策了。

我在论文里面就讲了DeltaNet是一种DPLR形式的特殊形式，并且**发明**了一种针对IPLR的形式（identity plus low-rank）的deltanet的形式的[chunk并行算法](https://zhida.zhihu.com/search?content_id=265812102&content_type=Article&match_order=1&q=chunk%E5%B9%B6%E8%A1%8C%E7%AE%97%E6%B3%95&zhida_source=entity)。 接下来把它扩展到DPLR上当然就在蓝图上面，我在下面的回答里面已经说明白了拓展的过程中需要考虑到的efficiency的实际的问题

[如何看待飞来阁的代码库中出现与RWKV-7一模一样的KimiDeltaAttention?](https://www.zhihu.com/question/1966873359510906300/answer/1967522190103679345)

但显然RWKV7是不会算efficiency的账的，论文里面没有提到半点 #chunk并行 的算法流程，而且bo本人就是recurrent kernel串行训练爱好者。所以最后用到了一种更加general的 #DPLR 的形式，毕竟写循环kernel也不需要考虑这些。

那么，在大规模训练下面，循环kernel来训练是不可能高效的，必须要用chunk算法来充分利用GPU的算力。在这种情况下，充分分析不同DPLR矩阵的计算特性就尤为可贵了。在Kimi linear的report里面是有明确的来算计算账的：
![](https://pic2.zhimg.com/v2-b1e1b1a423fa1fee81fdad83a8f86bf3_1440w.jpg)

很容易看出，在chunk算法的背景下，RWKV7这种DPLR的类型在计算intra-chunk和chunk recurrent里面的matmul，都是需要付出大约两倍算力的代价的，其代价的根本来源就是在于RWKV7使用了一个更加general的form。如果我们只考虑general form，认为所有的subcase是抄袭的话，那么我们应该追求unstructured transition matrices，这样所有的矩阵都是subcase了，但是这样计算账就更加没法算了，因为unstructured矩阵乘法的复杂度是三次方。

从实际efficiency的意义来看，**我们反而就是想要追求DPLR里面的一些subcase，能在保证想要[fine-grained decay](https://zhida.zhihu.com/search?content_id=265812102&content_type=Article&match_order=1&q=fine-grained+decay&zhida_source=entity) “D”的基础上，来保证算法层面的计算效率**。KDA就是在这个背景下，发现最原始的delta rule的形式有着更本质的计算效率的优势，那么在这个基础上加fine-grained decay也是一个自然的idea，更何况[GDN](https://zhida.zhihu.com/search?content_id=265812102&content_type=Article&match_order=1&q=GDN&zhida_source=entity)已经是往deltanet加gate迈出了一步了。KDA跟GDN的关系肯定是要比KDA和RWKV7的关系要近。

可能有RWKV粉丝又要出来问了，fine-grained decay不是抄RWKV的吗？**RWKV对fine-grained decay肯定也没有最终解释权**，因为fine-grained decay的概念由来已久。先不说GLA，之前的work比方说[https://arxiv.org/abs/2210.04243](https://link.zhihu.com/?target=https%3A//arxiv.org/abs/2210.04243) 也用到了更加general的fine-grained decay的form。**按照RWKV粉丝的逻辑，RWKV6 完全就是抄[https://arxiv.org/abs/2210.04243](https://link.zhihu.com/?target=https%3A//arxiv.org/abs/2210.04243) 的作业，因为我引的这篇文章有一个更加general一点的transition matrices，而RWKV6只是一个把一边分量设成1的subcase。**

在 LLM 时代，如何 Scale 是最重要的事情。你不算计算账，那么你给大厂/lab推销的时候，别人又如何买你的账呢？ 有时间痛诉别人抄袭，不如好好整理下自己的codebase和实现，让别人更乐意来用你们的东西。如果你们的东西真的又好又高效，谁又不想用用看呢？

  

---

以下是RWKV粉丝的逻辑大赏

![](https://pic1.zhimg.com/v2-b146b0fc61edcb07b90fa4076f49a43a_1440w.jpg)

每个小参数的设计背后都是有大量的 #消融实验 ： 你真的管你们附录一个6层小模型跑1Btoken叫大量消融？要不要放点大一点的 #ablation 的证据？

**不少细节参数设计都直接照搬 ，连原作里不够成熟的小细节都一并沿用：**不妨先解释下照搬了什么参数设计。然后挂下眼科看下我算的计算账。

---

![](https://pic1.zhimg.com/v2-56e418bcc0f3da4a54cdf38f7deebd7c_1440w.jpg)

#lora-mlp 一个low-rank参数化省参数的思想，本身就很general，要credits也只能给到lora?

credits如果非要给到 #rwkv6 的话，那是不是更应该去给到 #mamba1 ？我100%肯定他们用的比rwkv6早，因为rwkv6本身就是看到mamba1的openreview才开始启动的。这么抢credits是不是不太要脸？

![](https://pic3.zhimg.com/v2-2c2d70c9c232795ca4d437928ea69abe_1440w.jpg)

mamba1 在2023年10月就可以在openreview上看了，那个时候bo还在做v5呢

![](https://pic2.zhimg.com/v2-17f92e47c80423a83ff0c89740fec68f_1440w.jpg)