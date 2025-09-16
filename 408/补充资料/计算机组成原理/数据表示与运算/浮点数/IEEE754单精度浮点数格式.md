#IEEE754单精度浮点数格式 IEEE 754 标准规定，一个单精度（`float`类型）浮点数占用32位（4字节），其结构如下：

`S | EEEEEEEE | MMMMMMMMMMMMMMMMMMMMMMM`

*   **符号位 (Sign, S)**：1位。$S=0$ 表示正数，$S=1$ 表示负数。
*   **阶码 (Exponent, E)**：8位。这是一个经过偏移（biased）的指数。对于单精度，偏移量（bias）是127。阶码的计算公式为：$E = e + 127$，其中 $e$ 是实际的指数。
*   **尾数 (Mantissa, M)**：23位。也称为小数部分（Fraction）。它表示浮点数的精度部分。

一个规范化的浮点数的值可以表示为：$V = (-1)^S \times 1.M \times 2^{E-127}$