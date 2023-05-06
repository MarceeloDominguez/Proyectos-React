import { useTweetsContext } from "../../context/TweetContext";
import CardTweet from "./CardTweet";
import InputMain from "./InputMain";
import Loading from "../Loading";

type Prop = {
  loading: boolean;
};

export default function ViewForYou({ loading }: Prop) {
  const { tweetsForYou } = useTweetsContext();

  return (
    <div className="overflow-hidden bg-primary">
      <InputMain />
      {loading ? <Loading /> : <CardTweet tweets={tweetsForYou} />}
    </div>
  );
}
