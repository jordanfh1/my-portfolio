import { render, screen } from '@testing-library/react';
import About from '../components/About/About';
import '@testing-library/jest-dom';


describe('About Component', () => {
  it('renders the About section', () => {
    render(<About/>);
    
    // Check if the heading is rendered
    const headingElement = screen.getByRole('heading', { name: /about/i });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the description paragraphs', () => {
    render(<About />);

    // Check if the first paragraph is rendered
    const firstParagraph = screen.getByText(/i am a musician turned software developer/i);
    expect(firstParagraph).toBeInTheDocument();

    // Check if the second paragraph is rendered
    const secondParagraph = screen.getByText(/following my passion for creativity and technology/i);
    expect(secondParagraph).toBeInTheDocument();
  });
});
