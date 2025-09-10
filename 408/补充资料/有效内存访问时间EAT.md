#有效内存访问时间EAT 
有效内存访问时间 (Effective Access Time, EAT)这是一个计算题考点，衡量考虑了缺页影响的平均内存访问时间。
    其计算公式为：
    $EAT = (1 - p) \times t_{mem} + p \times t_{fault}$
    其中：
*   $p$ 是缺页率 (Page Fault Rate)。
*   $t_{mem}$ 是正常的内存访问时间。
*   $t_{fault}$ 是处理一次缺页中断所需的平均时间。$t_{fault}$ 本身又是一个复杂的过程，包括了陷入内核、处理中断、磁盘I/O、修改页表、进程切换等一系列时间的总和。