import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as debug from '../../../tools/debug';
import { RobotsRepo } from '../services/repository/robots.repo';
import {
    mockAddRobot,
    mockNoValidRepoResponse,
    mockRobot1,
    mockRobot2,
    mockUpdateRobot,
    mockValidRepoResponse,
} from './testing.mock';
import { useRobots } from './use.robots';

jest.mock('../services/repository/robots.repo');

RobotsRepo.prototype.load = jest.fn();
RobotsRepo.prototype.create = jest.fn();
RobotsRepo.prototype.update = jest.fn();
RobotsRepo.prototype.delete = jest.fn();

describe(`Given useRobots (custom hook)
            render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    let spyConsole: jest.SpyInstance;
    let buttons: Array<HTMLElement>;
    beforeEach(() => {
        TestComponent = () => {
            const {
                handleLoad,
                robots,
                getStatus,
                handleAdd,
                handleUpdate,
                handleDelete,
                handleFavourite,
            } = useRobots();
            return (
                <>
                    <button onClick={handleLoad}>Load</button>
                    <button onClick={() => handleAdd(mockAddRobot)}>Add</button>
                    <button onClick={() => handleUpdate(mockUpdateRobot)}>
                        Update
                    </button>
                    <button onClick={() => handleDelete(mockRobot2.id)}>
                        Delete
                    </button>
                    <button onClick={() => handleFavourite(mockRobot2)}>
                        Favourite
                    </button>
                    {getStatus() !== 'Loaded' ? (
                        <p>Loading</p>
                    ) : (
                        <div>
                            <p>Loaded</p>
                            <ul>
                                {robots.map((robot) => (
                                    <li key={robot.id}>{robot.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            );
        };
        render(<TestComponent />);
        buttons = screen.getAllByRole('button');
        spyConsole = jest.spyOn(debug, 'consoleDebug');
    });
    describe(`When the repo is working OK`, () => {
        beforeEach(mockValidRepoResponse);

        test('Then its function handleLoad should be add notes to the state', async () => {
            expect(await screen.findByText(/loading/i)).toBeInTheDocument();
            userEvent.click(buttons[0]);
            expect(RobotsRepo.prototype.load).toHaveBeenCalled();
            expect(
                await screen.findByText(mockRobot1.name)
            ).toBeInTheDocument();
            expect(
                await screen.findByText(mockRobot2.name)
            ).toBeInTheDocument();
            expect(spyConsole).toBeCalledWith('LOAD Robots');
        });

        test('Then its function handleAdd should be used', async () => {
            userEvent.click(buttons[0]);
            userEvent.click(buttons[1]);
            expect(RobotsRepo.prototype.create).toHaveBeenCalled();
            expect(
                await screen.findByText(mockAddRobot.name)
            ).toBeInTheDocument();
        });

        test('Then its function handleUpdate should be used', async () => {
            userEvent.click(buttons[0]);
            userEvent.click(buttons[2]);
            expect(RobotsRepo.prototype.update).toHaveBeenCalled();
            expect(
                await screen.findByText(mockUpdateRobot.name)
            ).toBeInTheDocument();
        });

        test('Then its function handleDelete should be used', async () => {
            userEvent.click(buttons[0]);
            expect(RobotsRepo.prototype.load).toHaveBeenCalled();
            userEvent.click(buttons[3]);
            expect(RobotsRepo.prototype.delete).toHaveBeenCalled();
            expect(
                await screen.findByText(mockRobot2.name)
            ).toBeInTheDocument();
        });
        test('Then its function handleFavourite should be used', async () => {
            userEvent.click(buttons[0]);
            expect(RobotsRepo.prototype.load).toHaveBeenCalled();
            userEvent.click(buttons[4]);
            expect(RobotsRepo.prototype.update).toHaveBeenCalled();
            expect(
                await screen.findByText(mockRobot2.name)
            ).toBeInTheDocument();
        });
    });
    describe(`When the repo is NOT working OK`, () => {
        beforeEach(mockNoValidRepoResponse);
        test('Then its function handleLoad should be used', async () => {
            userEvent.click(buttons[0]);
            expect(RobotsRepo.prototype.load).toHaveBeenCalled();
            await waitFor(() => {
                expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
            });
        });
        test('Then its function handleAdd should be used', async () => {
            userEvent.click(buttons[1]);
            expect(RobotsRepo.prototype.create).toHaveBeenCalled();
            await waitFor(() => {
                expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
            });
        });
        test('Then its function handleUpdate should be used', async () => {
            userEvent.click(buttons[2]);
            expect(RobotsRepo.prototype.update).toHaveBeenCalled();
            await waitFor(() => {
                expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
            });
        });
        test('Then its function handleDelete should be used', async () => {
            userEvent.click(buttons[3]);
            expect(RobotsRepo.prototype.delete).toHaveBeenCalled();
            await waitFor(() => {
                expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
            });
        });
    });
});
