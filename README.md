
# 📱 WhatsApp Web Clone

A full-stack **WhatsApp Web Clone** built with **React**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB Atlas**.  
It allows you to view chats, send messages, and see real-time updates — all in a responsive UI inspired by the original WhatsApp Web.

🔗 **Live Demo:** [https://whats-app-web-clone-lemon.vercel.app/](https://whats-app-web-clone-lemon.vercel.app/)  
📦 **Repository:** [GitHub Link](https://github.com/prashantjain0002/WhatsApp-Web-Clone)

---

## ✨ Features
- 💬 **Real-time Chat UI** – Display and send messages between contacts.
- 🎨 **Responsive Design** – Works seamlessly on desktop & mobile devices.
- 🗂️ **Chat List Sidebar** – Shows all conversations with last message preview.
- 📷 **Profile & Icons** – Uses `lucide-react` icons for a clean, modern look.
- 🛠 **Backend Integration** – Fetch and send messages via Express API.
- 📦 **MongoDB Atlas** – Stores messages and chat data in the cloud.
- 🔄 **Upsert Message Handling** – Prevents duplicate message entries.

---

## 🚀 Tech Stack

### **Frontend**
- **React.js**
- **Tailwind CSS**
- **Lucide React Icons**
- **Vercel** (for deployment)

### **Backend**
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Vercel** / **Render** (deployment options)

---

## 📂 Project Structure

```

whatsapp-web-clone/
│
├── backend/                # Node.js & Express API
│   ├── controllers/        # API route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   └── server.js           # Main backend entry
│
├── frontend/               # React App
│   ├── components/         # UI components
│   ├── services/           # API request functions
│   ├── App.js              # Main app
│   └── index.js            # React entry
│
├── README.md
└── package.json

````

---

## 🛠 Step-by-Step Setup

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/prashantjain0002/WhatsApp-Web-Clone.git
cd WhatsApp-Web-Clone
````

---

### **2️⃣ Setup the Backend**

```bash
cd backend
npm install
```

#### Create a `.env` file:

```env
MONGO_URI=your-mongodb-atlas-uri
PORT=3000
```

#### Start backend server:

```bash
npm run dev
```

Server will run on [http://localhost:3000](http://localhost:3000)

---

### **3️⃣ Setup the Frontend**

```bash
cd ../frontend
npm install
```

#### Create a `.env` file:

```env
REACT_APP_API_URL=http://localhost:3000
```

#### Start frontend:

```bash
npm start
```

Frontend will run on [http://localhost:5173](http://localhost:5173)

---

### **4️⃣ Build for Production**

Frontend:

```bash
npm run build
```

Backend:

```bash
npm start
```

---

## 📜 Commit History (Highlights)

* 🛠 **Initialize backend & connect to MongoDB**
* 🗃️ **Create models, controllers, and sample data**
* 📬 **Add routes for messages & conversations**
* 💬 **Build chat UI with React & Tailwind**
* 🔗 **Integrate frontend with backend**
* 📱 **Fix mobile UI issues**
* 🎨 **Polish sidebar UI & add favicon**
* 🐛 **Fix last message preview in sidebar**

---

## 📷 Screenshots


<img width="1920" height="1080" alt="13-08-01" src="https://github.com/user-attachments/assets/7b9acc45-71ad-404d-a918-1de553644797" />
<img width="1920" height="1080" alt="13-08-02" src="https://github.com/user-attachments/assets/0729d349-e31a-422d-bab0-1f8b2f70ff9a" />
<img width="442" height="792" alt="13-08-03" src="https://github.com/user-attachments/assets/a36afe19-8cf5-41fa-8a5b-81210a79545d" />
<img width="440" height="786" alt="13-08-04" src="https://github.com/user-attachments/assets/6dc09e83-c626-4ea0-8b8a-84ac6ad098d2" />


## 📌 Deployment

* **Frontend** – Deployed on [Vercel](https://vercel.com/)
* **Backend** – Can be deployed on Vercel, Render, or Railway
* **Database** – MongoDB Atlas

---

## 👨‍💻 Author

**Prashant Jain**
🔗 [GitHub](https://github.com/prashantjain0002)


