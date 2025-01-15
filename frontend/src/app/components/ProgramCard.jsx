import React from 'react'

function ProgramCard() {
  return (
    <div className="rounded-xl h-[420px] w-72 overflow-hidden shadow-xl flex flex-col items-center justify-between">
            <img src="/college.png" alt="img" className="w-full object-cover h-2/5 "/>
            <div className="px-6 py-3">
              <h1 className="text-xl font-semibold ">Name</h1>
              <h3 className="text-md mb-3 text-slate-400">initiative date</h3>
              <h3 className="text-md">Description</h3>
              <p className="text-sm mb-4"> Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod.</p>
              <div className="flex items-center gap-3 justify-start py-2">
                <img src="/college.png" alt="person" className="h-12 w-12  rounded-full object-cover"/>
                <h1>Name of the enterpreneur</h1>
              </div>
            </div>
         </div>
  )
}

export default ProgramCard
