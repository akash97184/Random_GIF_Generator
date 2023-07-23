import React, { useState } from 'react'
import Spinner from './Spinner';
import "./Tag.css";
import useGif from '../hooks/useGif';

const Tag = () => {

    const [tag, setTag] = useState('bugatti');
    const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className=' w-1/2 bg-cyan-700 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[16px] mb-6'>
        <h1 className=' mt-[15px] text-2xl text-gray-300 underline uppercase font-semibold '>Random Gif</h1>

        {
            loading ? (<Spinner/>) : (<img  src={gif} alt='' width="450"/>) 
        }

        <input
            className='w-10/12 text-lg py-2 rounded-lg mb-1 text-center outline-black '
            onChange= { (event) => setTag(event.target.value)}
            value={tag}
        />

        <button 
        className=' w-10/12 button text-lg py-2 rounded-lg mb-[20px]'
         onClick={() => fetchData(tag)}>
            Generate
        </button>
    </div>
  )
}

export default Tag