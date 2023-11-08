import { Link } from "react-router-dom";
import CardProfil from "./CardProfil/CardProfil";
import Matthieu from "../../assets/pictures/team/Matthieu.jpeg";
import Cyril from "../../assets/pictures/team/Cyril.jpeg";
import Xavier from "../../assets/pictures/team/Xavier.jpeg";
import PA from "../../assets/pictures/team/Pierre-Adrien.jpeg";
import Romain from "../../assets/pictures/team/Romain.jpeg";
import TurnYourPhone from "../TurnYourPhone/TurnYourPhone";
import "./AboutUsPage.scss";

function AboutUsPage() {
  const profils = [
    {
      name: "Matthieu THIERRY",
      imgSrc: Matthieu,
      github: "https://github.com/ItsMatDev",
      linkedin: "https://www.linkedin.com/in/matthieu-thierry-726a90294/",
    },
    {
      name: "Pierre Adrien GOUILLART",
      imgSrc: PA,
      github: "https://github.com/pagouillart",
      linkedin: "https://www.linkedin.com/in/pierre-adrien-gouillart-01094483/",
    },
    {
      name: "Cyril DABURON",
      imgSrc: Cyril,
      github: "https://github.com/Cyrildab",
      linkedin: "https://www.linkedin.com/in/cyril-daburon",
    },
    {
      name: "Xavier LOBEZ",
      imgSrc: Xavier,
      github: "https://github.com/Bravax",
      linkedin: "https://www.linkedin.com/in/xavier-lobez-892501227/",
    },
    {
      name: "Romain IMBRASSE",
      imgSrc: Romain,
      github: "https://github.com/Romlion",
      linkedin: "https://www.linkedin.com/in/romain-imbrasse-9480ab1ba/",
    },
  ];
  return (
    <>
      <Link to="/">
        <button type="button" className="closeButtonAboutUs">
          ↩
        </button>
      </Link>
      <main className="cardContainer">
        {profils.map((e) => (
          <CardProfil
            key={e.name}
            name={e.name}
            img={e.imgSrc}
            github={e.github}
            linkedin={e.linkedin}
          />
        ))}
      </main>
      <TurnYourPhone />
    </>
  );
}

export default AboutUsPage;
