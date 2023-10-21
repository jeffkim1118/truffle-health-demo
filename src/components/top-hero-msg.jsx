import {AiOutlineClose} from 'react-icons/ai';

export default function TopHeroMsg() {
  return (
    <div className="bg-gradient-to-r from-indigo-400 via-indigo-470 to-violet-400 rounded-lg w-2/3">
      <div className="content text-yellow-100 p-3">
        <span className="text-xs flex">Do you know that 80% of medical bills contains errors?<a className="bg-violet-300 rounded-full ml-auto"><AiOutlineClose className="text-2xl p-1"/></a></span>
        <h1 className="text-lg">Picture, upload, and check a bill</h1><br/>
        <a className="bg-yellow-100 text-violet-500 rounded-lg px-9 py-1.5">Checking now</a>
      </div>
    </div>
  );
}
