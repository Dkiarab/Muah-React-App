import explore from "../assests/pinkexplore.png";
import Kiss from "../assests/kiss2.png";
import upload from "../assests/upload.png";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="Menu">
      <img className="explore" src={explore} alt="Explore" />
      <img className="Kiss" src={Kiss} alt="Likes" />
      <img className="upload" src={upload} alt="Upload" />
    </div>
  );
}
export default Menu;
