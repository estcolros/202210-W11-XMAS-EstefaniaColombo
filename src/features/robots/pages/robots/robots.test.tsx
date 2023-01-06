import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import RobotsPage from './robots.page';
describe('Given RobotsPage component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <Router>
                    <RobotsPage></RobotsPage>
                </Router>
            );
            const elementHeader = screen.getByRole('heading', {
                name: 'Robots',
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
