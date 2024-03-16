import { SayHello } from "./SayHello";
import { Tweet } from "./Tweet";

function App() {
  return (
    <div>
      <SayHello />
      <div className="tweet-container">
        <Tweet name="Kylian" content="Le football il a changé" like="971"/>
        <Tweet name="Mike" content="It's a kind of magic !" like="237" />
        <Tweet name="Ousmane" content="Désolé pour le retard coach" like="238" />
        <Tweet name="Antoine" content="Sur chaque action, c'est caca-culotte" like="489" />
        <Tweet name="Olivier" content="Only god can judge me" like="669" />
      </div>
    </div>
  )
}

export default App;