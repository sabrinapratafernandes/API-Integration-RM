import React from 'react';
import { render } from '@testing-library/react';
import Button from '../src/components/Button';
import "@testing-library/jest-dom"

// Teste para verificar se o botão está sendo renderizado com o label correto
test('render button', () => {
    const { getByText } = render(<Button label="testLabel"/>);
    const text = getByText('testLabel');
    expect(text).toBeInTheDocument();
});