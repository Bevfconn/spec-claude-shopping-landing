import { render, screen } from '../../../../tests/test-utils';
import { Promotions } from './Promotions';

describe('Promotions', () => {
  it('renders the promotions section', () => {
    render(<Promotions />);

    const section = screen.getByRole('region', { name: /promotions/i });
    expect(section).toBeInTheDocument();
  });

  it('renders section heading', () => {
    render(<Promotions />);

    const heading = screen.getByRole('heading', { name: /current promotions/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders promotion cards', () => {
    render(<Promotions />);

    // Should render promotion cards with headlines
    const headlines = screen.getAllByRole('heading', { level: 3 });
    expect(headlines.length).toBeGreaterThan(0);
  });

  it('renders promotion headlines', () => {
    render(<Promotions />);

    // Promotion cards should have headings
    const headlines = screen.getAllByRole('heading', { level: 3 });
    expect(headlines.length).toBeGreaterThan(0);
  });

  it('renders CTA buttons', () => {
    render(<Promotions />);

    // Should have CTA links
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('has proper accessibility attributes', () => {
    render(<Promotions />);

    const section = screen.getByRole('region', { name: /promotions/i });
    expect(section).toHaveAttribute('aria-label');
  });
});
