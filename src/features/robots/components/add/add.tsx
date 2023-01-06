import { SyntheticEvent, useState } from 'react';
import { Robot, RobotType } from '../../models/robot.model';
import './add.scss';

export function Add({ handleAdd }: { handleAdd: (item: RobotType) => void }) {
    const initialFormData: Partial<RobotType> = {
        name: '',
        imgUrl: '',
        velocity: '',
        resistance: '',
        creator: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        formData.imgUrl = `https://robohash.org/${formData.name}`;
        handleAdd(
            new Robot(
                formData.name as string,
                formData.imgUrl as string,
                formData.velocity as string,
                formData.resistance as string,
                formData.creator as string
            )
        );
        setFormData(initialFormData);
    };

    return (
        <section className="add-robots">
            <h3>Add Robot</h3>
            <form className="add-robot__form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Write a name"
                        value={formData.name}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="velocity">Velocity</label>
                    <input
                        type="text"
                        name="velocity"
                        id="velocity"
                        min="0"
                        max="10"
                        placeholder="Write a velocity 1-10"
                        value={formData.velocity}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="resistance">Resistance</label>
                    <input
                        type="text"
                        name="resistance"
                        id="resistance"
                        min="0"
                        max="10"
                        placeholder="Write a resistance 1-10"
                        value={formData.resistance}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="creator">Creator</label>
                    <input
                        type="text"
                        name="creator"
                        id="creator"
                        placeholder="Write your name"
                        value={formData.creator}
                        onInput={handleInput}
                        required
                    />
                </div>

                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </section>
    );
}
