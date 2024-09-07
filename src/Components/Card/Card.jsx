import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className=" justify-between items-center mb-4">
          <h1 className=" flex text-2xl font-bold">Overview <img  className='h-8' src='/info.png'/></h1>
          <p className="text-gray-500">
            Get an overview of how you're doing on social media compared to competitors.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  <svg
                    xmlns="/info.png"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="ml-2 font-medium">Audience</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500 ml-auto"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">1.2M</div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-green-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25v10.5" />
                </svg>
                <span className="ml-2 text-sm text-gray-500">25%</span>
              </div>
              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-8"
                >
                  <path d="M1 12.75l11 2.25 11-2.25M1 12l11 2.25 11-2.25M1 11.25l11 2.25 11-2.25" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span className="ml-2 font-medium">Audience</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-gray-500 ml-auto"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-2">1.2M</div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-green-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25v10.5" />
              </svg>
              <span className="ml-2 text-sm text-gray-500">25%</span>
            </div>
            <div className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-8"
              >
                <path d="M1 12.75l11 2.25 11-2.25M1 12l11 2.25 11-2.25M1 11.25l11 2.25 11-2.25" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left font-bold text-gray-500 uppercase">Account Name</th>
                  <th className="py-3 px-4 text-left font-bold text-gray-500 uppercase">Follower</th>
                  <th className="py-3 px-4 text-left font-bold text-gray-500 uppercase">Brand Mentions</th>
                  <th className="py-3 px-4 text-left font-bold text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Samantha', followers: '57,800', mentions: '567', img: 'https://i.pravatar.cc/30', actions: ['edit', 'delete'] },
                  { name: 'The Late Late Show', followers: '6,547', mentions: '59,893', img: 'https://i.pravatar.cc/30', actions: ['edit', 'delete'] },
                  { name: 'Devon Webb', followers: '99', mentions: '39K', img: 'https://i.pravatar.cc/30', actions: ['edit', 'delete'] },
                  { name: 'Devon Webb 2', followers: '47,890', mentions: '893', img: 'https://i.pravatar.cc/30', actions: ['edit', 'delete'] },
                  { name: 'Social Champ', followers: '47,890', mentions: '893', img: 'https://i.pravatar.cc/30', actions: ['edit', 'delete'] }
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100 cursor-pointer">
                    <td className="py-3 px-4 flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <div className="flex items-center">
                        <img src={item.img} className="w-8 h-8 rounded-full mr-2" alt={item.name} />
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 text-gray-500 ml-1"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{item.followers}</td>
                    <td className="py-3 px-4">{item.mentions}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        {item.actions.map((action, i) => (
                          <button key={i} className="text-blue-500 hover:text-blue-700">
                            {action}
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
                          