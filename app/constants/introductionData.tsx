interface ContentData {
  ourConcept: string;
  conceptTitle: React.ReactNode; 
  conceptDesc1: React.ReactNode;
  conceptDesc2: React.ReactNode;
  card1Title: string;
  card1Desc: string;
  card2Title: string;
  card2Desc: string;
  card3Title: string;
  card3Desc: string;
  footerTitle: React.ReactNode;
  footerDesc: string;
}


export const INTRO_CONTENT: Record<string, ContentData> = {
  English: {
    ourConcept: "OUR CONCEPT",
    conceptTitle: (
      <p className='text-2xl md:text-4xl font-extrabold mb-10 tracking-tight text-gray-900 leading-[1.3]'>
        Paraphrase lets you speak more <span className="text-red-500 underline decoration-red-200 decoration-4 underline-offset-4">PeraPera</span>
      </p>
    ),
    conceptDesc1: "The name 'Peraphrase' comes from our wish for you to make 'Paraphrase' your ally and express yourself more 'PeraPera' (fluently).",
    conceptDesc2: "We aim to be your partner in acquiring natural, communicative Japanese that sounds like what locals actually use, rather than stiff textbook phrases.",
    card1Title: "Enjoy Anime & Movies more!",
    card1Desc: "Understand the emotions behind every line and phrase. No more mismatch between subtitles and nuances.",
    card2Title: "Talk casually with friends!",
    card2Desc: "Graduate from polite Japanese. We support you to speak naturally with your close friends.",
    card3Title: "Master Social Media!",
    card3Desc: "Translate slang and casual phrases perfectly. Learn the real Japanese used by locals today.",
    footerTitle: <>From 'Textbook Japanese'<br />to 'Real Japanese for Tomorrow.'</>,
    footerDesc: "Graduate from just memorize and jump into real conversations. This app has your back."
  },
  Japanese: {
    ourConcept: "OUR CONCEPT",
    conceptTitle: (
      <p className='text-3xl md:text-4xl font-bold mb-10 tracking-wider text-gray-900'>
        Paraphraseでもっと
        <span className="relative inline-block mx-2">
          ぺらぺら
          <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200/50 -z-10 rounded-sm"></span>
        </span> 
        に。
      </p>
    ),
    conceptDesc1: "「Peraphrase」という名前には、言い換えを味方につけてもっと「ぺらぺら」に自分を表現してほしいという願いが込められています。",
    conceptDesc2: "ネイティブが使う自然な表現を通して、あなたらしい「伝わる日本語」を身につけるためのパートナーでありたいと考えています。",
    card1Title: "アニメや映画がもっと楽しく！",
    card1Desc: "「あれ、字幕とニュアンス違くない？」そんな疑問を解消。キャラのセリフの背景にある感情まで理解できます。",
    card2Title: "友達とタメ口で話したい！",
    card2Desc: "「〜です・ます」は卒業。もっと距離を縮めたい友達や恋人と、自然なリズムで会話ができるようサポートします。",
    card3Title: "SNSやLINEを使いこなす！",
    card3Desc: "流行りのスラングもAIがバッチリ翻訳。今の日本人が実際に使っている言葉が身につきます。",
    footerTitle: <>「教科書の日本語」から、<br />「明日使える日本語」へ。</>,
    footerDesc: "覚えるだけの学習は卒業して、今すぐリアルな会話に飛び込みましょう。このアプリがあれば大丈夫。"
  },
  Korean: {
    ourConcept: "OUR CONCEPT",
    conceptTitle: (
      <p className='text-2xl md:text-4xl font-extrabold mb-10 tracking-tight text-gray-900 leading-[1.3]'>
        Paraphrase로 더욱 <span className="text-red-500 border-b-4 border-red-100">페라페라(술술)</span>하게
      </p>
    ),
    conceptDesc1: "'Peraphrase'라는 이름에는 말바꾸기를 내 편으로 만들어 더욱 '유창'하게 자신을 표현하기를 바라는 마음이 담겨 있습니다.",
    conceptDesc2: "원어민이 일상에서 사용하는 자연스러운 표현을 통해 당신만의 '통하는 일본어'를 익히기 위한 파トナー가 되고자 합니다.",
    card1Title: "애니메이션과 영화를 더 즐겁게!",
    card1Desc: "자막과 뉘앙스가 다른 의문을 해소. 캐릭터의 대사와 감정까지 깊이 이해할 수 있게 됩니다.",
    card2Title: "친구와 반말로 대화하기!",
    card2Desc: "존댓말은 이제 안녕. 더 친해 싶은 친구와 자연스러운 리듬으로 대화할 수 있도록 도와드립니다.",
    card3Title: "SNS와 라인 마스터하기!",
    card3Desc: "유행하는 슬랭이나 SNS 표현도 AI가 완벽 번역. 현재 일본인들이 실제로 사용하는 언어를 익릴 수 있습니다.",
    footerTitle: <>「교과서 속 일본어」에서<br />「내일 당장 쓰는 일본어」로.</>,
    footerDesc: "암기 위주의 학습은 졸업하고 지금 바로 실제 대화에 뛰어드세요. 이 앱만 있으면 충분합니다."
  },
  Chinese: {
    ourConcept: "OUR CONCEPT",
    conceptTitle: (
      <p className='text-2xl md:text-4xl font-extrabold mb-10 tracking-tight text-gray-900 leading-[1.3]'>
        通过 Paraphrase 让日语更加 <span className="text-red-500 italic">流利(PeraPera)</span>
      </p>
    ),
    conceptDesc1: "“Peraphrase”这个名字包含了我们的愿景：希望你能换种说法，更加流利地表达自己。",
    conceptDesc2: "我们希望通过母语人士在日常生活中使用的自然表达，成为你掌握具有个人特色的“地道日语”の良伴。",
    card1Title: "更快乐地看动漫和电影！",
    card1Desc: "深入理解台词背后的热血情感和微妙的语气変化。告别字幕翻译不到位的困惑。",
    card2Title: "想和朋友用口语交流！",
    card2Desc: "告别死板的敬语。帮助您和想亲近的朋友，用自然的节奏进行日常口語交流。",
    card3Title: "玩转 SNS 和 LINE！",
    card3Desc: "流行俚语和社交媒体表达，AI 都能精准翻译。掌握日本人现在真正使用的语言。",
    footerTitle: <>从“教科书日语”<br />邁向“明天就能用的日语”。</>,
    footerDesc: "告别死記硬背的阶段，立即投入真实的对话吧。无论是动漫名言还是日常聊天，这款应用都能帮到你。"
  }
};