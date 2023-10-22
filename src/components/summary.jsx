import Service from "./service";
import bill2 from "../images/bill2.jpeg";

export default function Summary() {
  return (
    <div className="summary-container absolute top-44 left-60 w-full h-96 ml-36">
      <div className="flex">
        <div className="summary-content space-y-10 w-96">
          <h1>BILL BREAKDOWN</h1>
          <h1>Service breakdown</h1>
          <div className="">
            <Service />
          </div>
        </div>
        <div className="ml-96">
          <p>Bill overview</p>
          <a className="text-red-400 underline" href="#">
            Doesn't match my bill?
          </a>
          <img className="bill-image" src={bill2} />
          <div className="w-72 space-y-2 space-x-4 flex flex-wrap">

            <div>
              <p>Provider's name</p>
              <p>Baylor Scott & White Medical Center</p>
            </div>

            <div>
              <p>Patient name</p>
              <p>Amy</p>
            </div>

            <div>
              <p>Visit date</p>
              <p>Feb 18 2023</p>
            </div>

            <div>
              <p>Provider's type</p>
              <p>In-network</p>
            </div>

            <div>
              <p>Category</p>
              <p>Colonoscopy</p>
            </div>

            <div>
              <p>You owe</p>
              <p>$1,000.00</p>
            </div>

            <div>
              <p>Due date</p>
              <p>Mar 18, 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="helpBtn flex flex-col text-center">
        <p className="text-gray-500">
          During the procedure, tissue sample (biopsies) may be taken for
          further analysis.
        </p>
        <a
          className=" bg-indigo-500 rounded-lg  py-4 text-white font-bold"
          href="#"
        >
          Let Truffle help you negotiate!
        </a>
        <a className="underline text-indigo-500" href="#">
          How does Truffle help my negotiation?
        </a>
      </div>
    </div>
  );
}
