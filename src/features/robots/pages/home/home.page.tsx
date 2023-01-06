import { Link } from 'react-router-dom';
import './home.page.scss';
import srcImage from './logo.png';

export default function HomePage() {
    const counter = JSON.parse(sessionStorage.getItem('counter') as string);
    return (
        <>
            <h2>Home</h2>
            <p>
                At this moment there are {counter ? counter : 0} robots
                available.
            </p>
            <p>{counter ? <img src={srcImage} alt="" /> : ''}</p>
            <Link to={'/robots'}>
                <button className="btn">Explorer</button>
            </Link>
        </>
    );
}
