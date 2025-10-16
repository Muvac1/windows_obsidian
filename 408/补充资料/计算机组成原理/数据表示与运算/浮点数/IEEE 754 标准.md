1. #IEEE754标准
	*   **格式**：单精度（32位）和双精度（64位）浮点数的具体格式，包括符号位、阶码（Exponent）、尾数（Mantissa/Fraction）各占多少位。
    *   **阶码表示**：通常使用**移码 (Biased Exponent)** 表示，例如单精度中阶码偏移量为127。计算公式为：真实阶码 $E$ = 移码值 $e$ - 偏移量。
    *   **特殊值**：如何表示 $\pm0$, $\pm\infty$, NaN (Not a Number) 以及非规格化数 (Denormalized Numbers)。
[[IEEE754单精度浮点数格式]] [[IEEE 754 标准双精度浮点数]] [[IEEE 754 标准 特殊值的表示]] 