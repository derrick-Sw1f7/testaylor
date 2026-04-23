# Era Echo

一个基于 Taylor Swift 音乐作品偏好的粉丝向性格测试网页应用。项目使用纯静态前端技术实现，不需要构建步骤，上传后即可部署。

## 功能概览

- 12 道分页选择题，覆盖 Taylor Swift 主要音乐时期与代表作品
- 响应式视觉界面，适配桌面与移动端
- 平滑的题目切换动画与交互反馈
- 基于音乐偏好的风格匹配度与人格维度分析
- 个性化歌曲推荐与演唱会体验建议
- 本地存储最近一次测试结果
- 原生分享与复制分享文案

## 技术栈

- HTML5
- CSS3
- JavaScript
- Bootstrap 5（CDN）
- Font Awesome 6（CDN）
- Google Fonts（Cormorant Garamond + Manrope）

## 项目结构

```text
.
├── index.html
├── README.md
└── assets
    ├── css
    │   └── styles.css
    ├── img
    │   └── eras-echo-logo.svg
    └── js
        └── app.js
```

## 本地运行

### 方式 1：直接打开

直接双击 `index.html` 即可查看页面。  
注意：部分浏览器在 `file://` 协议下对分享、剪贴板功能支持有限。

### 方式 2：使用本地静态服务器

推荐使用任意静态服务器运行，以获得更稳定的分享与剪贴板体验。

如果本机安装了 Python：

```bash
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

## 部署说明

本项目是纯静态站点，可以直接部署到以下平台：

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- 任意 Nginx / Apache 静态目录

### GitHub Pages

1. 将整个项目上传到仓库根目录
2. 在仓库设置中启用 Pages
3. 选择从根目录部署
4. 部署完成后即可通过公开 URL 访问

### Netlify / Vercel

1. 新建项目并导入当前目录
2. 不需要设置构建命令
3. 输出目录保持为项目根目录
4. 部署完成后直接访问生成的站点地址

## 内容设计说明

- 题目覆盖 Taylor Swift 的乡村叙事、流行主角感、独立民谣、深夜电子和 diary-pop 剖白等主要风格
- 结果分析综合了 5 个轻量人格维度：
  - 开放感
  - 关系温度
  - 舞台能量
  - 自主表达
  - 情绪敏锐度
- 分析灵感参考音乐偏好研究与大五人格中的相关维度，但结果定位为娱乐向自我观察

## 性能与兼容性

- 页面为纯静态内容，无图片大资源和构建依赖，首屏加载较轻
- 兼容现代浏览器：
  - Chrome
  - Firefox
  - Safari
  - Edge
- 已加入 `prefers-reduced-motion` 兼容处理
- 使用本地存储保存结果，离开页面后仍可重新查看最近一次测试

## 注意事项

- 当前 Bootstrap、Font Awesome 与 Google Fonts 使用 CDN 引入
- 如果需要在内网、离线或受限网络环境中部署，可将这些依赖改为本地静态资源
- 原生分享功能依赖浏览器支持，若不可用会自动退化为复制分享文案

## 许可与说明

本项目为非官方粉丝向创作，不包含官方专辑封面、艺人照片或歌词内容。
