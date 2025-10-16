1. [[访存时间计算]]
	减少流水线冲突确实能提升 CPU 整体性能，从而在宏观上降低了执行每条指令的平均时间，这其中也包括了访存的开销。但是，我们通常用一个特定公式来衡量平均访存时间 (AMAT - Average Memory Access Time)：
    $AMAT = T_{hit} + P_{miss} \times T_{penalty}$
    其中：
    *   $T_{hit}$ 是 Cache 命中时间。
    *   $P_{miss}$ 是 Cache 缺失率 (Miss Rate)。
    *   $T_{penalty}$ 是缺失损失 (Miss Penalty)。
    
    从这个公式看，分离 Cache 并不直接降低 $T_{hit}$ 或 $T_{penalty}$，甚至可能因为 B 中提到的原因而增加 $P_{miss}$，从而可能导致 AMAT 上升。