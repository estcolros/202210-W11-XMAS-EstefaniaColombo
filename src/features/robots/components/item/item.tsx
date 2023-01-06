import { RobotType } from '../../models/robot.model';
import './item.scss';

export function Item({
    item,
    handleUpdate,
    handleDelete,
    handleFavourite,
}: {
    item: RobotType;
    handleUpdate: (robot: Partial<RobotType>) => void;
    handleDelete: (id: RobotType['id']) => void;
    handleFavourite: (robot: Partial<RobotType>) => void;
}) {
    const handleClick = () => {
        handleDelete(item.id);
    };
    const handleUpdateClick = () => {
        handleUpdate(item);
    };
    const handleFavouriteClick = () => {
        handleFavourite(item);
    };
    return (
        <li className="robot-items" aria-label="list-item">
            <button className="button-delete" onClick={handleClick}>
                <span className="material-symbols-outlined">delete</span>
            </button>
            <div className="robot-items__info">
                <img src={item.imgUrl} alt={item.name}></img>
                <p>
                    Name: <span>{item.name}</span>
                </p>
                <p>
                    Velocity: <span>{item.velocity}</span>
                </p>
                <p>
                    Resistance: <span>{item.resistance}</span>
                </p>
                <p>
                    Date: <span>{item.date}</span>
                </p>
                <p>
                    Creator: <span>{item.creator}</span>
                </p>
            </div>

            <div className="buttons-item">
                <button className="buttons-item" onClick={handleUpdateClick}>
                    <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="buttons-item" onClick={handleFavouriteClick}>
                    {item.isFavourite ? (
                        <span className="material-symbols-outlined">
                            heart_broken
                        </span>
                    ) : (
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                    )}
                </button>
            </div>
        </li>
    );
}
