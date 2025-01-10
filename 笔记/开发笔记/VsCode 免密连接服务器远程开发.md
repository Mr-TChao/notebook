# VsCode 免密连接服务器远程开发

## 必要组件
1. Remote-SSH


## 第一步: 链接远程服务器,生成SSH 密钥
```shell
ssh-keygen
```

1. id_rsa.pub   公钥文件
2. id_rsa   私钥文件(请勿泄漏)

## 第二步: 打开公钥文件夹,将公钥文件  id_rsa.pub添加到目标服务器 authorized_keys文件中
```shell
cat id_rsa.pub >> authorized_keys
```

## 第三步: 修改注释
```shell
sudo vim /etc/ssh/ssh_config

(取消PasswordAuthentication yes这一行的注释)
```

## 第四步: 配置本地私钥
下载id_rsa文件放到本地电脑当前用户的.ssh路径下