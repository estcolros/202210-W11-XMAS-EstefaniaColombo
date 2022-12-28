export function Header({ children }: { children: JSX.Element }) {
    const title = 'Robots challenge';

    return (
        <header aria-label="title">
            <h1>{title}</h1>
            {children}
        </header>
    );
}
