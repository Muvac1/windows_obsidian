作者：手抓饼熊  
链接：https://www.zhihu.com/question/1936111519252349787/answer/1962249710703183750  
来源：知乎  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。  
  

这里我主要想答一下[AI Infra](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=AI+Infra&zhida_source=entity)这一块，如果想做AI Infra相关可以参考。回答内容偏工程基础，没涉及论文之类的。对于AI Infra这一块的话，主要分为训练和推理，由于RL今年特别火，今年不少厂会存在把[RL Infra](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=RL+Infra&zhida_source=entity)单独拆开来看。下面分3块说一下。

**RL Infra：**RL的3个阶段既要训练又要推理，训练复用训练的框架，如[megatron](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=megatron&zhida_source=entity)、[fsdp](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=fsdp&zhida_source=entity)，推理服用推理的框架，如[vllm](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=vllm&zhida_source=entity)和sglang，RL本身会额外多一些训练和推理参数同步的一些技术，以及RL本身需要的一些优化如异步、rollout优化等，说了这么多，总结一下，算力不充足的时候，RL Infra可能比较难搞，你要真的搞，那就各种[offload](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=offload&zhida_source=entity)了。从训练开始就offload，到推理继续offload，你一个step可能需要几天时间。

**训练Infra**：训练的一个核心技术在于各种并行，另外[显存优化](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=%E6%98%BE%E5%AD%98%E4%BC%98%E5%8C%96&zhida_source=entity)、[算子优化](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=%E7%AE%97%E5%AD%90%E4%BC%98%E5%8C%96&zhida_source=entity)等也是一个方面，还是那句话，如果算力首先，比如只有1张卡，那你也只能offload了。

**推理Infra：**这个能做的事情就多了，首先offload可以继续研究、其次，[量化技术](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=%E9%87%8F%E5%8C%96%E6%8A%80%E6%9C%AF&zhida_source=entity)也是推理可以研究的，但是目前量化也比较的卷，[稀疏化](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=%E7%A8%80%E7%96%8F%E5%8C%96&zhida_source=entity)也是可以去研究的，比如长序列算力受限的场景下去研究稀疏化。如果纯属爱好，那完全可以去写一个推理框架，把attention、w4a8、w8a8这种算子也去实现一遍，先去做一个单击的推理引擎。

你的算力少的话，还可以做很复杂的推理系统，去手写一个[PD分离框架](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=PD%E5%88%86%E7%A6%BB%E6%A1%86%E6%9E%B6&zhida_source=entity)，P放在N卡上，D放在CPU上跑。

你还可以去做[AFD分离](https://zhida.zhihu.com/search?content_id=752172452&content_type=Answer&match_order=1&q=AFD%E5%88%86%E7%A6%BB&zhida_source=entity)，attention放在CPU上跑、MOE放在GPU上跑。

你甚至还可以做一个并行的投机采样，小模型放在CPU上跑、大模型放在GPU上跑。

你可以用流水线并行 + offload 在 8G显存的芯片上跑Deepseek 671B。