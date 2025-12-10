import React from 'react'

interface Props {
    loading: boolean
    output: any
}

const ResultView = (props: Props) => {

    const { loading, output } = props

    let translation
    let meaning
    let notes
    if (output?.status === "ok") {
        translation = output?.translationJa
        meaning = output?.meaningUserLang
        notes = output?.notes
    }

    if (loading) {
        return <div className="flex items-center justify-center  w-full ">
            <p id="loading">Loading
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span></p>
        </div>

    } else if (output?.status === "invalid_input") {
        return <div className="flex items-center justify-center  w-full ">翻訳できませんでした😓</div>
    } else if (output?.status === "ok") {
        return <div className=" flex items-start justify-start flex-col gap-5 ">
            <div className="text-left bg-red-300 p-2 rounded-lg text-white font-semibold w-full">
                <p>Translation</p>
                <p>{translation}</p>
            </div>

            <div className="text-left bg-red-300 p-2 rounded-lg text-white font-semibold w-full">
                <p>Meaning</p>
                <p>{meaning}</p>
            </div>

            <div className="text-left bg-red-300 p-2 rounded-lg text-white font-semibold w-full">
                <p>Explanation</p>
                <ul>
                    {notes?.map((note: string, index: number) => (
                        <li className="mb-2 " key={index}>・{note}</li>
                    ))}
                </ul>

            </div>
        </div>
    }



}

export default ResultView
