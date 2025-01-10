## 安装 jupyterlab
```shell
pip install --upgrade jupyter jupyterlab
```

## 设置 jupyterlab 登录密码
```shell
ipython3  
from jupyter_server.auth import passwd
passwd()  

# 输入密码后会得到一串哈希值,复制保留,稍等下有用. 
```

## 退出 ipython 3 界面
```shell
exit() 
```

## 生成并修改 jupyterlab 配置文件
```shell
jupyter notebook --generate-config

vim /home/UserName/.jupyter/jupyter_lab_config.py
```

## 修改以下内容并删除前面的井号和空格
```shell
c.NotebookApp.allow_remote_access = True
# 允许任意IP段访问
c.NotebookApp.ip = '0.0.0.0'

# 设置文件默认保存位置  
c.NotebookApp.notebook_dir = 'pwd'

# 设置运行时不启动浏览器
c.NotebookApp.open_browser = False

# 设置前面生成的密码
c.NotebookApp.password = u'sha1:**********'

# 设置端口号
c.NotebookApp.port = 8888
```

## 设置中文环境
```shell
pip install jupyterlab-language-pack-zh-CN
```

## 设置后台运行
```shell
# 开启一个名称为jupyterlab的会话
screen -S jupyterlab

# 开启jupyterlab服务
jupyterlab
# 快捷键 Ctrl + A + D 退出会话窗口, 服务仍然运行  

# 查看所有会话
screen -ls
```

## 设置开机自启
```shell
# 找到jupyterlab安装位置
which jupyter-lab

# 创建运行脚本
vim 脚本名.sh
```

输入脚本内容
```shell
#!/bin/sh  
/home/myjetson/.local/bin/jupyter-lab
#（此处为jupyterlab安装位置，以上which jupyter-lab语句运行后内容）
```

## 修改脚本运行权限并测试正确性
```shell
# 修改脚本运行权限
chmod 777 文件名

# 测试脚本正确性
./脚本文件名.sh
```


## 创建 jupyterlab. Service 配置文件
```shell
sudo vim /etc/systemd/system/jupyter.service
```

## 将以下内容粘贴到配置文件内
```shell
[Unit]  
Description=Auto Load JupyterLab  
After=network.target  
  
[Service]  
Type=simple  
User=Ubuntu用户名  
ExecStart=运行脚本位置/脚本文件名.sh  
Restart=on-failure  
RestartSec=15s  
  
[Install]  
WantedBy=multi-user.target
```

## 启动并检查服务
```shell
# 让systemd重新加载service文件 
sudo systemctl daemon-reload

# 设置开机自启
sudo systemctl enable jupyter.service

# 检查服务是否正常启动
sudo systemctl start jupyter.service  
sudo systemctl status jupyter.service

# 如需关闭服务请输入以下命令
sudo systemctl stop jupyter.service
```