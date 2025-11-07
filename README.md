# 🧡 阿爷专属餐点 · Kuching 华人美食版

一个轻量、纯前端的网站，用于随机推荐古晋（Kuching）的华人餐点。  
可筛选早餐 / 午餐 / 晚餐、口味、辣度，也能点击按钮随机生成今日推荐。

---

## 📁 项目结构

```
aye-kuching-github/
├── index.html    # 网站主页面
├── style.css     # 网站样式（橙色主题）
└── script.js     # 网站逻辑（筛选与随机推荐）
```

---

## 🚀 部署方式（GitHub Pages）

1. 登录 GitHub  
2. 创建一个新仓库（例如 `aye-kuching`）  
3. 上传以上三个文件  
4. 前往仓库 → **Settings → Pages**  
5. 在 "Build and deployment" 区域中设定：  
   - Source: **Deploy from a branch**  
   - Branch: **main**  
   - Folder: **/ (root)**  
6. 等待 1–2 分钟，访问：  
   ```
   https://<你的用户名>.github.io/aye-kuching/
   ```

---

## 🔄 更新网站

若要修改菜单、文字或设计：  

1. 在本地编辑 `index.html` / `style.css` / `script.js`  
2. 回到 GitHub 仓库 → 点击 **Add file → Upload files**  
3. 上传新文件（同名覆盖旧文件）  
4. 写上提交信息（如 “update menu”）  
5. 点击 **Commit changes**  

GitHub 会自动重新发布新版页面。  
等待约 1–2 分钟后刷新网址即可。

---

## 💡 维护建议

| 项目 | 建议频率 | 说明 |
|------|-----------|------|
| ✏️ 更新菜单 | 视需要 | 新增或调整 Kuching 美食清单 |
| 🎨 改版样式 | 不定期 | 优化页面配色或排版 |
| 📦 备份网站 | 半年一次 | 下载 ZIP 存档 |
| 🧹 清理旧分支 | 偶尔 | 若创建多分支，可删除不用的 |

---

## 🧰 可选增强功能（未来可扩展）

- ✅ 增加收藏或点赞功能（使用 LocalStorage）  
- ✅ 将美食数据独立为 JSON 文件，方便后续编辑  
- ✅ 连接自定义域名（例如 `aye-menu.my`）  
- ✅ 结合 API 或外卖平台数据（GrabFood、Foodpanda）

---

## 👨‍💻 作者

网站名称：**阿爷专属餐点**  
版本：Kuching 华人美食版  
设计与开发：Qingge + ChatGPT (GPT-5)  
日期：2025年11月  
