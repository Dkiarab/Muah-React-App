import "../styles/cardMenu.css";
import kiss from "../assests/kiss2.png";
// import notification from "../assests/notification.png";
import share from "../assests/share.png";
import views from "../assests/history.png";

function CardMenu() {
  return (
    <div className="cardMenu">
      <div className="interactions">
        <img className="icon" src={views} />

        <img className="kiss" src={kiss} />
      </div>

      <img className="icon" src={share} />
    </div>
  );
}

export default CardMenu;
