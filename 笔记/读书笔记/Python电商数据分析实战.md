[[Pandas常用函数方法]]
# 第一章 Python 数据分析准备
[[Jupyter Lab常用快捷键]]
章总结: 
#数据分析六大阶段: 
**明确分析目标 → 数据获取 → 数据清洗 → 数据分析 → 结论输出 → 追踪验证**

#学习方式: 
**二八法则: 用 20%的时间明确学习目标和常用场景, 用 80%的时间把目标场景相关的核心操作反复练习.** 

#学习宗旨:
有数可用、认识数据、操作数据、高效灵活处理数据 
结合实战案例, 不断巩固和强化知识 .

# 第二章 Pandas 快速入门
## 2.1 Pandas 的量大数据结构

### 2.1.1 初识 Pandas

Pandas 的两种数据结构: Series 和 DataFrame , 
Series == Excel 中的列 
DataFrame == Excel 中的工作表

### 2.1.2 Series 和 DataFrame

#### 1. 表格的三要素
Series 和 DataFrame 的存在是为了更有效率的容纳和处理数据. (实际应用中, 我们遇到的大部分数据是以表格形式存在的, 处理的时候以列的方式来进行.)

	1. 列名 column : 对应列名, 指定操作哪列数据
	2. 索引 index : 代表索引, 告诉我们有多少行数据, 索引默认从零开始. 
	3. 值 value : 指代具体的数值
	这三个要素贯穿Pandas数据分析的始终, 作用是让我们更加灵活的处理和分析数据

#### 2. 创建 DataFrame 和 Series
 **创建 DataFrame 最常见的方式是 : 字典{}+ 列表[]** 

```python
# 导入pandas库
import pandas as pd

# 创建DataFrame
df1 = pd.DataFrame(
    {
        '工资':[15000,7000,12000,23000],
        '绩效分':[95,59,82,100],
        '备注':["优秀","不及格","良好","最佳"]
    },
    # 创建索引(如果不指定index参数, 则会自动从零开始生成索引)
    index = ["阿粥","老六","老王","老龚"]
)
```

![[DataFrame组成.png]]
可以通过改变索引, 列名和值来控制数据, 与表格三要素: 列名, 索引和值是对应的. 

```python
# 查看列的数据类型
s1 = df1["工资"]
print(type(s1))

# 查看列的数据
print(s1)

# 创建新的列
s2 = pd.Series([1,2,3,4,5,6,7],index=["A","B","C","D","E","F","G"])
print(s2)

# 查看创建的列的数据类型
print(type(s2))
```

## 2.2 数据的读取与存储

### 2.2.1 Excel 文件的读取
```python
# 导入模块: os pandas
import pandas as pd
import os

# os.chdir() 是实现系统文件路径的切换方法, r''为转义字符
os.chdir(r'文件位置')

# 读取文件
excel1 = pd.read_excel("文件名称")

# 显示读取的文件(多个表的文件默认打开第一个表)
print(excel1)

# 多表文件打开其他表
excel2 = pa.read_excel("文件名称",sheet_name = "表名称")
```

pandas 读取 excel 表格时, 默认第一行为表头, 第二行开始为数据.
```python
# 读取没有表头的数据, 传入header = None参数, 则自动添加零开始为表头
excel3 = pd.read_excel("文件名称",sheet_name = "表名称", header = None)

# # 读取没有表头的数据, 传入header 参数, 添加自定义表头
excel4 = pd.read_excel("文件名称",sheet_name = "表名称", header = None, names = ["表头1","表头2","---表头n"])

```

注意, 当 header 参数为数字 n 时, 则表示将第 n-1 行作为表头

pd.read_excel ()更多参数方法:
	1. Index_col: 指定索引项
	2. Usecols: 指定读取部分列
	3. Nrows: 指定读取部分行
	4. Prefix: 给表头设置前缀
	5. Dtype: 和字典结合, 读取时为每一列数据设置格式

### 2.2.2 CSV 文件的读取
```python
csv1 = pd.read_csv("文件名称",engine= "python",encoding="文件编码",sep = "分隔符")
print(csv1)
```

注意: 
1. python 默认读取引擎是 C 语言, 所以文件路径包含中文时, 需要设置读取引擎参数 engine="python", 如果文件路径不包含中文则可以省略 engine 参数
2. Pandas 读取文件时默认编码为 utf-8, 文件编码方式为 utf-8 时, encoding 参数可以省略
3. 绝大多 CSV 文件使用 ,  为分隔符, 如果使用的其他分隔符时需要添加: sep = "分隔符" 参数, 如果使用 , 为分隔符则可以省略 sep 参数

### 2.2.3 其他文件类型的读取
```python
# txt文件的读取, txt文件必须指定分隔符
txt1 = pd.read_table("文件名", sep = "分隔符")
print(txt1)

# json 文件的读取
json1 = pd.read_json("文件名")
print(json1)
```

### 2.2.4 储存数据
```python
# 储存为excel数据
data.to_excel("储存文件名称.xlsx")

# 储存为csv数据 
data.to_csv("储存文件名称.csv")
```
注: 默认储存方式会将索引作为一列储存, 如果不希望储存索引需要加入 index = False 参数
```python
data.to_excel("储存文件名称.xlsx",index = False)
```

## 2.3 快速认识数据

### 2.3.1 查看数据
```python
# 导入模块
import pandas as pd

# 导入数据并赋值给变量 df
df = pd.read_excel("文件名称")

# 查看数据前五行
df.head(6)

# 查看数据最后6行数据
df.tail(6)

```

### 2.3.2 查看数据类型
```python
# 查看数据类型
df.info()
```
![[pandas表数据类型查看.png]]
### 2.3.3 统计信息概览---数据关键指标 
```python
# 统计信息概览
df.describe()
```
解析: 
	1. Count  每一列非空值数量
	2. Mean  均值
	4. Std      标准差
	5. Min     最小值
	6. Max    最大值
	7. 25%    25%分位数
	8. 50%    50%分位数
	9. 75%    75%分位数

## 2.4 数据处理初体验
注意: pandas 数据为列向思维, 即每一列为一个整体: Series

### 2.4.1 增
```python
# 新增数据
df["新列名"] = [[列数据1,列数据2,---列数据n]]
```

### 2.4.2 删
```python
# 删除指定的列,但不修改源数据
df.drop("删除的列名称",sxis=1)

# 删除指定的列, 并修改源数据
df.drop("删除的列名称",sxis=1,inplace=True)
```

### 2.4.3 选
```python
# 选取并查看某一列数据
df["显示的列名称"]

# 选取并查看多列数据
df[["列1","列2","---列n"]]
```

### 2.4.4 改 
```python
# 修改其中某一列的数据
df["列名称"] = [[列数据1,列数据2,---列数据n]]
```

## 2.5 常见数据类型及操作

### 2.5.1 字符串
```python
# 删除或替换某列字符串中的指定符号 
df["修改的列"] = df["修改的列"].str.replace("修改前的值","修改后的值,删除则留空")

```

### 2.5.2 数值型
```python 
# 给指定列的每一个数值都加上一个固定值:800
df["修改的列"] = df["修改的列"] + 800

# 多个列计算并赋值给新的列
df["新增的列"] = df["列1"] * df["列2"] + df["列3"]
```

### 2.5.3 时间类型 
```python
# 将str数据类型的日期列修改为 日期类型并赋值给新的列
df["新增的列"] = pd.to_datetime(df["日期列"])
```

# 第三章 玩转索引
