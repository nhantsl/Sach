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

---

## 🏗️ Cấu trúc project

```
project/
├── src/
│   ├── app.js
│   ├── services/
│   ├── repositories/
│
├── controllers/
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
Route → Controller → Service → Repository → Database
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

## ⚙️ Cài đặt & chạy project

### 1. Clone project

```bash
git clone <your-repo-url>
cd project
```

### 2. Cài dependencies

```bash
npm install
```

### 3. Tạo file `.env`

```env
PORT=3000
SESSION_SECRET=your_secret_key
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=your_db
```

### 4. Chạy project

```bash
npm start
```

👉 Truy cập:

```
http://localhost:3000
```

---

## 📌 API / Routes (cơ bản)

| Method | Route          | Mô tả                   |
| ------ | -------------- | ----------------------- |
| GET    | /              | Hiển thị danh sách sách |
| GET    | /?search=abc   | Tìm kiếm                |
| GET    | /?idCategory=1 | Lọc theo danh mục       |
| POST   | /add           | Thêm sản phẩm           |
| GET    | /remove/:id    | Xóa sản phẩm            |
| GET    | /cart          | Xem giỏ hàng            |

---

## ⚠️ Ghi chú

* Dữ liệu hiện tại được load toàn bộ và filter bằng JavaScript
* Chưa tối ưu query SQL (có thể cải thiện trong tương lai)
* Sử dụng session thay vì JWT

---

## 📈 Hướng phát triển

* Chuyển filter/search sang SQL
* Thêm authentication (JWT)
* Xây dựng REST API (`/api/v1`)
* Kết nối frontend (Vue/React)

---

## 👨‍💻 Tác giả

* Backend Developer (Fresher)
* Mục tiêu: phát triển kỹ năng Node.js & hệ thống backend

---
