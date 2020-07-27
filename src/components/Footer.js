import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon';

function Footer() {
  return (
    <>
      <footer class="text-main-text bg-primary">
        <div class="container px-5 py-8 mx-auto flex items-center sm:ml-0 sm:flex-row flex-col">
          <a
            href="/"
            class="flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            <svg
              className="bg-transparent text-red-500 w-12 h-12"
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
            <span className="ml-3 text-xl">Newzy</span>
          </a>

          <p class=" flex flex-col text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2020 newzy
            <span className="t">
              Created by
              <a
                href="https://github.com/ankitpavar"
                className="text-gray-600 ml-1 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ankit Pavar
              </a>
            </span>
            <span className="text-center">
              API Provided by
              <a
                href="https://github.com/sumitkolhe/Inshorts-news-api"
                className="text-gray-600 ml-1 underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Sumit Kolhe
              </a>
            </span>
          </p>

          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <p className="text-gray-600 text-sm mr-2">Made with</p>
            <i className="devicon-react-original colored mr-2"></i>
            <span className="text-gray-600 text-sm mr-2">
              and
            </span>
            <Icon icon={tailwindcssIcon} />{' '}
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
