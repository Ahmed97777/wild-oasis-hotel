import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import { cabinInterface } from "@/constants/interface";

export default async function CabinList({ filter }: { filter: string }) {
  const cabins: cabinInterface[] = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins: cabinInterface[] = cabins;
  if (filter === "small") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  }
  if (filter === "medium") {
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  }
  if (filter === "large") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
