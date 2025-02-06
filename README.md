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


## 💡 亮点

### 🎭 沉浸式体验
- AI 以 **占卜师身份** 回答问题，用户仿佛在与真实占卜师交流  
- **支持多语言**，用户用什么语言提问，占卜师就用什么语言回答  

### 🏗️ 高扩展性 & 组件化架构 & 高效开发
- 采用 **React 组件化开发**，降低代码耦合度，提高可复用性  
- **Sass预处理**，使用 **变量，Mixin，模块化**管理样式，易于统一整体UI风格，同时提高样式可维护性
- 后端基于 **Node.js + Express**，可扩展至更多 AI 交互场景
- 使用nodemon监听代码变化，自动重启服务器，提高开发效率  

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
      ┣ 📜 StarryBackgroud.js 
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
- 💼 Linkedin:



