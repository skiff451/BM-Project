import Head from "next/head";
import styles from "../styles/Home.module.scss";
import MainLayout from "../components/MainLayout"
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <MainLayout>
          <div className="">Hello</div>
        </MainLayout>
      </div>
    </>
  );
}
