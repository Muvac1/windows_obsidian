1. IP头部详解
    *   **IHL (Internet Header Length):** 头部长度字段，单位是4字节。如果 IP 头部包含选项，这个值会大于5。
    *   **Total Length:** 整个 IP 数据报（头部+数据）的总长度。
    *   **Identification, Flags, Fragment Offset:** 这三个字段与 **IP 分片** 相关。如果一个数据包大于下一跳网络的 MTU (Maximum Transmission Unit)，并且 DF (Don't Fragment) 标志位为0，路由器就需要将其分片。这也是路由器可能修改的字段。