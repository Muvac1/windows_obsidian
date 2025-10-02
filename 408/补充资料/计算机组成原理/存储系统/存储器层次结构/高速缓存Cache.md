  #高速缓存Cache 
  *   **概念**: 位于CPU和主存之间，用于存放主存中部分数据的副本，以弥补CPU和主存之间的速度差异。
* **工作原理**：利用程序的局部性原理（时间局部性和空间局部性）。
* **工作流程**:
	*   **Cache命中 (Hit)**: CPU所需数据在Cache中，直接从Cache读取，速度快。
	*   **Cache未命中 (Miss)**: CPU所需数据不在Cache中，需要从主存中读取数据到CPU，并通常会同时将该数据块加载到Cache中。这会产生一次主存访问。
*   **性能指标**：命中率（Hit Rate）、缺失率（Miss Rate）、平均访存时间（Average Memory Access Time, AMAT）。AMAT 的计算公式：$AMAT = T_{hit} + P_{miss} \times T_{miss\_penalty}$
*   **映射方式**：直接映射、全相联映射、组相联映射的原理、地址结构和优缺点。
*   **替换算法**：LRU（最近最少使用）、FIFO（先进先出）、随机替换等。
*   Cache的[[写策略]] : 写回法 (Write-Back) 和写直达法 (Write-Through)。
*   **多级Cache:** L1, L2, L3 Cache，以及全局缺失率和局部缺失率的计算。 
2. #高速缓存Cache的作用  
	1. 因为CPU的速度远远快于RAM。如果没有Cache，CPU在大部分时间里都会处于等待RAM提供数据的状态，造成性能浪费。Cache作为CPU和RAM之间的高速缓冲，存储了CPU最近最常访问的数据，使得CPU能更快地获取所需信息。 

- [[Cache缺失损失]] 
- [[Cache命中率]] 
- [[Cache访存时间]] 
- [[分离Cache]]
- [[Cache架构]]