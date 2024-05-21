import Logo from "/images/techit_logo.svg";
import { Link } from "react-router-dom";
import Badge from "./Badge";
export default function Header() {
  return (
    <header className="sticky top-0 border z-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="p-6">
              <img className="w-[108px]" src={Logo} alt="TechIT" />
            </div>
            <nav>
              <ul className="hidden lg:flex">
                <li className="nav-btn">
                  <Link>테킷 스쿨</Link>
                </li>
                <li className="nav-btn">
                  <Link>온보딩 트랙</Link>
                </li>
                <li className="nav-btn">
                  <Link>스타트업 스테이션</Link>
                </li>
                <li className="nav-btn relative">
                  <span className="absolute right-0 top-2">
                    <Badge />
                  </span>
                  <Link>!T 트렌드</Link>
                </li>
                <li className="nav-btn">
                  <Link>이벤트</Link>
                </li>
                <li className="nav-btn">
                  <hr className="h-5 w-[1px] border-l flex mx-2 border-gray-200" />
                  <Link>기업 해커톤</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="flex items-center pr-2 lg:pr-0">
              <Link className="flex items-center relative mr-2 rounded-full lg:rounded-none border lg:border-none px-4 py-2 text-sm font-semibold text-inherit lg:px-6 lg:py-5 lg:text-base lg:text-gray-500 ">
                로그인
              </Link>
              <div className="lg:hidden cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="40"
                  className="p-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
