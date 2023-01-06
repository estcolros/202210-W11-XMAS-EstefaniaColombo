import { Link } from 'react-router-dom';
import './home.page.scss';
import srcImage from './logo.png';

export default function HomePage() {
    const robots = JSON.parse(sessionStorage.getItem('robots') as string);
    return (
        <>
            <h2>Home</h2>
            <p>
                At this moment there are {robots ? robots : 0} robots available.
            </p>
            <p>{robots ? <img src={srcImage} alt="" /> : ''}</p>
            <Link to={'/robots'}>
                <button className="btn">Explorer</button>
            </Link>
        </>
    );
}
