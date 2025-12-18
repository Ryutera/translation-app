"use client"
import { INTRO_CONTENT } from '@/app/constants/introductionData';
import { useLangOpstion } from '@/lib/store/useLangOption'
import { LangType } from '@/lib/type/type';
import React from 'react'


const Introduction = () => {
    const selectedLang = useLangOpstion((state) => state.selectedLang) as LangType

    // 該当する言語がない場合のフォールバック（デフォルトは英語）
    const t = INTRO_CONTENT[selectedLang] || INTRO_CONTENT.Japanese;

    return (
        <>
            

            {/* 上段:コンセプト */}
            <div className='flex justify-center items-center flex-col w-[60%]  mt-20 mb-10'>
                <div className='text-red-400 font-semibold bg-red-100 px-3 py-1 text-sm rounded-3xl tracking-wider my-10'>OUR CONCEPT</div>
                <p className='text-3xl font-bold mb-7'>Paraphrase で、もっと PeraPera に。</p>
                
                <div className='mx-[20%]'>
                <p>「Peraphrase（ペラフレーズ）」という名前には、Paraphrase（言い換え）を味方につけて、 もっと PeraPera（流暢）に自分を表現してほしいという願いが込められています。</p>
                <br/>
                <p>ネイティブが日常で使うような、 あなたらしい「自然な日本語」を話すためのパートナーを目指しています。</p>
                </div>
            </div> 

            {/* 中部：3つのカードセクション */}
            <div className="w-[85%] md:w-[70%] mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="text-4xl mb-4">🎬</div>
                        <h3 className="font-black text-xl mb-3 text-gray-800">{t.card1Title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{t.card1Desc}</p>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="font-black text-xl mb-3 text-gray-800">{t.card2Title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{t.card2Desc}</p>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="text-4xl mb-4">📱</div>
                        <h3 className="font-black text-xl mb-3 text-gray-800">{t.card3Title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{t.card3Desc}</p>
                    </div>
                </div>
            </div>

            {/* 下部：メッセージセクション */}
            <div className="w-[85%] md:w-[60%] mt-24 mb-10 text-center">
                <div className="bg-red-300 p-1 rounded-[3rem] shadow-xl">
                    <div className="bg-white p-10 rounded-[2.9rem]">
                        <h2 className="text-2xl md:text-3xl font-black mb-6 text-gray-800 leading-tight">
                            {t.footerTitle.split('、').map((text:string, i:any) => (
                                <React.Fragment key={i}>
                                    {text}{i === 0 && <><br className="md:hidden" /></>}
                                </React.Fragment>
                            ))}
                        </h2>
                        <p className="text-gray-600 leading-loose font-medium text-sm md:text-base">
                            {t.footerDesc}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction