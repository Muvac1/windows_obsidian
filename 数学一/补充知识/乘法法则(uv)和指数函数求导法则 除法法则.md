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

### 3. 除法法则 (Quotient Rule)

**用途**：用于求两个函数商的导数。

**法则**：如果函数 $h(x)$可以表示为两个可导函数 $u(x)$ 和 $v(x)$ 的商，即 $h(x) = \frac{u(x)}{v(x)}$（其中 $v(x) \ne 0$），那么它的导数是分母乘以分子的导数，减去分子乘以分母的导数，最后再除以分母的平方。

**公式**：
设 $y=\frac{u(x)}{v(x)}$，则其导数为：
$y' = \frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2}$
或者写成：
$[\frac{d}{dx}(\frac{u}{v})] = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$