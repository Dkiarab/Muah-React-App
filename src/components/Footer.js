import { Container, Col, Row } from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "../utils/profileIcon";

const Footer = () => {
  return (
    <footer className="App">
      <Container>
        <Row>
          <Col>
            <Link to="/HomePage">
              <i class="fas-fa-home"></i>
            </Link>
          </Col>
          <Col>
            <Link to="/ExplorePage">
              <i class="fas fa-search"></i>
            </Link>
          </Col>
          <Col>
            <Link to="">
              <i class="fas fa-store"></i>
            </Link>
          </Col>
          <Col>
            <Link to="ProfilePage">
              <ProfileIcon />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
