#高速缓存Cache 
* **工作原理**：利用程序的局部性原理（时间局部性和空间局部性）。
*   **性能指标**：命中率（Hit Rate）、缺失率（Miss Rate）、平均访存时间（Average Memory Access Time, AMAT）。AMAT 的计算公式：$AMAT = T_{hit} + P_{miss} \times T_{miss\_penalty}$
*   **映射方式**：直接映射、全相联映射、组相联映射的原理、地址结构和优缺点。
*   **替换算法**：LRU（最近最少使用）、FIFO（先进先出）、随机替换等。
