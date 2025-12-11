# 1panel部署CodeCombat(极客战记)教程

## 1. 拉取镜像
```shell
docker pull operepo/ope-codecombat
```
## 2. 登陆1panel后台, 构建容器
1. 先创建两个文件夹 
	1. data
	2. mongo
2. 服务器端口任选, 容器端口选择 3000
3. 创建容器--挂载
	1. data文件夹挂载到 --> /home/coco/codecombat/data
	2. mongo文件夹挂载到 -->  /home/coco/codecombat/mongo
4. 确认构建

## 3. 将下载的文件上传到 data 文件夹内(原有文件删除)
## 4. 登陆容器运行如下命令
```shell
1. 解压文件
   cd /home/coco/codecombat/data/
   tar -zxvf dump.tar.gz

2. 开启数据库
   cd /home/coco/codecombat
   ./bin/coco-mongodb

3. 开启web服务
   cd /home/coco
   sh start.sh
```

## 5. 构建完成, 重启容器

## 6. 进入容器, 开启权限
```shell
1. 打开mongo数据库
   mongo

2. 使用coco数据库
   use coco

3. - db.users.update({'name':'你设置的用户名'},{$set:{'earned.gems':9999999, permissions:["godmode","admin"]}},true,false);
```