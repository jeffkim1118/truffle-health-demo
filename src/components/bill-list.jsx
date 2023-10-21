import Tabs from "./tab";
import Bill from "./bill";
import bill1 from "../images/bill1.jpeg";
import bill2 from "../images/bill2.jpeg";
import bill3 from "../images/bill3.jpeg";

export default function BillList() {
  const dummyData = [
    {
      providerName: "visited to provider's name",
      amount: "$1200",
      billOwner: "John",
      date: "August 25, 2023",
      due: "Oct 25, 2023",
      image: bill1,
      route:'/summary'
    },
    {
      providerName: "visited to provider's name",
      amount: "$1200",
      billOwner: "John",
      date: "August 25, 2023",
      due: "Oct 25, 2023",
      image: bill2,
      route:'/summary'
    },
    {
      providerName: "visited to provider's name",
      amount: "$1200",
      billOwner: "John",
      date: "August 25, 2023",
      due: "Oct 25, 2023",
      image: bill3,
      route:'/summary'
    },
    {
      providerName: "visited to provider's name",
      amount: "$1200",
      billOwner: "John",
      date: "August 25, 2023",
      due: "Oct 25, 2023",
      image: bill1,
      route:'/summary'
    },
    {
      providerName: "visited to provider's name",
      amount: "$1200",
      billOwner: "John",
      date: "August 25, 2023",
      due: "Oct 25, 2023",
      image: bill2,
      route:'/summary'
    },
    
  ];

  return (
    <div className="bill-container mt-10">
      <h1 className="text-3xl font-bold">My bills</h1>
      <Tabs />
      <div className="bill-list-container overflow-auto no-scrollbar h-96">
        {dummyData.map((data, indx) => {
            return <Bill data={data} indx={indx} />
        })}
      </div>
    </div>
  );
}
