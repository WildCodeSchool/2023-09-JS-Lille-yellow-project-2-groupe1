import { PropTypes } from "prop-types";
import githubLogo from "../../../assets/logo/githubLogo.svg";
import linkedinLogo from "../../../assets/logo/linkedinLogo.svg";
import "./CardProfil.scss";

function CardProfil({ name, img, github, linkedin }) {
  return (
    <article className="cardProfil">
      <img className="cardProfil__img" src={img} alt={`${name}`} />
      <h2>{name}</h2>
      <footer>
        <a href={github}>
          <img
            className="cardProfil__githubLogo"
            src={githubLogo}
            alt={`${name} github logo`}
            style={{ width: "2rem", marginRight: "1rem" }}
          />
        </a>

        <a href={linkedin}>
          <img
            className="cardProfil__linkedinLogo"
            src={linkedinLogo}
            alt={`${name} linkedin logo`}
            style={{ width: "2rem" }}
          />
        </a>
      </footer>
    </article>
  );
}
CardProfil.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

export default CardProfil;
