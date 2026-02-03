import { render, screen } from '../../../../tests/test-utils';
import { FeaturedProducts } from './FeaturedProducts';

describe('FeaturedProducts', () => {
  it('renders the featured products section', () => {
    render(<FeaturedProducts />);

    const section = screen.getByRole('region', { name: /featured products/i });
    expect(section).toBeInTheDocument();
  });

  it('renders section heading', () => {
    render(<FeaturedProducts />);

    const heading = screen.getByRole('heading', { name: /featured products/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders product cards', () => {
    render(<FeaturedProducts />);

    // Should render product cards (via card links)
    const cards = screen.getAllByRole('link');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('renders product prices', () => {
    render(<FeaturedProducts />);

    // Should have price elements with $ symbol
    const prices = screen.getAllByText(/\$/);
    expect(prices.length).toBeGreaterThan(0);
  });

  it('renders product names', () => {
    render(<FeaturedProducts />);

    // Product cards should have headings for product names
    const productNames = screen.getAllByRole('heading', { level: 3 });
    expect(productNames.length).toBeGreaterThan(0);
  });

  it('has proper accessibility attributes', () => {
    render(<FeaturedProducts />);

    const section = screen.getByRole('region', { name: /featured products/i });
    expect(section).toHaveAttribute('aria-label');
  });

  it('product cards are links', () => {
    render(<FeaturedProducts />);

    const links = screen.getAllByRole('link');
    // Should have at least one product link (uses /products/ path)
    const productLinks = links.filter(link =>
      link.getAttribute('href')?.includes('/products/')
    );
    expect(productLinks.length).toBeGreaterThan(0);
  });
});
