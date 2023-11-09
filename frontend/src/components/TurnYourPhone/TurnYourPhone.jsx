import TurnYourPhone from "../../assets/pictures/ComponentsPics/TurnYourPhone.jpg";
import "./TurnYourPhone.scss";

function TurnYourphone() {
  return (
    <>
      <span className="overlay" />
      <img
        className="turnYourPhone"
        src={TurnYourPhone}
        alt="Tournes ton téléphone en paysage"
      />
    </>
  );
}

export default TurnYourphone;
