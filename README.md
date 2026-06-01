# Vue 3 + Firebase 即時聊天室

簡介：
* 練習 Vue 3 與 Firebase 製作的即時聊天室

使用技術：
* Firebase Firestore、Firebase Auth
* SCSS
* Vite
* Vee Validate 4 驗證表單
* Vue 3 Composition API
* Vuex 狀態管理

功能：
* 登入、登出以及註冊提示
* 登入、登出功能
* 註冊帳號功能
* 第三方登入(Facebook、Google)
* 顯示目前在線成員
* 進入聊天室聊天

## 環境變數設定

Firebase 設定放在 `.env`（可參考 `.env.example`），啟動前需填入：

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_DATABASE_URL=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

> **note：** 這些值仍然會被 Vite 打包進前端 bundle，使用者在瀏覽器 F12 就能看到——這是 Firebase web 設定的正常行為，並非疏漏。Firebase 的 `apiKey` 不是密碼，只是用來識別專案，別人知道了也無法直接存取資料。真正的存取控制是靠 **Firebase Security Rules**（Database / Firestore 規則），而不是隱藏這些值。把設定移到 `.env` 主要是為了方便管理與切換環境。

## [DEMO](https://tommm2.github.io/chat-app/)

![專案快照](https://i.postimg.cc/gkswbgyw/image.jpg)
