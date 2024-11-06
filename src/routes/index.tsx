import { Routes, Route } from 'react-router-dom';
import ROUTES from './routes';
import Home from '../pages/home/Home';
import NotFound from '../pages/not-found/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
