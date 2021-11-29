import { Nav, Anchor, ButtonFixed, Container } from './Styles';
import DownloadIcon from '@mui/icons-material/Download';

function Header() {
  return (
    <div id="home">
      <Nav className="header-nav">
        <Anchor href="#services">Services</Anchor>
        <Anchor href="#portfolio">Portfolio</Anchor>
        <Anchor href="#about-me">About Me</Anchor>
        <Anchor href="#contact-me">Contact Me</Anchor>
      </Nav>

      <Container>
        <ButtonFixed
          href="../../assets/pdf/curriculum-miguel-us.pdf"
          download="miguelvelasquez-resume.pdf">
          Download CV <DownloadIcon></DownloadIcon>
        </ButtonFixed>
      </Container>
    </div>
  );
}

export default Header;
