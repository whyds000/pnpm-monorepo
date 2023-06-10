
# 使用 pnpm 

请使用pnpm

## 下载包

注意！！！切记不要在项目启动时下载包和 `pnpm i`，请先停止项目再下载。

## 启动项目

`pnpm start` 并选择你要启动的项目

## 创建项目

在 `packages/projects` 目录下使用以下命令创建项目

pnpm create vite <项目名称>

然后在 `config/project/project-list` 文件按照例子创建项目目录元素

* 把项目包的 package.json 的 name 改为 `@projects/xxx`
