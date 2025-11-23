#switch_to的工作原理  
在 ucore 或类似的 x86 操作系统中，`switch_to` 通常是一个汇编函数，其函数原型类似于：
`void switch_to(struct context *from, struct context *to);`

它的执行流程如下：
1.  **保存现场（Save Context）：** 将当前 CPU 的寄存器值（尤其是被调用者保存寄存器，如$ebx$,$esi$,$edi$,$ebp$）压入当前进程的内核栈中，并将当前的栈指针$ESP$保存到`from->context`结构中。这步就是题目中所谓的“保存断点”。
2.  **切换栈（Switch Stack）：** 将 CPU 的栈指针$ESP$修改为目标进程的栈指针（从`to->context`中读取）。这是切换的关键点，改变了$ESP$，意味着“当前环境”变了。
3.  **恢复现场（Restore Context）：** 从目标进程的内核栈中弹出之前保存的寄存器值。
4.  **跳转执行：** 当函数执行 `ret` 指令时，CPU 会从新栈中弹出返回地址（即目标进程上一次被中断时的$EIP$），从而跳转到目标进程的代码继续执行。