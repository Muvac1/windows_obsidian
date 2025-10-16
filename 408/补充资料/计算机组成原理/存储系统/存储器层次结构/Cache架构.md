1.  #Cache架构 ：
    *   **冯·诺依曼架构 (Von Neumann Architecture)**：指令和数据存放在同一存储空间，可以按地址寻访。统一 Cache 是这种思想的体现。
    *   **哈佛架构 (Harvard Architecture)**：指令和数据存放在两个独立的存储空间，可以同时访问。分离 Cache (I-Cache 和 D-Cache) 是这种思想在 Cache 层次的应用。
    *   **现代 CPU 架构**：通常是混合架构。在靠近 CPU 核心的 L1 Cache 采用分离的哈佛结构，以解决流水线冲突；而在 L2/L3 Cache 和主存则采用统一的冯·诺依曼结构，以提高存储空间利用率和命中率。
