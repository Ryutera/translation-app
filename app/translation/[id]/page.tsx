
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

  return (
    <>

      <div className="flex flex-col gap-8 w-full md:px-[20%] px-[10%] h-screen mx-auto items-center justify-center bg-[#ffd1d112]   ">


        {/* 元の入力 */}
        <div className="w-full bg-white p-6 rounded-2xl shadow-md border border-red-200">
          <div className="flex flex-row gap-2 items-center mb-2">
            <span className="w-2 h-5 bg-red-300 rounded"></span>
            <h2 className="text-red-400 font-bold text-lg ">Source Input</h2>
          </div>

          <p className="text-gray-800 leading-relaxed">{sourceText}</p>
        </div>


        <div className="w-full bg-white p-6 rounded-2xl shadow-md border border-red-200">
          <div className="flex flex-row gap-2 items-center mb-2">
            <span className="w-2 h-5 bg-red-300 rounded"></span>
            <h2 className="text-red-400 font-bold text-lg">Translation</h2>
          </div>

          <p className="text-gray-800 leading-relaxed">{data.translationJa}</p>

        </div>


        <div className="w-full bg-white p-6 rounded-2xl shadow-md border border-red-200">
          <div className="flex flex-row gap-2 items-center mb-2">
            <span className="w-2 h-5 bg-red-300 rounded"></span>
            <h2 className="text-red-400 font-bold text-lg">Explanation</h2>
          </div>
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
