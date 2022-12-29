import './header.scss';

export function Header({ children }: { children: JSX.Element }) {
    const title = 'Robotics';

    return (
        <header aria-label="title">
            <h1>{title}</h1>
            {children}
        </header>
    );
}
