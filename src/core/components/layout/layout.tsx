import { items } from '../app/App';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header>
                <Menu items={items}></Menu>
            </Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
