import { MdKeyboardArrowRight } from "react-icons/md";

export default function Tabs() {
  return (
    <div className="mt-3">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li className="mr-2">
          <a href="#" className="inline-block px-4 py-3 rounded-lg">
            All (5)
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-lg text-gray-900 active:text-gray-900"
          >
            Unchecked bills (5)
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-lg  active:text-gray-900"
          >
            In negotiation bills (1)
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className="inline-block px-4 py-3 rounded-lg  active:text-gray-900"
          >
            Paid bills
          </a>
        </li>
        <li className="mr-2">
          <a className="inline-block px-4 py-3 rounded-lg active:text-gray-900">
            <MdKeyboardArrowRight  className="text-xl"/>
          </a>
        </li>
      </ul>
    </div>
  );
}
