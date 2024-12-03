来源地址: [挑战30天学完Python](https://github.com/Mr-TChao/30-Days-Of-Python-zh_CN)

# day1 : 初识Python
```python
# 查看Python版本
python --version

python3 --version

# 打开python交互式shell
python

python3

# 退出Python交互式shell
exit()
```

### 常见Python数学运算操作
```python
加法: +
减法: -
乘法: *
除法: /
开方: **
取余: %
求商: //       # 即除后取整
```

### Python字符串
```python
# 单行字符
'单行字符串'

"单行字符串"

# 多行字符串
"""
第一行
第二行
第三行
..............
"""

'''
第一行
第二行
第三行
..............
'''
```

### Python基础
```python
单行注释:  #注释内容 

多行注释: """注释内容"""
```

#### 数据类型
```python
# python中常见的数据类型
整数: int
浮点数: float
字符串: str
布尔值: bool           # True and False
列表: list[]           # 一个有序集合，它允许存储不同的数据类型项
字典: dic{key:value}   # 键值对格式的无序数据集合。
元组: tuple()          # 一个不可变的列表
集合: set{}            # 集合是类似于列表和元组的数据类型的集合。与列表和元组不同，集合项不是有序的。与数学一样，`set`在python 仅保存不重复的值。

# 如何查看数据类型
type()
```

# day2 : 函数 变量 数据类型

### 函数
Python内置函数查看: [Python内置函数]([https://docs.python.org/3.9/library/functions.html](https://docs.python.org/3.9/library/functions.html))
```python
# 常见Python内置函数

print()                 # 打印字符串

type()                  # 检查数据类型

str()                   # 将值转换为字符串类型

int()                   # 将值数据类型转换为整型

float()                 # 将值数据类型转换为浮点数类型

input()                 # 等待用户输入

help("keywords")        # 打印所有python保留关键字

help(str)               # 查看函数: str 信息

dir(str)                # 查看函数: str 所有的属性和方法

#  ---------------

min()                   # 显示最小值

max()                   # 显示最大值

sum()                   # 求和 (注意: 需传入列表或其他数据类型)
```
### 变量

#### Pyhton 变量命名规则
- 变量名必须以字母或下划线字符开头
- 变量名不能以数字开头
- 变量名只能包含字母、数字字符和下划线（Az、0-9 和 _）
- 变量名区分大小写，如firstname、Firstname、FirstName 和 FIRSTNAME 是不同的变量

	注意: 
		如果我们想使用保留关键字做变量名可以这样处理: \_if
		**中文名称** 中文变量也是可以的，因为都是字符，但在实际的代码中还是不建议用

#### 变量声明
	当我们将某个数据类型分配给变量时，它被叫做变量的声明
	“=”是赋值运算符。赋值即将数据存储到变量中
```python
# 变量声明
firsr_name = "Mege"

last_name = "Qi"

country = "China"

city = "Shanghai"

age = 200

is_married = True

skills = ["Python", "C", "C++", "Java", "JavaScript"]

person_info = {
    'name':"大奇",
    'country':"China",
    'city':"Shanghai"
}
```

#### 多变量声明
```python
# 多变量声明用逗号分隔，并且值一一对应
name, country, age = 'MegaQi', 'China', 18

# 同时打印多个变量
print(name, country, age)

# 逐一打印
print('Nick Name:', name)
print('Country: ', country)
print('Age: ', age)
```

#### 用户输入 
```python
# 获取用户输入
nick_name = input("请输入您的昵称: ")

# 打印变量值
print(nick_name)
```
### 数据类型
Python中有几种数据类型。可以使用type内置函数识别这些数据类型。

#### 数据类型的识别 
```python

# 声明不同数据类型
nick_name = 'MegaQi'     # str
is_work = True           # bool
age = 20                 # int

# 识别不同数据类型
print(type('Python'))       # str
print(type(nick_name))      # str
print(type(10))             # int
print(type(3.14))           # float
print(type(1 + 1j))         # complex
print(type(True))           # bool
print(type([1, 2, 3, 4]))   # list
print(type({'name':'大奇'})) # dict
print(type((1,2)))            # tuple

print(type(zip([1,2],[3,4]))) # zip（二维矩阵）
```

#### 数据类型转换
```python
# int 转 float
num_int = 10
print('num_int',num_int)         # 10
num_float = float(num_int)
print('num_float:', num_float)   # 10.0

# float 转 int
gravity = 9.81
print(int(gravity))             # 9 取整

# int 转 str
num_int = 10
print(num_int)                  # 10
num_str = str(num_int)
print(num_str)                  # '10'

# str 转 int 或 float
num_str = '10.6'
print('num_int', int(num_str))      # 这里会报错，浮点字符在python3.5+ 中不能直接用int转
print('num_float', float(num_str))  # 10.6

# str 转 list
name = 'MegaQi'
print(name)               # 'MegaQi'
name_to_list = list(name)
print(name_to_list)            # ['M', 'e', 'g', 'a', 'Q', 'i']
```

# day3: 布尔值和运算符

### 布尔值
布尔数据类型表示以下两个值之一：True 或 False
注意: 布尔值的首字母应大写

大多数值都为 `True`
- 如果有某种内容（如Object、Class），则几乎所有值都将评估为 True。
- 除空字符串外，任何字符串均为 True。
- 除 0 外，任何数字均为 True。
- 除空列表外，任何列表、元组、集合和字典均为 True。

```python
# 以下实例都返回: True
bool("Hello")
bool(123456)
bool(["apple", "cherry", "banana"])

# 以下实例都返回: False
bool(False)
bool(None)
bool(0)
bool("")
bool(())
bool([])
bool({})
```

### 运算符

#### 赋值运算符
赋值运算符用于为变量赋值

| 运算符 | 实例      | 等同于        |
| --- | ------- | ---------- |
| =   | x = 5   | x = 5      |
| +=  | x += 3  | x = x + 3  |
| -=  | x -= 3  | x = x - 3  |
| \*= | x \*= 3 | x = x \* 3 |
| /=  | x /= 3  | x = x / 3  |
| %=  | x %= 3  | x = x % 3  |
| //= | x //= 3 | x = x // 3 |
| **= | x **= 3 | x = x ** 3 |
| &=  | x &= 3  | x = x & 3  |
| \|= | x \|= 3 | x = x \| 3 |
| ^=  | x ^= 3  | x = x ^ 3  |
| >>= | x >>= 3 | x = x >> 3 |
| <<= | x <<= 3 | x = x << 3 |
#### 算术运算符
- 加法（+）：a + b
- 减法（-）：a - b
- 乘法（*）：a * b
- 除法（/）：a / b
- 求余（%）：a % b
- 求商（//）： a // b
- 求幂（**）：a ** b

| 运算符 | 名称       | 实例     |
| --- | -------- | ------ |
| +   | 加法       | x + y  |
| -   | 减法       | x - y  |
| \*  | 乘法       | x \* y |
| /   | 除法       | x / y  |
| %   | 取模       | x % y  |
| **  | 幂        | x ** y |
| //  | 地板除(取整除) | x // y |

实例
```python
# Python中的算数运算
# 整数

print('加法Addition: ', 1 + 2)          # 3
print('减法Subtraction: ', 2 - 1)       # 1
print('求幂miMultiplication: ', 2 * 3)  # 6

# 在Python中除法得到结果是浮点类型
print('除法Division: ', 4 / 2)       # 2.0  
print('除法Division: ', 7 / 2)        # 3.5
print('求商: ', 7 // 2)               # 3
print('Division without the remainder: ',7 // 3)   # 2
print('求余Modulus: ', 3 % 2)         # 1
print('幂: ', 2 ** 3) # 8， 可理解为 2 * 2 * 2

# 浮点数
print('PI', 3.14)
print('gravity', 9.81)

# 复数
print('Complex number: ', 1 + 1j)
print('Multiplying complex numbers: ',(1 + 1j) * (1 - 1j))
```

#### 比较运算 : 检查一个值是否大于或小于 等于其他值

| 运算符 | 名称   | 实例     |
| --- | ---- | ------ |
| ==  | 等于   | x == y |
| !=  | 不等于  | x != y |
| >   | 大于   | x > y  |
| <   | 小于   | x < y  |
| >=  | 大于等于 | x >= y |
| <=  | 小于等于 | x <= y |
```python
print(3 > 2)     # True, 因为 3 大于 2
print(3 >= 2)    # True, 因为 3 大于 2
print(3 < 2)     # False,  因为 3 大于 2
print(2 < 3)     # True, 因为 2 小于 3
print(2 <= 3)    # True, 因为 2 小于 3
print(3 == 2)    # False, 因为 3 不等于 2
print(3 != 2)    # True, 因为 3 确实不等于 2
print(len('mango') == len('avocado'))  # False
print(len('mango') != len('avocado'))  # True
print(len('mango') < len('avocado'))   # True
print(len('milk') != len('meat'))      # False
print(len('milk') == len('meat'))      # True
print(len('tomato') == len('potato'))  # True
print(len('python') > len('dragon'))   # False


# 比较两个对象并给出值
print('True == True: ', True == True)    # True
print('True == False: ', True == False)  # False
print('False == False:', False == False) # True
```
除了上面的比较操作符，在Python还使用这些:

- is：如果两个变量是同一个对象，则返回 true（x 是 y）
- is not：如果两个变量不是同一个对象（x 不是 y），则返回 true
- in：如果查询的列表包含某个项（x in y），则返回 True
- not in：如果查询的列表没有某个项（x in y），则返回 True
```python
print('1 is 1', 1 is 1)                   # True 
# 第一条 如果python shell 中运行此条会有个警告 （下面数值比较也类似）
# <stdin>:1: SyntaxWarning: "is" with a literal. Did you mean "=="?
# 忽略即可，也就是值比较的时候建议用==

print('1 is not 2', 1 is not 2)           # True
print('M in MegaQi', 'M' in 'MegaQi') # True
print('B in MegaQi', 'B' in 'MegaQi') # False 
print('coding' in 'coding for all') # True
print('a in an:', 'a' in 'an')      # True
print('4 is 2 ** 2:', 4 is 2 ** 2)   # True
```

#### 逻辑运算符

| 运算符 | 描述                          | 实例                    |
| --- | --------------------------- | --------------------- |
| and | 如果两个语句都为真, 则返回True          | x < 5 and x < 10      |
| or  | 如果其中一个语句为真, 则返回True         | x < 5 or x < 4        |
| not | 反转结果, 如果结果为True , 则返回 False | not(x < 5 and x < 10) |
```python
print(3 > 2 and 4 > 3) # True - because both statements are true
print(3 > 2 and 4 > 3) # True - 因为两个比较结果都是True
print(3 > 2 and 4 < 3) # False - 因为第二比较为False
print(3 < 2 and 4 < 3) # False - 因为两个比较都为False
print('True and True: ', True and True)
print(3 > 2 or 4 > 3)  # True - 因为两个比较结果都是True
print(3 > 2 or 4 < 3)  # True - 因为第一个表述为真
print(3 < 2 or 4 < 3)  # False - 因为两个比较表述都为假
print('True or False:', True or False)
print(not 3 > 2)     # False - 因为 3 > 2 是 true, 然后 True 反向为 False
print(not True)      # False - 反转操作  不为 true 则 false
print(not False)     # True
print(not not True)  # True
print(not not False) # False
```