import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Lets make world a better place together :)
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Team SmartHelp
            </a>
            .
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
