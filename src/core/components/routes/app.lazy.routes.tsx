import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MenuItemsType } from '../../types/menu.items';

const Home = lazy(
    () => import('../../../features/robots/pages/home/home.page')
);
const Robots = lazy(
    () => import('../../../features/robots/pages/robots/robots.page')
);
const Favourites = lazy(
    () => import('../../../features/robots/pages/favourites/favourites.page')
);
export function AppLazyRoutes({ items }: { items: MenuItemsType }) {
    return (
        <Suspense>
            <Routes>
                <Route path={''} element={<Home></Home>}></Route>
                <Route path={items[0].path} element={<Home></Home>}></Route>
                <Route path={items[1].path} element={<Robots></Robots>}></Route>
                <Route
                    path={items[2].path}
                    element={<Favourites></Favourites>}
                ></Route>
                <Route
                    path={'*'}
                    element={<Navigate to="" replace></Navigate>}
                ></Route>
            </Routes>
        </Suspense>
    );
}
