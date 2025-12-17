#边的分类   [[顶点状态]] 
假设我们在 DFS 过程中从顶点$v$探索到边$(v,u)$：  
1.  **树边 (Tree Edge):**
    *   条件：$u$的状态为 `UNDISCOVERED`。
    *   含义：DFS 遍历经过的边，构成了 DFS 树（或森林）。
2.  **后向边 (Back Edge):**
    *   条件：$u$的状态为 `DISCOVERED`。
    *   含义：指向递归栈中祖先节点的边。**这是图中存在环（Cycle）的充分必要条件。**
3.  **前向边 (Forward Edge):**
    *   条件：$u$的状态为 `VISITED`，且$dTime(v)<dTime(u)$。
    *   含义：DFS 树中从祖先直接指向后代的非树边。
4.  **跨边 (Cross Edge):**
    *   条件：$u$的状态为 `VISITED`，且$dTime(v)>dTime(u)$。
    *   含义：连接两个没有祖先/后代关系的子树的边，或者同一棵树中从右分支指向左分支的边。
