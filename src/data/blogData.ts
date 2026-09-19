export interface BlogPost {
  id: string;
  slug: string;
  tag: string;
  tagEn: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  readTime: string;
  readTimeEn: string;
  author: string;
  date: string;
  coverImage: string;
  highlightQuote: string;
  highlightQuoteEn: string;
  introParagraphs: string[];
  introParagraphsEn: string[];
  reasonsSection: {
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    items: {
      id: string;
      title: string;
      titleEn: string;
      description: string;
      descriptionEn: string;
      image: string;
    }[];
    reflectPrompt: string;
    reflectPromptEn: string;
  };
  strategiesSection: {
    title: string;
    titleEn: string;
    items: {
      step: number;
      title: string;
      titleEn: string;
      description: string;
      descriptionEn: string;
      phraseLabel: string;
      phraseLabelEn: string;
      phrases: string[];
      image: string;
    }[];
  };
  challengeSection: {
    title: string;
    titleEn: string;
    subtitle: string;
    subtitleEn: string;
    rules: { es: string; en: string }[];
    questions: { es: string; en: string }[];
  };
}

export const BLOG_POST: BlogPost = {
  id: 'why-you-freeze-when-speaking-english',
  slug: 'why-you-freeze-when-speaking-english',
  tag: 'HABLAR CON CONFIANZA',
  tagEn: 'SPEAKING WITH CONFIDENCE',
  title: 'Por qué te bloqueas al hablar inglés y cómo hablar de todos modos',
  titleEn: 'Why you freeze when speaking English and how to speak anyway',
  subtitle:
    'Quedarte con la mente en blanco no demuestra que tu inglés sea malo. Es una respuesta normal a la presión, y puedes entrenarte para superarla.',
  subtitleEn:
    'Your mind going blank is not proof that your English is poor. It is a normal response to pressure—and you can train yourself to handle it.',
  readTime: '5 min de lectura',
  readTimeEn: '5 min read',
  author: 'Link English Académico',
  date: '2025 • Link English',
  coverImage:
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
  highlightQuote:
    '“La confianza no llega antes de hablar. Crece precisamente porque te atreves a hablar”.',
  highlightQuoteEn:
    '“Confidence does not come before speaking. It grows because you try to speak”.',
  introParagraphs: [
    '¿Alguna vez has sabido la respuesta en inglés, pero en el momento exacto en que alguien te habla tu mente se queda totalmente en blanco? No estás solo en esto.',
    'Cuando nos sentimos observados, juzgados o apurados, el cerebro dedica más atención a evitar equivocarse que a comunicar el mensaje. Esto hace que palabras que ya conoces se vuelvan difíciles de acceder en el momento.',
    'No significa que hayas olvidado tu inglés. Significa que necesitas una forma más tranquila y práctica de usar lo que ya sabes.',
  ],
  introParagraphsEn: [
    'Have you ever known the answer in English, but the moment someone speaks to you, your mind suddenly goes blank? You are not alone on this.',
    'When we feel watched, judged, or rushed, the brain pays more attention to avoiding mistakes than to communicating. This can make familiar words feel difficult to access.',
    'It does not mean you have forgotten English. It means you need a calmer, more practical way to use what you already know.',
  ],
  reasonsSection: {
    title: '¿Por qué se te queda la mente en blanco?',
    titleEn: 'Why Does Your Mind Go Blank?',
    description:
      'Hablar en vivo combina comprensión auditiva, vocabulario, gramática, pronunciación y presión social al mismo tiempo. Si intentas controlar cada detalle a la perfección, la carga cognitiva se vuelve demasiado pesada.',
    descriptionEn:
      'Speaking combines listening, vocabulary, grammar, pronunciation, and social pressure at the same time. If you try to control every detail, your mental workload becomes too heavy.',
    items: [
      {
        id: 'fear-of-mistakes',
        title: 'Miedo al error',
        titleEn: 'Fear of mistakes',
        description:
          'Puedes concentrarte tanto en no cometer errores o evitar valoraciones negativas que prestas menos atención al mensaje. Esto dificulta la fluidez espontánea.',
        descriptionEn:
          'You may become so focused on avoiding errors or negative evaluation that you pay less attention to communicating your message. This can make spontaneous speaking more difficult.',
        image:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'time-pressure',
        title: 'Presión de tiempo',
        titleEn: 'Time pressure',
        description:
          'Hablar exige escuchar, elegir palabras, armar la gramática y cuidar la pronunciación en tiempo real. Sentir que debes contestar en un segundo dispara la tensión.',
        descriptionEn:
          'Speaking requires you to listen, choose vocabulary, organize grammar, and monitor pronunciation in real time. Feeling that you must answer immediately can increase this mental workload.',
        image:
          'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=400&q=80',
      },
      {
        id: 'self-judgment',
        title: 'Autojuicio excesivo',
        titleEn: 'Self-judgment',
        description:
          'Al hablar, sueles enfocarte únicamente en tus fallos e ignorar lo que lograste comunicar con éxito. Un solo tropiezo se percibe como si toda la plática hubiera salido mal.',
        descriptionEn:
          'After speaking, you may focus only on your mistakes and ignore what you communicated successfully. One error can then feel like evidence that the entire conversation went badly.',
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      },
    ],
    reflectPrompt:
      '¿Qué te pone más nervioso habitualmente: personas desconocidas, vocabulario técnico complejo, la pronunciación o que te corrijan?',
    reflectPromptEn:
      'What usually makes you nervous: unfamiliar people, difficult vocabulary, pronunciation, or being corrected?',
  },
  strategiesSection: {
    title: 'Cinco formas de mantenerte hablando',
    titleEn: 'Five Ways to Keep Speaking',
    items: [
      {
        step: 1,
        title: 'Haz una pausa deliberada',
        titleEn: 'Pause on purpose',
        description:
          'Toma una respiración lenta antes de responder. Una pausa breve suena reflexiva y profesional, nunca débil.',
        descriptionEn:
          'Take one slow breath before you answer. A short pause sounds thoughtful, not weak.',
        phraseLabel: 'Frase útil / Useful phrase',
        phraseLabelEn: 'Useful phrase',
        phrases: ['“Let me think for a second.”'],
        image:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      },
      {
        step: 2,
        title: 'Usa primero una oración simple',
        titleEn: 'Use a simple sentence first',
        description:
          'Di la versión más directa y sencilla de tu idea. Añade detalles adicionales solo cuando te sientas listo.',
        descriptionEn:
          'Say the easiest version of your idea. Add details only when you feel ready.',
        phraseLabel: 'Estructura útil / Useful pattern',
        phraseLabelEn: 'Useful pattern',
        phrases: ['“I think _____ because _____.”'],
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      },
      {
        step: 3,
        title: 'Pide apoyo en inglés sin pena',
        titleEn: 'Ask for help in English',
        description:
          'No tienes por qué fingir que entendiste cada palabra a la primera. En el mundo laboral real, pedir claridad es señal de proactividad.',
        descriptionEn:
          'You do not need to pretend that you understood everything. In real professional life, asking for clarity is proactive.',
        phraseLabel: 'Frases clave / Key questions',
        phraseLabelEn: 'Key questions',
        phrases: ['“Could you say that again?”', '“What does _____ mean?”'],
        image:
          'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      },
      {
        step: 4,
        title: 'Aprende puentes de conversación',
        titleEn: 'Learn conversation bridges',
        description:
          'Estas expresiones compran tiempo valioso para tu mente mientras mantienen la interacción totalmente natural y fluida.',
        descriptionEn:
          'These expressions give your brain time while keeping the interaction completely natural.',
        phraseLabel: 'Expresiones puente / Bridge expressions',
        phraseLabelEn: 'Bridge expressions',
        phrases: [
          '“That’s an interesting question.”',
          '“In my experience...”',
          '“What I mean is...”',
        ],
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      },
      {
        step: 5,
        title: 'Termina el mensaje, no la oración perfecta',
        titleEn: 'Finish the message, not the perfect sentence',
        description:
          'Si te falta una palabra exacta, descríbela con un ejemplo o recurre a un sinónimo más simple. Lo que importa es que la comunicación continúe.',
        descriptionEn:
          'If one word is missing, describe it, use an example, or choose a simpler word. Communication can continue.',
        phraseLabel: 'Regla de oro / Golden rule',
        phraseLabelEn: 'Golden rule',
        phrases: [
          'Communication > Perfection (La comunicación siempre va antes que la perfección)',
        ],
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
      },
    ],
  },
  challengeSection: {
    title: 'El reto de 5 minutos de confianza',
    titleEn: 'The Five-Minute confidence challenge',
    subtitle:
      'Pruébalo una vez al día durante una semana. La práctica breve y constante le enseña a tu cerebro que hablar inglés es seguro y alcanzable.',
    subtitleEn:
      'Try this once a day for one week. Short, repeated practice teaches your brain that speaking English is safe and manageable.',
    rules: [
      {
        es: 'Elige una pregunta sencilla.',
        en: 'Choose one simple question.',
      },
      {
        es: 'Graba o di una respuesta de 30 segundos.',
        en: 'Record or speak a 30-second answer.',
      },
      {
        es: 'Escúchate una vez sin juzgarte con dureza.',
        en: 'Listen once without judging yourself.',
      },
      {
        es: 'Repite la respuesta mejorando solo una cosa.',
        en: 'Repeat the answer and improve only one thing.',
      },
    ],
    questions: [
      {
        es: '¿Cuál fue la mejor parte de tu día?',
        en: 'What was the best part of your day?',
      },
      {
        es: '¿Cuál es una meta que tienes para este mes?',
        en: 'What is one goal you have this month?',
      },
      {
        es: '¿Qué es lo que más disfrutas de tu trabajo?',
        en: 'What do you enjoy about your work?',
      },
      {
        es: '¿Qué le recomendarías visitar a alguien que llega a tu ciudad?',
        en: 'What would you recommend to a visitor in your city?',
      },
    ],
  },
};
