import Header from "../Header";
import Footer from "../Footer";
import CustomHead from "../CustomHead";
import CallButton from "../CallButton";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <CustomHead />
      <Header />
      {children}
      <CallButton tel="+380667528540" />
      <Footer />
    </>
  );
}
