import HeaderAuth from "@/components/HeaderAuth";
import TextInputField from "@/components/TextInputField";


export default function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center w-full bg-red-50">
     
      <HeaderAuth/>
<div className="mt-20 mb-10">
  <h1>日本語の自然な表現をAIが翻訳!</h1>
</div>
     <TextInputField/>
     
     
    </main>
  );
}
