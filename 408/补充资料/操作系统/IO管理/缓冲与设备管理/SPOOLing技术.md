#SPOOLing技术
*   这是一种更宏观的缓冲技术，全称为“Simultaneous Peripheral Operations On-Line”（外部设备联机并行操作），也称“假脱机技术”。它利用磁盘作为大容量缓冲区，将慢速设备的输入/输出先暂存在磁盘上，之后再由CPU或设备处理。
*   考点：SPOOLing系统的组成（输入井、输出井、输入/输出进程），及其如何实现虚拟设备功能，提高I/O效率。例如，打印机就是典型的使用SPOOLing技术的设备。