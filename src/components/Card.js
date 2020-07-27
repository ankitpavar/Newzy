import React from 'react';
import Moment from 'react-moment';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  FacebookIcon,
  FacebookMessengerIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
const Card = ({ newzy }) => {
  let url = '';
  {
    newzy.read_more ? (url = newzy.read_more) : (url = newzy.inshorts_link);
  }
  let url_label = '';
  {
    newzy.read_more_label
      ? (url_label = newzy.read_more_label)
      : (url_label = 'inshorts');
  }
  return (
    <div>
      <div className=" w-full h-100 rounded-lg bg-secondary overflow-hidden shadow-lg">
        <img src={newzy.image} className="w-full h-64" alt={newzy.title} />
        <div className="px-3 py-2 flex flex-col">
          <div className="font-medium text-l text-white w-full h-14 ">
            {newzy.title}
          </div>

          <div className="flex items-center">
            <div className="text-xs text-gray-400 ">- {url_label} </div>
            <svg
              className="bg-transparent h-4 w-4 text-red-500 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="text-gray-400 text-xs  ">
              <Moment fromNow>{newzy.timestamp}</Moment>
            </div>
          </div>
        </div>
        <div className="px-3 py-0 mt-2 flex justify-between items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white active:bg-red-600 font-bold  text-xs px-4 py-2 rounded shadow hover:bg-red-700 outline-none focus:outline-none mr-1 mb-1"
          >
            Read more
          </a>

          <div className="text-gray-400 mr-3 inline-flex items-center justify-around lg:ml-auto md:ml-auto ml-auto leading-none text-sm pr-3 py-1 ">
            <div className="border border-red-500 rounded-full mr-1">
              <svg className='bg-transparent h-5 w-5' fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
              </svg>
            </div>
            <WhatsappShareButton url={url}>
              <WhatsappIcon size={22} round={true} />
            </WhatsappShareButton>
            <FacebookShareButton url={url}>
              <FacebookIcon size={22} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <TwitterIcon size={22} round={true} />
            </TwitterShareButton>
            <TelegramShareButton url={url}>
              <TelegramIcon size={22} round={true} />
            </TelegramShareButton>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Card;
