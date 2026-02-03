import { render, screen } from '../../../../tests/test-utils';
import { Categories } from './Categories';

describe('Categories', () => {
  it('renders the categories section', () => {
    render(<Categories />);

    const section = screen.getByRole('region', { name: /shop by category/i });
    expect(section).toBeInTheDocument();
  });

  it('renders section heading', () => {
    render(<Categories />);

    const heading = screen.getByRole('heading', { name: /shop by category/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders category cards', () => {
    render(<Categories />);

    // Should render category names
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings.length).toBeGreaterThan(0);
  });

  it('renders category names', () => {
    render(<Categories />);

    // Categories have names displayed
    const categoryNames = screen.getAllByRole('heading', { level: 3 });
    expect(categoryNames.length).toBeGreaterThan(0);
  });

  it('category cards are clickable links', () => {
    render(<Categories />);

    const links = screen.getAllByRole('link');
    // Should have category links (uses /categories/ path)
    const categoryLinks = links.filter(link =>
      link.getAttribute('href')?.includes('/categories/')
    );
    expect(categoryLinks.length).toBeGreaterThan(0);
  });

  it('has proper accessibility attributes', () => {
    render(<Categories />);

    const section = screen.getByRole('region', { name: /shop by category/i });
    expect(section).toHaveAttribute('aria-label');
  });
});
