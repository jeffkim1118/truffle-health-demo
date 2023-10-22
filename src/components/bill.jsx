import { useNavigate } from "react-router-dom";

export default function Bill({ data }) {
  let navigate = useNavigate()
  const handleClick = () => {
    navigate('/summary')
  }
  

  return (
    <div className="flex">
      <div className="mt-10 flex">
        <div>
          <img className="w-32" src={data.image}></img>
        </div>

        <div className="bill-info ml-4">
          <div className="flex space-x-96">
            <p>{data.providerName}</p>
            <p>{data.amount} billing amount</p>
          </div>

          <div className="flex">
            <div>
              Bill owner
              <p>{data.billOwner}</p>
            </div>

            <div>
              Date of bill
              <p>{data.date}</p>
            </div>

            <div>
              Due of bill
              <p>{data.due}</p>
            </div>
          </div>
          <p>?saving opportunites</p>
          <button className="button-go bg-indigo-500 px-6 py-1 rounded-lg text-yellow-200" onClick={handleClick}>Check it</button>
        </div>
      </div>
    </div>
  );
}
