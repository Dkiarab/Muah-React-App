import "../styles/cards.css";
import Stories from "../components/Stories";
import Card from "./Card";

// this is the top story bar //
function Cards() {
  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    {
      user: "therealadamsavage",
      text: "Like!",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  const commentsTwo = [
    {
      user: "mapvault",
      text: "Amazing content, keep it up!",
      id: 4,
    },
  ];

  const commentsThree = [
    {
      user: "dadatlacak",
      text: "Love this!",
      id: 5,
    },
  ];

  const commentsFour = [
    {
      parentId: 5,
      userId: 6,
      user: "dadatlacak",
      text: "Awesome!",
      id: 6,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
  return (
    <div className="cards">
      <Stories />
      <Card
        id={1}
        accountName="rafagrassetti"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      ></Card>
      <Card
        id={2}
        accountName="mapvault"
        image="https://picsum.photos/800"
        comments={commentsTwo}
        likedByText="therealadamsavage"
        likedByNumber={47}
        hours={12}
      />
      <Card
        id={3}
        accountName="dadatlacak"
        storyBorder={true}
        image="https://picsum.photos/800/1000"
        comments={commentsThree}
        likedByText="mapvault"
        likedByNumber={90}
        hours={4}
      />
      <Card
        id={4}
        accountName="dadatlacak"
        storyBorder={true}
        image="https://picsum.photos/800/1100"
        comments={commentsFour}
        likedByText="donnadimpless"
        likedByNumber={50}
        hours={4}
      />
    </div>
  );
}

export default Cards;
