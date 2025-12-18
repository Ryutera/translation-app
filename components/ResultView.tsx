import TranslationErrorMessage from './TranslationErrorMessage'



interface OkOutput {
    status: "ok";
    detectedLang: string;
    translationJa: string;
    meaningUserLang: string;
    notes: string[];
}

interface InvalidOutput {
    status: "invalid_input";
    detectedLang?: string | null;
    messageUserLang: string;
}

type Output = OkOutput | InvalidOutput | null;

interface Props {
    loading: boolean
    output: Output
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
        return <TranslationErrorMessage/>
    } else if (output?.status === "ok") {
        return <div className=" flex items-start justify-start flex-col gap-5 ">

            <div className="text-left bg-white border border-red-200 p-2 rounded-lg text-gray-700  w-full">
                <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-1.5 h-4 rounded bg-red-300" />
                <h3 className='text-red-300 font-semibold'>Translation</h3>
                </div>
                <p>{translation}</p>
            </div>

            <div className="text-left bg-white border border-red-200 p-2 rounded-lg text-gray-700  w-full">
                <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-1.5 h-4 rounded bg-red-300" />
                <h3 className='text-red-300 font-semibold'>Meaning</h3>
                </div>
                <p>{meaning}</p>
            </div>

            <div className="text-left bg-white border border-red-200 p-2 rounded-lg text-gray-700  w-full">
                <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-1.5 h-4 rounded bg-red-300" />
                <h3 className='text-red-300 font-semibold'>Explanation</h3>
                </div>

                <ul>
                    {notes?.map((note: string, index: number) => (
                        <li className="mb-3 " key={index}>・{note}</li>
                    ))}
                </ul>

            </div>
        </div>
    }



}

export default ResultView
