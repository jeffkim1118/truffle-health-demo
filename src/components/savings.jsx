import { AiOutlineCheckCircle } from "react-icons/ai";

// This component is for the Message with "let's start with the saving".

export default function Savings() {
  return (
    <div>
      <div className="flex">
        <p>LET'S START WITH THE SAVING</p>
        <a className="ml-32">X</a>
      </div>
      <p className="text-lg font-bold">4 steps for bill negotiation :&#41;</p>
      <div className="text-indigo-700">
        <ul className="savings-checklist">
          <li className="flex">
            <AiOutlineCheckCircle />
            Upload a bill
          </li>
          <li className="flex">
            <AiOutlineCheckCircle />
            Check your bill to find saving opportunities
          </li>
          <li className="flex">
            <AiOutlineCheckCircle />
            Improve basic information
          </li>
          <li className="flex">
            <AiOutlineCheckCircle />
            Leave the negotiation work to Truffle
          </li>
        </ul>
      </div>
    </div>
  );
}
