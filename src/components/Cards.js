import "../styles/cards.css";
import Stories from "../components/Stories";
import Card from "./Card";

// this is the top story bar //
function Cards() {
  return (
    <div className="cards">
      <Stories />
      <Card
        id={1}
        accountName="rafagrassetti"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      ></Card>
      <Card
        id={2}
        accountName="mapvault"
        image="https://picsum.photos/800"
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
      <Card
        id={3}
        accountName="dadatlacak"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        likedByText="mapvault"
        likedByNumber={90}
        hours={4}
      />
      <Card
        id={4}
        accountName="dadatlacak"
        storyBorder={true}
        image="https://picsum.photos/800/1100"
        likedByText="donnadimpless"
        likedByNumber={50}
        hours={4}
      />
    </div>
  );
}

export default Cards;
