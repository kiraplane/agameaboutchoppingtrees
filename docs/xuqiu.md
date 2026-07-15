# A Game About Chopping Trees Wiki 网站开发需求

## 项目标识

- 游戏名称：A Game About Chopping Trees
- 网站名称：A Game About Chopping Trees Wiki
- 平台：Steam
- 规范域名：https://www.agameaboutchoppingtrees.wiki
- 本地项目目录名：`agameaboutchoppingtrees`
- GitHub 仓库名：`agameaboutchoppingtrees`
- Cloudflare Worker 项目名：`agameaboutchoppingtrees`

## 已核验的官方身份

- Steam 官方商店：https://store.steampowered.com/app/4512570/A_Game_About_Chopping_Trees/
- Steam App ID：`4512570`
- 开发者：Space Raccoon Game Studio
- 发行商：Spaghetti Cat
- 独立官方网站：not yet verified（Steam 商店当前只关联 Discord，没有关联独立官网）
- Steam 上线日期：2026-07-15
- 官方定位：轻松、舒适的第一人称砍树模拟游戏；玩家砍伐树木、乘坐手摇轨道车前往不同林地、升级斧头伤害与工作能力、重新种植树苗，并可单人游玩或在线合作。

身份边界：本项目只描述 Steam App `4512570` 的基础游戏。不得把同名或相似砍树游戏、Steam Demo App `4738320`、原声带 App `4848700`，或源模板的开发者、发行商、商店链接、玩法、事实和素材当作目标游戏内容。Demo 与原声带只能在明确标注其独立 App 身份时作为辅助资料。

## 核心种子关键词

- `a game about chopping trees`
- `a game about chopping trees wiki`
- `a game about chopping trees guide`
- `a game about chopping trees steam`
- `a game about chopping trees beginner guide`
- `a game about chopping trees walkthrough`
- `a game about chopping trees upgrades`
- `a game about chopping trees co-op`
- `a game about chopping trees demo`
- `a game about chopping trees achievements`

以上仅为建站预检种子词。完整开发前必须重新进行当前长尾需求、People Also Ask、相关搜索、竞品与 YouTube 资料调研，再将候选词标记为 `keep`、`ignore`、`watch` 或 `localize_later`，并据此决定实际页面、实体命名和路由；不预设 `codes`、`tier list` 或数据库页面。

## 目标文件与命名空间

- 计划 PRD：`docs/a-game-about-chopping-trees-wiki-prd-and-implementation-plan.md`
- 目标数据层：`src/data/a-game-about-chopping-trees/`
- 目标 App Router 路由组：`src/app/[locale]/(a-game-about-chopping-trees)/`
- 目标组件命名空间：`src/components/a-game-about-chopping-trees/`
- 目标静态资源命名空间：`public/a-game-about-chopping-trees/`

## 确认后的开发范围

1. 基于当前搜索需求、Steam 官方资料、Steam 关联官方渠道、可靠竞品和 YouTube 攻略，编写关键词矩阵、竞品基准和 PRD。
2. 将复制的模板彻底迁移为只服务 A Game About Chopping Trees 的英文攻略站，按资料厚度决定首发页面数量，不为凑数制造空页面。
3. 根据已核验需求决定是否建设 beginner guide、upgrades、co-op、walkthrough、achievements、demo、biomes、handcar、replanting、system requirements 或其他页面；不得机械保留模板栏目。
4. 首页、分类枢纽、攻略详情、侧边 Wiki 导航、移动端 Wiki 菜单、相关链接、法律页面、sitemap、robots 和 manifest 均使用 A Game About Chopping Trees 专属内容与元数据。
5. 完成模板迁移残留检查、lint、TypeScript、构建和浏览器预览 QA；未请求广告，因此确认后移除一切继承的 Adsterra 痕迹，并在首次构建前验证不存在 `ADSTERRA_*`。
6. 验证完成后创建并推送 GitHub 仓库 `agameaboutchoppingtrees`，部署同名 Cloudflare Worker，绑定 `agameaboutchoppingtrees.wiki` 与 `www.agameaboutchoppingtrees.wiki`，以 `www` 为 canonical，并在权限允许时配置 GitHub 自动构建和 GA4。
7. 创建并验证 GSC Domain Property `sc-domain:agameaboutchoppingtrees.wiki`，通过 Cloudflare apex DNS TXT 验证，提交完整 sitemap，并同步 GA-GTM 注册信息。
8. 按 `wiki-site-builder` 流程将站点幂等注册到 Shipmanager；第二个核心链接必须从实际实现且需求最强的 hub 中选择，不能预设为模板栏目。
