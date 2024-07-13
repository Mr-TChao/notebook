导入 pandas 库并重命名为 pd
```python
import pandas as pd
```

创建 DataFrame(表) 并赋值给变量 df1
```python
df1 = pd.DataFrame()
```

创建 Series (列) 并赋值给 s1
```python
s1 = pd.Series()
```

读取excel 文件
```python
# 打开excel文件并赋值给excel1
excel1 = pd.read_excel("文件名称")

# 打开excel文件中名称为 表名称 的表, 并赋值给excel2
excel2 = pd.read_excel("文件名称",sheet_neme = "表名称")

# 打开excel文件, 并添加数字表头,并赋值给excel3
excel3 = pd.read_excel("文件名称",header = None)

# 打开excel文件, 并添加自定义表头, 并赋值给excel4
excel4 = pd.read_excel("文件名称",header = None, names = ["名称1","名称2","--名称n"])

```

读取 CSV 文件
```python
#打开csv文件并赋值给变量csv1
csv1 = pd.read_csv("文件名称")

# 如果文件路径带中文名称时, 需要设置读取引擎参数
csv1 = pd.read_csv("文件名称",engine = 'python')

# 文件编码为非utf-8时
csv1 = pd.read_csv("文件名称",encoding = "文件编码")

# 文件分隔符为非 , 时
csv1 = pd.read_csv("文件名称",sep = "分隔符")
```

读取其他文件类型
```python
# 读取txt文件 (注意: 读取txt文件必须指定分隔符 sep 参数)
txt1 = pd.read_table("文件名称",sep="分隔符")

# 读取json文件
json1 = pd.read_json("文件名称")
```

储存数据
```python
# 将变量 data 储存为excel数据
data.to_excel("文件名称.xlsx")

# 将变量 data 储存为csv数据
data.to_csv("文件名称.csv")

# 储存文件但不储存索引
data.to_excel("文体名称.xlsx",index=False)
```

数据的查看
```python 
df = pd.read_excel("文件名称")

#查看数据前x列
df.head(x)

# 查看数据最后y列
df.tail(y)

# 查看数据类型
df.info()

# 查看数据统计信息概览
df.describe()
```

常用数据处理--增删查改
```python
# 增加一列数据
df["新列名"] = [[列数据1,列数据2,---列数据n]]

# 删除指定的列,但不修改源数据
df.drop("删除的列名称",sxis=1)

# 删除指定的列, 并修改源数据
df.drop("删除的列名称",sxis=1,inplace=True)

# 选取并查看某一列数据
df["显示的列名称"]

# 选取并查看多列数据
df[["列1","列2","---列n"]]

# 修改其中某一列的数据
df["列名称"] = [[列数据1,列数据2,---列数据n]]
```

常用数据类型及操作
```python 
# 删除或替换某列字符串中的指定符号 
df["修改的列"] = df["修改的列"].str.replace("修改前的值","修改后的值,删除则留空")

# 给指定列的每一个数值都加上一个固定值:800
df["修改的列"] = df["修改的列"] + 800

# 多个列计算并赋值给新的列
df["新增的列"] = df["列1"] * df["列2"] + df["列3"]

# 修改某列数据并修改数据类型为浮点数: float
df["列名称"] = df["列名称"].str.replace("修改内容","").astype(float)

# 将str数据类型的日期列修改为 日期类型并赋值给新的列
df["新增的列"] = pd.to_datetime(df["日期列"])
```