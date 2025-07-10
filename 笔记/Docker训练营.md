# Docker训练营
## 基础阶段
查看docker信息
```shell
# 查看版本信息
docker version

# 查看运行时信息
docker info
```

#### 运行第一个docker容器
```shell
docker run hello-world
```
docker run 首先会从本地查找镜像, 如果本地没有, 则从默认Docker镜像仓库中拉取. 
镜像格式一般为
```shell
<repository>/<image>:<tag>

# repository: 拉取地址, 为空则默认为 Docker Hub
# img: 仓库名称/容器名称
# tag: 镜像版本, 为空则默认是latest

# 完整镜像格式示例  拉取地址/仓库名称/容器名称:版本
docker.cnb.cool/looc/git-cnb:latest

# 完整拉取运行示例 ( 只拉取则将 run 改为  pull)
docker run docker.cnb.cool/looc/git-cnb:latest
```
镜像分为: public (公有) 和 private(私有) 两分钟, public的镜像无需登录即可拉取, 对于private的镜像则需要登录后才可以拉取: 
```shell
# 登录private镜像仓库
docker login <repository>
```

#### 实践案例: 运行Alpine Linux 容器(docker常用操作)
Alpine Linux镜像在企业生产环境中被广泛应用, 它是一个极简的Linux发行版, 只包含最基本的命令和工具, 因此镜像非常小, 只有5MB左右, 并且内置包管理系统 apk , 使其成为许多其他镜像的常用起点. 
```shell
# 拉取镜像
docker pull alpine

# 查看本地所有镜像 
docker image ls

# 运行容器(ls -a 为在容器中运行的命令)
docker run alpine ls -a

# 查看当前运行容器(加上 -a  可以看到之前运行的容器)
docker ps -a

# 交互式运行容器(等效于 docker run -it alpine /bin/sh)
docker run -it alpine

#后台运行容器
docker run -it -d alpine

# 连接到正在运行的容器 --attach  (<container_id: 容器运行id)
	注: 因为attach是接管了容器pid=1进程, 因此如果这个进程是守护进程, ,那么当attach退出后, 容器也会退出, 所以一般不建议使用attach命令, 推荐使用 docker exec命令连接容器
docker attach <container_id>

# 链接到正在运行的容器 -- exec
docker exec -it <container_id> /bin/sh

# 查看容器日志 
docker logs <container_id>
```

#### 容器基础
##### 1. 容器与镜像基础
###### 容器创建镜像方法
1. 交互式运行基础容器
2. 容器内环境修改实战
3. docker commit 命令保存镜像
4. 镜像标签与推送仓库
###### 传统方式局限性
1. 版本迭代效率低下
2. 操作步骤易出错风险
3. 缺乏版本控制能力
4. 重复构建资源消耗
##### 2. Dockerfile核心机制
###### 构建原理剖析
1. 声明式镜像定义文件
2. 采用了分层构建机制
3. 版本控制友好特性
4. 可重复构建优势
###### 镜像构建全流程
1. docker build( 构建)命令解析
2. 构建上下文传递机制
3. 层缓存优化原理
4. 镜像命名与储存规则
##### 3. 指令精讲与实战
###### Dockerfile文件核心指令讲解
```shell
# Dockerfile文件核心指令讲解
FROM 指定基础镜像

RUN 执行构建命令

COPY/ADD 文件操作

WORKDIR 设置工作目录
```

###### 运行时控制指令
```shell
# 运行时控制指令
EXPOSE 端口声明

CMD 容器启动命令

环境变量动态设置
```

###### Jupyter镜像实战
1. 工作目录规划原则
2. 依赖安装最佳实践
3. 端口映射配置技巧
4. 服务启动命令封装
```shell
# 指定基础镜像
FROM python:3.10-slim

# 安装系统依赖
RUN apt-get update && \
	apt-get install -y --no-install-recommends \
	curl \
	&& rm -rf /var/lib/apt/lists/*

# 安装Python
RUN pip install  --no-cache-dir \
	jupyterlab==4.4.3 \
	pandas==2.3.0 \
	numpy==1.26.2 \
	matplotlib==3.8.2

# 安装jupyter内核
RUN pip install --no-cache-dir \
	ipykernel==6.29.0 \
	&& python -m ipykernel install --name python3

# 设置工作目录并初始化笔记本
WORKDIR /notebooks
COPY sample-notebook.ipynb .

# 暴露 jupyter端口
EXPOSE 8888

# 启动命令(不完整, 仅做示例)
CMD ["jupyter", "lab", "--ip=0.0.0.0", "--allow-root", "--no-browser", "--Notebookapp.token=''"]
```
##### 4. 多阶段构建技术
###### 传统构建问题
1. 开发工具冗余问题: 造成资源浪费和储存负担
	1. 镜像体积多大影响( 镜像体积过大会延长传输和部署时间, 增加储存成本, 影响系统整体性能和)
	2. 构建风险暴露面: 构建阶段暴露的开发环境可能包含敏感信息或漏洞, 扩大攻击面, 带来潜在安全隐患
	3. 资源利用率底下: 影响构建速度和系统稳定性
###### 多阶段实现原理
1. 阶段间文件传递机制
2. 构建环境与运行环境分离
3. 最小化运行时镜像
4. 二进制文件直接复用
##### 5. 安全与优化策略
###### 镜像精简方法
1. 基础镜像优势: 例如Alpine基础镜像以其轻量级特性成为镜像精简的首选方案, 显著减少镜像体积并提升构建效率
2. 依赖项最小化原则: 要求仅安装必要的软件包, 避免冗余组件, 以降低安全风险和资源占用
3. 层合并优化技巧: 通过合并 RUN指令减少镜像层数, 从而提升储存效率和传输速度.
4. 无用文件清理策略: 包括删除缓存文件和临时数据, 确保最终镜像不包含任何冗余内容.
##### 核心知识复盘
1. Dockerfile的核心价值: Dockerfile作为容器化应用的基础构建文件, 其核心价值在于标准化应用环境配置, 实现一次编写处处运行的跨平台部署能力.
2. 多阶段构建优势: 多阶段构建技术通过分阶段编译和打包, 有效减少最终镜像体积, 同时提升构建效率和安全性.
3. 安全优化关键点: 聚焦于最小化基础镜像, 严格权限控制和漏洞扫描集成, 从源头降低容器运行时的潜在风险. 
4. 镜像管理最佳实践: 包括分层缓存策略, 版本标签规范和定期清理机制, 确保镜像仓库的高效运转与资源合理利用
## 专业阶段
## 项目一
## 项目二
## 项目三
