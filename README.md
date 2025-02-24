# 🚀 E-Cell IIIT Ranchi Website

A dynamic and modern website for the **Entrepreneurship Cell of IIIT Ranchi**, built with **Next.js** and **Express.js**.

## 🌐 Live Demo  
🔗 [Visit the live website](https://ecell.iiitranchi.ac.in)

---

## 🎯 Purpose  
The E-Cell website serves as a **central hub** for:
- 🚀 Showcasing **entrepreneurial initiatives** and events  
- 🔗 Connecting **students with industry leaders**  
- 🏆 Sharing **success stories and testimonials**  
- 📚 Providing **resources for aspiring entrepreneurs**  

---

## 🔥 Features  

### 🎨 **Frontend Features**
✅ Dynamic Content Management  
✅ Interactive components with smooth animations  
✅ Responsive UI with Tailwind CSS  
✅ Optimized images with Cloudinary  
✅ Carousel for testimonials  

### 🛠 **Backend Features**
✅ RESTful API for content management  
✅ Cloud-based image storage with Cloudinary  
✅ MongoDB database integration with Mongoose  
✅ Secure file handling with Multer  
✅ Server-side rendering (SSR) for SEO optimization  

---

## 🏗️ Tech Stack  

### 🎨 **Frontend**
- **Next.js 14** (React Framework)  
- **Tailwind CSS** (Styling)  
- **React Multi Carousel** (Sliders)  
- **SWR** (Data Fetching)  

### 🔧 **Backend**
- **Express.js** (Node.js Framework)  
- **MongoDB + Mongoose** (Database)  
- **Cloudinary** (Image Storage)  
- **Multer** (File Handling)  
- **CORS** (Cross-Origin Resource Sharing)  

---

## 📂 Project Structure  

```bash
ecell-website/
├── frontend/        # Next.js frontend application
│   ├── src/
│   │   ├── app/         # Next.js app router
│   │   ├── components/  # React components
│   │   ├── lib/         # Utility functions
│   │   └── styles/      # Global styles
│   ├── public/          # Static assets
│   └── .env.example     # Example environment variables
│
├── backend/         # Express.js backend application
│   ├── server/
│   │   ├── adapters/        # Controllers and routes
│   │   ├── infrastructure/  # Database and external services
│   │   └── index.js         # Server entry point
│   ├── uploads/        # Temporary upload directory
│   └── .env.example    # Example environment variables
│
└── README.md        # Project documentation
```

---

## 🚀 Getting Started  

### **Prerequisites**  
✅ **Node.js** (v18 or higher)  
✅ **MongoDB** (v4.4 or higher)  
✅ **Cloudinary account**  
✅ **Git**  

### **Environment Setup**  

1️⃣ **Backend Configuration**  
```bash
cp backend/server/.env.example backend/server/.env
```

2️⃣ **Frontend Configuration**  
```bash
cp frontend/.env.example frontend/.env.local
```

---

## 📦 Installation  

### **1. Clone the Repository**  
```bash
git clone https://github.com/your-username/ecell-website.git
cd ecell-website
```

### **2. Backend Setup**  
```bash
cd backend/server
npm install
npm run dev
```

### **3. Frontend Setup**  
```bash
cd ../../frontend
npm install
npm run dev
```

✅ **Local Development URLs:**  
- 🌍 Frontend: [`http://localhost:3000`](http://localhost:3000)  
- 🔗 Backend: [`http://localhost:6000`](http://localhost:6000)  

---

## 🔗 API Documentation  

### 📌 **Endpoints**
#### 📸 **Gallery**
- `GET /api/gallery` → Fetch all gallery items  
- `POST /api/gallery` → Add new gallery item  
- `GET /api/gallery/:category` → Fetch gallery items by category  

#### 🎤 **Speakers**
- `GET /api/speakers` → Fetch all speakers  
- `POST /api/speakers` → Add new speaker  

#### 🚀 **Initiatives**
- `GET /api/initiatives` → Fetch all initiatives  
- `POST /api/initiatives` → Add new initiative  

#### 🏆 **Testimonials**
- `GET /api/testimonials` → Fetch all testimonials  
- `POST /api/testimonials` → Add new testimonial  

#### 🏅 **Team**
- `GET /api/team` → Fetch team members  
- `POST /api/team` → Add new team member  

---

## 🔧 Development  

### 📌 **Code Style**
- **ESLint** for linting  
- **Prettier** for formatting  
- **Husky** for pre-commit hooks  

### 🧪 **Testing**  

#### **Backend Tests**  
```bash
cd backend/server
npm run test
```

#### **Frontend Tests**  
```bash
cd frontend
npm run test
```

---

## 🚀 Deployment  

### **Backend Deployment**  
1️⃣ Set up **MongoDB Atlas**  
2️⃣ Configure **Cloudinary**  
3️⃣ Deploy to **AWS / DigitalOcean / Railway**  
4️⃣ Set up **environment variables**  
5️⃣ Configure **NGINX** (if needed)  

### **Frontend Deployment**  
1️⃣ Build the Next.js application  
```bash
cd frontend
npm run build
```
2️⃣ Deploy to **Vercel / Netlify**  
3️⃣ Configure **environment variables**  
4️⃣ Set up **custom domain**  
5️⃣ Configure **SSL**  

---

## 🤝 Contributing  

1️⃣ **Fork the repository**  
2️⃣ **Create a feature branch**  
```bash
git checkout -b feature/AmazingFeature
```
3️⃣ **Commit your changes**  
```bash
git commit -m "Add some AmazingFeature"
```
4️⃣ **Push to GitHub**  
```bash
git push origin feature/AmazingFeature
```
5️⃣ **Open a Pull Request** 🎉  

---

## 📜 License  
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👥 Team  

| Role               | Name       |
|--------------------|-----------|
| **Project Lead**   | Dr. XYZ   |
| **Frontend Dev**   | Name      |
| **Backend Dev**    | Name      |
| **UI/UX Designer** | Name      |

---

## 📞 Contact  

📧 **Email**: [ecell@iiitranchi.ac.in](mailto:ecell@iiitranchi.ac.in)  
🌐 **Website**: [E-Cell IIIT Ranchi](https://ecell.iiitranchi.ac.in)  
🔗 **LinkedIn**: [E-Cell IIIT Ranchi](https://linkedin.com/company/ecell-iiitranchi)  

---

## 🙏 Acknowledgments  
Special thanks to:
- **IIIT Ranchi Administration**  
- **Faculty Advisors**  
- **Student Contributors**  
```
