export function Footer() {
    return (
        <footer aria-label="footer">
            <address>
                Estefania Colombo Rosario | XMAS Challenge 🤖 | ISDI Coders{' '}
                {new Date().toLocaleDateString()}
            </address>
            {/* <p>{new Date().toLocaleDateString()}</p> */}
        </footer>
    );
}
