import React from 'react';

import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => {
  // Capitalize the first letter
  const capitalizedFirstLetter = name[0].toUpperCase();

  // Set background color based on the first letter
  const getBackgroundColor = (initial) => {
    switch (initial) {
      case 'A':
      case 'B':
      case 'C':
        return 'bg-red-500';
      case 'D':
      case 'E':
      case 'F':
        return 'bg-blue-500';
      case 'G':
      case 'H':
      case 'I':
        return 'bg-yellow-500';
      case 'J':
      case 'K':
      case 'L':
        return 'bg-purple-500';
      case 'M':
      case 'N':
      case 'O':
        return 'bg-green-500';
      case 'P':
      case 'Q':
      case 'R':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img
        className='w-full h-auto object-cover rounded-xl'
        src={photo}
        alt={prompt}
      />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white text-md overflow-y-auto prompt'>{prompt}</p>
        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div
              className={`w-7 h-7 rounded-full object-cover ${getBackgroundColor(
                capitalizedFirstLetter
              )} flex justify-center items-center text-white text-xs font-bold`}
            >
              {capitalizedFirstLetter}
            </div>
            <p className='text-white text-sm'>{name}</p>
          </div>
          <button
            type='button'
            onClick={() => downloadImage(_id, photo)}
            className='outline-none bg-transparent border-none'
          >
            <img src={download} alt='download' className='h-6 w-6 object-contain invert' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
