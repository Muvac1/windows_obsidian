 **对分子求导**：$g(x) = 1 - x \cdot 2^{1-x}$
    使用乘法法则 $(uv)' = u'v + uv'$ 和指数函数求导法则 $(a^u)' = a^u \cdot \ln(a) \cdot u'$：
    $g'(x) = 0 - \left[ (x)' \cdot 2^{1-x} + x \cdot (2^{1-x})' \right]$
    $g'(x) = - \left[ 1 \cdot 2^{1-x} + x \cdot (2^{1-x} \cdot \ln 2 \cdot (1-x)') \right]$$g'(x) = - \left[ 2^{1-x} + x \cdot 2^{1-x} \cdot \ln 2 \cdot (-1) \right]$
    $g'(x) = -2^{1-x} + x \cdot 2^{1-x} \ln 2$
*   **对分母求导**：$h(x) = (2-x)(1-x)$
    使用乘法法则：
    $h'(x) = (2-x)'(1-x) + (2-x)(1-x)'$
    $h'(x) = (-1)(1-x) + (2-x)(-1)$
    $h'(x) = -1 + x - 2 + x = 2x - 3$

