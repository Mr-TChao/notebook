# Day10-循环 while

Python编程语言提供以下两种循环：
- while 循环
- for 循环

### 循环 while
使用保留字 `while` 进行一种循环。在符合给定的条件之内，它会一直重复执行语句块。当条件为`false`时，代码将跳出循环。
```python
# 语法形式
while condition:
    code goes here
```
如果想条件不满足的时候执行其他代码块，我们可以使用 `else`。
```python
# 语法
while condition:
    code goes here
else:
    code goes here
```
#### 跳出循环 while break
想要跳出或停止循环时，我们使用`break`。
```python
# 语法
while condition:
    code goes here
    if another_condition:
        break
```
#### 结束当前循环并进入下一循环 while continue
通过`continue`语句，我们可以跳过当前迭代，并继续下一个迭代。
```python
# 语法
while condition:
    code goes here
    if another_condition:
        continue
```
### for循环
另一种循环方式是使用关键词 `for` 。类似其他语言的for循环，但又有一些差异点。Python中迭代序列可以是 list、tuple、dict、set 或 str。
#### list 列表 for 迭代
```python
numbers = [0, 1, 2, 3, 4, 5]
for number in numbers:  # number是引用列表项的临时名称，仅在此循环内有效
    print(number)       # 数字将从0到5逐行打印
```
#### str字符 for 迭代
```python
# 拆分python字符串
language = 'Python'
for letter in language:
    print(letter)

# 通过下脚标访问打印
for i in range(len(language)):
    print(language[i])

# 以上两个输出均为
P
y
t
h
o
n
```
#### tuple 元组 for 迭代
```python
numbers = (0, 1, 2, 3, 4, 5)
for number in numbers:
    print(number)

# 依次换行打印 0-5
```
#### dict 字典 for 迭代
1. 默认循环字典时候会迭代字典的key
```python
person = {
    'name':'MegaQi',
    'age':180,
    'country':'China',
    'is_marred':True,
    'skills':['Java', 'React', 'Node', 'Mysql', 'Python']
}

for key in person:
    print(key)
```
2. 可以同时循环取得key和value
```python
person = {
    'name':'MegaQi',
    'skills':['Java', 'React', 'Node', 'Mysql', 'Python'],
    'address':{
        'city':'上海',
        'code':'021'
    }
}

for key, value in person.items():
    print(key, value)
```
#### set集合 for 迭代 
```python
it_companies = {'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'}
for company in it_companies:
    print(company)
```
#### for break
同while break相同，如果想停止迭代使用关键词 `break`。
```python
# 语法形式
for iterator in sequence:
    code goes here
    if condition:
        break
```
#### for continue
使用`continue`忽略本迭代后边操作。
```python
# 语法
for iterator in sequence:
    code goes here
    if condition:
        continue
```
### 范围函数 range()
函数 `range()` 按给参数值返回一个数字列表。函数 `range(start, end, step)` 有三个参数：开始、结束和增数。默认情况下，它从0开始，增量为1。范围序列至少需要一个参数(end)。它将创建一个范围序列。
```python
lst = list(range(11)) 
print(lst) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
st = set(range(1, 11))    # 给了两个参数表示开始到结束，默认增长值1
print(st) # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

lst = list(range(0,11,2))
print(lst) # [0, 2, 4, 6, 8, 10]
st = set(range(0,11,2))
print(st) #  {0, 2, 4, 6, 8, 10}
```
注意range第一个参数start是包含本身，而第二个参数end是不包含本身。
直接应用在for循环上
```python
# 使用形式
for iterator in range(start, end, step):
```
### 嵌套循环
使用多层循环。语法形式如下：
```python
# 语法形式
for x in y:
    for t in x:
        print(t)

# 实例 
person = {
    'name': 'MegaQi',
    'country': 'China',
    'is_marred': True,
    'skills': ['JavaScript', 'React', 'Node', 'MongoDB', 'Python'],
    'address': {
        'city': 'ShangHai',
        'code': '021'
    }
}
for key in person:
    if key == 'skills':
        for skill in person['skills']:
            print(skill)
```
以上字典中技能是个列表，那增加一个条件判断，当关键词等于skills时，增加一个循环打印技能列表。
这里大家可以扩展两点思考：
- 下如果再增加一个判断循环打印地址内对应的key和value又如何操作呢？
- 我们能否for 和 while混用呢？如果可以将如何改写。

### for else
想在循环结束时执行逻辑外代码则使用else。
```python
# 语法形式
for iterator in range(start, end, step):
    do something
else:
    print('The loop ended')

# 实例
for number in range(11):
    print(number)   # 打印 0 到 10
else:
    print('迭代停止于：', number)
```
### 占位符 pass
在python中，语法冒号后必须要给定执行语句。但有时候我们不希望做任何事情。为了避免语法的错误，使用`pass`关键词做占位符。
```python
# 输出了寂寞
for number in range(6):
    pass

# 跳过4
for number in range(6):
    if number == 4:
        pass
    else:
        print(number)
```
