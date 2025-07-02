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
## 专业阶段
## 项目一
## 项目二
## 项目三
