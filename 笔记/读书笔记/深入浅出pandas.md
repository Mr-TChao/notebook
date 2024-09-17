
# 深入浅出Pandas

# 第一章: pandas概述
### pip安装第三方库
```shell
# pip安装第三方库指定镜像源
pip install 库名称 -i 镜像源地址
```

### 查看pandas版本号
```python
import pandas as pd
pd.__version__
```

## 1.3 pandas的快速入门

#### 1.3.1 pandas的安装导入
```python
# 引入Pandas库并起别名为pd
import pandas as pd
```

### 1.3.3 读取数据集
```python
import pandas as pd

# 将网络上的excel数据读取到变量df中
df = pd.read_excel("文件地址")

# 将当前同一文件及中的excel数据读取到变量df中
df = pd.read_excel("文件名")

# 显示数据
df
```
注: pandas显示数据时会自动增加一列索引(从0开始), 且数据量过大时, 只显示前后五行. 


### 1.3.4 查看数据
```python
# 查看前x 条数据 (为空时默认为五条)
df.head()

# 查看尾部x条数据(为空时默认为5条)
df.tail()

# 随机查看x条数据(为空时默认为1条)
df.sample()
```

### 1.3.5 验证数据
```python
# 查看数据的行数和列数
df.shape

# 查看数据行索引、数据类型和内存信息
df.info()

# 查看数值型列的汇总统计
df.describe()

# 查看各列字段数据类型
df.dtypes

# 显示数据行和列名
df.axes

# 显示列名
df.columns
```

#### df.info()显示的内容
```python
数据类型 
索引情况
行列数
各字段数据类型
内存占用
等
```

#### df.describe()显示的内容
```python
count  字段的总数
mean   平均数
std    标准差
min    最小值
max    最大值
四分位数
```

### 1.3.6 建立索引
```python
# 建立索引将name列作为索引并生效 
df.set_index("name", inplace=True)
```
注意: 
inplace=True 参数会将指定好索引的数据再赋值给df并生效. 
本操作并不会修改原Excel, 而是操作的内存中的df变量 ( 我们在读取数据后, 所有的操作都与原数据文件无关)

### 1.3.7 数据选取 

#### 选择一列
```python
# 查看指定列: 方式一
df["列索引"]

# 查看指定列: 方式二 (需列名符合Python变量要求)
df.列名称   
```

#### 选择多列
```python
# 查看指定多列: 方式一
df[["列索引1","列索引2"]]

# 查看指定多列: 方式二
df.loc[:, ["列索引1","列索引2"]]
```

df.loc[x,y] 是一个非常强大的数据选择函数, 其中x代表行, y代表列, 行和列都支持条件表达式, 也支持类似列表那样的切片. (如果要用自然索引, 需要用df.iloc[])

#### 选择行
```python
# 使用行索引选取
df[df.index == "行索引"]

# 用自然索引选取 (类似于列表的切片)
df[0:3]        #  选取前三行
df[0:10:2]     #  在前十个中美两个抽取一个
df.iloc[:10,:]  # 选取前十个
```

#### 指定行和列
```python
# 指定行 的列区间
df.loc["行索引","列索引1":"列索引2"]  

# 指定行区间和列区间
df.loc["行索引1":"行索引2","列索引1":"列索引2"]

```

#### 条件选择 -- 单一条件 
```python
# 指定列大于x
df[df.列索引 > x]

# 指定列为指定值
df[df.列索引 == "值"]

# 指定行索引
df[df.index == "行索引"]
```

#### 条件选择--组合条件
```python
# and 关系
df[(df["列索引"] > 90) & (df["列索引"] == "值")]

# 多重筛选
df[df["列索引"] == "值"].loc[df.列索引 > 90 ] 
```

### 1.3.8 排序 
```python
# 指定列数据升序排列
df.sort_values(by="列索引")

# 指定列数据降序排列
df.sort_values(by="列索引", ascending=False)

# 列1升序排列, 列2降序排列
df.sort_values(["列索引1","列索引2"], ascending = [True, False])
```

### 1.3.9 分组聚合 ( 数据透视表功能)
```python
# 指定列按团队分组对应列相加
df.groupby("列索引").sum()

# 指定列按团队分组求平均
df.groupby("列索引").mean()

# 不同列不同的计算方法
df.groupby("列索引").agg({
					  "列索引1":sum,       # 总和
					  "列索引2":"count",   # 总数
					  "列索引3":"mean",    # 平均
					  "列索引4":max        # 最大值
})
```

### 1.3.10 数据转换
```python
# 数据按列聚合并行列互换
df.groupby("列索引").sum().T

# 未知效果(请补充)
df.groupby("列索引").sum().stack()
df.groupby("列索引").sum().unstack()
```

### 1.3.11 增加列
```python
# 增加一个固定值的列
df["新增列名称"] = 值

# 增加汇总列
df["新增列名称"] = df.列索引1 + df.列索引2 + df.列索引3 + 列索引4

# 将计算结果赋值给新的列 
df["新增列名称"] = df.loc[:,"列索引1":"列索引2"].apply(lambda x:sum(x),sxis=1)

# 将所有为数字的列相加
df["新增列名称"] = df.sum(sxis=1)

# 增加平均列
df["新增列名称"] = df.total/列数量
```

### 1.3.12 统计分析
```python
# 返回所有列的均值
df.mean()

# 返回所有行的均值
df.mean(1)

# 返回列与列之间的相关系数
df.corr()

# 返回每一列中的非空值的个数
df.count()

# 返回每一列的最大值
df.max()

# 返回每一列的最小值
df.min()

# 返回每一列的中位数
df.median()

# 返回每一列的标准差
df.std()

# 方差
df.var()

# 众数
df.mode()
```

### 1.3.13 绘图
```python
# 指定列的折线分布
df.["列名称"].plot()

# 指定行不同列的数据变化(折线图)
df.loc["行索引","列索引1":"列索引2"].plot()

# 指定行不同列数据的柱状图
df.loc["行索引","列索引1":"列索引2"].plot.bar()

# 指定行不同列数据的横向柱状图
df.loc["行索引","列索引1":"列索引2"].plot.barh()

# 指定列不同分组总和趋势
df.groupby("列索引").sum().T.plot()

# 指定列不同组数量对比(饼状图)
df.groupby("列索引").count().列索引.plot.pie()
```

### 1.3.14 导出
```python
# 导出Excel文件
df.to_excel("文件名")

# 导出csv文件
df.to_csv("文件名")
```

# 第二章 数据结构
