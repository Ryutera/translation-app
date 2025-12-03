import HeaderAuth from "@/components/HeaderAuth";
import TextInputField from "@/components/TextInputField";


export default function Home() {

  return (
    <main className="flex flex-col items-center w-full bg-red-50 overflow-scroll" >
     
      <HeaderAuth/>
<div className="mt-20 mb-1 w-[80%] md:w-[60%]">
  <h1 className="text-3xl mb-10">日本語の自然な表現をAIが翻訳!</h1>
  <p className="text-sm">無料翻訳　3/5</p>
</div>

     <TextInputField/>
     


<div className="flex flex-col gap-3 w-[80%] md:w-[60%] mb-10">
<div className="bg-white  w-full p-5 rounded-2xl">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolorem deleniti maxime voluptatum dolores? Laudantium consectetur sit magni deserunt magnam quo officiis nobis impedit consequatur! Vel nobis reiciendis ea provident?
</div>
<div className="bg-white  w-full p-5 rounded-2xl">
Laudantium consectetur sit magni deserunt magnam quo officiis nobis impedit consequatur! Vel nobis reiciendis ea provident?
</div>
</div>
     
    </main>
  );
}
