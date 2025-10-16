#多级Cache
1.  现代CPU通常有L1, L2, L3多级Cache。题目可能扩展为两级Cache，要求计算全局缺失率和AMAT。
    *   $T_{AMAT} = T_{L1\_hit} + M_{L1} \times (T_{L2\_hit} + M_{L2} \times T_{mem\_penalty})$