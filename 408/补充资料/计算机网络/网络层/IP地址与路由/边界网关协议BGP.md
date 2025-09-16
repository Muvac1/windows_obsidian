#边界网关协议BGP  
*   **BGP 属性**：如 AS-PATH（用于防环）、NEXT_HOP、LOCAL_PREF 等路径属性。
    *   **iBGP 和 eBGP**：eBGP 用于 AS 之间，iBGP 用于 AS 内部 BGP 路由器之间同步从 eBGP 学来的路由信息。
    *   **BGP 选路规则**：一个非常复杂的决策过程，基于各种路径属性来选择最佳路由。