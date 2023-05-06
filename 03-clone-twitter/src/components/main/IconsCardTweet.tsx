import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { BsArrowBarUp } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { AiTwotoneHeart } from "react-icons/ai";
import { Data } from "../../interface/data";

type Prop = {
  item: Data;
};

export default function IconsCardTweet({ item }: Prop) {
  const [like, setLike] = useState(false);
  const [amountLike, setAmountLike] = useState<number | null>(null);
  const { chat, likeTweet, retweet, statistics } = item;

  const handleAmountLike = () => {
    if (!like) {
      setAmountLike(amountLike! + 1);
    } else {
      setAmountLike(amountLike! - 1);
    }
  };

  const likeFinal = amountLike! + likeTweet!;

  return (
    <>
      <div className="flex items-center gap-2 mb-1">
        <BsChat className="text-lg text-gray-400" />
        <span className="text-medium text-gray-400">{chat}</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <AiOutlineRetweet className="text-lg text-gray-400" />
        <span className="text-medium text-gray-400">{retweet}</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        {like ? (
          <AiTwotoneHeart
            className="text-lg text-red-600"
            onClick={() => {
              setLike(!like), handleAmountLike();
            }}
          />
        ) : (
          <AiOutlineHeart
            className="text-lg text-gray-400"
            onClick={() => {
              setLike(!like), handleAmountLike();
            }}
          />
        )}
        <span className="text-medium text-gray-400">{likeFinal}</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <BsBarChart className="text-lg text-gray-400" />
        <span className="text-medium text-gray-400">{statistics}</span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <BsArrowBarUp className="text-lg text-gray-400" />
      </div>
    </>
  );
}
