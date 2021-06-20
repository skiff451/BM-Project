type titlesType = {
  id: string;
  active: boolean;
};

export default function initActiveTitles(
  specificationsData: IMachineSpecification[]
) {
  const titles: titlesType[] = [];
  specificationsData.forEach((item, index) => {
    if (index === 0) {
      titles.push({
        id: item.id,
        active: true,
      });
    } else {
      titles.push({
        id: item.id,
        active: false,
      });
    }
  });
  return titles;
}
