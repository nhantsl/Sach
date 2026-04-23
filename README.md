# 📝 Accounts Demo

Thông tin các tài khoản test để dùng trong môi trường phát triển:

| Loại tài khoản | Username | Password | Quyền hạn |
|----------------|----------|----------|-----------|
| Admin          | admin    | 1        | Quản trị hệ thống |
| User           | user     | pass     | User bình thường |

---
# 📚 Book Store Web App

## 📌 Giới thiệu

Đây là project web bán sách đơn giản được xây dựng bằng Node.js và Express.
Ứng dụng cho phép người dùng xem danh sách sách, tìm kiếm, lọc theo danh mục, phân trang và quản lý giỏ hàng.

Mục tiêu của project:

* Áp dụng kiến trúc backend chuẩn (MVC + Service + Repository)
* Làm quen với xử lý dữ liệu, session và MySQL
* Chuẩn bị cho vị trí Fresher Backend Developer

---

## 🚀 Công nghệ sử dụng

* **Node.js**
* **Express.js**
* **EJS (Template Engine)**
* **MySQL (mysql2)**
* **express-session**
* **dotenv**
* **tailwind**

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
