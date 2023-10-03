import { useEffect, useState } from "react";

type Props = {
  images: string[];
};

export default function Images({ images }: Props) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (images && images.length > 0) {
      setImage(images[0]);
    }
  }, [images]);

  return (
    <section className="p-1 mt-5">
      <div className="flex justify-between">
        <img
          src={image!}
          alt="imagen principal"
          className="w-56 h-56 min-w-[224px] min-h-[224px] object-contain bg-slate-100 shadow-lg rounded-xl"
        />
        <div className="flex flex-col justify-between p-2">
          {images?.slice(0, 3).map((item, index) => (
            <img
              key={index}
              src={item}
              onClick={() => setImage(item)}
              alt="image-1"
              className={`w-14 h-14 object-contain bg-white rounded-xl border-solid ${
                item === image ? "border-2 border-[#53B175]" : "border-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
