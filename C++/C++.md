函数的使用的目的 ： **通过基类访问派生类定义的函数** 
 >使用方法 在基类定义一个未实现的函数名，建议在后代中虚函数都加上virtual关键词

 ```
 class base 
 {
 public:
	 base();
	 virtual void test();
private:
	char *basePStr;
 };
```
所有可以在其子类重新定义父类的做法这种行为称为覆盖(override),或者为重写。

##### 虚函数如何实现？它存放在内存的哪个区？什么时候生成的？
两个关键概念：**虚函数表和虚函数指针**
- 虚函数表：每个包含虚函数的的类都会生成一个虚函数表，其中储存这该类中所有虚函数的地址。虚函数表是由一个指针指向该对象对应的虚函数表，从而让程序能够动态的调用虚函数。
- 虚函数指针：在对象的内存布局中，编译器会添加一个额外的指针，称为虚函数指针或虚表指针。这个指针指向该对象对应的虚函数表，从而让程序能够动态的调用虚函数。
- 当一个基类指针或引用调用虚函数时，编译器会使用虚表指针来查找该对象对应的虚函数表，并根据函数在虚函数表中的位置来调用正确的虚函数。
- 在编译阶段生成，虚函数和普通函数一样存放在代码段，只是它的指针又存放在了虚表之中
- 
#### 构造函数 和 普通成员函数
1. 什么是构造函数？
   -  构造函数是类的一种特殊函数，用于在创建对象时初始化对象的成员变量
   - 他的名字必须和类名相同
   - 他没有返回值
   - 构造函数会在对象被创建时 自动跳用 ，无需 **显式调用**
2. 为什么用构造函数？
	- 构造函数的主要目的是 **初始化对象**
示例
```
class BankAccount {
private:
	double balance;
public:
	//构造函数
	BankAccount(double initialBalance): nalance(initialBalance){}
	
	void displayBlance() const {
		std::cout << "Current Balace:$" << banlance << std::endl;
		}
};
int main(){
	//创建对象时初始化
	BankAccount accout(1000.0);
	account.displayBalance();
	return 0;
}
```
list 构造函数
函数原型： 
1.  ```list<T> lst;```  //list 采用模板类实现，对象的默认构造形式
2.  ```list(beg,end);``` //构造函数将[beg,end)区间中的元素拷贝给自身呢。
3. list(n,elem); //构造函数将n个edlm拷贝给自身
4. list(const list &lst); //拷贝构造函数 
# C++ 关键字
[C++的97个关键词概览(至20210216）_alignas specifier-CSDN博客](https://blog.csdn.net/Edidaughter/article/details/113828517)
![[Pasted image 20250226232428.png]]
[C++ 的关键字（保留字）完整介绍 | 菜鸟教程](https://www.runoob.com/w3cnote/cpp-keyword-intro.html)