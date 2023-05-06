import CardTweet from "./CardTweet";
import InputMain from "./InputMain";
import { useTweetsContext } from "../../context/TweetContext";
import Loading from "../Loading";

type Prop = {
  loading: boolean;
};

export default function ViewFollowing({ loading }: Prop) {
  const { tweetsFollowing } = useTweetsContext();

  return (
    <div className="overflow-hidden bg-primary">
      <InputMain />
      {loading ? <Loading /> : <CardTweet tweets={tweetsFollowing} />}
    </div>
  );
}
