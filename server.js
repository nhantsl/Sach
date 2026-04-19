import app from './src/app.js';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server chạy ở port ${PORT}`);
    console.log("SESSION_SECRET:", process.env.SESSION_SECRET);
});