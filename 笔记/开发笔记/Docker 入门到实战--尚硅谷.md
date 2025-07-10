# Docker 入门到实战
## 基础
### 1. Docker架构与容器化
```shell
# docker基础命令
# 下载镜像
docker pull dockername

# 运行镜像
docker run dockername

# 构建镜像
docker build dockername

# 推送镜像
docker push dockername
```
容器的特点: 
容器类似轻量级VM
容器共享操作系统内核
容器拥有自己的文件系统、CPU、内存、进程空间等
容器间相互隔离

容器的优势:  轻量  快速  隔离  跨平台  高密度等
## 命令
### 下载镜像
```shell
# 检索镜像
docker search imagesname

# 下载镜像
docker pull inamgesname

# 查看本地镜像列表
docker images

# 删除本地指定镜像
docker rmi imagesname / imagesnameID 
```
### 容器的基本操作
```shell
# 运行指定容器
docker run imagesname:tage

# 查看正在运行的容器
docker ps

# 查看所有运行中/已终止的容器
docker ps -a

# 停止指定容器
docker stop containerID

# 启动容器
docker start containerID

# 重启容器 
docker start containerID

# 查看容器运行状态(内存/CPU/硬盘等)
docker stats containerID

# 查看容器日志 
docker logs containerID

# 进入容器
docker exec containerID

# 删除容器(已停止)
docker rm containerID

# 强制删除运行中容器
docker rm -f containerID
```
### docker run 的进阶操作
```shell
# docker run 命令的使用(后台运行及指定容器名称)
docker run -d --name name imagesname:last
	-d : 后台启动
	--name name : 指定容器名称为name

# docker run 命令的使用(端口映射)
docker run -p 宿主机端口:容器端口 imagesname:last
	-p 宿主机端口:容器端口 : 端口映射

# docker run 命令的使用(后台运行 指定容器名称 指定端口映射)
docker run -d --name name -p 宿主机端口:容器端口 imagesname:last

```

### docker exec 的进阶操作(进入容器内操作)
```shell
# 进入运行中容器终端(可以使用容器名或者容器id连接)
docker exec -it containerID /bin/bash
	-it : 交互模式连接
```

### 保存/分享镜像
```shell
# 提交(可以使用容器id 或者容器名称)
docker commit containerID 镜像名称:tage

# 保存为镜像压缩包
docker save 镜像名称:tage

# 加载(别人分享的镜像压缩包文件)
docker load zipname

# 分享社区(登录社区)
docker login 

# 命名镜像
docker tag

# 推送镜像到社区
docker push imagesname

```
## 储存
### 目录挂载(宿主机映射到容器)
 ```shell
 # 宿主机文件夹挂载到容器文件夹
 docker run -d -p 80:80 -v 宿主机文件及:容器文件夹 imangesname:tar
	 -d: 后台运行
	 -p 80:80 :宿主机80端口映射到容器80端口
	 -v 宿主机文件夹:容器文件夹 : 宿主机文件夹挂载到容器内文件夹
```

### 卷映射(容器映射到宿主机)
```shell
docker run -d -p 80:80 -v 卷名:容器文件夹 --name name imagesname:tar
	-d : 后台运行
	-p 80:80: 端口映射
	-v 卷名:容器文件夹: 卷映射 (映射文件统一在宿主机: /var/lib/docker/volumes/卷名)
	--name name : 容器命名


# 列出所有的卷
docker volume ls

# 创建一个卷
docker volume create 卷名

# 查看卷详情
docker volume inspect 卷名
```
## 网络
```shell
# 查看docker容器本机网络
docker inspect dockername
```
docker为每个容器分配唯一ip,  在同一宿主机内, 使用 容器ip + 容器内端口 就可以相互访问

```shell
# 创建docker自定义网络
docker network create 网络名称

# 查看docker网络
docker network ls

# 使用docker自定义网络 
docker run -d -p 80:80 --name name --network 网络名称 --restart always imagesname
	-d : 后台运行
	-p 80:80 : 宿主机端口80 映射到 容器端口 80
	--neme name : 容器命名为 name
	--network 网络名称: 将容器加入自定义网络
	--restart always : 设置容器宿主机开机自启

# 同一自定义网络下容器的相互访问.
容器名:端口号

# 删除自定义网络
docker network rm 网络名称
```

### Redis主从同步集群(后期查看)
[15. 网络 - Redis主从集群_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Zn4y1X7AZ?spm_id_from=333.788.videopod.episodes&vd_source=b10d59e02be878fb0b51e8318ef686e5&p=15)

### 最佳实践(容器启动命令的构成)
```shell
docker run -d \
-p 端口映射 \
-v 文件映射/卷挂载 \
-e 环境变量 \
--network 自定义网络 \
--name 自定义容器名称 \
--restart always 设置开机自启 \
imagesname:tar
```
## Docker Compose(批量管理容器)
```shell
# 批量上线容器(以后台运行的方式, 第一次)
docker compose up -d

# 批量下线容器
docker compose down

# 批量启动compose.yaml 内应用( 使用 docker compose up -d 命令已经启动过)
docker compose start 容器1 容器2 容器3...

# 批量停止应用
docker compose stop 容器1 容器2 ...

# 对指定容器扩容( 将容器x 启动三份)
docker compose scale 容器x=3

```
### 编写compose.yaml 文件批量启动容器
yaml文件的编写要素: 
	顶级元素
		name   容器名称
		services  服务
		networks 网络
		volumes  卷
		configs  配置
		secrets  密钥
```shell
# 应用名称(此处以启动WordPress+mysql容器为例)
name:myblog

# 服务
services:
	mysql:                        # 服务名称
		container_name:mysql      # 容器名称
		image: mysql:8.0          # 镜像名称
		ports:                    # 网络端口
			- "3306:3306"
		environment:              # 环境变量
			- MYSQL_ROOT_PASSWORD=123456
		volumes:                  # 卷映射
			- mysql-data:/var/lib/mysql
		restart:always            # 开机自启
		networks:                 # 指定容器网络
			- blog
		depends_on:               # 镜像依赖容器
			- 依赖容器名

	镜像2:


# 如果存在容器卷映射, 则需要声明
volumes:
	mysql-data:

# 如果容器存在单独网络, 则需要声明
networks:
	blog:
```
### compose.yaml文件的使用
```shell
# 以后台方式启动compose.yaml文件内容器
docker compose -f compose.yaml up -d 
	-f compose.yaml : 指定yaml文件

# 批量停止compose.yanl 文件内容器
docker compose -f compose.yaml down

# 增量更新compose.yaml内的容器
修改compose.yaml文件内的内容, 重启启动即可
```
## dockerfile(掌握构建自定义镜像)

| 常见指令       | 作用        |
| ---------- | --------- |
| FROM       | 指定镜像基础环境  |
| RUN        | 运行自定义命令   |
| CMD        | 容器启动命令或参数 |
| LABEL      | 自定义标签     |
| EXPOSE     | 指定暴露端口    |
| ENV        | 环境变量      |
| ADD        | 添加文件到镜像   |
| COPY       | 复制文件到镜像   |
| ENTRYPOINT | 容器固定启动命令  |
| VOLUME     | 数据卷       |
| USER       | 指定用户和用户组  |
| WORKDIR    | 指定默认工作目录  |
| ARG        | 指定构建参数    |
```shell
# dockerfile文件的使用
docker build -f dockerfile -t 指定生成镜像名称:tar .
```
### docker镜像分层构建机制