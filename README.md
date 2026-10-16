# 今天吃什麼？ V1.1

以 HTML、CSS、原生 JavaScript 製作的靜態餐點抽選網站，用來練習 GitHub 版本控制與協作。沒有框架、後端、資料庫或外部套件。

本次修改適合由 Yanlin 在 `feature/yanlin-add-foods` 分支提出 pull request，經檢查後合併到 `main`。

## V1.1 的變更

- 保留 V1.0 的七種餐點，新增壽司、炒飯與火鍋，共十種餐點。
- 候選餐點數量及無障礙標籤，根據 `meals.length` 自動產生。
- 調整候選名單版面：只有奇數筆的最後一張卡片跨兩欄；十種餐點以兩欄、五列顯示。
- 頁首及頁尾版本文字更新為 V1.1。

這次新增的是程式中的預設資料，沒有建立讓訪客新增或刪除餐點的操作介面。也沒有加入 `localStorage` 或避免連續重複抽選的功能。

## 十種餐點

咖哩飯、牛肉麵、水餃、漢堡、披薩、便當、義大利麵、壽司、炒飯、火鍋。

每次點擊「幫我決定！」都會從全部十種餐點中隨機選出一種，允許連續抽到相同餐點。重新整理後回到初始狀態。

## 檔案結構

```text
web-github-test/
├── index.html  # 網頁結構、版本文字及餐點數量容器
├── style.css   # 色彩、響應式版面及餐點卡片排列
├── script.js   # 十種餐點資料、數量顯示及抽選
└── README.md   # 專案與協作說明
```

## 執行方式

四個檔案放在同一資料夾，直接使用現代瀏覽器開啟 `index.html` 即可，並保持 JavaScript 啟用。

若電腦已安裝 Python，也可在專案資料夾執行：

```bash
python -m http.server 8001
```

瀏覽 `http://localhost:8001`；以 `Ctrl+C` 停止伺服器。不需要安裝套件或執行建置。

## 程式說明

餐點資料集中在 `script.js` 的 `meals` 陣列。新增的三筆資料為：

```javascript
{ name: "壽司", emoji: "🍣", description: "一口鮮美，清爽好滋味" },
{ name: "炒飯", emoji: "🍚", description: "粒粒分明，暖胃又滿足" },
{ name: "火鍋", emoji: "🍲", description: "熱騰騰一鍋，暖心好滋味" },
```

抽選使用 `Math.floor(Math.random() * meals.length)`，現在產生的索引為 0–9。畫面上的選擇數量同樣從這份陣列取得。

## 協作流程

1. Repository 擁有者在 GitHub 邀請 Yanlin 成為 collaborator，Yanlin 接受邀請。
2. Yanlin clone 專案，在更新後的 `main` 上建立 `feature/yanlin-add-foods` 分支。
3. 在該分支套用這次的四個檔案，測試後 commit 並 push 分支。
4. Yanlin 在 GitHub 建立 PR：base 為 `main`，compare 為 `feature/yanlin-add-foods`。
5. 擁有者檢查變更與功能後合併 PR。GitHub Pages 會依 `main` 的內容重新部署。
6. 雙方同步最新的 `main`。確認新版本可用後，再由擁有者建立及推送 `v1.1` tag。

原始 `v1.0` tag 保留作為七種餐點版本的快照。

## 測試清單

- [ ] 初始畫面顯示 V1.1、10 種選擇與十張餐點卡片。
- [ ] 原始七種餐點與新增三種餐點都在名單中，初次載入不會自動抽選。
- [ ] 重複抽選結果都來自這十種餐點，且選中標示與餐點一致。
- [ ] 新增的壽司、炒飯、火鍋也能被抽中。
- [ ] Enter／空白鍵可以抽選，重新整理會回到初始狀態。
- [ ] 手機及電腦版面沒有水平溢出，十張卡片兩欄排列。
- [ ] 合併後，GitHub Pages 上的版本與功能正常。

## 修改包交付前驗證

- 已完成 100 次連續抽選，十種餐點都曾出現，包含新增的壽司、炒飯與火鍋。
- 每次結果均屬於候選名單，且只標示一張正確的餐點卡片；也觀察到連續重複抽選。
- Enter、空白鍵及重新整理功能正常。
- 320、390、1280px 寬度沒有水平溢出；十張卡片均排列成兩欄、五列。
- JavaScript 語法檢查通過，HTML／CSS／JavaScript 均成功載入，瀏覽器沒有回報錯誤或警告。

以上是本機修改包的測試結果。PR 合併後，再依測試清單確認正式 GitHub Pages 網站。

## 連結

- [GitHub repository](https://github.com/ccc519/web-github-test)
- [GitHub Pages 網站](https://ccc519.github.io/web-github-test/)
- [GitHub Flow 官方說明](https://docs.github.com/en/get-started/using-github/github-flow)

網站跟著 `main` 部署。尚未合併的功能分支不會更新這個正式網站網址。
