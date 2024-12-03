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

--