import { useRouter } from "next/router";
import BlockWrapper from "../../components/BlockWrapper";
import MainLayout from "../../components/MainLayout";

export default function Category() {
  const router = useRouter();
    const { id } = router.query;
    console.log("ID", id)

  return (
    <MainLayout>
      <BlockWrapper title="Станки плазменной резки">
              <div className="">
                  
        </div>
      </BlockWrapper>
    </MainLayout>
  );
}
