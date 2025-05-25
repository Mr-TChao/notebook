# 笨办法学Python3

for循环只能对一些东西的集合进行循环，while循环可以对任何对象进行循环

任何以False开头的and语句都会直接处理成False，不会继续检查后面的语句。任何包含True的or语句，只要处理到True，就不会继续向下推算，而是直接返回True了。

## 数学运算符

|   名称   | 符号  |
| :----: | :-: |
|   加法   |  +  |
|   减法   |  -  |
|   乘法   | **  |
| 除法(取商) |  /  |
|   取余   |  %  |
|  去余取商  | //  |
|   大于   |  >  |
|   小于   |  <  |
|  大于等于  | >=  |
|  小于等于  | <=  |

## 转义字符

|    转义字符    |                     功能                     |
| :--------: | :----------------------------------------: |
|    \\\     |                  反斜杠  \\                   |
|    \\'     |                   单引号 '                    |
|    \\"     |                   双引号 "                    |
|    \\a     |               ASCII响铃符(BEL)                |
|    \\b     |                ASCII退格符(BS)                |
|    \\f     |                ASCII进纸符(FF)                |
|    \\n     |                ASCII换行符(LF)                |
| \\N{name}  | Unicode数据库中的字符名, 其中 name 是它的名字, 仅Unicode适用 |
|    \\r     |               ASCII 回车符(CR)                |
|    \\t     |              ASCII水平制表符(TAB)               |
|  \\uxxxx   |             值为16位十六进制值 xxxx的字符             |
| \Uxxxxxxxx |            值为32位十六进制xxxxxxxx的字符            |
|    \\v     |               ASCII垂直制表符(VT)               |
|   \\ooo    |                值为八进制值ooo的字符                |
|   \\xhhh   |               值为十六进制值的hh的字符                |

## 不换行结束print语句
```python
print("打印内容", end = '')
```
## 输入语句
```python
input("输入提示内容:")
```

## 查看类方法或类结构(请勿在python命令行中运行)
```python
pydoc 方法/类名称
```


## 导入模块
```python
import 模块名称
```

## argv模块的使用
```python
# 导入模块
from sys import argv
```
## argv和input()有什么区别
不同点在于用户输入的时机。如果参数是在用户执行命令时就要输入，那就用argv，如果是在脚本运行过程中需要用户输入，那就用input()。

## 文件的读写
```python
# 加载文件对象并赋值给变量file
file = open("文件名", '访问模式w/r/a')    # 访问模式为: w 写入, r 读取(只读), a 追加 (为空时默认为r 只读)

# 关闭文件读取
file.close()

# 读取文件内容
file.read()

# 只读取文本文件中的一行
file.readine()

# 清空文件
file.truncate()

# 写入文件
file.write("写入内容")

# 将读写位置移动到文件开头
file.seek(0)
```

## 检测文件/文件夹是否存在
```python
from os.path import exists
```

## 返回字符串长度
```python
len()
```