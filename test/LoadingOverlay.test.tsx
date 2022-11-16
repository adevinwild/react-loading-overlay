import React from 'react';
import { Default as LoadingOverlay } from '../stories/LoadingOverlay.stories';
import { render } from '@testing-library/react';

describe('LoadingOverlay', () => {
  it('renders without crashing when the `visible` prop is set to true', () => {
    const { getByRole } = render(<LoadingOverlay visible />);
    expect(getByRole('status')).toBeInTheDocument();
  });

  it("should not show the component when the 'visible' prop is false", () => {
    const { queryByRole } = render(<LoadingOverlay visible={false} />);
    expect(queryByRole('status')).toBeNull();
  });

  it("should set the size of the spinner when the 'size' prop is set", () => {
    const { getByRole } = render(<LoadingOverlay visible size={64} />);

    expect(getByRole('presentation').getAttribute('width')).toBe('64');
    expect(getByRole('presentation').getAttribute('height')).toBe('64');
  });
});
