# Tuple () 元组
元组是不同数据类型的集合，它们是有序且不可变的。tuple 使用圆括号()包裹元素。它一旦被创建便不可修改。也就是说我们不能像上节学习的list一样更改集合项。同时也不能使用像 add，insert，remove等方法。在元组中仅有少量的方法，这些方法如下：

- `tuple()`：创建一个空的元组
- `count()`：计算元组中指定项的个数
- `index()`：返回指定项的索引值
- `+` ：连接两个或以上的元组成为新的元组

### 创建元组
元组的创建可以通过 `()` 或 `tuple()` 实现。在创建的时候也可以同时在括号内初始化数据项
```python
# 创建一个空的元组
# 直接变量等于（）
empty_tuple = ()
# 或使用元组构造函数
empty_tuple = tuple()

# 创建一个元组并初始化数据
# 语法
tpl = ('item1', 'item2','item3')
# 举例
fruits = ('banana', 'orange', 'mango', 'lemon')
```

### 元组长度
计算元组的长度使用 len() 内置函数。
```python
# # 语法形式
# tpl = ('item1', 'item2', 'item3')
# len(tpl)

# 实际举例
systems = ('Windowns','Linux','macOS')
print(len(systems)) # 3
```

### 元组取值
类似list数据类型，获取元组的项同样通过索引index方式。
![[day6-1.png]]
##### 正向索引 ：
下角[0]表示元组项1，以此类推到元组长度减1
```python
# # 语法形式
# tpl = ('item1', 'item2', 'item3')
# first_item = tpl[0]
# second_item = tpl[1]

fruits = ('banana', 'orange', 'mango', 'lemon')
first_fruit = fruits[0]  # banana
second_fruit = fruits[1] # orange

last_index =len(fruits) - 1
last_fruit = fruits[last_index]
print(last_fruit) # lemon
```
#### 负向索引 ：\
负索引表示从末尾开始，-1表示最后一项，-2表示第二项，元组长度的负数表示第一项。
![[day6-2.png]]
```python
# # 使用语法
# tpl = ('item1', 'item2', 'item3','item4')
# first_item = tpl[-4]
# second_item = tpl[-3]

fruits = ('banana', 'orange', 'mango', 'lemon')
first_fruit = fruits[-4]  # banana
second_fruit = fruits[-3] # orange
last_fruit = fruits[-1] # mango
```

### 切片操作
我们可以通过指定元组中起始和结束位置的索引范围来切出子元组，其中返回值将是一个包含指定项的新元组。
#### 指定正向索引范围
```python
# 语法形式
tpl = ('item1', 'item2', 'item3','item4')
all_items = tpl[0:4]         # all items
all_items = tpl[0:]         # all items
middle_two_items = tpl[1:3]  # does not include item at index 3

# 实例
fruits = ('banana', 'orange', 'mango', 'lemon')
all_fruits = fruits[0:4]    # 所有元组项
all_fruits= fruits[0:]      # 所有元组项
orange_mango = fruits[1:3]  # 右3不包含index=3, print => ('orange', 'mango')
orange_to_the_rest = fruits[1:] #print => ('orange', 'mango', 'lemon')
```
#### 指定负向索引范围
```python
# 语法形式
tpl = ('item1', 'item2', 'item3','item4')
all_items = tpl[-4:]         # 所有项：从右侧倒数第四项，即正向index=0
middle_two_items = tpl[-3:-1]  # 不包括索引3(-1)的项

# 实例
fruits = ('banana', 'orange', 'mango', 'lemon')
all_fruits = fruits[-4:]    # 所有项
orange_mango = fruits[-3:-1]  # 不包括索引3的项，打印输出为 ('orange', 'mango')
orange_to_the_rest = fruits[-3:] # 打印输出为 ('orange', 'mango', 'lemon')
```

### 转换 tuple 为 list
我们可以在元组和列表之间相互转换。因为元组是不可变的，因此如果我们想改变它则需要转换成list。语法形式为list(元组)反之转换为tuple(列表)。
```python
fruits = ('banana', 'orange', 'mango', 'lemon')

fruits = list(fruits)
fruits[0] = 'apple'
print(fruits)     # ['apple', 'orange', 'mango', 'lemon']

fruits = tuple(fruits)
print(fruits)     # ('apple', 'orange', 'mango', 'lemon')
```
### 检查元组中项
使用 `in` 检查元组中是否存在指定项，它最终返回一个布尔值。
```python
# # Syntax
# tpl = ('item1', 'item2', 'item3','item4')
# 'item2' in tpl # True

fruits = ('banana', 'orange', 'mango', 'lemon')
print('orange' in fruits) # True
print('apple' in fruits) # False
fruits[0] = 'apple' # TypeError: 'tuple' object does not support item assignment
```
### 元组的连接
使用+操作符连接两个或多个元组。
```python
# # syntax
# tpl1 = ('item1', 'item2', 'item3')
# tpl2 = ('item4', 'item5','item6')
# tpl3 = tpl1 + tpl2

fruits = ('banana', 'orange', 'mango', 'lemon')
vegetables = ('Tomato', 'Potato', 'Cabbage','Onion', 'Carrot')

fruits_and_vegetables = fruits + vegetables
print(fruits_and_vegetables)

vegetables_and_fruits = vegetables + fruits
print(vegetables_and_fruits)
```
### 元组的删除
因为元组是不可变的。因此不能删除元组中的单个项，但可以使用del删除元组本身。
```python
# # 语法
# tpl1 = ('item1', 'item2', 'item3')
# del tpl1

fruits = ('banana', 'orange', 'mango', 'lemon')
del fruits
print(fruits) # 提示错误 NameError: name 'fruits' is not defined

```