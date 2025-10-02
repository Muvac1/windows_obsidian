1. Flash Memory #闪存的分类 
	*   **NAND Flash vs. NOR Flash:**
        *   **NAND Flash:** 写入和擦除速度快，集成度高，成本低。适用于大容量数据存储，如SSD、U盘、SD卡。
        *   **NOR Flash:** 读取速度快，支持随机访问和代码就地执行（XIP, eXecute-In-Place）。适用于小容量代码存储，如BIOS芯片、路由器固件。
    *   **SLC, MLC, TLC, QLC:**
        *   指每个存储单元（Cell）存储的比特数。
        *   **SLC (Single-Level Cell):** 1 bit/cell。速度最快，寿命最长，成本最高。
        *   **MLC (Multi-Level Cell):** 2 bits/cell。
        *   **TLC (Triple-Level Cell):** 3 bits/cell。
        *   **QLC (Quad-Level Cell):** 4 bits/cell。
        *   **考点：** 每个单元存储的比特数越多，存储密度越高，成本越低，但相应的读写速度会变慢，写入寿命（P/E cycles）会显著降低。