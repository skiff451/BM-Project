import Head from "next/head";
import MainLayout from "../components/MainLayout";
import Promo from "../components/Promo";
import Category from "../components/Category";

import ContactForm from "../components/ContactForm";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
      </Head>

      <div className={styles.container}>
        <MainLayout>
          <Promo />
          <Category />
          <ContactForm
            title="Нужна консультация?"
            subtitle="Оставьте свои данные и мы перезвоним"
            style={{
              substrate: styles.substrate,
              form: styles["contact-form"],
            }}
          />
        </MainLayout>
      </div>
    </>
  );
}
