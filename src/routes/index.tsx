import { Routes, Route, Navigate } from 'react-router-dom';
import ROUTES from './routes';
import Home from '../pages/home/Home';
import Login from '../pages/auth/Login';
import NotFound from '../pages/not-found/NotFound';

// TODO: refactor it using JWT token
const isLogin = false;

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={
                isLogin
                    ? <Home />
                    : <Navigate to={ROUTES.LOGIN} replace />}
            />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
