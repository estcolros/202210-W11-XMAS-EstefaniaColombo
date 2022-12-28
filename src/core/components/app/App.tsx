import { MenuItemsType } from '../../../types/menu.items';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';
import './App.scss';

function App() {
    const items: MenuItemsType = [
        { path: '/home', label: 'Home' },
        { path: '/robots', label: 'Robots' },
        { path: '/favourites', label: 'Favourites' },
    ];

    return (
        <>
            <Layout items={items}>
                <AppRoutes items={items}></AppRoutes>
            </Layout>{' '}
        </>
    );
}
export default App;
