1. #IP头部详解   结构视角 
	*   **版本(Version)与首部长度(IHL)**：第1字节。例如 `45` 表示 IPv4，头部长度为 $5 \times 4 = 20$ 字节。
    *   **总长度(Total Length)**：第3-4字节。整个 IP 数据报（头部+数据）的长度。
    *   **生存时间(TTL)**：第9字节。每经过一个路由器减1。
    *   **协议(Protocol)**：第10字节。指明上层协议，TCP 的协议号是 `06`。
    *   **首部校验和(Header Checksum)**：第11-12字节。用于校验 IP 头部的完整性。
    *   **源 IP 地址(Source IP)**：第13-16字节。
    *   **目的 IP 地址(Destination IP)**：第17-20字节。
	两者都**不是完整的IP头部描述**，只是各有侧重地节选了部分字段。
2. #IP头部详解 功能视角 
    *   **IHL (Internet Header Length):** #头部长度字段 ，单位是4字节。如果 IP 头部包含选项，这个值会大于5。
    *   **Total Length:** 整个 IP 数据报（头部+数据）的总长度。
    *   **Identification, Flags, Fragment Offset:** 这三个字段与 **IP 分片** 相关。如果一个数据包大于下一跳网络的 MTU (Maximum Transmission Unit)，并且 DF (Don't Fragment) 标志位为0，路由器就需要将其分片。这也是路由器可能修改的字段。
* [[完整的IP头部详解]] 