import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const{totalpages,page,handlePageChange}=useContext(AppContext);

  if(!totalpages) return null;

  return (
    <div className='w-screen border-2 py-1 bg-white flex justify-evenly items-center fixed bottom-0'>
      <div className='gap-2 flex '>
        <div>
        {
          page>1 &&
          <button onClick={()=>handlePageChange(page - 1)} className='px-4 py-2 border rounded-md hover:bg-gray-900 hover:text-white disabled:opacity-50 cursor-pointer'>
          Previous
        </button>
        }
        </div>

        <div>
          {
            page<6 &&
            <button onClick={()=>handlePageChange(page + 1)} className='px-4 py-2 border rounded-md hover:bg-gray-900 hover:text-white disabled:opacity-50  cursor-pointer'>
            Next
          </button>
          }
        </div>
      </div>

      <div className='font-bold'>
        <p>Page {page} of {totalpages}</p>
      </div>
    </div>
  )
}

export default Pagination;