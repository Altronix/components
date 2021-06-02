import React from 'react';
import { render } from '@testing-library/react';

import { Devices } from './devices';

describe('Devices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Devices data={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
