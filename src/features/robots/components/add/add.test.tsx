import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Add } from './add';

describe('Given "Add" component in "Robots" page', () => {
    const handleAdd = jest.fn();

    beforeEach(() => {
        render(<Add handleAdd={handleAdd}></Add>);
    });

    describe('When component is call with a DOM implementation', () => {
        test(`Then it should be render with its title`, () => {
            const addTitle = screen.getByRole('heading', {
                name: 'Add Robot',
            });

            expect(addTitle).toBeInTheDocument();
        });
    });

    describe('When data are provided in the form', () => {
        const mockName = 'Test name';
        const mockVelocity = 'Test velocity';
        const mockResistence = 'Test resistence';
        const mockCreator = 'Test creator name';
        let inputElements: Array<HTMLElement>;
        let elementButton: HTMLElement;
        beforeEach(() => {
            inputElements = screen.getAllByRole('textbox');
            elementButton = screen.getByRole('button');
        });
        test('Then form could be used for type content', () => {
            expect(inputElements[0]).toBeInTheDocument();
            expect(inputElements[1]).toBeInTheDocument();
            expect(inputElements[2]).toBeInTheDocument();
            expect(inputElements[3]).toBeInTheDocument();
            userEvent.type(inputElements[0], mockName);
            userEvent.type(inputElements[1], mockVelocity);
            userEvent.type(inputElements[2], mockResistence);
            userEvent.type(inputElements[3], mockCreator);
            expect(inputElements[0]).toHaveValue(mockName);
            expect(inputElements[1]).toHaveValue(mockVelocity);
            expect(inputElements[2]).toHaveValue(mockResistence);
            expect(inputElements[3]).toHaveValue(mockCreator);
        });
        test('Then form could be used for send the function received in props', () => {
            userEvent.type(inputElements[0], mockName);
            userEvent.type(inputElements[1], mockVelocity);
            userEvent.type(inputElements[2], mockResistence);
            userEvent.type(inputElements[3], mockCreator);
            userEvent.click(elementButton);
            expect(handleAdd).toHaveBeenCalled();
        });
        test('Then form could be used also without value for responsible', () => {
            userEvent.type(inputElements[0], mockName);
            userEvent.click(elementButton);
            expect(handleAdd).toHaveBeenCalled();
        });
    });
});
