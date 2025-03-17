# Day4 : 字符串
文本就是字符串数据类型，任何数据类型写成文本形式都是字符串。被单引号(`''`),双引号(`""`) 或三个引号括起来的也都是字符串。在Python中有很多不同的方法和内置函数来处理字符串数据类型。其中检查字符串长度方法使用 `len()`

### 创建字符串
```python
# 一个字符串可以是单个字符也是多个
letter = 'P' 
print(letter)               # P
print(len(letter))          # 1

# 字符串应该被单或双引号包裹 “Hello, Python”
greeting = 'Hello, Python!'
print(greeting)             # Hello, Python!
print(len(greeting))        # 14

sentence = "I hope you are enjoying 30 days of Python Challenge"
print(sentence)

# 多行字符串是通过使用三重单引号(''')或双引号(""")创建。
multiline_string = '''I am a teacher and enjoy teaching.
I didn't find anything as rewarding as empowering people.
That is why I created 30 days of python.'''
print(multiline_string)

# 另外一种方式做了同样的事情
multiline_string = """我是技术传播者，喜欢教学和分享.
我发现没有任何事情能比赋予人们知识更有意义.
那就是我为什打造“挑战30天学习完Python“的原因."""
print(multiline_string)
```

### 字符串的连接 +
```python
first_name = 'Mega'
last_name = 'Qi'
space = ' '
full_name = first_name  +  space + last_name
print(full_name) # Meaga Qi

# 使用内置函数len()查看字符串长度
print(len(first_name))  # 4
print(len(last_name))   # 2
print(len(first_name) > len(last_name)) # True
print(len(full_name)) # 7
```

### 转义字符
常见的转义字符:
- \n: 换行
- \t: 制表符 (8 空格)
- \\: 反斜杠
- ': 单引号 (')
- ": 双引号 (")
```python
# 换行符
print('I hope everyone is enjoying the Python Challenge.\nAre you ?') 

# 添加制表符或四个空格
print('Days\tTopics\tExercises')  
print('Day 1\t5\t5')
print('Day 2\t6\t20')
print('Day 3\t5\t23')
print('Day 4\t1\t35')

# 字符串中带反斜杠
print('This is a backslash  symbol (\\)') 

# 字符串种使用双引号
print('In every programming language it starts with \"Hello, World!\"') 

# 输出结果
I hope every one is enjoying the Python Challenge.
Are you ?
Days	Topics	Exercises
Day 1	5	    5
Day 2	6	    20
Day 3	5	    23
Day 4	1	    35
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
```

### 字符串格式化 (str.format)

```python

name = 'MegaQi'
language = 'Python'
formated_string = 'I am {}. I teach {}'.format(name, language)
print(formated_string)
# 输出
I am MegaQi. I teach Python

a = 4
b = 3
print('{} + {} = {}'.format(a, b, a + b))
print('{} - {} = {}'.format(a, b, a - b))
print('{} * {} = {}'.format(a, b, a * b))
print('{} / {} = {:.2f}'.format(a, b, a / b))
print('{} % {} = {}'.format(a, b, a % b))
print('{} // {} = {}'.format(a, b, a // b))
print('{} ** {} = {}'.format(a, b, a ** b))
# 输出
4 + 3 = 7
4 - 3 = 1
4 * 3 = 12
4 / 3 = 1.33
4 % 3 = 1
4 // 3 = 1
4 ** 3 = 64

# 字符和数字
radius = 10
pi = 3.14
area = pi * radius ** 2
formated_string = 'The area of a circle with a radius {} is {:.2f}.'.format(radius, area) # 2 digits after decimal
print(formated_string)
# 输出
The area of a circle with a radius 10 is 314.00.
```
#### 字符串插入/f-string格式化( 推荐使用)
新的字符串格式化是插值。f-string是以字符串以f开头，然后将数据注入到相应的位置。
```python
# 字符串插入/f-string格式化
a = 4
b = 3
print(f'{a} + {b} = {a +b}')       # 7
print(f'{a} - {b} = {a - b}')      # 1
print(f'{a} * {b} = {a * b}')      # 12
print(f'{a} / {b} = {a / b:.2f}')  # 1.33
print(f'{a} % {b} = {a % b}')      # 1
print(f'{a} // {b} = {a // b}')    # 1
print(f'{a} ** {b} = {a ** b}')    # 64
```

### 字符串作为字符序列
Python 字符串是字符序列，并与其他 Python 有序对象序列（列表和元组）共享它们的基本访问方法。从字符串中提取单个字符的最简单方法是将它们解包到相应的变量中。

#### 解包字符
```python
language = 'Python'
a,b,c,d,e,f = language # 将序列字符拆分到变量中
print(a) # P
print(b) # y
print(c) # t
print(d) # h
print(e) # o
print(f) # n
```

#### 索引访问
在程序中计数从零开始。因此字符串的第一个字母的下标为0，字符串的最后一个字母的长度是字符串的长度减1
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/30天学完python/day4-1.png)
```python
language = 'Python'
first_letter = language[0]
print(first_letter) # P
second_letter = language[1]
print(second_letter) # y
last_index = len(language) - 1
last_letter = language[last_index]
print(last_letter) # n

# 从右边开始，我们可以使用负索引。-1是最后一个索引。
language = 'Python'
last_letter = language[-1]
print(last_letter) # n
second_last = language[-2]
print(second_last) # o
```

#### 字符串的切片
在python中，我们可以将字符串切成子字符串。语法格式 `str[beginIndex:endIndex:step]`，并且取值结果为\[begin,end] 半开区间即含头不含尾。步长不设置情况下默认为1。
```python
# 字符串的切片
language = 'Python'
first_three = language[0:3] # 下角标从0开始到3，但不包括3，等同于language[0:3:1]
print(first_three) #Pyt
last_three = language[3:6]
print(last_three) # hon

# 切片时跳过字符串用法
step_str = language[0:5:2] # 表示中间各一个获取
print(step_str) # Pto 

# 其他一些处理方法
last_three = language[-3:] # 从倒数第3位开始到最后
print(last_three)   # hon
last_three = language[3:] # endIndex不设置默认到末尾
print(last_three)   # hon
```

#### 字符串方法 
1.  **str.capitalize() 方法**  --将字符串的第一个字符转换为大写字母 . 
```python
challenge = 'thirty days of python'
print(challenge.capitalize()) # 'Thirty days of python'
```
2. **str. count () 方法** --返回字符串中给定字符出现次数。语法 count(substring, start=.., end=..)。其中start为开始索引，end为结束索引。
```python
challenge = 'thirty days of python'
print(challenge.count('y')) # 3
print(challenge.count('y', 7, 14)) # 1, 只统计索引范围7-14（不含14）内y的个数
print(challenge.count('th')) # 2
```
3. **str.endswith() 方法** --检查字符串是否以指定的结尾结束。
```python
challenge = 'thirty days of python'
print(challenge.endswith('on'))   # True
print(challenge.endswith('tion')) # False
```
4.  **str.expandtabs() 方法** --把字符串中的 tab 符号 \t 转为空格，tab 符号 \t 默认的空格数是 8。在第 0、8、16...等处给出制表符位置，如果当前位置到开始位置或上一个制表符位置的字符数不足 8 的倍数则以空格代替。
```python
challenge = 'thirty\tdays\tof\tpython'
print(challenge.expandtabs())   # 'thirty  days    of      python'
print(challenge.expandtabs(10)) # 'thirty    days      of        python'
```
5. **str.find()方法** --返回子字符串第一次出现的索引，如果没有找到则返回-1。
```python
challenge = 'thirty days of python'
print(challenge.find('y'))   # 5，thirty单词中第一出现的 y
print(challenge.find('th'))  # 0，thirty单词中第一出现的 th
print(challenge.find('ths')) # -1，整个字符串中没有出现连续的 ths 返回-1 表示没有找到
```
6. **str.rfind()方法** --返回子字符串最后一次出现的索引，如果没有找到则返回-1。
```python
challenge = 'thirty days of python'
print(challenge.rfind('y'))  # 16，pyhton单词中最后出现的 y
print(challenge.rfind('th')) # 17，python单词中最后出现的 th
print(challenge.find('ths')) # -1
```
7. **str.index()方法.**  --返回给定值第一个匹配项的索引位置，函数形式index(x[, start[, end]]) ，其中附加参数可指定开始（默认0）和结束（默认-1）位置。如果子字符串没有匹配则抛出了ValueError异常。 
		区别说明：index()函数和find()函数功能类似。区别在于找不到的返回值不同，前者返回-1，后者异常ValueError: substring not found
```python

- `rindex()`: 返回给定值最后一个匹配项的索引位置，同样有扩展参数来制定查找开始和结束位置。函数使用参考上述。
```py
challenge = 'thirty days of python'
sub_string = 'da'
print(challenge.rindex(sub_string))  # 7
print(challenge.rindex(sub_string, 9)) # error
```
8.  **str.isalnum()方法** --检查字符串是否仅为字符数字组合.
```python
challenge = 'ThirtyDaysPython'
print(challenge.isalnum()) # True

challenge = '30DaysPython'
print(challenge.isalnum()) # True

challenge = 'thirty days of python'
print(challenge.isalnum()) # False, 空格不属于alphanumeric（字母数字）的组合

challenge = 'thirty days of python 2019'
print(challenge.isalnum()) # False

challenge = 'thirty@123'
print(challenge.isalnum()) # False
```
9. **str.isalpha()方法** --检查是否所有字符串元素都是字母字符(a-z和a-z). 
```python
challenge = 'thirty days of python'
print(challenge.isalpha()) # False, 空格也不属于字母字符范畴

challenge = 'ThirtyDaysPython'
print(challenge.isalpha()) # True

num = '123'
print(num.isalpha())      # False
```
10. **str.isdecimal()方法** --检查字符串中的所有字符是否都是十进制(0-9). 
```python
challenge = 'thirty days of python'
print(challenge.isdecimal())  # False

challenge = '123'
print(challenge.isdecimal())  # True

challenge = '\u00B2'
print(challenge.isdecimal())   # False 

challenge = '12 3'
print(challenge.isdecimal())  # False 注意有空字符所以不符合数字检查
```
11. **str.isdigit()方法** --检查字符串中的所有字符是否都是数字(0-9和一些用于数字的其他unicode字符). 
```python
challenge = 'Thirty'
print(challenge.isdigit()) # False

challenge = '30'
print(challenge.isdigit())   # True

challenge = '\u00B2'
print(challenge.isdigit())   # True 如果你使用 print('\u00B2') 打印会看到输出是2
```
12. **str.isnumeric() 方法** --检查字符串中的所有字符是否都是数字或与数字相关的（很像isdigit()，但接受更多的符号，比如½)
```python
num = '10'
print(num.isnumeric()) # True

num = '\u00BD' # print('\u00BD') = ½
print(num.isnumeric()) # True

num = '10.5'
print(num.isnumeric()) # False
```
13. **str.isidentifier() 方法** --检查一个有效的标识符，即检查一个字符串是否是一个有效的变量名
```python
challenge = '30DaysOfPython'
print(challenge.isidentifier()) # False, 因为是数字开头不是一个有效的变量名，具体可回顾Day2：变量和内置函数

challenge = 'thirty_days_of_python'
print(challenge.isidentifier()) # Truec
```
14. **str. islower () 方法** --检查字符串中的所有字母字符是否都是小写
```python
challenge = 'thirty days of python'
print(challenge.islower()) # True

challenge = 'Thirty days of python'
print(challenge.islower()) # False

challenge = '30天Python学习挑战'
print(challenge.islower()) # False 中文不是英文字母
```
15. **str. isupper () 方法** --检查字符串中的所有字母字符是否都是大写
```python
challenge = 'thirty days of python'
print(challenge.isupper()) #  False

challenge = 'THIRTY DAYS OF PYTHON'
print(challenge.isupper()) # True
```
16. **str.join () 方法** -- 返回一个连接后的字符串
```python
web_tech = ['HTML', 'CSS', 'JavaScript', 'React']

result1 = ' '.join(web_tech)
print(result1) # 'HTML CSS JavaScript React'

result2 = '# '.join(web_tech)
print(result2) # 'HTML# CSS# JavaScript# React
```
17. **str.strip () 方法** --剔除开头和结尾符合指定字符，并返回新的字符串
```python
challenge = 'thirty days of pythoonnn'
print(challenge.strip('noth')) # 'irty days of py'
```
18. **str.replace () 方法** --字符串替换
```python
challenge = 'thirty days of python'
print(challenge.replace('python', 'coding')) # 'thirty days of coding'
```
19. **str.split () 方法** --字符串拆分, 使用给定的字符串或空格（不指定时候默认）字符
```python
challenge = 'thirty days of python'
print(challenge.split()) # ['thirty', 'days', 'of', 'python']

challenge = 'thirty, days, of, python'
# 注意对比下两个输出的区别
print(challenge.split(', ')) # ['thirty', 'days', 'of', 'python']
print(challenge.split(','))  # ['thirty', ' days', ' of', ' python']
```
20. **str.title () 方法** --字符串中所有单词首字母大写
```python
challenge = 'thirty days of python'
print(challenge.title()) # Thirty Days Of Python
```
21. **str.swapcase () 方法** --将字符串中所有大写字符转小写，反之小写转大写
```python
challenge = 'thirty days of python'
print(challenge.swapcase())   # THIRTY DAYS OF PYTHON

challenge = 'Thirty Days Of Python'
print(challenge.swapcase())  # tHIRTY dAYS oF pYTHON
```
22. **str.startswith () 方法** --检查某字符串是否已某个特殊字符串值开始
```python
challenge = 'thirty days of python'
print(challenge.startswith('thirty')) # True

challenge = '30 days of python'
print(challenge.startswith('thirty')) # False

challenge = '挑战30天学完python'
print(challenge.startswith('挑战')) # True
```