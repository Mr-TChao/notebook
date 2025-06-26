# **深入浅出Pandas:利用Python进行数据处理与分析**

## Python环境中的基础操作(Anaconda环境下)
```python
# 查看所有虚拟环境及当前环境
conda info -e

# 创建新环境, 并指定环境名称和Python版本
conda create -n py38data python==3.8

# 删除环境
conda remove -n py38data --all

# 进入、激活指定环境
conda activate py38data

# 退出环境
conda deactivate
```

## pip的基础操作
```python
# 查看当前环境中安装的库 
pip list

# 安装新的库(安装指定源可添加: -i 库地址)
pip install 库名称

# 同时安装多个库
pip install 库名称1 库名称2 库名称3

# 将指定库升级到最近版本
pip install 库名称 -u

# 卸载指定库
pip uninstall 库名称
```