1. #文件描述符、打开文件表和FCB（inode）的关系  
	*   这是一个经典考点，常以图表题或选择题形式出现。
    *   **进程文件描述符表 (Per-Process File Descriptor Table)**：每个进程独有。
    *   **系统打开文件表 (System-Wide Open File Table)**：整个系统共享。
    *   **内存FCB/inode表 (In-Memory inode Table)**：作为磁盘上FCB/inode的缓存。
    *   关系：文件描述符 -> 进程表项 -> 系统表项 -> 内存inode -> 磁盘inode。
    *   考点：多个进程打开同一个文件时，这些表项如何共享和关联。
	-   **衍生问题**: `fork()` 调用后，父子进程的文件描述符是如何共享的？（它们指向同一个系统打开文件表项，因此共享文件偏移量）。
