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
            {/* 上部：できることセクション */}
            <div className="w-[80%] md:w-[60%] mt-20 mb-10">
                <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
                    {t.sectionTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 text-center md:text-left">
                        <h3 className="font-bold text-lg mb-2 text-red-500">{t.feature1Title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{t.feature1Desc}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 text-center md:text-left">
                        <h3 className="font-bold text-lg mb-2 text-red-500">{t.feature2Title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{t.feature2Desc}</p>
                    </div>
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
                <div className="bg-red-400 p-1 rounded-[3rem] shadow-xl">
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