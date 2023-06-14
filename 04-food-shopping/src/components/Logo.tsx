import Image from "next/image";
import Link from "next/link";

type Prop = {
  width: number;
  height: number;
};

export default function Logo({ width, height }: Prop) {
  return (
    <Link href={"/"}>
      <Image src="/logo.svg" alt="Logo" width={width} height={height} />
    </Link>
  );
}
