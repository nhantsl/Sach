const requireRole = (role) => {
    return (req, res, next) => {
        if (!req.session.user) {
            return res.status(401).json({
                message: 'Chưa đăng nhập'
            });
        }

        if (req.session.user.role !== role) {
            return res.status(403).json({
                message: 'Không có quyền truy cập'
            });
        }

        next();
    };
};

export default requireRole;