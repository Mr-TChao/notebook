# Playwright
## 安装
```shell
# 安装playwright
pip install playwright

# 安装playwright所需的所有工具插件和所支持的浏览器
python -m playwright install
```

## 使用
### 录制功能
```shell
# 录制浏览器操作并将步骤写入文件: demo.py
playwright codegen -o demo.py
```