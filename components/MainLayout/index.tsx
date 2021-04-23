import Header from "../Header";
import Footer from "../Footer";

interface MainLayoutProps {
  children: JSX.Element|JSX.Element[];
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
