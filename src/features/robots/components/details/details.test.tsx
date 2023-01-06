import { Details } from './details';

import { render, screen } from '@testing-library/react';

describe('Given HomePage component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            const title = /Details/i;
            render(
                <Details
                    item={{
                        id: '',
                        name: '',
                        imgUrl: '',
                        isFavourite: false,
                        velocity: '',
                        resistance: '',
                        date: '',
                        creator: '',
                    }}
                />
            );
            const elementHeader = screen.getByRole('heading', {
                name: title,
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
