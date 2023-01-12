import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { DetailsPage } from './details.page';

describe('Given Details Page component', () => {
    describe('When it has been render', () => {
        test('Then an edit form should have been render', () => {
            render(
                <BrowserRouter>
                    <DetailsPage></DetailsPage>
                </BrowserRouter>
            );
            const textElement = screen.getByText(/Robot edition/i);
            expect(textElement).toBeInTheDocument();
        });
    });
});
