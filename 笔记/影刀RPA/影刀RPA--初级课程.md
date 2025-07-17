# 影刀RPA -- 初级课程

## 初识影刀RPA

影刀的五大自动化能力:
	1. 网页自动化
	2. 鼠标键盘自动化
	3. 桌面软件自动化
	4. Excel自动化
	5. 手机自动化
任意电脑的自动化和任意安卓手机的自动化

影刀的核心能力:  连接数据孤岛, 让数据自由流通

### 什么样的工作适合软件机器人
1. 大量 重复 且有逻辑规则的工作
	1. 大量: 这件事要做很多遍
	2. 重复: 每一遍的动作都一样
	3. 有逻辑规则 : 有明确规则可循, 不需要人工决策

### 其他人都在用影刀做什么?
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/客服场景.png)
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/运营场景.png)
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/财务场景.png)
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/更多场景.png)
### 影刀RPA的学习路径
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/学习路径.png)![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/辅助课程.png)
## 基本概念
### 1. 应用的一般构成
一条指令代表了一个动作
很多很多条指令按照一定的逻辑关系编排起来, 就构成了一个应用
### 2. 指令的一般构成
指令三要素 : 在指定对象上对指定元素进行指定操作
	1. 对象 -- 操作的背景
	2. 元素 -- 操作的目标
	3. 操作 -- 操作的类型
### 3. 网页对象
#### 网页对象是什么
1. 给网页起一个名字
2. 名字最好要有意义, 易于识别
#### 如何获取网页对象
1. 使用 \[打开网页\] 指令
2. 手动打开网页  -- \[获取已打开的网页对象\] 指令
	1. 匹配当前选中的网页
	2. 根据标题匹配
	3. 根据网址匹配
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/获取已打开的网页对象.png)
#### 如何使用网页对象
1. 后面在使用这个网页的时候, 直呼其名进行选用
2. 一定不要选错了网页对象
#### 网页对象使用过程中应该注意什么问题
1. 网页内容发生刷新, 网页对象不会发生变化
2. 点击网页元素后, 弹出新的网页, 网页对象会发生变化, 需要用\[获取已打开的网页对象\] 指令, 获取新网页的网页对象.  
### 4. 网页元素 -- 网页元素的捕获与使用
#### 网页元素是什么 
元素就是操作目标
#### 如何获取网页元素
1. 随捕随用 / 先捕后用
	1. 捕获新元素  --> 到达指定位置 --> 出现红框 --> CTRL + 单击
2. 元素的校验
3. 元素的命名 -- 命名有实际意义的名字
#### 如何管理网页元素
1. 同一网页的元素自动保存到同一分组中
2. 双击元素名可以重新编辑元素
3. 删除未使用元素

### 5. 网页元素 -- 相似元素组(可搭配循环使用)
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/捕获相似元素.png)

#### 相似元素的定义
1. 一组在 \[位置\] 或 \[内容\] 上有相似性的元素
2. 捕获 -- 先捕一个, 再捕一个
3. 使用 -- 配合 \[循环\] , 把元素依次拿出来进行处理
4. 本质 -- 最大相似原则
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/最大相似性原则.png)
### 6. 常见的元素操作方式
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/常见元素的操作方式.png)
### 7. 变量
#### 变量的意义
1. 给比较抽象的数据、网页对象、网页元素等起一个名字
2. 方便后续流程中, 直呼其名的进行调用
#### 变量的二要素
1. 变量名 = 变量值
#### 变量的使用
1. 从fx里选择![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/变量的调用.png)
2. 表面上调用的是变量名, 实际上用的是变量名所指向的变量值
#### 注意事项
1. 变量名要有实际意义
2. 不同变量不要起相同的名字, 否则后面的变量值会把前面的变量值覆盖.

### 8.数据的表达 
#### 字符串
1. 本质: 一段文本
2. 表达
	1. 文本模式 
	2. 表达模式(Python语法)
#### 数字
1. 分类
	1. 整数
	2. 小数
2. 表达
	1. 表达式模式(python语法)
	2. 数字与文本的区别: 数字支持四则运算(加减乘除)
#### 列表
1. 本质: 盛数据的容器
2. 表达: 表达式模式(Python语法--list\[\])
3. 性质
	1. 从列表中按位置获取数据![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/列表的快捷使用.png)
	2. 循环列表功能组件![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/循环列表组件.png)
## 第一个机器人
### 1. 第一个机器人
#### 机器人开发准备
1. 梳理清楚机器人的业务流程
2. 把业务流程用文档/流程图的形式表达出来
#### 批量数据抓取
1. 抓取的本质 -- 抓取表格化的数据
2. 抓取形式
	1. 抓取全部
	2. 抓取几列
	3. 抓取多页数据
	4. 抓取动态的多页数据
#### 数据表格的导出
1. 导出到外部的Excel 
2. 以今天的日期命名的Excel文件
### 2. 机器人分段
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/折叠功能.png)
折叠 --给机器人分个段
1. 更易读
2. 更易查
3. 更易改
4. 更舒心
### 3. 自定义对话框
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/%E8%BF%90%E8%90%A5%E7%AC%94%E8%AE%B0/%E5%BD%B1%E5%88%80/%E5%AF%B9%E8%AF%9D%E6%A1%86.png)
自定义对话框: 人机交互的入口 ( 一般需要填写的数据在流程开始, 以便无人值守运行)
1. 输入框
2. 下拉框
3. 日期空间
4. 选择文件
### 4. 打印日志 & 断点
1. 查看变量内容
2. 日语排查流程问题
### 5. 机器人的分享
注意: 先发版 , 发版后才可以分享; 机器人更新后也需要再次发版, 否则分享出去的还是第一版.![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/机器人发版.png)
### 6. 机器人的定时执行 -- 触发器
注: 使用触发器自动运行的应用, 也需要先发版.![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/触发器.png)

## 三大逻辑
### 1. 引言 -- 三大逻辑
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/三大逻辑png.png)
### 2. 为什么要用判断
针对不同的情况, 采取不同的操作![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/条件判断.png)
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/条件判断-分支.png)
### 3. 条件判断的基本用法 -- 单分支 if
if
### 4. 条件判断的基本用法 -- 二分支 if -- elese
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/条件判断-二分支.png)
### 5. 条件判断的基本用法 -- 多分支 if -- *elif --else![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/条件判断--多分支.png)

### 6. 条件的嵌套  --- 判断中还有判断的情况 ( if 多条件)![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/if-多条件.png)
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/两种多条件判断.png)

### 7. 其他类型的判断
![](https://raw.githubusercontent.com/Mr-TChao/obsidian_pic/main/运营笔记/影刀/其他类型的判断.png)
### 8. 条件判断小结
#### 为什么要用条件判断
1. 一件事有很多种可能
2. 通过判断, 针对不同的可能, 采取不同的处理方式
#### 条件判断的执行方式
1. 单分支 if : 如果条件判断结果为真, 我们才执行if里面的事情
2. 二分支: if -- else: 如果条件满足就执行if里面的内容, 如果不满足就执行else 里面的内容
3. 多分支: if -- elif -- else: 一个一个的判断过去, 满足什么条件, 就去执行这个条件里的内容
4. 条件嵌套与多条件判断: 
	1. 判断里有判断: 需要2个或者多个条件的结果才能决定是不是要做一件事情
	2. 能使用多条件判断的地方, 尽量使用多条件判断.
#### 条件判断的不同类型
1. 数理判断: if 条件:  5 是不是大于 4
2. 包含判断: if 包含: 网页时是否包含某个元素
3. 存在判断 : if 存在: 桌面上是否存在某个文件夹
### 9. 为什么要用循环
### 10. 循环的构成
### 11. ForEach列表循环
### 12. 循环相似元素
### 13. For 次数循环
### 14. 循环的嵌套
### 15. 循环的控制
### 16. 循环小结
### 17. 三大逻辑
