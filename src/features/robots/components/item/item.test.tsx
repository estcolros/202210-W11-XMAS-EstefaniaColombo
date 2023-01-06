import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
                <Item
                    item={mockRobot}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                    handleFavourite={handleFavourite}
                ></Item>
            );
            const btnDelete = screen.getByRole('button', {
                name: 'delete',
            });
            expect(btnDelete).toBeInTheDocument();
            userEvent.click(btnDelete);
            expect(handleDelete).toHaveBeenCalledTimes(1);

            const btnUpdate = screen.getByRole('button', {
                name: 'edit',
            });
            expect(btnUpdate).toBeInTheDocument();
            userEvent.click(btnUpdate);
            expect(handleUpdate).toHaveBeenCalledTimes(1);

            const btnAddFavourite = screen.getByRole('button', {
                name: 'favorite',
            });
            expect(btnAddFavourite).toBeInTheDocument();
            userEvent.click(btnAddFavourite);
            expect(handleFavourite).toHaveBeenCalledTimes(1);
        });
    });
});
