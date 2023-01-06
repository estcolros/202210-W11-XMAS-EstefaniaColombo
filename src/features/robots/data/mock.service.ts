import {
    getStorageList,
    setStorageList,
} from '../../../core/services/storage/storage';
import { Robot, RobotType } from '../models/robot.model';
import { ROBOTS } from './mock.robots';
export const getRobots = async (): Promise<Array<RobotType>> => {
    const data = getStorageList<RobotType>('Robots');
    if (!data.length) {
        setStorageList('Robots', ROBOTS);
        return ROBOTS;
    }
    return data;
};
export const getRobotsDelay = (): Promise<Array<RobotType>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = getStorageList<Robot>('Robots');
            if (!data.length) {
                setStorageList('Robots', ROBOTS);
                resolve(ROBOTS);
            }
            resolve(data);
        }, 2000);
    });
};
export const saveRobots = async (robots: Array<RobotType>) => {
    setStorageList('Robots', robots);
};
