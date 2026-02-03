import { render, screen } from '../../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe('Header', () => {
  it('renders the header', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders the logo', () => {
    render(<Header />);

    const logo = screen.getByRole('link', { name: /shoplogo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('href', '/');
  });

  it('renders the search button', () => {
    render(<Header />);

    const searchButton = screen.getByRole('button', { name: /open search/i });
    expect(searchButton).toBeInTheDocument();
  });

  it('renders the cart badge', () => {
    render(<Header cartItemCount={5} />);

    const cartButton = screen.getByRole('link', { name: /shopping cart/i });
    expect(cartButton).toBeInTheDocument();
  });

  it('shows cart count when items present', () => {
    render(<Header cartItemCount={5} />);

    const badge = screen.getByText('5');
    expect(badge).toBeInTheDocument();
  });

  it('shows 99+ when cart count exceeds 99', () => {
    render(<Header cartItemCount={150} />);

    const badge = screen.getByText('99+');
    expect(badge).toBeInTheDocument();
  });

  it('expands search input when search button is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const searchButton = screen.getByRole('button', { name: /open search/i });
    await user.click(searchButton);

    const searchInput = screen.getByRole('textbox', { name: /search products/i });
    expect(searchInput).toBeInTheDocument();
  });

  it('cart badge links to cart page', () => {
    render(<Header cartItemCount={3} />);

    const cartButton = screen.getByRole('link', { name: /shopping cart/i });
    expect(cartButton).toHaveAttribute('href', '/cart');
  });
});
