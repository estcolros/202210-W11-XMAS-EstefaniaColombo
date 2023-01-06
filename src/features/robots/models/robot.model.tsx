export type RobotType = {
    id: string;
    name: string;
    imgUrl: string;
    isFavourite: boolean;
    velocity: string;
    resistance: string;
    date: string;
    creator: string;
};

export class Robot implements RobotType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    static generateDate() {
        const currentDate = new Date();
        return currentDate.toDateString();
    }
    id: string;
    isFavourite: boolean;
    date: string;
    constructor(
        public name: string,
        public imgUrl: string,
        public velocity: string,
        public resistance: string,
        public creator: string
    ) {
        this.id = Robot.generateId();
        this.isFavourite = false;
        this.date = Robot.generateDate();
    }
}
