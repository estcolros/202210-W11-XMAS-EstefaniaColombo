import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Details } from '../../components/details/details';
import { useRobots } from '../../hooks/use.robots';

export function DetailsPage() {
    const {
        robots,
        handleLoad,

        handleUpdate,
    } = useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    const itemId = useParams();

    return (
        <>
            <h2>Robot edition</h2>
            <section className="robots-list">
                <div className="robot-item">
                    {robots.map((item) => {
                        if (item.id === itemId.robotId) {
                            return (
                                <Details
                                    key={item.id}
                                    item={item}
                                    handleUpdate={handleUpdate}
                                ></Details>
                            );
                        }
                    })}
                </div>
            </section>
        </>
    );
}
