import Header from "../Header";
import Footer from "../Footer";
import CustomHead from "../CustomHead";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <CustomHead />
      <Header />
      {children}
      <Footer />
    </>
  );
}
