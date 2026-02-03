import { render, screen } from '../../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the footer', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('renders the newsletter section', () => {
    render(<Footer />);

    const heading = screen.getByRole('heading', { name: /newsletter/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders newsletter form', () => {
    render(<Footer />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    expect(emailInput).toBeInTheDocument();

    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
    expect(subscribeButton).toBeInTheDocument();
  });

  it('renders footer link sections', () => {
    render(<Footer />);

    // Check for section headings
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /support/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /legal/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /follow us/i })).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);

    // Check for social media buttons
    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('target', '_blank');
  });

  it('renders copyright notice', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyright = screen.getByText(new RegExp(`${currentYear}`));
    expect(copyright).toBeInTheDocument();
  });

  it('validates email input', async () => {
    const user = userEvent.setup();
    render(<Footer />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });

    await user.type(emailInput, 'invalid-email');
    await user.click(subscribeButton);

    // Should show error message
    const errorMessage = await screen.findByText(/valid email/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('shows success message on valid submission', async () => {
    const user = userEvent.setup();
    render(<Footer />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });

    await user.type(emailInput, 'test@example.com');
    await user.click(subscribeButton);

    // Should show success message
    const successMessage = await screen.findByText(/thank you/i, {}, { timeout: 3000 });
    expect(successMessage).toBeInTheDocument();
  });
});
