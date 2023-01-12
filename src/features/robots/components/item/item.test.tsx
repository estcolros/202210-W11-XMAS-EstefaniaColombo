import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Robot } from '../../models/robot.model';
import { Item } from './item';

describe('Given Robot component', () => {
    const mockRobotName = 'Test name';
    const mockImage = 'Test image';
    const mockVelocity = 'Test velocity';
    const mockSResistance = 'Test resistance';
    const mockCreator = 'Test creator name';
    const mockRobot = new Robot(
        mockRobotName,
        mockImage,
        mockVelocity,
        mockSResistance,
        mockCreator
    );
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();
    const handleFavourite = jest.fn();

    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <BrowserRouter>
                    <Item
                        item={mockRobot}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                        handleFavourite={handleFavourite}
                    ></Item>
                </BrowserRouter>
            );
            const textElement = screen.getByText(/Creator:/i);
            expect(textElement).toBeInTheDocument();
        });

        test('Then buttons should work', () => {
            render(
                <BrowserRouter>
                    <Item
                        item={mockRobot}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                        handleFavourite={handleFavourite}
                    ></Item>
                </BrowserRouter>
            );
            const buttonElement = screen.queryAllByRole('button');
            fireEvent.click(buttonElement[0]);
            fireEvent.click(buttonElement[2]);
            expect(handleDelete).toHaveBeenCalled();
            expect(handleFavourite).toHaveBeenCalled();
        });
    });
});
