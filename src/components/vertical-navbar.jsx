import { BiHomeSmile } from "react-icons/bi";
import { TbReceipt } from "react-icons/tb";
import { BsChatHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="navbar-container w-72 h-screen">
      <ul class="space-y-1 mb-96 w-72">
        <img
          className="m-10"
          src="https://www.truffle.health/media/truffle_logo.svg"
        />
        <li>
          <a
            href=""
            class="flex block rounded-r-3xl px-4 py-2 text-lg font-medium text-gray-500 hover:bg-violet-600 hover:text-yellow-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
          >
            <BiHomeSmile className="block text-lg font-medium m-1.5" />
            Home
          </a>
        </li>

        <li>
          <a
            href=""
            class="flex block rounded-r-3xl px-4 py-2 text-lg font-medium text-gray-500 hover:bg-violet-600 hover:text-yellow-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
          >
            <TbReceipt className="block text-lg font-medium m-1.5" />
            Insurance
          </a>
        </li>

        <li>
          <a
            href=""
            class="flex block rounded-r-3xl px-4 py-2 text-lg font-medium text-gray-500 hover:bg-violet-600 hover:text-yellow-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
          >
            <BsChatHeart className="block text-lg font-medium m-1.5" />
            Negotiation
          </a>
        </li>
      </ul>

      <div className="h-48">
      </div>

      <ul className="space-y-1">
        <li>
          <a
            href=""
            class="flex block rounded-r-3xl px-4 py-2 text-lg font-medium text-gray-500 hover:bg-violet-600 hover:text-yellow-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
          >
            <CgProfile className="block text-lg font-medium m-1.5" />
            Profile
          </a>
        </li>

        <li>
          <a
            href=""
            class="flex block rounded-r-3xl px-4 py-2 text-lg font-medium text-gray-500 hover:bg-violet-600 hover:text-yellow-50 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
          >
            <FiLogOut className="block text-lg font-medium m-1.5" />
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
}
