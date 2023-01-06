import { RobotType } from '../../models/robot.model';

export function Details({ item }: { item: RobotType }) {
    return (
        <section>
            <h2>Details of robot {item.name}</h2>
            <img src={item.imgUrl} alt={item.name}></img>
            <div className="robot-details">
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
        </section>
    );
}
