import React from 'react'

const TextInputSkelton = () => {
  return (
     <div className="my-10 w-full text-center flex flex-col items-center gap-5">
          <p className="text-sm w-[40%] md:w-[15%] rounded-3xl h-5 bg-gray-200"></p>

          <div className=" md:w-[60%] w-[85%] gap-5">
            <div className="relative w-full md:h-80 h-48">
              <textarea className="bg-gray-200 w-full md:h-72 h-36 rounded-xl p-2" />
            </div>
          </div>

          <div className="bg-gray-200 md:w-[60%] w-[85%] py-3 rounded-2xl h-10"></div>
        </div>
  )
}

export default TextInputSkelton
