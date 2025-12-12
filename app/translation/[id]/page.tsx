

import HeaderAuth from "@/components/HeaderAuth"
import prisma from "@/lib/prisma"


const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const res = await prisma.translation.findUnique({
        where: {
            id: id
        }
    })


    const sourceText = res?.sourceText
    const data = JSON.parse(res?.output!)
    console.log(data)



    return (
        <>
       <HeaderAuth/>
       <div className="flex flex-col gap-8 w-[70%] h-screen mx-auto items-center justify-center">
         

 {/* 元の入力 */}
  <div className="w-full bg-white p-6 rounded-2xl shadow-md border border-red-200">
    <h2 className="text-red-500 font-bold text-lg mb-2">Source Input</h2>
    <p className="text-gray-800 leading-relaxed">{sourceText}</p>
  </div>

 
  <div className="w-full bg-white p-6 rounded-2xl shadow-md border border-red-200">
    <h2 className="text-red-500 font-bold text-lg mb-2">Translation</h2>
    <p className="text-gray-800 leading-relaxed">{data.translationJa}</p>
  </div>

  
  <div className="w-full bg-white p-6 rounded-2xl shadow-md border border-red-200">
    <h2 className="text-red-500 font-bold text-lg mb-2">Explanation</h2>
    <ul className="text-gray-800 leading-relaxed">
      {data.notes?.map((note: string, index: number) => (
        <li className="mb-2" key={index}>・{note}</li>
      ))}
    </ul>
  </div>

</div>       
        </>
    )
}

export default page
