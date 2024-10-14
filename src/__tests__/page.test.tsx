import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import '@testing-library/jest-dom';

jest.mock("@/components/EasterEgg/EasterEgg", () => () => <div data-testid="easter-egg" />);
jest.mock("@/components/Hero/Hero", () => () => <div data-testid="hero" />);
jest.mock("@/components/Skills/Skills", () => () => <div data-testid="skills" />);
jest.mock("@/components/Projects/Projects", () => () => <div data-testid="projects" />);
jest.mock("@/components/Contact/Contact", () => () => <div data-testid="contact" />);
jest.mock("@/components/About/About", () => () => <div data-testid="about" />);
jest.mock("@/components/Footer/Footer", () => () => <div data-testid="footer" />);


describe("Home Page", () => {
  it("renders Hero component", () => {
    render(<Home />);
    const heroComponent = screen.getByTestId("hero");
    expect(heroComponent).toBeInTheDocument();
  });
  it("renders About component", () => {
    render(<Home />);
    const aboutComponent = screen.getByTestId("about");
    expect(aboutComponent).toBeInTheDocument();
  });
  it("renders Skills component", () => {
    render(<Home />);
    const skillsComponent = screen.getByTestId("skills");
    expect(skillsComponent).toBeInTheDocument();
  });
  it("renders Projects component", () => {
    render(<Home />);
    const projectsComponent = screen.getByTestId("projects");
    expect(projectsComponent).toBeInTheDocument();
  });
  it("renders Contact component", () => {
    render(<Home />);
    const contactComponent = screen.getByTestId("contact");
    expect(contactComponent).toBeInTheDocument();
  });
  it("renders EasterEgg component", () => {
    render(<Home />);
    const easterEggComponent = screen.getByTestId("easter-egg");
    expect(easterEggComponent).toBeInTheDocument();
  });
  it("renders Footer component", () => {
    render(<Home />);
    const footerComponent = screen.getByTestId("footer");
    expect(footerComponent).toBeInTheDocument();
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});