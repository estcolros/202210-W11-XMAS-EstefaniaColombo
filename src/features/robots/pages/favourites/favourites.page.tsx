import { useEffect } from 'react';
import { Item } from '../../components/item/item';
import { useRobots } from '../../hooks/use.robots';

export default function FavouritesPage() {
    const { robots, handleLoad, handleDelete, handleUpdate, handleFavourite } =
        useRobots();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <h2>My favourites robots</h2>
            {!robots.length ? (
                <p>Loading ....</p>
            ) : (
                <ul className="robots-list">
                    {robots
                        .filter((item) => item.isFavourite)
                        .map((item) => {
                            return (
                                <Item
                                    key={item.id}
                                    item={item}
                                    handleUpdate={handleUpdate}
                                    handleDelete={handleDelete}
                                    handleFavourite={handleFavourite}
                                ></Item>
                            );
                        })}
                </ul>
            )}
        </>
    );
}
