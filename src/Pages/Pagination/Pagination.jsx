import React from 'react'

export default function Pagination({totalCrypto, cryptoPerPage, currPage , setCurrPage}) {

    let pages =[];

    for(let i = 1;i<=Math.ceil(totalCrypto/cryptoPerPage) ; i++){
        pages.push(i);
    }

  return (
    <div  className='flex gap-4 text-black my-5 overflow-x-auto scrollbar-hide md:justify-center'>
        {
            pages.map((page,index)=>{
                return (
                    <button  className={`px-5 py-1.5 rounded-sm cursor-pointer ${page ===currPage ? "bg-yellow-400":"bg-white"}`}
                     onClick={()=>setCurrPage(page)}  key={index}>
                        {page}
                    </button>
                )
            })
        }
    </div>
  )
}
