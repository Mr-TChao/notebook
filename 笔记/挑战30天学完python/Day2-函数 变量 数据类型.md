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

