import { useTweetsContext } from "../../context/TweetContext";
import CardTweet from "./CardTweet";
import InputMain from "./InputMain";

export default function ViewForYou() {
  const { tweetsForYou } = useTweetsContext();

  return (
    <div>
      <InputMain />
      <CardTweet tweets={tweetsForYou} />
    </div>
  );
}
