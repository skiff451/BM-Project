import Image from "next/image";

interface LogoProps {
  src: string;
}
export default function Logo({ src }: LogoProps) {
  return (
    <>
      <Image className="logo" src={src} alt="logo" width={169} height={33} />
    </>
  );
}
