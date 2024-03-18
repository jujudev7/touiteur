import { useState } from "react";
import { SayHello } from "./SayHello";
import { Tweet } from "./Tweet";

const DEFAULT_TWEETS = [
  {
    id: 0,
    name: "Kylian",
    content: "Le football il a changé",
    like: 971
  },
  {
    id: 1,
    name: "Mike",
    content: "It's a kind of magic !",
    like: 237
  },
  {
    id: 2,
    name: "Ousmane",
    content: "Désolé pour le retard coach",
    like: 238
  },
  {
    id: 3,
    name: "Antoine",
    content: "Sur chaque action, c'est caca-culotte",
    like: 489
  },
  {
    id: 4,
    name: "Olivier",
    content: "Only god can judge me",
    like: 667
  }
]

function App() {
  let [tweets, setTweets] = useState(DEFAULT_TWEETS);

  // const tweetsList = tweets.map((tweet) => {
  //   return (
  //     <Tweet key={tweet.id} name={tweet.name} content={tweet.content} like={tweet.like} />
  //   );
  // })

  // console.log(tweetsList)

  const onDelete = (tweetId) => {
    // console.log(tweetId);
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId))
  }

  return (
    <div>
      <SayHello />
      <div className="tweet-container">{tweets.map((tweet) => {
        return (
          <Tweet key={tweet.id} id={tweet.id} name={tweet.name} content={tweet.content} like={tweet.like} onDelete={(id) => {
            onDelete(id);
          }} />
        );
      })}</div>
    </div>
  )
}

export default App;