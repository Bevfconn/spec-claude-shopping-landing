import { render, screen } from '../../../../tests/test-utils';
import { Testimonials } from './Testimonials';

describe('Testimonials', () => {
  it('renders the testimonials section', () => {
    render(<Testimonials />);

    const section = screen.getByRole('region', { name: /testimonials/i });
    expect(section).toBeInTheDocument();
  });

  it('renders section heading', () => {
    render(<Testimonials />);

    const heading = screen.getByRole('heading', { name: /what our customers say/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders testimonial cards', () => {
    render(<Testimonials />);

    // Should render customer names
    const names = screen.getAllByRole('heading', { level: 6 });
    expect(names.length).toBeGreaterThan(0);
  });

  it('renders star ratings', () => {
    render(<Testimonials />);

    // Rating components should be present
    const ratings = screen.getAllByRole('img', { name: /rating/i });
    expect(ratings.length).toBeGreaterThan(0);
  });

  it('renders customer avatars', () => {
    render(<Testimonials />);

    // Should have avatar images or initials
    const avatars = screen.getAllByRole('img');
    expect(avatars.length).toBeGreaterThan(0);
  });

  it('renders review text', () => {
    render(<Testimonials />);

    // Review texts should be wrapped in quotes
    const quotes = screen.getAllByText(/"/);
    expect(quotes.length).toBeGreaterThan(0);
  });

  it('has proper accessibility attributes', () => {
    render(<Testimonials />);

    const section = screen.getByRole('region', { name: /testimonials/i });
    expect(section).toHaveAttribute('aria-label');
  });
});
