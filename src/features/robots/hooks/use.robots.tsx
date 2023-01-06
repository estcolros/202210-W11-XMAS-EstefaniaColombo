import { useCallback, useEffect, useMemo, useState } from 'react';
import { consoleDebug } from '../../../tools/debug';
import { RobotType } from '../models/robot.model';
import { RobotsRepo } from '../services/repository/robots.repo';

export type UseRobots = {
    getStatus: () => Status;
    robots: Array<RobotType>;
    handleLoad: () => Promise<void>;
    handleAdd: (robotData: RobotType) => Promise<void>;
    handleDelete: (id: RobotType['id']) => Promise<void>;
    handleUpdate: (robot: Partial<RobotType>) => Promise<void>;
    handleFavourite: (robot: Partial<RobotType>) => Promise<void>;
};
type Status = 'Starting' | 'Loading' | 'Loaded';

export function useRobots(): UseRobots {
    const repo = useMemo(() => new RobotsRepo(), []);

    const initialState: Array<RobotType> = [];
    const [robots, setRobots] = useState(initialState);

    const initialStatus = 'Starting' as Status;
    const [status, setStatus] = useState(initialStatus);

    const getStatus = () => status;

    useEffect(() => {
        sessionStorage.setItem('robots', JSON.stringify(robots.length));
    }, [robots]);
    const handleLoad = useCallback(async () => {
        try {
            const robotList = await repo.load();
            setStatus('Loading');
            setStatus('Loaded');
            consoleDebug('LOAD Robots');
            setRobots(robotList);
        } catch (error) {
            handleError(error as Error);
        }
    }, [repo]);

    const handleAdd = async (robot: RobotType) => {
        try {
            setRobots([...robots, robot]);
            await repo.create(robot);
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleUpdate = async (robot: Partial<RobotType>) => {
        try {
            setRobots(
                robots.map((item) =>
                    item.id === robot.id ? { ...item, ...robot } : item
                )
            );
            await repo.update(robot);
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleDelete = async (id: RobotType['id']) => {
        try {
            setRobots(robots.filter((item) => item.id !== id));
            await repo.delete(id);
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleFavourite = async function (robot: Partial<RobotType>) {
        try {
            robot.isFavourite = !robot.isFavourite;
            setRobots(
                robots.map((item) =>
                    item.id === robot.id ? { ...item, ...robot } : item
                )
            );
            await repo.update(robot);
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleError = (error: Error) => {
        consoleDebug(error.message);
    };

    return {
        getStatus,
        robots,
        handleLoad,
        handleAdd,
        handleDelete,
        handleUpdate,
        handleFavourite,
    };
}
