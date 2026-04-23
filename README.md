# 📚 Book Store Web App

🌐 **Demo**  
- 👉 Live: https://sach-kct5.onrender.com  
- 👉 Source Code: https://github.com/nhantsl/Sach  

---

## 📌 Giới thiệu

Đây là ứng dụng web bán sách đơn giản được xây dựng bằng **Node.js + Express** theo mô hình backend phân tầng.

Ứng dụng tập trung vào việc mô phỏng các chức năng cơ bản của một hệ thống e-commerce:

- Hiển thị danh sách sản phẩm
- Tìm kiếm & lọc
- Quản lý giỏ hàng
- CRUD sản phẩm (Admin)

---

## 🧪 Tài khoản demo

Dùng để test trong môi trường development:

| Role  | Username | Password | Quyền |
|------|--------|--------|------|
| Admin | admin | 1 | Quản trị hệ thống |
| User  | user  | pass | Người dùng |

---

## 🚀 Công nghệ sử dụng

### 🔧 Backend
- Node.js (ES Modules)
- Express.js
- EJS (Template Engine)

### 🗄️ Database
- TiDB Cloud (MySQL-compatible)
- mysql2

### 🌍 Deployment
- Render (Server)
- TiDB Cloud (Database)

### ⚙️ Khác
- express-session
- dotenv
- morgan
- method-override
- Tailwind CSS

---

## 🏗️ Cấu trúc project

```
project/
├── src/
│   ├── app.js
│   ├── controllers/
│   ├── services/
│   ├── middlewares/
│
├── routers/
├── models/
├── views/
├── public/
├── .env
├── server.js
└── package.json
```

---

## 🔄 Kiến trúc hệ thống

```
Route → Controller → Service  → Database
```

### Giải thích:

- **Controller**: nhận request, trả response
- **Service**: xử lý logic nghiệp vụ
- **Repository**: thao tác với database
- **Database**: lưu trữ dữ liệu

---

## ✨ Tính năng chính

- 📖 Hiển thị danh sách sách
- 🔍 Tìm kiếm theo tên
- 🏷️ Lọc theo danh mục
- 📄 Phân trang
- 🛒 Giỏ hàng (session-based)
- ➕ Thêm sản phẩm
- ❌ Xóa sản phẩm

---