
## 1. 使用

#### 1.1 安装依赖

```bash
npm install
```

#### 1.2 启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001


#### 1.3 构建文件

- TypeScript Egg 构建

```bash
npm run tsc
```

- TypeScript 前端工程构建

```bash
npm run build
```

当在本地运行了 `npm run tsc` 之后，本地开发时，记得 `npm run clean` 清楚 js 文件。

#### 1.4 打包部署

1. 先运行 `npm run tsc` 和 `npm run build` 构建 TypeScript Egg 代码和 TypeScript 前端代码
2. 项目代码和构建代码一起打包代码
3. 应用部署后，通过 `npm start` 启动应用


## License

[MIT](LICENSE)
