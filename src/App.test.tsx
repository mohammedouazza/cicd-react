import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

const TestingComponent = () => {
  return (
    <>
      <p>test: 0</p>
    </>
  );
};
describe('TestingComponent', () => {
  it('should render test: 0', () => {
    render(<TestingComponent />);

    expect(screen.getByText(/test: 0/i)).toBeInTheDocument();
  });
});
