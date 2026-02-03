import { render, screen } from '../../../../tests/test-utils';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const section = screen.getByRole('region', { name: /hero/i });
    expect(section).toBeInTheDocument();
  });

  it('renders the headline', () => {
    render(<Hero />);

    const headline = screen.getByRole('heading', { level: 1 });
    expect(headline).toBeInTheDocument();
    expect(headline).toHaveTextContent(/./); // Has some text
  });

  it('renders the description', () => {
    render(<Hero />);

    // Description should be visible (paragraph element with h5 typography)
    const description = screen.getByRole('paragraph');
    expect(description).toBeInTheDocument();
  });

  it('renders a CTA button', () => {
    render(<Hero />);

    const ctaButton = screen.getByRole('link');
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href');
  });

  it('CTA button has correct link', () => {
    render(<Hero />);

    const ctaButton = screen.getByRole('link');
    const href = ctaButton.getAttribute('href');
    expect(href).toBeTruthy();
    expect(href).not.toBe('#');
  });

  it('has proper accessibility attributes', () => {
    render(<Hero />);

    const section = screen.getByRole('region', { name: /hero/i });
    expect(section).toHaveAttribute('aria-label');
  });
});
