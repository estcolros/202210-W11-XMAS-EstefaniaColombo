import { MenuItemsType } from '../../types/menu.items';
import { Layout } from '../layout/layout';
import { AppLazyRoutes } from '../routes/app.lazy.routes';
import './App.scss';

export const items: MenuItemsType = [
    { path: '/home', label: 'Home' },
    { path: '/robots', label: 'Robots' },
    { path: '/favourites', label: 'Favourites' },
];
export function App() {
    return (
        <>
            <Layout>
                <AppLazyRoutes items={items}></AppLazyRoutes>
            </Layout>
        </>
    );
}
export default App;
