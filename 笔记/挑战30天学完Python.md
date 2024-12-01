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