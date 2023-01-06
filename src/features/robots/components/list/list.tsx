import { useEffect } from 'react';
import { useRobots } from '../../hooks/use.robots';
import { Add } from '../add/add';
import { Item } from '../item/item';
import './list.scss';

export function List() {
    const {
        robots,
        handleLoad,
        handleDelete,
        handleAdd,
        handleUpdate,
        handleFavourite,
    } = useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <Add handleAdd={handleAdd}></Add>
            <h3>List of robots</h3>
            {!robots.length ? (
                <p>Loading ....</p>
            ) : (
                <ul className="robots-list">
                    {robots.map((item) => {
                        return (
                            <Item
                                key={item.id}
                                item={item}
                                handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
                                handleFavourite={handleFavourite}
                            />
                        );
                    })}
                </ul>
            )}
        </>
    );
}
