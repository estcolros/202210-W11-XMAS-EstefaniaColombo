/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import { useRobots } from '../../hooks/use.robots';
import { Robot } from '../../models/robot.model';
import { List } from './list';

jest.mock('../../hooks/use.robots');

const mockName = 'Test name';
const mockImgUrl = 'Test imgUrl';
const mockVelocity = 'Test velocity';
const mockResistance = 'Test resistance';
const mockCreator = 'Test creator';
const mockRobot = new Robot(
    mockName,
    mockImgUrl,
    mockVelocity,
    mockResistance,
    mockCreator
);
describe('Given "List" component', () => {
    beforeEach(() => {
        (useRobots as jest.Mock).mockReturnValue({
            robots: [mockRobot],
            handleLoad: jest.fn(),
            handleAdd: jest.fn(),
            handleDelete: jest.fn(),
            handleUpdate: jest.fn(),
        });
    });
    describe('When it is initially instantiated without data', () => {
        beforeEach(async () => {
            await act(async () => {
                render(<List></List>);
            });
        });
        test(`Then component should be render the loading`, () => {
            const elementTitle = screen.getByRole('heading', {
                name: 'List of robots',
            });
            const elementName = screen.getByText('Name');
            const elementVelocity = screen.getByText('Velocity');
            const elementResistance = screen.getByText('Resistance');
            const elementUser = screen.getByText('Creator');
            expect(elementTitle).toBeInTheDocument();
            expect(elementName).toBeInTheDocument();
            expect(elementVelocity).toBeInTheDocument();
            expect(elementResistance).toBeInTheDocument();
            expect(elementUser).toBeInTheDocument();
        });
    });
});
