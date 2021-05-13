import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Promo from "../components/Promo";
import Category from "../components/Category";
import WhyUs from "../components/WhyUs";
import ConsultForm from "../components/ConsultForm";

import PopularProducts from "../components/PopularProducts";
import CallButton from "../components/CallButton";

// interface IData {
//   data: IDataFetched;
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>LaserBm</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"></meta>
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="Y0yL7YaTBuU7T1xrHe-zjHaVePWsrIt7KIQUMPNjKrk"
        />

        <meta
          name="keywords"
          content="станки, станки плазменной резки, станки лазерной резки, 
          станки мультигазовой резки, фрезерные станки, преса гибочные, ЧПУ,
          высокое качество станков, промышленные станки"
        />

        <meta
          name="description"
          content="станки, станки плазменной резки, станки лазерной резки, 
          станки мультигазовой резки, фрезерные станки, преса гибочные, ЧПУ,
          высокое качество станков, промышленные станки,
          Мы лучшая компания которая занимается продажей станков лазерной, мультигазовой, плазменной резки
          "
        />
        <link rel="apple-touch-icon" href="/apple-ico.png"></link>
      </Head>

      <MainLayout>
        <Promo />
        <WhyUs />
        <Category />
        <ConsultForm />
        <PopularProducts />
        <CallButton tel="+380667528540" />
      </MainLayout>
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
