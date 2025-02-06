# 日本語の紹介 [English version follows after Japanese] 【中文版请下拉至最后】  
# 🌍 AI占い師（React & Node.js）

👋 こんにちは、私は鄭綺慧（ジェン・チフイ）です。React エコシステムに特化し、高効率で保守性の高いフロントエンドアプリケーションの構築を得意とするフロントエンド開発者です。

このプロジェクトは、私が独自に開発した AI 占い師 Web アプリケーションで、対話型のオンライン占いサービスを提供します。

## 📌 プロジェクトの背景 & 目的
近年、AI はデータ分析や論理推論などの分野で広く活用されていますが、**感情的な対話や主観的な予測** に関しては、まだ発展の余地があります。多くのユーザーは迷ったときに導きを求めており、AI を占い師として活用することで、温かみのある対話体験を提供できます。

このプロジェクトの主な目標：
- ✅ 没入感のある AI 占い体験を提供し、楽しくパーソナライズされたインタラクションを実現する
- ✅ 占い師が **一人称で回答** し、ユーザーの言語に **自動対応** することで、リアリティを向上させる
- ✅ **継続的な対話** をサポートし、ユーザーがより深いアドバイスを得られるようにする

私はこのプロジェクトの要件分析、UI 設計、フロントエンドとバックエンドの開発を独自に行い、OpenAI API を活用して信頼性のある占い応答を実装しました。

## 📈 スクリーンショット & 使用方法

### PC版
<img src="https://github.com/user-attachments/assets/9f588847-025c-4ff0-a585-dc0c42b83450">

### スマートフォン版
<img src="https://github.com/user-attachments/assets/924e4bec-1073-4df5-a218-11775890d4a4" width="400">

### 使用方法
1️⃣ **質問を入力**：入力欄に占い師に相談したい内容を記入（多言語対応）  
2️⃣ **回答を確認**：約1秒後に占い師が回答し、ユーザーが使用した言語で返答  
3️⃣ **対話を継続**：回答をもとに追加で質問したり、新しい相談をしたりすることが可能  

## 🛠️ 技術スタック
| 技術 | 説明 |
|------|------|
| ⚛️ React 18 | コンポーネントベースのフロントエンドフレームワークで、コードの保守性を向上 |
| 🎨 Sass | UI デザインを担当し、スタイルの再利用性を向上 |
| 🌃 tsparticles | 動く星空アニメーションを実装し、没入感を向上 |
| 🚀 CRA | Create React App を使用し、React プロジェクトを素早く構築 |
| 📊 Node.js + Express | OpenAI API の呼び出しをサーバー側で処理し、フロントエンドで API キーを隠蔽 |
| 🤖 OpenAI API | 占いの回答を生成し、AI にパーソナライズされた "占い師" のスタイルを付与 |
| 🔧 nodemon | サーバーコードの変更を監視し、自動リスタートすることで開発効率を向上 |

## 💡 特徴

### 🎭 リアルな占い体験
- AI が **占い師のキャラクター** になりきってユーザーの相談に答える
- **多言語対応** により、ユーザーが使用する言語で占い師が返答

### 🏗️ 高拡張性 & コンポーネント設計 & 効率的な開発
- **React コンポーネントベースの開発** により、コードの再利用性を向上
- **Sass プリプロセッサ** を活用し、変数、Mixin、モジュール管理で UI デザインの統一感と保守性を向上
- **Node.js + Express** をバックエンドに採用し、さらなる AI インタラクションの拡張が可能
- **nodemon** により、コード変更時にサーバーを自動リスタートし、開発効率を向上

### ✨ UI & インタラクションの最適化
- 🌌 **動的な星空背景** で神秘的な雰囲気を演出
- 📱 **レスポンシブデザイン** により、モバイル・デスクトップ両方に適応

### 🔍 AI 応答の最適化
- **プロンプトエンジニアリング** により、AI が論理的に説明できない質問（運勢予測など）に対しても、**神秘的かつ前向きなスタイル** での応答を実現
- AI の口調を統一し、**一貫した "占い師" のキャラクター** を維持

## 📂 ディレクトリ構成
```bash
📂 src
 ┣ 📂 backend                 # バックエンド（Node.js + Express）
    ┣ 📜 server.js            # サーバーエントリーポイント（OpenAI API 呼び出し処理）
    ┣ 📜 .env.example         # 環境変数設定のサンプル（OpenAI APIキーの設定が必要）
 ┣ 📂 frontend                # フロントエンド（React）
    ┣ 📂 components           # 再利用可能なコンポーネント
      ┣ 📜 StarryBackground.js # 星空アニメーションコンポーネント
    ┣ 📂 pages                # ページ単位のコンポーネント
      ┣ 📜 Chatbot.js         # メイン画面 & チャット機能（API 呼び出し）
    ┣ 📂 styles               # スタイル関連のファイル
      ┣ 📜 _mixin.scss        # Sass Mixin
      ┣ 📜 _variables.scss    # Sass 変数設定
      ┣ 📜 Chatbot.scss       # チャット画面のスタイル
      ┣ 📜 SkyBackground.scss # 星空アニメーションのスタイル
    ┣ 📜 App.js               # ルートコンポーネント
    ┣ 📜 index.js             # アプリのエントリーポイント
```

## 📬 連絡先
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/qihui-zheng-ab2618275/



# English Version of Project Introduction 
# 🌍 AI Fortune Teller (React & Node.js)

👋 Hi, I'm Qihui Zheng, a front-end developer specializing in the React ecosystem, with expertise in building efficient and maintainable web applications.  
This is an AI-powered fortune-telling web application that I developed independently, providing an interactive online fortune-telling experience.

## 📌 Project Background & Goals

AI has been widely applied in fields such as **data analysis and logical reasoning**, but it still has room for growth in **emotional interaction and subjective predictions**. Many users seek guidance or inspiration when feeling uncertain, and an AI fortune teller can offer a warm, engaging experience.  

### Core Goals:
- ✅ Create an immersive AI fortune-telling experience with engaging and personalized interactions  
- ✅ The AI fortune teller responds in **first-person perspective** and **automatically adapts to the user's language**, enhancing realism  
- ✅ Supports **continuous conversation**, allowing users to receive deeper insights throughout their consultations  

I independently handled **requirement analysis, UI design, front-end and back-end development**, and integrated the OpenAI API to generate reliable fortune-telling responses.

## 📈 Screenshots & Usage

### Desktop Version
<img src="https://github.com/user-attachments/assets/9f588847-025c-4ff0-a585-dc0c42b83450">

### Mobile Version
<img src="https://github.com/user-attachments/assets/924e4bec-1073-4df5-a218-11775890d4a4" width="400">

### How to Use
1️⃣ **Enter Your Question**: Type your query into the input box (supports multiple languages)  
2️⃣ **View the Response**: The AI fortune teller responds within ~1 second, in the same language as the user's input  
3️⃣ **Continue the Conversation**: Users can follow up on responses or ask new questions  

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| ⚛️ React 18 | Component-based front-end framework for improved maintainability |
| 🎨 Sass | Preprocessor for styling, enhancing style reusability |
| 🌃 tsparticles | Dynamic starry background animation for an immersive experience |
| 🚀 CRA | Create React App for rapid React project setup |
| 📊 Node.js + Express | Back-end API server that wraps OpenAI API calls to protect API keys |
| 🤖 OpenAI API | Generates fortune-telling responses with a personalized "fortune teller" style |
| 🔧 nodemon | Monitors back-end code changes and auto-restarts the server for efficient development |

## 💡 Key Features

### 🎭 Immersive Experience
- The AI **responds as a fortune teller**, making interactions feel authentic  
- **Supports multiple languages**—users receive responses in the same language they ask questions in  

### 🏗️ Scalable, Modular Architecture & Efficient Development
- **Component-based React development** to reduce code coupling and improve reusability  
- **Sass preprocessor** with **variables, mixins, and modular styles** for consistent UI design and easier maintenance  
- **Node.js + Express** backend, easily extendable to support more AI-driven interactions  
- Uses **nodemon** to monitor code changes and auto-restart the server for a smoother development workflow  

### ✨ UI & Interaction Enhancements
- 🌌 **Dynamic starry background** for a mysterious, immersive atmosphere  
- 📱 **Responsive design**, optimized for both desktop and mobile users  

### 🔍 Optimized AI Responses
- **Fine-tuned prompt engineering** ensures AI responses stay within mystical and encouraging themes while avoiding factual inaccuracies (e.g., financial predictions)  
- Custom AI persona setup to **maintain a consistent "fortune teller" identity**, enhancing realism  

## 📂 Project Structure

```bash
📂 src
 ┣ 📂 backend                 # Backend (Node.js + Express)
    ┣ 📜 server.js            # API server, handles OpenAI API requests
    ┣ 📜 .env.example         # Environment variable example (API key setup required)
 ┣ 📂 frontend                # Frontend (React)
    ┣ 📂 components           # Reusable components
      ┣ 📜 StarryBackgroud.js # Dynamic starry background effect
    ┣ 📂 pages                # Page-level components
      ┣ 📜 Chatbot.js         # Chat interface, API requests
    ┣ 📂 styles               # Styling files
      ┣ 📜 _mixin.scss        # Reusable styles
      ┣ 📜 _variables.scss    # Global style variables
      ┣ 📜 Chatbot.scss       # Chat interface styling
      ┣ 📜 SkyBackgroud.scss  # Gradient animation for the starry background
    ┣ 📜 App.js               # Entry point
    ┣ 📜 index.js             # Renders the root component  
```

## 📬 Contact
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin: https://www.linkedin.com/in/qihui-zheng-ab2618275/



# 中文版项目简介
# 🌍 AI占卜师（react & node.js）

👋 你好，我是郑绮慧，一名前端开发者，专注于 React 生态，擅长构建高效、可维护的前端应用。
这个项目是我独立开发的AI占卜师web application，提供对话式的在线占卜服务。

## 📌 项目背景 & 目标
AI 近年来被广泛应用于数据分析、逻辑推理等领域，但在 **情感交流、主观推测** 方面仍有很大的发展空间。许多用户希望在迷茫时得到启发或指引，而 AI 作为占卜师，能提供温暖的互动体验。  

本项目的核心目标：
- ✅ 让用户沉浸式体验 AI 占卜，提供有趣且个性化的交互  
- ✅ 占卜师以第一人称回答，并根据用户的语言 **自动调整回复语言** ，提升真实感  
- ✅ 支持 **连续对话**，让用户在咨询过程中获得更深入的指引  

我独立完成了需求分析，UI设计，前端开发和后端开发，并调用了OpenAI API进行占卜回答，具备可靠性。
   
## 📈 页面截图 & 使用方法

### 电脑端
<img src="https://github.com/user-attachments/assets/9f588847-025c-4ff0-a585-dc0c42b83450">

### 手机端
<img src="https://github.com/user-attachments/assets/924e4bec-1073-4df5-a218-11775890d4a4" width="400">

### 使用方法
1️⃣ **输入问题**：在输入框输入想要咨询占卜师的问题（支持多国语言）  
2️⃣ **查看回答**：等待1s左右占卜师返回回答，该回答所使用的语言与用户一致  
3️⃣ **继续对话**：用户可以根据回答继续提问，或咨询新的问题      

## 🛠️ 技术栈
| 技术 | 说明 |
|------|------|
| ⚛️ React 18 | 组件化前端框架，提高代码可维护性 |
| 🎨 Sass | 负责 UI 设计，提高样式复用性 |
| 🌃 tsparticles | 动态星空背景动画，提升沉浸感 |
| 🚀 CRA | Create React App，快速搭建 React 项目 |
| 📊 Node.js + Express | 后端 API 服务器，负责封装 OpenAI API 调用，避免前端暴露密钥 |
| 🤖 OpenAI API | 生成占卜回答，使 AI 具备个性化的“占卜师”风格 |
| 🔧 nodemon | 监听后端代码变化，自动重启服务器，提高开发效率 |


## 💡 亮点

### 🎭 沉浸式体验
- AI 以 **占卜师身份** 回答问题，用户仿佛在与真实占卜师交流  
- **支持多语言**，用户用什么语言提问，占卜师就用什么语言回答  

### 🏗️ 高扩展性 & 组件化架构 & 高效开发
- 采用 **React 组件化开发**，降低代码耦合度，提高可复用性  
- **Sass预处理**，使用 **变量，Mixin，模块化**管理样式，易于统一整体UI风格，同时提高样式可维护性
- 后端基于 **Node.js + Express**，可扩展至更多 AI 交互场景
- 使用　**nodemon** 监听代码变化，自动重启服务器，提高开发效率  

### ✨ UI & 交互优化
- 🌌 **动态星空背景**，提升神秘感，让用户更沉浸  
- 📱 **响应式设计**，适配移动端 & 桌面端    

### 🔍 AI 回答优化
- 通过 **精细化 Prompt 工程**，规避AI无法进行非逻辑性思考的问题（预测财运等），使其以 **神秘且鼓励的风格** 进行回复  
- 设定 AI 的语气，**保持一贯的“占卜师”身份**，增强真实感  

## 📂 代码结构
```bash
📂 src
 ┣ 📂 backend                 # 后端（Node.js + Express）
    ┣ 📜 server.js            # 服务器入口，OpenAI API 封装，处理占卜请求 
    ┣ 📜 .env.example         # 环境变量示例，需配置 OpenAI API 密钥
 ┣ 📂 frontend                # 前端（React）
    ┣ 📂 components           # 可复用组件
      ┣ 📜 StarryBackgroud.js # 动态星空背景
    ┣ 📂 pages                # 页面级组件
      ┣ 📜 Chatbot.js         # 首页、占卜界面、前端API请求封装
    ┣ 📂 styles               # 样式文件
      ┣ 📜 _mixin.scss        # 可复用样式
      ┣ 📜 _variables.scss    # 变量定义
      ┣ 📜 Chatbot.scss       # 首页及聊天框样式
      ┣ 📜 SkyBackgroud.scss  # 星空背景的动态渐变背景色样式
    ┣ 📜 App.js               # 入口文件
    ┣ 📜 index.js             # 渲染根组件  
```   

 ## 📬 联系方式
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin: https://www.linkedin.com/in/qihui-zheng-ab2618275/



