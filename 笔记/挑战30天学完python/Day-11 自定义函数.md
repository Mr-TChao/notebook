# Day- 11  自定义函数
### 函数
#### 定义函数
函数是为了执行特定任务而设计可重用代码块或编程语句。在Python要定义或声明一个函数，使用了 def 关键字。下面是定义函数的语法。只有在调用函数时才执行函数块内代码。
#### 函数的声明和调用
当我们创建一个函数时，我们将其称为声明函数。当我们开始使用它时，我们称之为调用（calling或invoking）函数。它的声明可以带形参，也可以不带形参。
```python
# 语法参考
# 声明一个函数
def function_name():
    codes

# 使用声明的函数
function_name()
```
#### 无参函数
当函数声明的时候可以不带任何参数。
```python
# 实际例子
def generate_full_name ():
    first_name = 'Mega'
    last_name = 'Qi'
    space = ' '
    full_name = first_name + space + last_name
    print(full_name)
generate_full_name () # 函数调用

def add_two_numbers ():
    num_one = 2
    num_two = 3
    total = num_one + num_two
    print(total)
add_two_numbers()
```
#### 无参函数返回值
函数是可以有返回值的，如果函数没有返回语句，则函数的值为None。让我们使用return重写上面的函数。从现在开始，当我们调用函数并打印它时，我们从函数中获得一个返回值。
```python
def generate_full_name ():
    first_name = 'Mega'
    last_name = 'Qi'
    space = ' '
    full_name = first_name + space + last_name
    return full_name
print(generate_full_name())

def add_two_numbers ():
    num_one = 2
    num_two = 3
    total = num_one + num_two
    return total
print(add_two_numbers())
```
#### 带参函数
在函数中，我们可以将不同的数据类型(数字、字符串、布尔值、列表、元组、字典或集合)作为参数传递
- 单形参：如果函数接受一个参数，则调用函数时应附带一个实参
```python
# 语法形式参考
# 声明带一个参的函数
def function_name(parameter):
    codes

# 调用带参函数并给定参值
print(function_name(argument))

# 实例 
def greetings (name):
    message = name + ', welcome to Python for Everyone!'
    return message

print(greetings('MegaQi')) # MegaQi, welcome to Python for Everyone!

def add_ten(num):
    ten = 10
    return num + ten
print(add_ten(90)) # 100

def square_number(x):
    return x * x
print(square_number(2)) # 4

def area_of_circle (r):
    PI = 3.14
    area = PI * r ** 2
    return area
print(area_of_circle(10)) # 314.0

def sum_of_numbers(n):
    total = 0
    for i in range(n+1):
        total+=i
    return total
print(sum_of_numbers(10)) # 55
print(sum_of_numbers(100)) # 5050
```
- 两个参数：一个函数可能无参或一个参数，也可能有多个参数。因此函数也可以有两个或多个形参。
```python
# 语法形式：声明带两个参数的函数
def function_name(para1, para2):
    codes

# 调用函数并传两个参数
print(function_name(arg1, arg2))

# 实例
def generate_full_name (first_name, last_name):
    space = ' '
    full_name = first_name + space + last_name
    return full_name
print('Full Name: ', generate_full_name('Mega','Qi'))

def sum_two_numbers (num_one, num_two):
    sum = num_one + num_two
    return sum
print('Sum of two numbers: ', sum_two_numbers(1, 9))

def calculate_age (current_year, birth_year):
    age = current_year - birth_year
    return age;

print('Age: ', calculate_age(2022, 1987))

def weight_of_object (mass, gravity):
    weight = str(mass * gravity)+ ' N' # 将数值先转换成字符后再拼接
    return weight
print('Weight of an object in Newtons: ', weight_of_object(100, 9.81))

```
#### 传递带键和值的参数
上方只传值的方式必须要严格遵守参数位置顺序。如果想不受限制可以传递带有key和value的参数。
```python
# 使用语法
def function_name(para1, para2):
    codes

# 调用方法通过指定key=value
print(function_name(para1 = 'John', para2 = 'Doe'))
print(function_name(para2 = 'Doe', para1 = 'John'))

# 实例
def print_fullname(firstname, lastname):
    space = ' '
    full_name = firstname  + space + lastname
    return full_name
print(print_fullname(firstname = 'Mega', lastname = 'Qi'))

def add_two_numbers (num1, num2):
    total = num1 + num2
    return total
print(add_two_numbers(num2 = 3, num1 = 2)) # Order does not matter
```
#### 有参函数返回值
同无参数带返回值一样，有参函数也可以使用return返回函数值。以下举几个不同类型的返回例子。
- 返回一个字符串：
```python
def print_name(lastname):
    return lastname
print(print_name('Qi'))

def print_full_name(firstname, lastname):
    space = ' '
    full_name = firstname  + space + lastname
    return full_name
print(print_full_name(firstname='Meage', lastname='Qi'))
```
- 返回一个数字
```python
def add_two_numbers (num1, num2):
    total = num1 + num2
    return total
print(add_two_numbers(2, 3))

def calculate_age (current_year, birth_year):
    age = current_year - birth_year
    return age
print('Age: ', calculate_age(2022, 1987))
```
- 返回一个布尔值：
```python
def is_even (n):
    if n % 2 == 0:
        print('even')
        return True    # Return停止函数的进一步执行，类似于break
    return False
print(is_even(10)) # True
print(is_even(7)) # False
```
- 返回一个列表
有时，在调用函数时，我们将默认值传递给参数。如果在调用函数时不传递实参，则使用它们的默认值。
```python
# 语法形式：参数给定默认值
def function_name(param = value):
    codes

# 函数方法调用
function_name()
function_name(arg)

# 实例
def greetings (name = 'Peter'):
    message = name + ', welcome to Python for Everyone!'
    return message
print(greetings())
print(greetings('Qi'))

def generate_full_name (first_name = 'Mega', last_name = 'Qi'):
    space = ' '
    full_name = first_name + space + last_name
    return full_name

print(generate_full_name())
print(generate_full_name('David','Smith'))

def calculate_age (birth_year,current_year = 2021):
    age = current_year - birth_year
    return age;
print('Age: ', calculate_age(1821))

def weight_of_object (mass, gravity = 9.81):
    weight = str(mass * gravity)+ ' N'
    return weight
print('物体的重量（单位牛顿）: ', weight_of_object(100))
print('物体的重量（单位牛顿）: ', weight_of_object(100, 1.62))
```
#### 任意参数函数
如果不知道传递给函数的实参数量，可以通过在形参名称前添加`*`来创建一个函数，该函数可以接受任意数量的实参。
```python
# 语法形式 * 不确定参数
def function_name(*args):
    codes

# 调用方法传不定参数
function_name(param1, param2, param3,..)

# 实例
def sum_all_nums(*nums):
    total = 0
    for num in nums:
        total += num     # 此计算方法等同于 total = total + num 
    return total
print(sum_all_nums(2, 3, 5)) # 10
```
#### 函数参数混合使用
- 实参和不定参数
首参给定team，剩余其他以list形式给不定*args。但注意实参要在前面。否则会报 TypeError 错误。
```python
def generate_groups (team, *args):
    print(team)
    for i in args:
        print(i)

# 
print(generate_groups('Team-1','Asabeneh','Brook','David','Eyob'))
```
- 函数作为另一个函数的参数
```python
# 可以将函数作为参数传递
def square_number (n):
    return n ** n
def do_something(f, x):
    return f(x)
print(do_something(square_number, 3)) # 27
```