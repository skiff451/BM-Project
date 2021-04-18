import Link from "next/link";

interface NavItemProps {
  name: string;
  path: string;
}

export default function NavItem(props: NavItemProps) {
  const { name, path } = props;

  return (
    <>
      <Link href={path}>
        <a className="nav-item">{name}</a>
      </Link>
      <style jsx>{`
        .nav-item {
          margin: 0 5px;
        }
      `}</style>
    </>
  );
}
