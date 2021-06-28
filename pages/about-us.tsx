import MainLayout from "../components/MainLayout";
import BlockWrapper from "../components/BlockWrapper";
import AboutUsSlider from "../components/AboutUsSlider";

import styles from "../styles/AboutUs.module.scss";

import data from "../pages/api/aboutUsPageData.json";

interface AboutUsProps {
  data: {
    headData: {
      description: string;
      keyWords: string[];
    };
    slidesData: {
      imgSrc: string;
      title: string;
      description: string;
    }[];
  };
}

function AboutUs({ data }: AboutUsProps) {
  return (
    <MainLayout>
      <div className={styles["wrapper"]}>
        <BlockWrapper title="О компании">
          <AboutUsSlider slidesData={data.slidesData} />
        </BlockWrapper>
      </div>
    </MainLayout>
  );
}

export default AboutUs;

export async function getStaticProps() {
  return {
    props: { data },
  };
}
