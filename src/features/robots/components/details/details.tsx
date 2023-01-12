import { SyntheticEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RobotType } from '../../models/robot.model';
import './details.scss';

export function Details({
    handleUpdate,
    item,
}: {
    handleUpdate: (robot: RobotType) => Promise<void>;
    item: RobotType;
}) {
    const initialFormData: Partial<RobotType> = {
        name: item?.name,
        velocity: item?.velocity,
        resistance: item?.resistance,
        creator: item?.creator,
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        console.log('SAVED ROBOT');
        ev.preventDefault();
        handleUpdate(formData as RobotType);
        setFormData(initialFormData);
    };
    useEffect(() => {
        const robotDetails = {
            name: item?.name,
            velocity: item?.velocity,
            resistance: item?.resistance,
            creator: item?.creator,
            id: item?.id,
        };
        setFormData(robotDetails);
    }, [item]);
    return (
        <section className="details-list">
            <h2>Robot ID: {formData.id}</h2>

            <form className="details-items__info" onSubmit={handleSubmit}>
                <div>
                    <img src={item?.imgUrl} alt={formData.name}></img>

                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name of robot"
                        value={formData.name}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="velocity">Velocity: </label>
                    <input
                        type="text"
                        name="velocity"
                        id="velocity"
                        pattern="[0-9]+"
                        value={formData.velocity}
                        onInput={handleInput}
                        placeholder="Velocity of robot"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="resistance">Resistance: </label>
                    <input
                        type="text"
                        name="resistance"
                        id="resistance"
                        pattern="[0-9]+"
                        value={formData.resistance}
                        onInput={handleInput}
                        placeholder="Resistance of robot"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="user">Creator: </label>
                    <input
                        type="text"
                        name="creator"
                        id="user"
                        value={formData.creator}
                        onInput={handleInput}
                        placeholder="Creator of robot"
                        required
                    />
                </div>
                <div>
                    <button className="btn-edit" type="submit">
                        <Link to={`/robots/`}> Close</Link>
                    </button>
                    <button className="btn-edit" type="submit">
                        Save
                    </button>
                </div>
            </form>
        </section>
    );
}
