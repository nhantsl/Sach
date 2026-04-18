const user = await authService.login(username, password);

if (!user || user.password !== password) {
    return res.status(401).json({
        message: 'Sai tài khoản hoặc mật khẩu'
    });
}

export default user;