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
        <div>
          <img
            src={image!}
            alt="imagen principal"
            className="md:w-[420px] md:h-[420px] w-56 h-56 min-w-[224px] min-h-[224px] object-contain flex-1 bg-slate-100 dark:bg-slate-700 shadow-lg rounded-xl"
          />
        </div>
        <div className="flex flex-col px-2">
          {images?.slice(0, 3).map((item, index) => (
            <img
              key={index}
              src={item}
              onClick={() => setImage(item)}
              alt="image-1"
              className={`w-14 h-14 min-w-[56px] object-contain mb-2 md:mb-4 bg-white dark:bg-slate-700 rounded-xl border-solid cursor-pointer ${
                item === image ? "border-2 border-[#53B175]" : "border-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
