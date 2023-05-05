import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('with only first param', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 1 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 1 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('2');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 1 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
    });
});
