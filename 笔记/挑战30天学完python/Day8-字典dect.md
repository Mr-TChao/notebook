# Day8-字典 dict{}
字典是有序、可修改可变、成对(key:value)的数据类型集合。
### 创建字典
创建一个dict类型，通过大括号`{}`或 内置函数方法 `dict()` 实现。
字典中的值可以是任何数据类型，如：字符串、布尔值、列表、元组、集合或字典。
```python
# 语法形式：空值
empty_dict = {}

# 语法形式：带初始值（键值对）
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
```
### 字典的访问
通过引用key的的方式获取dict键值对的值。形式为`字典变量名[key]`
```python
# 语法
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
print(dct['key1']) # value1
print(dct['key4']) # value4
```
如果访问key不存在则会引发错误。为了避免这种错误，首先必须检查键是否存在，或者可以使用`get`方法。如果键不存在，get方法会返回None，表示是一个NoneType对象数据类型。
```python
# 将上边的例子改成用get获取值
person = {
    #...略...
}
print(person.get('name')) 
print(person.get('country')) 
print(person.get('skills'))
print(person.get('city'))   # None
```

### 字典的增改
#### 增加键值对
通过引用赋值，可以向已存在的字典中增加新的key-value项。
```python
# 语法
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
dct['key5'] = 'value5'
```
#### 向值为列表的键值对中添加元素
```python
# 语法
dct = {'key1':['value1'], 'key2':'value2', 'key3':'value3', 'key4':'value4'}
dct['key1'].append['加入的元素']
```
#### 修改dict项值
通过引用重新赋值一个项key对应值。
```python
# 语法
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
dct['key1'] = 'value-one'
```
### 检查\复制\转换
#### 字典检查
要检查一个字典对是否存在，通过操作符`in`判断key是否在dict中包含。
```python
# 语法
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
print('key2' in dct) # True
print('key5' in dct) # False

# 例子
person = {
    # ...同上...
}
print('city' in person)  # True
print('school' in person) # Flase
```
#### 字典的拷贝
使用`copy()`方法复制字典。使用复制可以避免原字典的项在操作中变动。
```python
# 语法
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
dct_copy = dct.copy() # {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}

# 例子
person = {
    # ...同上...
}
copy_person = person.copy()
copy_person['city'] = '深圳'
print(person)
print(copy_person)
```
#### 字典转列表
方法`items()`将dictionary转换为元组列表。
```python
# 语法
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
print(dct.items()) # dict_items([('key1', 'value1'), ('key2', 'value2'), ('key3', 'value3'), ('key4', 'value4')])
```
### 移删清空
#### 字典项的移除
移除字典中的项，可以通过以下三个方法：
- pop(key) ：移除具有指定键名的项，并返回移除项值
- popitem()：删除最后一项，并返回项值
- del：移除项通过关键名字
```python
# 语法
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
dct.pop('key1') # 移除key1项
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
dct.popitem() # 移除最后一项
del dct['key2'] # 移除第二项
```
#### 清空字典项
如果不需要字典中的项，可以使用`clear()`方法清除它们。
```python
# 语法
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
print(dct.clear()) # None

# 实际例子
person = {
    # ...同上...
}
person.clear()
print(person) # {}
```
#### 删除整个字典
如果我们不使用字典，我们可以完全删除它。
```python
# 语法
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
del dct

# 实际例子
person = {
    # ...同上...
}
del person
print(person) # NameError: name 'person' is not defined
```
### 获取键或值列表
方法`keys()`可以获取字典中的所有键list。
```python
# 语法
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
keys = dct.keys()
print(keys)     # dict_keys(['key1', 'key2', 'key3', 'key4'])
```
方法`values()`可以获取字典中的所有值list。
```python
# 语法
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
values = dct.values()
print(values)     # dict_values(['value1', 'value2', 'value3', 'value4'])
```