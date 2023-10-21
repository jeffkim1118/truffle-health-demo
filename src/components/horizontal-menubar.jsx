import { AiOutlineDollar } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

export default function Menubar() {
  return (
    <div className="menubar-container flex w-full h-fit rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">

      <h1 className="flex mr-96 rounded-md px-4 py-2 text-3xl font-bold text-gray-700 focus:outline-none focus:ring">
        <IoIosArrowBack className="block text-3xl font-lg m-1.5" />
        Hello, Tom
      </h1>

      <ul className="menu-bar flex ml-96">
        <li>
          <a className="flex rounded-md px-4 py-2 text-md font-md text-gray-500 focus:outline-none focus:ring">
            <AiOutlineDollar className="block text-lg font-medium m-1.5" />
            My Savings
          </a>
        </li>
        <li>
          <a className="flex rounded-md px-4 py-2 text-md font-md text-gray-500 focus:outline-none focus:ring">
            <IoNotificationsOutline className="block text-lg font-medium m-1.5" />
            Notification
          </a>
        </li>
        <li>
          <a className="flex rounded-md px-4 py-2 text-md font-md text-gray-500 focus:outline-none focus:ring">
            <BiHelpCircle className="block text-lg font-medium m-1.5" />
            Help
          </a>
        </li>
        <li>
          <a className="flex rounded-md px-4 py-2 text-md font-md text-yellow-50 bg-violet-500 focus:outline-none focus:ring">
            <AiOutlinePlus className="block text-lg font-medium m-1.5" />
            Check Bill
          </a>
        </li>
      </ul>
    </div>
  );
}
