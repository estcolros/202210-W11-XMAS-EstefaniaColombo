import { Robot } from './robot.model';

describe('Given "Robot" data model', () => {
    test('Then it should instantiate a Note', () => {
        const mockName = 'Test Robot1';
        const mockImgUrl = 'Test https://robohash.org/robot1';
        const mockVelocity = 'Test 8';
        const mockResistance = 'Test 2';
        const mockCreator = 'Test user1';

        const result = new Robot(
            mockName,
            mockImgUrl,
            mockVelocity,
            mockResistance,
            mockCreator
        );
        expect(result).toBeInstanceOf(Robot);
        expect(result).toHaveProperty('name', mockName);
        expect(result).toHaveProperty('imgUrl', mockImgUrl);
        expect(result).toHaveProperty('velocity', mockVelocity);
        expect(result).toHaveProperty('resistance', mockResistance);
        expect(result).toHaveProperty('creator', mockCreator);
    });
});
