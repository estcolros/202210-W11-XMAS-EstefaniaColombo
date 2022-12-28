import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { MenuItemsType } from '../../../types/menu.items';
import { Menu } from '../menu/menu';
export function Layout({
    items,
    children,
}: {
    items: MenuItemsType;
    children: JSX.Element;
}) {
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
