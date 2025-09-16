#HDLC帧结构  考察 HDLC 帧各个字段的作用。
*   **标准帧结构**:
    `Flag | Address | Control | Information | FCS | Flag`
    *   **Flag (标志)**: $01111110$，帧定界符。
    *   **Address (地址)**: 标识目的或源节点地址。
    *   **Control (控制)**: 包含命令、响应和序列号，用于实现流量控制和差错控制。分为三种帧类型：
        *   **I-帧 (Information Frame)**: 传输用户信息。
        *   **S-帧 (Supervisory Frame)**: 用于流量和差错控制。
        *   **U-帧 (Unnumbered Frame)**: 用于链路的建立、拆除等控制功能。
    *   **Information (信息)**: 包含要传输的数据，长度可变。
    *   **FCS (Frame Check Sequence, 帧检验序列)**: 通常采用 CRC (Cyclic Redundancy Check) 循环冗余校验，用于差错检测。