import Image from "next/image";

interface LogoProps {
  src: string;
}
export default function Logo({ src }: LogoProps) {
  return (
    <>
      <img className="logo" src={src} alt="logo" width={189} height={33} />
      <style jsx>{`
        .logo {
          width: 13.125vw;
          height: 2.292vw;
        }
      `}</style>
    </>
  );
}
