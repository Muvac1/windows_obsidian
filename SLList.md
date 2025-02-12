package timingtest;  
  
/** An SLList is a list of integers, which hides the terrible truth  
 * of the nakedness within. */public class  SLList<Item> {  
    private class IntNode {  
       public Item item;//用于储存节点的数据  
       //数据的类型由泛型参数Item决定  
       public IntNode next;// 用于指向链表中的下一个节点，如果是链表的最后一个节点，则next为null  
// IntNode 是一个内部类 ，用于定义链表的节点结构 ，每个节点包含两部分：  
  
       public IntNode(Item i, IntNode n) {  
          item = i;  
          next = n;  
       } //通过这个构造器可以创造一个节点，其中i是姐节点存储的数据，n是指向下一个节点的引用  
    }  
  
    /* The first item (if it exists) is at sentinel.next. */  
    private IntNode sentinel;  
    private int size;  
/*  
sentinel : 哨兵节点，用于简化链表操作，他本身不存储任何数据，仅作为链表的起点  
哨兵节点的next 指向链表的第一个数据节点  
size: 用于存储链表的大小（节点个数）。 这个变量可以让sizez90方法在O(1)时间内返回链表大小，而不需要遍历整个列表  
 */    /** Creates an empty timingtest.SLList. */  
    public SLList() {  
       sentinel = new IntNode(null, null);  
       size = 0;  
    }  
    //初始化一个空链表  
    //sentinel 节点没有数据，next 指向 null。  
    //size 设置为0  
    //    public SLList(Item x) {  
       sentinel = new IntNode(null, null);  
       sentinel.next = new IntNode(x, null);  
       size = 1;  
    }  
  
  
    /** Adds x to the front of the list. */  
    public void addFirst(Item x) {  
       sentinel.next = new IntNode(x, sentinel.next);  
       size = size + 1;  
    }  
    /*在哨兵节点后插入一个新节点，存储数据x，并将原来的第一个节点作为新节点的next*/  
    /** Returns the first item in the list.r */  
  
    public Item getFirst() {  
       return sentinel.next.item;  
    }  
  
    /** Adds x to the end of the list. */  
    public void addLast(Item x) {  
       size = size + 1;  
  
       IntNode p = sentinel;  
  
       /* Advance p to the end of the list. */  
       while (p.next != null) {  
          p = p.next;  
       }  
//fadian  
       p.next = new IntNode(x, null);  
    }  
  
    /** returns last item in the list */  
    public Item getLast() {  
       IntNode p = sentinel;  
  
       /* Advance p to the end of the list. */  
       while (p.next != null) {  
          p = p.next;  
       }  
  
       return p.item;  
    }  
  
  
    /** Returns the size of the list. */  
    public int size() {  
       return size;  
    }  
    //jj  
    public static void main(String[] args) {  
       /* Creates a list of one integer, namely 10 */  
       SLList L = new SLList();  
       L.addLast(20);  
       System.out.println(L.size());  
    }  
}