	# 字符串 str
1. 首字母大写: title() 方法 
2. 全部小写: lower() 方法 
3. 全部大写: upper() 方法 
4. 删除字符串右边的空格: rstrip() 方法
5. 删除字符串左边的空格: lstrip() 方法 
6. 删除字符串左右两边的空格: strip() 方法
7. 字符串的查找: .find() 方法
8. 成员运算: in / not in
9. 字符串的分割: .split() 方法
# 列表 list[]
## 列表的增删
1. 在列表末尾添加元素: append()方法
2. 在列表中指定位置插入元素: insert(索引值,元素值) 方法
3. 删除列表中的某个元素: del 语句 : del 列表名[元素索引]
4. 删除列表中最后一个元素并继续使用: pop()方法 
5. 删除列表中指定位置元素并继续使用: pop(元素索引) 方法
6. 根据元素值删除元素: remove(元素值)  方法

## 列表的排序
1. 列表按照首字母顺序永久修改顺序: sort() 方法 
2. 列表按照首字母顺序反向永久修改顺序: sort(reversr=True) 方法
3.  列表按照首字母顺序临时修改顺序: sorted()函数
4. 列表按照首字母顺序反向临时修改顺序: sorted(列表名,reverse=True)函数
5. 按照列表元素顺序永久逆序修改顺序: reverse() 方法
6. 确认列表长度: len() 函数

## 遍历循环: for i in list[]:

# 创建整数列表: 函数range(第一个值,第二个值,步长(可省略))
函数range()让Python从你指定的第一个值开始数，并在到达你指定的第二个值后停止，因此输出不包含第二个值
1. 使用range() 函数创建名为numbers的列表: numbers  = list(range())


## 数字列表的统计计算
1. 显示列表的最小值: min(列表名) 函数
2. 显示列表的最大值: max(列表名) 函数
3. 显示列表值的和: sum(列表名)函数

## 列表的切片
```python
list[索引1 : 索引2]
```

## 列表的复制
```python
list2 = list1[:]
```

# 元组tuple() : 元素不可变的列表称为元组
元组的访问语法与列表的访问语法相同
要改变元组的内容就只能对元组变量重新赋值, 而不能像列表一样增删. 
相比于列表，元组是更简单的数据结构。如果需要存储的一组值在程序的整个生命周期内都不变，可使用元组。

Python中空值会被视为False，非空值会被视为True

# 字典 dict{key:value}
在Python中，字典是一系列键—值对。每个键都与一个值相关联，你可以使用键来访问与之相关联的值。
在字典中添加/修改键值对: 
```python
字典名[键名]=值
```

通过键访问值: 
```python
字典名[键名]
```

查看字典所有的键 .keys()方法: 
```python
字典名.keys()
```

查看字典所有的值 .values()方法 : 
```python
字典名.values()
```

删除键值对 : 
```python
# del 语句
del 字典名[键名]

# .pop方法
字典名.pop(键名)

# 清空字典 .clear()方法
字典名.clear()
```

要编写用于遍历字典的for循环，可声明两个变量，用于存储键—值对中的键和值。
```python
for key,value in 字典名.items() 
```

遍历字典中所有的键:
```python
for key in 字典名.keys() 
```

按顺序遍历字典中所有的键: 
```python
for key in sorted(字典名.keys())
```

遍历字典中所有的值: 
```python
for value in 字典名.value() 
```

通过对包含重复元素的列表调用set()，可让Python找出列表中独一无二的元素，并使用这些元素来创建一个集合。

将两个可对应列表合成为一个字典 zip() 函数:  
```python
字典名 = dict(zip(列表1,列表2))
```

字典的合并
```python
dict1 = {}
dict2 = {}
# 将dict2 添加到 dict1
dict1 = dict1.update(dict2)
```
# 用户输入 input()函数

# 求模运算符(求余) %

# while循环
要立即退出while循环，不再运行循环中余下的代码，也不管条件测试的结果如何，可使用break语句。break语句用于控制程序流程，可使用它来控制哪些代码行将执行，哪些代码行不执行，从而让程序按你的要求执行你要执行的代码。
在任何Python循环中都可使用break语句。

要返回到循环开头，并根据条件测试结果决定是否继续执行循环，可使用continue语句，它不像break语句那样不再执行余下的代码并退出整个循环。

# 函数
函数是带名字的代码块，用于完成具体的工作。

def来告诉Python你要定义一个函数。这是函数定义，向Python指出了函数名，还可能在括号内指出函数为完成其任务需要什么样的信息。 
```python
def 函数名称(参数1,参数2,......):
	global 变量名称          # 声明全局变量
	函数体
```

实参是调用函数时传递给函数的信息。

调用函数时，Python必须将函数调用中的每个实参都关联到函数定义中的一个形参。为此，最简单的关联方式是基于实参的顺序。这种关联方式被称为位置实参。

关键字实参是传递给函数的名称—值对。你直接在实参中将名称和值关联起来了，因此向函数传递实参时不会混淆（不会得到名为Hamster的harry这样的结果）。关键字实参让你无需考虑函数调用中的实参顺序，还清楚地指出了函数调用中各个值的用途。

编写函数时，可给每个形参指定默认值。在调用函数中给形参提供了实参时，Python将使用指定的实参值；否则，将使用形参的默认值。

函数的不定长参数(可变参数):
```python
# 可变参数1
def 函数名称(*参数):        # 传入的是一个名为参数的元组
	函数体 

def 函数名称(**参数):        # 传入的是一个字典(所以传入函数参数格式为: a= b )
	函数体
```

使用默认值可简化函数调用，还可清楚地指出函数的典型用法。

函数返回简单值: return() 函数
**函数的返回值可以是一个或者多个值 , 也可以是函数的引用**

***Python将非空字符串解读为True***

如果要让函数接受不同类型的实参，必须在函数定义中将接纳任意数量实参的形参放在最后。Python先匹配位置实参和关键字实参，再将余下的实参都收集到最后一个形参中。

import语句允许在当前运行的程序文件中使用模块中的代码。

通过将函数存储在独立的文件中，可隐藏程序代码的细节，将重点放在程序的高层逻辑上。

模块是扩展名为.py的文件，包含要导入到程序中的代码。

```python
	import 模块名 
	
	import 模块名 as 别名
	
	from 模块名 import 函数名
	
	from 模块名 import 函数名  as 别名
	
	from 模块名 import *     导入模块中所有的函数  (不建议使用)
```


eval函数
```python

```


# 装饰器----需复习
```python
# 装饰器这你需要一个参数, 这个参数就是要装饰的函数的名字 
def runtime(func):     # 其实就是把my_func1传给了 func
	def wrapper():
		print(1)
		func()
	return wrapper     # 返回包装函数的名称

@ runtime  # 这时候my_func1就使用了runtime进行了装饰
def my_func1():
	print("函数1运行")

my_func1()
```


# yield生成器
```python
def func1():
	return "自信的生命最美丽."
	print("含泪播种的人必须能够含笑收获.")        # 在return 后的代码不会被运行

def func2():
	# yield返回的是一个生成器对象
	yield "一个人想要优秀,必须要勇于挑战"
	print("有志者,事竟成")

# 使用方法: 
for i in func2():       # 遍历的是 func2()函数的返回值
	print(i)  
```

# 匿名函数:  lambda表达式
```python
# 计算圆的面积
import math
def circle_aera(r):
	result = math.pi * r * r
	return result


# lambda表达式写法
# lambda是一个关键字
# 冒号前面的 r 是这个函数的参数
# 冒号后面的部分, 是这个函数的运算逻辑
result = lambda r:math.pi * r * r
```

# map函数
```python
# map函数支持两个参数 
# 第一个参数是函数,就是要处理的逻辑
# 第二个参数是一个可迭代的对象, 比如列表就是
def calc_e_properties(e):
	if "红莲斗篷" == e":
		return "防御+120"
	if "魔女斗篷" == e":
		return "魔法防御+360"
	if "影忍之足" == e":
		return "移动速度+60"
	if "辉月" == e":
		return "无敌1.5s"
	if "破军" == e":
		return "攻击+180"
hero_e = [
	"红莲斗篷",
	"魔女斗篷",
	"影忍之足",
	"辉月",
	"破军"
	]

# map函数的使用
p = map(calc_e_properties,hero_e)         # 可以返回一个迭代返回值列表
print(p)
print(list(p))        



# lambda 和 map函数的结合使用
a = ["a","b","c"]
p = map(lambda x:x.upper(),a)
print(list(p))
```

# redece函数
![[reduce函数运行逻辑.png]]
```python
from functools import reduce
a = [2,4,8]
result = reduce(lambda x,y:x*y,a)
print(result)
```

# 过滤函数: filter函数
![[filter函数运行逻辑.png]]
```python
# 过滤函数: 符合条件的留下, 不符合条件的删除
letter = ["a","b","c","D","e","F"]
upper_letter = filter(lambda x:x==x.upper(),letter)
print(list(upper_letter))
```

# 面向对象, 对象的封装

```python
## 面向对象
## 封装

# 类的魔术方法 __repr__

# 类
class BeautifulGirl():
	# 定义类的属性
	name = "高圆圆"

	# 定义类的方法
	def dance(self):
		print("美女在跳舞")

# 实例化一个类
girl = BeautifulGirl()
print(girl)
```