# 📝 Accounts Demo

Thông tin các tài khoản test để dùng trong môi trường phát triển:

| Loại tài khoản | Username | Password | Quyền hạn |
|----------------|----------|----------|-----------|
| Admin          | admin    | 1        | Quản trị hệ thống |
| User           | user     | pass     | User bình thường |

---
# 📚 Book Store Web App
🌐 Demo

👉 Live: https://sach-kct5.onrender.com
👉 Repo: https://github.com/nhantsl/Sach

## 📌 Giới thiệu

Đây là ứng dụng web bán sách đơn giản xây dựng bằng Node.js + Express theo kiến trúc backend cơ bản

Ứng dụng cho phép:

* Phân trang
* Tìm kiếm & lọc theo danh mục
* Quản lý giỏ hàng (session)
* CRUD sản phẩm (Admin)


---

## 🚀 Công nghệ sử dụng

**Backend**
Node.js (ES Modules)
Express.js
EJS (Template Engine)
**Database**
TiDB (MySQL-compatible)
mysql2 (driver)
**Deployment**
Server: Render
Database: TiDB Cloud
**Other**
express-session
dotenv
morgan
method-override
Tailwind CSS
---

## 🏗️ Cấu trúc project

```
project/
├── src/
│   ├── app.js
│   ├── services/
│   ├── repositories/
|   |── controllers/
|   |── middlewares/
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

## 🔄 Kiến trúc

```
Route → Controller → Service → Database
```

* **Controller**: xử lý request/response
* **Service**: xử lý business logic
* **Model/DB**: truy vấn dữ liệu

---

## ✨ Tính năng chính

* 📖 Hiển thị danh sách sách
* 🔍 Tìm kiếm sản phẩm theo tên
* 🏷️ Lọc theo danh mục
* 📄 Phân trang
* 🛒 Giỏ hàng (session)
* ➕ Thêm / ❌ Xóa sản phẩm

---