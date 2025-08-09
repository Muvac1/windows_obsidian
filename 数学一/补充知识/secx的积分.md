1. #构造辅助项 `sec(x)` 乘以 `(sec(x) + tan(x)) / (sec(x) + tan(x))`
2.  将分子展开。
    $$
    = \int \frac{\sec^2 x + \sec x \tan x}{\sec x + \tan x} \, dx
    $$
3. #换元法 [[求导公式]]
4. 代入积分 
5. 求解 [[Pasted image 20250809040624.png]]
- 方法二  #三角函数的转化 #诱导公式  #二倍角公式 #换元法 [[Pasted image 20250809041341.png]]
- 补充说明
 $\ln|\sec x + \tan x|$ 和 $\ln\left|\tan\left(\frac{x}{2} + \frac{\pi}{4}\right)\right|$ 看起来不同，但实际上它们是相等的。可以通过三角恒等变换证明：
$$
\tan\left(\frac{x}{2} + \frac{\pi}{4}\right) = \frac{\sin\left(\frac{x}{2} + \frac{\pi}{4}\right)}{\cos\left(\frac{x}{2} + \frac{\pi}{4}\right)} = \frac{\sin\frac{x}{2}\cos\frac{\pi}{4} + \cos\frac{x}{2}\sin\frac{\pi}{4}}{\cos\frac{x}{2}\cos\frac{\pi}{4} - \sin\frac{x}{2}\sin\frac{\pi}{4}} = \frac{\sin\frac{x}{2} + \cos\frac{x}{2}}{\cos\frac{x}{2} - \sin\frac{x}{2}}
$$
分子分母同乘以 $(\cos\frac{x}{2} + \sin\frac{x}{2})$：
$$
= \frac{(\cos\frac{x}{2} + \sin\frac{x}{2})^2}{\cos^2\frac{x}{2} - \sin^2\frac{x}{2}} = \frac{\cos^2\frac{x}{2} + \sin^2\frac{x}{2} + 2\sin\frac{x}{2}\cos\frac{x}{2}}{\cos x} = \frac{1+\sin x}{\cos x} = \frac{1}{\cos x} + \frac{\sin x}{\cos x} = \sec x + \tan x
$$
因此，两种答案是等价的。