"use client"
import { INTRO_CONTENT } from '@/app/constants/introductionData';
import { useLangOpstion } from '@/lib/store/useLangOption'
import { LangType } from '@/lib/type/type';
import React, { ReactNode } from 'react'


const Introduction = () => {
    const selectedLang = useLangOpstion((state) => state.selectedLang) as LangType

    // 該当する言語がない場合のフォールバック（デフォルトは英語）
    const t = INTRO_CONTENT[selectedLang] || INTRO_CONTENT.Japanese;

    return (
        <>


            {/* 上段:コンセプト */}
            <section className='flex justify-center items-center flex-col lg:w-[60%] w-[80%]  mt-20 mb-10'>
                <div className='text-red-400 font-semibold bg-red-100 px-3 py-1 text-sm rounded-3xl tracking-wider my-10'>OUR CONCEPT</div>

             {t.conceptTitle}

                <div className='md:mx-[20%]'>
                    <p>{t.conceptDesc1}</p>
                    <br />
                    <p>{t.conceptDesc2}d</p>
                </div>
            </section>

            {/* 中部：3つのカードセクション */}
            <section className="w-[85%] md:w-[70%] mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="text-4xl mb-4">🎬</div>
                        <h2 className="font-black text-xl mb-3 text-gray-800">{t.card1Title}</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">{t.card1Desc}</p>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="text-4xl mb-4">🤝</div>
                        <h2 className="font-black text-xl mb-3 text-gray-800">{t.card2Title}</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">{t.card2Desc}</p>
                    </div>

                    <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow text-center">
                        <div className="text-4xl mb-4">📱</div>
                        <h2 className="font-black text-xl mb-3 text-gray-800">{t.card3Title}</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">{t.card3Desc}</p>
                    </div>
                </div>
            </section>

            {/* Footer Banner */}
            <section className="w-full max-w-4xl mt-32 mb-20 px-2">
                <div className="bg-gradient-to-br from-red-100 to-red-50 p-1 rounded-[3.5rem] shadow-sm">
                    <div className="bg-white p-12 md:p-20 rounded-[3.4rem] text-center border border-white/50">
                        <h2 className="text-2xl md:text-4xl font-black mb-8 text-gray-900 tracking-tight">
                            {t.footerTitle}
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto leading-loose text-base md:text-lg">
                            {t.footerDesc}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction