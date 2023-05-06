import CardTweet from "./CardTweet";
import InputMain from "./InputMain";
import { useTweetsContext } from "../../context/TweetContext";

export default function ViewFollowing() {
  const { tweetsFollowing } = useTweetsContext();

  return (
    <div>
      <InputMain />
      <CardTweet tweets={tweetsFollowing} />
    </div>
  );
}
