#signal操作的两种语义 (Hoare vs. Mesa)
用于区分不同管程的实现方式。
*   **Hoare 语义 (Signal and Urgent Wait)**：当进程P执行`c.signal()`唤醒进程Q时，P立即被挂起，Q立即获得管程的控制权并执行。当Q离开管程或再次等待时，P才能恢复执行。这种方式逻辑清晰，但实现复杂，上下文切换开销大。
*   **Mesa 语义 (Signal and Continue)**：当进程P执行`c.signal()`时，被唤醒的进程Q只是从等待队列转移到就绪队列，但P继续持有管程的控制权并执行。只有当P离开管程或等待时，Q才有机会通过竞争重新获得管程的控制权。Q在被唤醒后必须**重新检查**它等待的条件是否仍然成立（因为在它被唤醒和它实际运行之间，可能有其他进程进入管程并改变了条件）。因此，在使用Mesa语义时，等待条件通常要用 `while` 循环而不是 `if` 语句。
    *   `if (condition_not_met) c.wait();` (适用于Hoare语义)
    *   `while (condition_not_met) c.wait();` (适用于Mesa语义，更健壮)
    Mesa语义是现代系统中（如Java, C#）更常见的实现。