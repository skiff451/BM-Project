import Image from "next/image";

interface ProductItemProps {
  imgName: string;
  altText: string;
  text: string;
  link: string;
}

export default function ProductItem({
  imgName,
  altText,
  text,
}: ProductItemProps) {
  return (
    <div>
      <Image
        src={`/assets/products-imgs/${imgName}`}
        alt={altText}
        width={298}
        height={214}
        layout="responsive"
      />
      <p>{text}</p>
    </div>
  );
}
