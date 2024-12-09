# 条件语句 if -elif

默认情况下，Python脚本中的语句从上到下依次执行。如果有逻辑处理需要，可以通过以下两种方式改变执行的顺序：
- 条件执行：如果某个表达式为真，则执行这个语句块；
- 重复执行：只要某个表式一直为真，则会重复执行一个语句或块。

### 如果 if
在python和其他程序语言中，关键词 `if`用于检查条件是否真，并依此结果决定是否执行代码块。记住冒号后换行代码要缩进。
```python
# 语法形式
if condition:
    this part of code runs for truthy conditions
```
### 如果if --否则else
如果 `if` 条件是 `true` 那么第一个代码块将被执行，否则 else 条件将被运行。
```python
# 语法形式
if condition:
    this part of code runs for truthy conditions
else:
     this part of code runs for false conditions
```
### if --elif -- else
一些结果我们不能通过一两个条件得出，而是通过检查多个条件。编程和生活一样，也是充满条件的。当我们有多个条件时，我们使用 `elif`。
```python
# 语法形式
if condition:
    code
elif condition:
    code
else:
    code
```
### 短条件语句
通常条件和语句块比较简单的时候，也可以使用短语句形式（类比其他语言中的三目运算符）。
```python
# 语法形式
code1 if condition else code2

# 实际举例
a = 3
print('A is positive') if a > 0 else print('A is negative') 
# 上边短条件语句满足第一个条件，“A是正的”将被打印
```
### 嵌套条件语句
条件语句是可以多层嵌套的
```python
# 语法形式
if condition:
    code
    if condition:
    code

# 具体举例
a = 0
if a > 0:
    if a % 2 == 0:
        print('A是一个正整数且是偶数')
    else:
        print('A是一个正整数)
elif a == 0:
    print('A是零')
else:
    print('A是负数')
```

注: 可以通过使用逻辑运算符，来避免过多的写嵌套条件代码。
### if 条件 and 逻辑运算符
```python
# 语法形式
if condition and condition:
    code
```
### if 条件 or 逻辑运算符
```python
# 语法形式
if condition or condition:
    code
```