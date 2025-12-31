1. #不同RAID级别的比较 
	  * **磁盘利用率**：RAID 0 是 100%；RAID 1 和 RAID 10 是 50%；RAID 5 是 $(n-1)/n$（n为磁盘数量）。
    *   **可靠性排序**：RAID 10/RAID 6 > RAID 1/RAID 5 > RAID 0。
    *   **性能排序**：读性能通常 RAID 0/RAID 10 最好；写性能 RAID 10/RAID 1 较好，RAID 5 因为有“ #写惩罚”而较差。 