仅供自己家里人用，方便一下

npx tsx listFiles.ts

```JavaScript
.
├── public/                     # 静态资源目录，最终会直接拷贝到构建后的 dist 文件夹
│   └── index.html              # 主入口 HTML 文件
├── src/                        # 源代码目录，所有开发相关代码都在这里
│   ├── components/             # 复用型组件目录
│   │   ├── Button.tsx          # 按钮组件
│   │   ├── ResponseBox.tsx     # 回答展示组件
│   │   └── TextArea.tsx        # 输入框组件
│   ├── pages/                  # 页面级组件目录
│   │   └── Home.tsx            # 主页
│   ├── services/               # API 服务目录
│   │   └── api.ts              # 请求接口的封装
│   ├── styles/                 # 样式文件目录
│   │   └── index.css           # 全局样式
│   ├── utils/                  # 工具函数目录
│   │   └── index.ts            # 工具函数集合
│   ├── App.tsx                 # 顶层 React 组件
│   ├── main.tsx                # 应用的入口文件
│   └── vite-env.d.ts           # Vite 环境声明
├── .eslintrc.json              # ESLint 配置文件
├── .prettierrc                 # Prettier 配置文件
├── package.json                # npm 包管理配置文件
├── pnpm-lock.yaml              # pnpm 锁定文件
├── README.md                   # 项目说明文件
├── tsconfig.json               # TypeScript 配置文件
└── vite.config.ts              # Vite 配置文件

```

