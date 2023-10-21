import TopHeroMsg from "./top-hero-msg";
import BillList from "./bill-list";
import Side from "./side";

export default function ContentContainer() {
  return (
    <div className="content-container flex w-auto">
      <div>
        <TopHeroMsg />
        <BillList />
      </div>
      <div>
        <Side />
      </div>
    </div>
  );
}
