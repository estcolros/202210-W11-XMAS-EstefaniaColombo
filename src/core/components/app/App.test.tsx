import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { App } from './App';

describe('Given App component', () => {
    describe('When it has been render', () => {
        test('Then its child components should be render also with its title', () => {
            render(
                <Router>
                    <App />
                </Router>
            );
            const elementHeader = screen.getByRole('heading', {
                name: 'Robotics',
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
