import React from 'react'
import Spinner from './Spinner';
import "./Random.css";
import useGif from '../hooks/useGif';


const Random = () => {

    const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-slate-700 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[16px]'>
        <h1 className=' mt-[15px] text-2xl text-gray-300 underline uppercase font-semibold '>A Random Gif</h1>

        {
            loading ? (<Spinner/>) : (<img  src={gif} alt='' width="450"/>) 
        }
        
        <button 
         className=' w-10/12 button text-lg py-2 rounded-lg mb-[20px]' 
         onClick={ () => fetchData()}>
            Generate
        </button>
    </div>
  )
}

export default Random