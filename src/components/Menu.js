import explore from "../assests/pinkexplore.png";
import Kiss from "../assests/kiss.png";
import upload from "../assests/upload.png";

function Menu() {
  return (
    <div className="Menu">
      <img className="explore" src={explore} alt="Explore" />
      <img className="Kiss" src={Kiss} alt="Explore" />
      <img className="upload" src={upload} alt="Explore" />
    </div>
  );
}
export default Menu;
