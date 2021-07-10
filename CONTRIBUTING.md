# CONTRIBUTING

## 新增编辑名人堂内容

名人堂的内容都放在 `content/hof` 目录下，每个人的内容都放在一个文件夹中。`index.md` 文件存放简介，`photo.png`是头像照片。

```markdown
./content
├── hof
│   ├── huangxy
│   │   ├── index.md
│   │   └── photo.png
│   ├── luhc
│   │   ├── index.md
│   │   └── photo.png
```

其中 `index.md` 主要内容如下：

```markdown
---
title: 张三         # 名人名字
cover: photo.png   # 头像文件名
id: 1              # 名人堂列表展示顺序
---

名人简介xxxxxxxx
```

## 修改其他内容

所有需要频繁更新的文案内容都在 `content/` 目录下，直接修改该目录下的文案（md 文件）和图片即可。

```markdown
./content
├── about             # 关于页面的内容
│   ├── explore.md
│   ├── life.md
│   └── team.md
├── hof               # 名人堂页面的内容
│   ├── index.md      # 名人堂简介
│   ├── luhc          # 名人信息
│   ├── shengdi
└── lifePhotos        # 关于页中的生活照片
```

## 贡献代码

1. 参考 [Git 操作文档](https://github.com/CXXT-Projects/traffic-lights#contributing)
2. 本地修改完成后发起 Pull Request，往 main 分支合并代码

## 本地调试

1. 首先确保本地已安装 [Node.js](https://nodejs.org/en/)，并保证版本 >=12。推荐使用 [nvm](https://github.com/nvm-sh/nvm)(macOS) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows)(Windows) 安装和管理 Node.js 版本。

2. 检查 Node 和 npm 是否安装成功

```bash
$ node -v
# 12.0.0
$ npm -v
# 6.14.13
```

3. 设置全局淘宝镜像源以加快安装依赖速度

```bash
$ npm config set registry https://registry.npm.taobao.org
```

4. 在项目根目录下执行以下命令以安装依赖

```bash
$ npm i
```

5. 启动调试

```bash
$ npm start
```

当然如果上面的步骤有点麻烦，推荐使用 [AppWorks Toolkit](https://appworks.site/#toolkit) 和 [AppWorks](https://appworks.site/#suite) 进行环境配置和开发调试。
