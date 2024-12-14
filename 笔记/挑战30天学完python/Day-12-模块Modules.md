# Day-12 模块Modules
### 什么是模块
模块是在应用程序中一个包含一组代码或一组函数的文件。模块可以是包含单个变量、函数或大型代码库的文件。
### 创建一个模块 Modules
要创建一个module我们在python脚本中写下我们的代码，并将它保存为 `.py` 的文件。
```python
# mymodule.py
def generate_full_name(firstname, lastname):
    space = ' '
    fullname = firstname + space + lastname
    return fullname


def sum_two_nums(num1, num2):
    return num1 + num2


gravity = 9.81
person = {
    "name": "Qi",
    "age": 20,
    "country": "China",
    "city": 'ShangHai'
}
```
### 从模块 Module 中导入函数
在一个文件中兴许包含很多的函数方法，我们可以通过不同的方式进行导入。
```python
# main.py
from mymodule import generate_full_name, sum_two_nums, person, gravity
print(generate_full_name('Mega', 'Qi'))
print(sum_two_nums(1, 9))
mass = 100
weight = mass * gravity
print(weight)
print(person['name'])
```
### 从模块中导入函数并重命名
在模块的导入的同时，我们也可以进行别名设置。
```python
# main.py file
from mymodule import generate_full_name as fullname, sum_two_nums as total, person as p, gravity as g

print(fullname('Mega', 'Qi'))
print(total(1, 9))
mass = 100
weight = mass * g
print(weight)
print(p)
print(p['name'])
```
### 导入内置模块
与其他编程语言一样可以导入内置模块，通过使用关键字 _import_ 导入文件/函数。现在让我们导入一些常用的模块。这些内置模块如：_math_, _datetime_, _os_,_sys_, _random_, _statistics_, _collections_, _json_, _re_
#### os 模块
使用 python 中 `os` 模块可以自动执行许多系统操作。Python中的 OS 模块提供了诸如：创建、更改当前工作目录、删除目录(文件夹)、获取其内容、更改和标识当前目录等函数。
```python
# 导入os模块
import os
# 创建文件夹
os.mkdir('directory_name')
# 切换到当前刚才创建的directory_name文件夹
os.chdir('directory_name')
# 获取当前的工作路径目录
os.getcwd()
# 切换到上级目录
os.chdir('..')
# 删除文件夹
os.rmdir('directory_name')
```
#### sys 模块
内置模块 `sys` 提供了一些python运行时环境操作的部分方法和变量。功能 sys.argv 获取传递给Python脚本命令行参数列表。列表索引 0 始终是文件的名，后边从1开始的是真正的命令行参数。
```python
import sys
# print(sys.argv[0], argv[1],sys.argv[2])  
# 命令行执行将打印: 文件名 参数1 参数2
print('Welcome {}. Enjoy  {} challenge!'.format(sys.argv[1], sys.argv[2]))
```
常用 sys 命令
```python
import sys
# 退出
sys.exit()

# python可以处理或存储为变量的最大值
sys.maxsize
	maxsize 大小取决于系统：
	32位：该值将为2^31-1，即2147483647
	64位：该值将为2^63-1，即9223372036854775807

# 获取系统配置环境变量
sys.path

# 获取当前python版本
sys.version
```
#### statistics 模块
统计模块提供数值数据的数学统计功能。本模块中定义的常用统计函数: _mean_, _median_, _mode_, _stdev_ 等。
```python
from statistics import * # 导入所有 statistics modules
ages = [20, 20, 4, 24, 25, 22, 26, 20, 23, 22, 26]
print(mean(ages))       # 算术平均值 21.09090909090909
print(median(ages))     # 方法返回数值数据的中值 22
print(mode(ages))       # 法计算给定数值或名义数据集的众数 20
print(stdev(ages))      # 计算标准差 6.106628291529549
```
#### math 模块
此模块包含许多数学运算和常量。
```python
import math
print(math.pi)           # 3.141592653589793, 圆周率（Pi）常量
print(math.sqrt(2))      # 1.4142135623730951, 平方根
print(math.pow(2, 3))    # 8.0, 指数函数
print(math.floor(9.81))  # 9, 四舍五入取底
print(math.ceil(9.81))   # 10, 四舍五入取高
print(math.log10(100))   # 2.0, 以10为底的对数
```
现在，我们已经导入了 _math_ 模块，它包含了许多函数能帮助我们进行数学计算。那么如果要想查看模块都有那些函数，我们可以使用 _help(math)_ 或 _dir(math)_ 来显示模块中可用的函数。如果我们只想从模块中导入一个特定的函数，我们按如下方式导入它:
```python
from math import pi
print(pi)
```
导入多个函数
```python
from math import pi, sqrt, pow, floor, ceil, log10
print(pi)
print(sqrt(2))
print(pow(2, 3))
print(floor(9.81))
print(ceil(9.81))
print(log10(100))
```
导入数学模块中的所有函数，我们可以使用 `*`。
```python
from math import *
print(pi)
print(sqrt(2))
print(pow(2, 3))
print(floor(9.81))
print(ceil(9.81))
print(log10(100))
```
导入时，还可以为函数设置别名。
```python
from math import pi as PI
print(PI)
```
#### 字符串模块
字符串模块在很多方面都是非常有用的模块。下面的例子展示了字符串模块的一些用法。
```python
import string

# ascii字母
print(string.ascii_letters) # abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ

# 展示所有数字
print(string.digits)        # 0123456789

# 展示标点标点符号
print(string.punctuation)   # !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
```
#### random 模块
模块 _random_ 它给返回一个0到0.9999之间的随机数。当然它有很多模块，但在本篇中只用到 _random_ 和 _randint_ 。
```python
from random import random, randint
print(random())   # 它返回一个介于0到0.9999之间的值
print(randint(5, 20)) # 它返回一个[5,20]的随机整数 
```