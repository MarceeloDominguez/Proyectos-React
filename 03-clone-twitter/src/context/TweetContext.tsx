import { createContext, useContext, useState } from "react";
import { Data } from "../interface/data";
import { dataFollowing, dataForYou } from "../data/data";

type TweetType = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: Data;
  tweetsFollowing: Data[];
  tweetsForYou: Data[];
  colorButtonInput: boolean;
};

const TweetsContext = createContext({} as TweetType);

const INITIAL_VALUE = {
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  name: "Jon Doe",
  nickname: "@Jon_23",
  time: "10s",
  description: "",
  image: null,
  verifield: true,
  chat: null,
  retweet: null,
  likeTweet: null,
  statistics: null,
};

export default function TweetContext({ children }: { children: JSX.Element }) {
  const [inputValue, setInputValue] = useState(INITIAL_VALUE);
  const [tweetsFollowing, setTweetsFollowing] = useState(dataFollowing);
  const [tweetsForYou, setTweetsForYou] = useState(dataForYou);
  const [colorButtonInput, setColorButtonInput] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setColorButtonInput(true);
    } else {
      setColorButtonInput(false);
    }

    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTweet(inputValue);
    setInputValue(INITIAL_VALUE);
  };

  const handleAddTweet = (tweet: Data) => {
    if (tweet.description !== "") {
      setTweetsFollowing([tweet, ...tweetsFollowing]);
      setTweetsForYou([tweet, ...tweetsForYou]);
      setColorButtonInput(false);
    }
  };

  return (
    <TweetsContext.Provider
      value={{
        handleChange,
        inputValue,
        handleSubmit,
        tweetsFollowing,
        tweetsForYou,
        colorButtonInput,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
}

export const useTweetsContext = () => {
  const {
    handleChange,
    inputValue,
    handleSubmit,
    tweetsFollowing,
    tweetsForYou,
    colorButtonInput,
  } = useContext(TweetsContext);

  return {
    handleChange,
    inputValue,
    handleSubmit,
    tweetsFollowing,
    tweetsForYou,
    colorButtonInput,
  };
};
