import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";

const iconsData = [
  "icon_instagram",
  "icon_youtube",
  "icon_kakaoch",
  "icon_brunch",
  "icon_facebook",
];
const Footer = () => {
  return (
    <footer className="mt-20 lg:mt-40 border-t border-techit-gray-100">
      <div className=" container-style xl:px-6 py-8">
        <div className="flex justify-between items-start">
          <img src="/images/techit_by_likelion_logo.svg" alt="TechIT" />
          <div className="mt-8 flex flex-col space-y-7 md:mt-0 md:flex-row md:space-x-20 md:space-y-0 xl:space-x-28">
            <div>
              <h6 className="text-xs text-techit-gray-200">모든 교육 경험</h6>
              <nav className="flex flex-col mt-4 space-y-3">
                <Link className="text-sm font-semibold">KDT 테킷 스쿨</Link>
                <Link className="text-sm font-semibold">온보딩 트랙</Link>
                <Link className="text-sm font-semibold">스타트업 스테이션</Link>
                <Link className="text-sm font-semibold">!T 트렌드</Link>
                <Link className="text-sm font-semibold">이벤트</Link>
                <Link className="text-sm font-semibold">기업 해커톤</Link>
              </nav>
            </div>
            <div>
              <h6 className="text-xs text-techit-gray-200">회사 소개</h6>
              <nav className="flex flex-col mt-4 space-y-3">
                <Link className="text-sm font-semibold flex items-center">
                  LIKELION
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </Link>
                <Link className="text-sm font-semibold flex items-center">
                  채용
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-5 border-t container-style border-techit-gray-100">
          <ul className="mt-4 mb-6 flex space-x-3">
            {iconsData.map((icon) => (
              <li key={icon}>
                <Link>
                  <SocialIcon icon={icon} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2 text-xs font-medium text-techit-gray-200">
            <Link>이용약관</Link>
            <span className="w-1 h-1 rounded-full bg-techit-gray-200"></span>
            <Link>개인정보처리방침</Link>
            <span className="w-1 h-1 rounded-full bg-techit-gray-200"></span>
            <Link>환불규정</Link>
          </div>
          <div className="text-xs text-techit-gray-200">
            <div className="mt-3 flex items-center gap-1">
              상호명: 멋쟁이사자처럼
              <span className="border-l inline-block w-[1px] h-[10px] border-techit-gray-200" />
              대표: 나성영
              <span className="border-l inline-block w-[1px] h-[10px] border-techit-gray-200" />
              contact@likelion.net 사업자 번호 : 264-88-01106
              <span className="border-l inline-block w-[1px] h-[10px] border-techit-gray-200" />
              통신판매업 신고번호 : 2022-서울종로-1534
            </div>
            <div className="mt-1">
              주소 : 서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층
              Copyright © 2022 멋쟁이사자처럼 All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
