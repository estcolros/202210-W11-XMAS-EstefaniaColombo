import { Details } from './details';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { mockRobot1 } from '../../hooks/testing.mock';
import { RobotType } from '../../models/robot.model';

describe('Given Robot Update component', () => {
    describe('When it has been render', () => {
        const handleUpdate = jest.fn();
        const robot = mockRobot1;
        test('Then Robot Update heading should appear', () => {
            render(
                <BrowserRouter>
                    <Details handleUpdate={handleUpdate} item={robot} />
                </BrowserRouter>
            );
            const heading = screen.getByRole('heading', {
                name: /Robot ID/i,
            });

            expect(heading).toBeInTheDocument();
        });

        test('Then we should write in inputs and, check the robot has been loaded on the input and send', () => {
            const robotData: Partial<RobotType> = {
                name: 'Robot 1',
                creator: 'User 1',
                velocity: '1',
                resistance: '1',
            };
            render(
                <BrowserRouter>
                    <Details handleUpdate={handleUpdate} item={robot} />
                </BrowserRouter>
            );
            const inputElement = screen.queryAllByRole('textbox');
            expect(inputElement[0]).toHaveValue(mockRobot1.name);
            userEvent.type(inputElement[0], robotData.name as string);
            expect(inputElement[0]).toHaveValue(
                mockRobot1.name + robotData.name
            );
        });
    });
});
