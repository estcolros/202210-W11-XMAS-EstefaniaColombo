import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../../../features/home/pages/home.page';
import RobotsPage from '../../../features/robots/robots.page';
import FavouritesPage from '../../../features/favourites/favourites.page';

import { MenuItemsType } from '../../../types/menu.items';

export function AppRoutes({ items }: { items: MenuItemsType }) {
    return (
        <Routes>
            <Route path={''} element={<HomePage></HomePage>}></Route>
            <Route path={items[0].path} element={<HomePage></HomePage>}></Route>
            <Route
                path={items[1].path}
                element={<RobotsPage></RobotsPage>}
            ></Route>
            <Route
                path={items[2].path}
                element={<FavouritesPage></FavouritesPage>}
            ></Route>

            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
