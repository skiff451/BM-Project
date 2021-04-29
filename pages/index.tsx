import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Promo from "../components/Promo";
import Category from "../components/Category";
import WhyUs from "../components/WhyUs";
import ConsultForm from "../components/ConsultForm";

import styles from "../styles/Home.module.scss";
import PopularProducts from "../components/PopularProducts";
import CallButton from "../components/CallButton";

interface IData {
  data: IDataFetched;
}

export default function Home({ data }: IData) {
  console.log(data);
  return (
    <>
      <Head>
        <title>LaserBm</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="google-site-verification"
          content="Y0yL7YaTBuU7T1xrHe-zjHaVePWsrIt7KIQUMPNjKrk"
        />
      </Head>

      <div className={styles.container}>
        <MainLayout>
          <CallButton tel="+380507108908" />
          <Promo />
          <WhyUs />
          <Category />
          <ConsultForm />
          <PopularProducts />
        </MainLayout>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   // const res = await fetch("/api/data");
//   // const data: IDataFetched = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
