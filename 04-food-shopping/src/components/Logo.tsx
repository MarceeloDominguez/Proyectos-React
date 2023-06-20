import Link from "next/link";

type Prop = {
  width: number;
  height: number;
};

export default function Logo({ width, height }: Prop) {
  return (
    <Link href={"/"}>
      <img src="/Logo2.png" alt="Logo" width={width} height={height} />
    </Link>
  );
}
