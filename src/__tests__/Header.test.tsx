import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  it('ロゴテキストが表示される', () => {
    render(<Header />);
    expect(screen.getByText(/blog/i)).toBeInTheDocument();
  });
}); 