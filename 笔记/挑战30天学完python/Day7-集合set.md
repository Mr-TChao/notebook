Set是项的合集。Set是无序且没有索引的集合。在Python中，集合用于存储唯一项，可以在集合之间查找并集、交集、差集、对称差集、子集、超集和不相交集。
	百度百科概念：集合是指具有某种特定性质的具体的或抽象的对象汇总而成的集体。其中，构成集合的这些对象则称为该集合的元素。详细请搜索词条。

### 创建集合set{}
我们使用花括号 `{ }` 来创建一个set或 `set()` 内置函数。
```python
# 创建一个空的集合set{}
# 语法1: 直接等于号
st = {}
# 或 初始化内置set函数
st = set()

# 创建一个带初始值的集合set{}
# 方法1：花括号内直接给项值
st = {'item1', 'item2', 'item3'}
# 例子1:
fruits = {'banana', 'orange', 'mango'}

# 方法2: set方法给定一个list作为初始值
st = set(['item1','item2'])
# 例子2:
fruits = set('banana','orange')
```

### 获取长度
使用 `len()` 方法来获取 Set 的长度。
```python
# 语法使用
st = {'item1', 'item2', 'item3'}
len(set)

# 实际列子
fruits = {'banana', 'orange', 'mango', 'lemon'}
len(fruits)
```
### 访问和检索
使用循环来访问项。具体将在循环部分看到如何使用。 而对于检查一项是否在set中我们使用操作符 `in`
```python
# syntax
st = {'item1', 'item2', 'item3', 'item4'}
# st中是否包含item3? 结果是 True
print("Does set st contain item3? ", 'item3' in st) 

# 具体例子
fruits = {'banana', 'orange', 'mango', 'lemon'}
print('mango' in fruits ) # True
```
### 项添加
集合set{}一旦被创建，内部的项是不可以改变的。但是我们可以向其添加新项。
- 添加一个项使用 add()
```python
# 语法演示
st = {'item1', 'item2', 'item3'}
st.add('new_item')

# 具体例子
fruits = {'banana', 'orange', 'mango', 'lemon'} # len() 4
fruits.add('lime')
print(fruits) # len() 5
```
- 使用 update() 添加多个项，函数参数是一个列表list。
```python
# 语法：一次添加多个，最终st结果为item1～item7
st = {'item1', 'item2', 'item3', 'item4'}
st.update(['item5','item6','item7'])

# 具体例子
fruits = {'banana', 'orange', 'mango', 'lemon'}
vegetables = ('tomato', 'potato', 'cabbage','onion', 'carrot')
fruits.update(vegetables)
print(fruits)
print(len(fruits))
```
### 移删清空
#### remove()方法
使用 `remove()` 方法将set中某项进行移除。 其中如果移除的项不存在则会抛出一个错误，因此在做此操作前做好检查下项是否存在set中。不过可以使用 `discard()` 方法来进行同样操作但不会引起错误。
```python
# 语法
st = {'item1', 'item2', 'item3'}
st.remove('item2')

# 具体例子
fruits = {'banana', 'orange', 'mango'}
fruits.remove('orange') # 剩余 {'banana', 'mango'}
fruits.remove('lemon')  # 异常 Traceback (most recent call last):File "<stdin>", line 1, in <module> KeyError: 'lemon'

fruits.discard('lemon')  # 不会有任何异常提示
fruits.discard('banana') # 剩余 {'mango'}
```
#### pop()方法
pop() 方法，它的作用是移除一个随机的项，并且返回移除项。
```python
# pop 举例
fruits = {'banana', 'orange', 'mango', 'lemon'}
fruits.pop()
# 如果我们项得到随机移除项是什么直接赋值
removed_item = fruits.pop()
# 查看后两次pop剩余项 和 最后一次移除项值
print(fruits, removed_item)
```
#### clear()方法
想清空或清除set集合，我们使用 `clear()` 方法。
```python
# 语法使用
st = {'item1', 'item2', 'item3'}
st.clear()

# 使用例子
fruits = {'banana', 'orange', 'mango', 'lemon'}
fruits.clear()
print(fruits) # set()
```
#### del
彻底删除set本身，我们使用 `del` 操作关键词。
```python
# 语法演示
st = {'item1', 'item2', 'item3'}
del st

# 举例
fruits = {'banana', 'orange', 'mango'}
del fruits
print(fruits) # NameError: name 'fruits' is not defined
```
### list转set
可以在list和set之间相互转换。将list转set的时候会移除重复项，仅有唯一值将被保留。
```python
# 语法
lst = ['item1', 'item2', 'item3', 'item4', 'item1']
# 转后排序将是随机的，因为set是无序集合
st = set(lst)

# 具体例子
fruits = ['banana', 'orange', 'mango', 'lemon','orange', 'banana']
# 注意多试几次转换和打印看看每次转换后的排序输出
fruits = set(fruits) 
print(fruits) 
```
### 连接set
将两个set组合在一起，可以使用union() 或 update() 方法。
- union 方法将两个set连接并返回一个新的set
```python
# 实战例子
fruits = {'banana', 'orange'} 
vegetables = {'tomato', 'potato', 'cabbage',}
print(fruits.union(vegetables)) # 注意无序这个关键点
```
- update 方法是将参数中set插入给定的set中
```python
# 实战例子
fruits = {'mango', 'lemon'}
vegetables = {'tomato', 'onion', 'carrot'}
fruits.update(vegetables)
print(fruits) # {'lemon', 'onion', 'tomato', 'carrot', 'mango'}
```
### 交集/差集
- 方法 `intersection()` 返回两个集合中的相同项的集合。
```python
# intersection 实战例子
whole_numbers = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
even_numbers = {0, 2, 4, 6, 8, 10}
whole_numbers.intersection(even_numbers) # {0, 2, 4, 6, 8, 10}

python = {'p', 'y', 't', 'h', 'o','n'}
dragon = {'d', 'r', 'a', 'g', 'o','n'}
python.intersection(dragon)     # {'o', 'n'}
```
- 使用方法 `difference()` 它返回两个集合之间的差值。
```python
# difference 实战例子
whole_numbers = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
even_numbers = {0, 2, 4, 6, 8, 10}
whole_numbers.difference(even_numbers) # {1, 3, 5, 7, 9}

python = {'p', 'y', 't', 'o','n'}
dragon = {'d', 'r', 'a', 'g', 'o','n'}
python.difference(dragon)     # {'t', 'y', 'p'} 结果是无序的输出和你的可能顺序不一致
dragon.difference(python)     # {'r', 'd', 'a', 'g'} 答案仅供参考，无序
```
### 检查子集/超集
集合可以是其他集合的子集或超集：
- 子集: `issubset()`
- 超集: `issuperset()`
```python
# 实战例子
whole_numbers = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
even_numbers = {0, 2, 4, 6, 8, 10}
whole_numbers.issubset(even_numbers) # False, 因为whole_numbers是个超集
whole_numbers.issuperset(even_numbers) # True

python = {'p', 'y', 't', 'h', 'o','n'}
dragon = {'d', 'r', 'a', 'g', 'o','n'}
python.issubset(dragon)     # False
```
### 对称差集合
方法 `symmetric_difference()` 返回两个set之间的对称差。它意味着返回一个集合，其中包含两个集合中的所有项，然后除去两个都存在项，数学上对照：(A\B) ∪ (B\A)
	这里请特别对照difference()弄清楚差和对称差的不同。
```python
# 同样举个实际操作例子
whole_numbers = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
some_numbers = {1, 2, 3, 4, 5}
whole_numbers.symmetric_difference(some_numbers) # {0, 6, 7, 8, 9, 10}
some_numbers.symmetric_difference(whole_numbers) # {0, 6, 7, 8, 9, 10}

python = {'p', 'y', 't', 'h', 'o','n'}
dragon = {'d', 'r', 'a', 'g', 'o','n'}
# 再次强调set项无序，以下结果结果项相同
python.symmetric_difference(dragon)  # {'t', 'p', 'r', 'g', 'h', 'a', 'd', 'y'} 
dragon.symmetric_difference(python)  # {'t', 'p', 'r', 'g', 'h', 'a', 'y', 'd'}
```
### 检查是否相同元素
如果两个集合没有一个或多个共同项，我们称它们为不相交集。我们可以使用 `isdisjoint()` 方法检查两个集合是连接的还是不连接的。或者可理解为用于判断两个集合是否包含相同的元素，如果没有返回 True，否则返回 False。
```python
# 使用语法
st1 = {'item1', 'item2', 'item3', 'item4'}
st2 = {'item2', 'item3','item5'}

st2.isdisjoint(st1) # False
st1.isdisjoint(st2) # False

# 实例
even_numbers = {0, 2, 4 ,6, 8}
odd_numbers = {1, 3, 5, 7, 9}
even_numbers.isdisjoint(odd_numbers) # True, 因为没有相同的项

python = {'p', 'y', 't', 'h', 'o','n'}
dragon = {'d', 'r', 'a', 'g', 'o','n'}
python.isdisjoint(dragon)  # False, 有相同的项 {'o', 'n'}
```