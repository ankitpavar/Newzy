import React, { useState } from 'react';

function Header({setLanguage}) {

  const [openTab, setOpenTab] = useState(1);
  return (
    <div>
      <header className="text-gray-500 bg-primary body-font">
        <div className="container mx-auto flex flex-wrap p-5 justify-between flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <svg
              className="bg-transparent text-red-500 w-10 h-10"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clipRule="evenodd"
              ></path>
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
            </svg>
            <span className="ml-1 md:text-3xl lg:text-3xl sm:text-2xl sm1:text-2xl sm2:text-2xl sm3:text-2xl sm4:text-2xl sm5:text-2xl sm6:text-2xl  font-black text-white">
              Newzy
              <span className="font-black text-4xl text-red-500">.</span>
            </span>
          </a>
          <div className="flex items-center justify-center ">
            <svg
              className="bg-transparent w-4 h-4 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
            </svg>
            <ul
              className="flex mb-0 list-none flex-wrap pt-2 pb-3 flex-row"
              role="tablist"
            >
              <li className="-mb-px  last:mr-0 flex-auto text-center ">
                <a
                  className={
                    'text-xs font-semibold px-3 py-1 shadow-lg rounded rounded-r-none block leading-normal ' +
                    (openTab === 1
                      ? 'text-white bg-red-500'
                      : 'text-red-500 bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                    setLanguage('english');
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Eng
                </a>
              </li>
              <li className="-mb-px last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-semibold uppercase px-3 py-1 shadow-lg rounded rounded-l-none block leading-normal ' +
                    (openTab === 2
                      ? 'text-white bg-red-500'
                      : 'text-red-500 bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                    setLanguage('hindi');
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  हिन्दी
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
