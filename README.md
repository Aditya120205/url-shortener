# 🔗 URL Shortener

A full-stack URL shortener built with **Next.js** and **MongoDB** that allows users to convert long URLs into short, shareable links. The application provides fast redirection and simple API-based URL generation.

---

## 🚀 Features

* 🔗 Shorten long URLs instantly
* ⚡ Fast redirection using short links
* 🗄️ MongoDB database integration
* 📡 REST API support
* 🧪 API testing done using Postman
* 🌐 Clean and responsive UI

---

## 🛠️ Tech Stack

* **Frontend:** Next.js, React
* **Backend:** Next.js API Routes
* **Database:** MongoDB
* **Testing:** Postman

---

## 📂 Project Structure

```
/app
/api
/lib
/components
/public
.env.local
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Aditya120205/url-shortener.git
cd url-shortener
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root and add:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
```

5. Open in browser:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### ➤ Shorten URL

```
POST /api/generate
```

**Request Body:**

```json
{
  "url": "https://example.com"
}
```

---

### ➤ Redirect

```
GET /[shorturl]
```

---

## 🔐 Environment Variables

| Variable             | Description               |
| -------------------- | ------------------------- |
| MONGODB_URI          | MongoDB connection string |
| NEXT_PUBLIC_BASE_URL | Base URL of the app       |

---

## ⚠️ Important Notes

* `.env.local` is ignored using `.gitignore` for security
* Never expose your database credentials publicly

---

## 📸 Future Improvements

* User authentication
* Analytics for clicks
* Custom short URLs
* QR code generation

---

## 🤝 Contributing

Feel free to fork this repo and submit pull requests.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Aditya**
GitHub: https://github.com/Aditya120205
