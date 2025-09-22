#平均查找长度（ASL）  
ASL 是衡量查找算法效率的重要指标。对于查找成功的 ASL，其计算公式为：
$ASL_{成功} = \sum_{i=1}^{n} p_i C_i$
其中：
*   $n$ 是数据元素的个数。
*   $p_i$ 是查找第 $i$ 个元素的概率。
*   $C_i$ 是找到第 $i$ 个元素所需的比较次数。
1.  #哈希表的性能分析ASL  
	*   **查找成功时的ASL**
	    *   **线性探测法**：$ASL_{succ} \approx \frac{1}{2}(1 + \frac{1}{1-\alpha})$
	    *   **链地址法**：$ASL_{succ} \approx 1 + \frac{\alpha}{2}$
	
	*   **查找失败时的ASL**
	    *   **线性探测法**：$ASL_{unsucc} \approx \frac{1}{2}(1 + (\frac{1}{1-\alpha})^2)$
	    *   **链地址法**：$ASL_{unsucc} \approx \alpha$ (或 $e^{-\alpha}$，取决于具体情况)
