# 今天吃什麼？ V1.0

一個幫助選擇下一餐的簡易靜態網站，也是大學 GitHub 版本控制與協作作業的初始版本。以 HTML、CSS 與原生 JavaScript 製作，無框架、後端、資料庫或外部套件，可直接部署至 GitHub Pages。

## V1.0 功能

- 顯示七種預設餐點：咖哩飯、牛肉麵、水餃、漢堡、披薩、便當、義大利麵。
- 點擊「幫我決定！」，立即隨機選出一個餐點，並標示對應的候選餐點。
- 可以重複點擊重新抽選；每次都從全部七種餐點抽選，每種機會相同，允許連續抽到同一餐點。
- 奶油色與珊瑚橘的簡潔版面，支援手機及電腦。
- 使用原生按鈕支援鍵盤操作，抽選結果透過 `aria-live` 提供螢幕閱讀器通知。

**目前沒有實作**新增餐點、刪除餐點、`localStorage` 或避免連續重複的功能。這些功能保留給後續版本；重新整理會回到尚未抽選的初始畫面。

## 檔案結構

```text
today-menu/
├── index.html  # 網頁結構與文字
├── style.css   # 色彩、版面及響應式樣式
├── script.js   # 七種固定餐點、名單顯示及隨機抽選
└── README.md   # 專案說明與操作建議
```

餐點資料集中在 `script.js` 的 `meals` 陣列，畫面與抽選共用這份資料。隨機索引使用 `Math.floor(Math.random() * meals.length)`，範圍是 0–6。CSS 與 JavaScript 使用相對路徑，適用於 GitHub Pages 的專案子目錄。

## 在電腦執行

### 直接開啟

將四個檔案放在同一個資料夾，使用現代瀏覽器開啟 `index.html` 即可。需要啟用 JavaScript，不必安裝 Node.js 或執行建置。網站沒有外部資源請求，也能離線使用。

### 使用本機伺服器（選用）

若電腦已安裝 Python，在專案資料夾開啟終端機並執行：

```bash
python -m http.server 8000
```

在瀏覽器開啟 `http://localhost:8000`。停止伺服器時按 `Ctrl+C`。

## 建立初始 commit 與 v1.0 標記

以下指令適用於**尚未初始化 Git 的新專案資料夾**。先進入含這四個檔案的資料夾，再依序執行。若已經是 Git repository，略過 `git init` 並使用現有分支。

```bash
git init -b main
git add index.html style.css script.js README.md
git commit -m "feat: build meal picker v1.0"
git tag -a v1.0 -m "V1.0: seven preset meals and random selection"
git log --oneline --decorate
```

請先完成測試再建立標記，讓 `v1.0` 指向已確認可用的初始版本。若 Git 要求作者資訊，設定自己的 `user.name` 與 `user.email` 後再提交。`v1.0` 是 Git tag，不是分支。

### 推送到 GitHub

先在 GitHub 建立新的空 repository，例如 `today-menu`。因為本機已經有 README，建立遠端時不要另外初始化 README、`.gitignore` 或授權檔案。

將下方 `YOUR-USERNAME` 與 `YOUR-REPOSITORY` 換成自己的帳號及 repository 名稱：

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
git push origin v1.0
```

若已設定 `origin`，不必再次新增；先使用 `git remote -v` 確認目標。上述操作是建議，交付檔案本身尚未建立 commit、tag 或遠端 repository。

## 部署至 GitHub Pages

1. 將四個檔案放在 repository 的根目錄並推送至 `main`。
2. 進入該 repository 的 **Settings → Pages**。
3. 在 **Build and deployment → Source** 選擇 **Deploy from a branch**。
4. 在 **Branch** 選擇 `main`，資料夾選擇 `/(root)`，按 **Save**。
5. 等待部署完成，再使用 Pages 設定頁顯示的網站網址開啟網站。

GitHub.com 的一般專案網站網址格式為 `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`。使用 GitHub Free 時，可將作業 repository 設為 public 以使用 Pages；其他帳號方案及校方設定請依實際環境確認。

參考：[GitHub 官方部署來源設定](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)、[GitHub 官方網站部署說明](https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically)。

## 已完成的本機驗證

本次交付已使用瀏覽器完成以下檢查：

| 檢查項目 | 結果 |
| --- | --- |
| 初次載入 | 標題及七種餐點正常顯示，未自動抽選 |
| 連續抽選 50 次 | 結果皆在候選名單內，七種餐點都曾出現，按鈕持續可用 |
| 選中項目 | 每次只標示一個項目，與結果餐點一致 |
| 連續重複 | 已觀察到連續抽中相同餐點，符合 V1.0 要求 |
| 重新整理 | 回到尚未抽選的狀態，清除選中標示 |
| 鍵盤操作 | Enter 及空白鍵均能抽選 |
| 響應式版面 | 320、390、768、1280px 寬度沒有水平溢出 |
| JavaScript 與資源 | 語法檢查通過，HTML／CSS／JS 正常載入，瀏覽器未回報錯誤 |

GitHub Pages 尚未實際部署；上線後請再確認部署網址的樣式與抽選功能。

## 自行檢查清單

- [ ] 初次載入顯示標題「今天吃什麼？」及七種餐點，尚未自動抽選。
- [ ] 點擊「幫我決定！」後，結果必定是候選名單中的一個餐點。
- [ ] 結果餐點的候選項目會被標示，且只標示一個項目。
- [ ] 可以連續抽選，按鈕不會失效；重複抽到同一餐點是正常行為。
- [ ] 重新整理後回到初始狀態，不會保存上次結果。
- [ ] 使用 Tab 選取按鈕，再按 Enter 或空白鍵，可以抽選。
- [ ] 手機及電腦版面正常，沒有水平捲動或文字遮擋。
- [ ] GitHub Pages 上的樣式與抽選功能正常載入。

## 後續協作建議

以 `v1.0` 保留本次作業基準。後續新增功能時，先開 GitHub issue 討論需求，從更新後的 `main` 建立功能分支，完成後透過 pull request 請同學檢查，再合併回 `main`。新增、刪除、儲存或避免重複等需求應在後續版本獨立開發。
"# Test1" 
