/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor, act } from '@testing-library/react';
import { useRobots } from '../../hooks/use.robots';
import FavouritesPage from './favourites.page';

jest.mock('../../hooks/use.robots');

const mockRobots = [
    { id: '1', isFavourite: true },
    { id: '2', isFavourite: false },
];
describe('Given "List" component', () => {
    beforeEach(() => {
        (useRobots as jest.Mock).mockReturnValue({
            robots: mockRobots,
            handleLoad: jest.fn(),
            handleAdd: jest.fn(),
            handleDelete: jest.fn(),
            handleUpdate: jest.fn(),
            handleFavourite: jest.fn(),
        });
    });
    describe('When it is initially instantiated without data', () => {
        beforeEach(async () => {
            await act(async () => {
                render(<FavouritesPage></FavouritesPage>);
            });
        });
        test(`Then component should be render the loading`, () => {
            const elementTitle = screen.getByRole('heading', {
                name: 'My favourites robots',
            });
            const elementList = screen.getByRole('list');
            expect(elementList).toBeInTheDocument();
            expect(elementTitle).toBeInTheDocument();
        });
    });
    describe('When it load the data', () => {
        beforeEach(async () => {
            await act(async () => {
                render(<FavouritesPage></FavouritesPage>);
            });
        });
        test(`Then it should be render the data`, async () => {
            await waitFor(() => {
                expect(useRobots().handleLoad).toHaveBeenCalled();
            });
            await waitFor(() => {
                const robotComponents = screen.getAllByRole('button');
                expect(robotComponents).toHaveLength(3);
            });
        });
    });
});
