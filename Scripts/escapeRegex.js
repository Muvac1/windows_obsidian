module.exports = async (params) => {
    // 获取当前编辑器对象
    const editor = app.workspace.activeLeaf.view.editor;
    if (!editor) {
        new Notice("请先打开一个笔记并选中公式");
        return;
    }

    // 获取选中的文本
    const selection = editor.getSelection();
    if (!selection) {
        new Notice("未选中任何文本");
        return;
    }

    // 正则转义函数
    // 1. 先把反斜杠 \ 变成 \\
    // 2. 把其他特殊符号 { } ( ) [ ] + * ? . ^ $ | 转义
    let escaped = selection.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
escaped = escaped.replace(/\s+/g, '\\s*'); 	
    // 包裹上 Obsidian 搜索需要的 /.../
    const result = `/${escaped}/`;

    // 写入剪贴板
    await navigator.clipboard.writeText(result);

    // 提示用户
    new Notice(`已转换并复制: ${result}`);
}