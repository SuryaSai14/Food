import { useState } from "react";
import parallaxBg from "@/assets/food-parallax-bg.jpg";
import dryFruitsLaddu from "@/assets/dry-fruits-laddu.jpg";
import coconutBurfi from "@/assets/coconut-burfi.jpg";
import beetrootHalwa from "@/assets/beetroot-halwa.jpg";
import lemonRice from "@/assets/lemon-rice.jpg";
import curdRice from "@/assets/curd-rice.jpg";
import carrotPoriyal from "@/assets/carrot-poriyal.jpg";
import sproutSalad from "@/assets/sprout-salad.jpg";
import spinachSalad from "@/assets/spinach-salad.jpg";
import fruitSalad from "@/assets/fruit-salad.jpg";
import groundnutSalad from "@/assets/groundnut-salad.jpg";
import tomatoChat from "@/assets/tomato-chat.jpg";
import redAvalPayasam from "@/assets/red-aval-payasam.jpg";
import elaneerPayasam from "@/assets/elaneer-payasam.jpg";
import mangoPickle from "@/assets/mango-pickle.jpg";
import gooseberryPickle from "@/assets/gooseberry-pickle.jpg";
import aloeVeraJuice from "@/assets/aloe-vera-juice.jpg";
import pudinaJuice from "@/assets/pudina-juice.jpg";
import kulukkiSarbath from "@/assets/kulukki-sarbath.jpg";

type Language = "en" | "te" | "hi";

interface Recipe {
  id: number;
  name: { en: string; te: string; hi: string };
  benefits: { en: string[]; te: string[]; hi: string[] };
  image: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    image: dryFruitsLaddu,
    name: { en: "Dry Fruits Laddu", te: "డ్రై ఫ్రూట్స్ లడ్డు", hi: "ड्राई फ्रूट्स लड्डू" },
    benefits: {
      en: ["Provides instant energy due to natural sugars from dates", "Rich in iron, calcium, and healthy fats", "Improves brain function and stamina", "Strengthens immunity"],
      te: ["ఖర్జూరాల నుండి సహజ చక్కెరల వల్ల తక్షణ శక్తిని అందిస్తుంది", "ఇనుము, కాల్షియం మరియు ఆరోగ్యకరమైన కొవ్వులు అధికంగా ఉంటాయి", "మెదడు పనితీరు మరియు శక్తిని మెరుగుపరుస్తుంది", "రోగనిరోధక శక్తిని బలపరుస్తుంది"],
      hi: ["खजूर से प्राकृतिक शर्करा के कारण तुरंत ऊर्जा प्रदान करता है", "आयरन, कैल्शियम और स्वस्थ वसा से भरपूर", "मस्तिष्क कार्य और सहनशक्ति में सुधार करता है", "रोग प्रतिरोधक क्षमता को मजबूत करता है"]
    }
  },
  {
    id: 2,
    image: coconutBurfi,
    name: { en: "Coconut Burfi", te: "కొబ్బరి బర్ఫీ", hi: "नारियल बर्फी" },
    benefits: {
      en: ["Good source of healthy fats and fiber", "Improves digestion", "Provides quick energy", "Supports heart health when consumed in moderation"],
      te: ["ఆరోగ్యకరమైన కొవ్వులు మరియు ఫైబర్ యొక్క మంచి మూలం", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "త్వరిత శక్తిని అందిస్తుంది", "మితంగా తీసుకున్నప్పుడు గుండె ఆరోగ్యానికి తోడ్పడుతుంది"],
      hi: ["स्वस्थ वसा और फाइबर का अच्छा स्रोत", "पाचन में सुधार करता है", "त्वरित ऊर्जा प्रदान करता है", "संयमित मात्रा में सेवन करने पर हृदय स्वास्थ्य का समर्थन करता है"]
    }
  },
  {
    id: 3,
    image: beetrootHalwa,
    name: { en: "Beetroot Halwa", te: "బీట్రూట్ హల్వా", hi: "चुकंदर का हलवा" },
    benefits: {
      en: ["Improves blood circulation", "Increases hemoglobin levels", "Boosts stamina and endurance", "Supports liver detoxification"],
      te: ["రక్త ప్రసరణను మెరుగుపరుస్తుంది", "హిమోగ్లోబిన్ స్థాయిలను పెంచుతుంది", "శక్తి మరియు సహనశక్తిని పెంచుతుంది", "కాలేయ విషపూరితత్వానికి మద్దతు ఇస్తుంది"],
      hi: ["रक्त संचार में सुधार करता है", "हीमोग्लोबिन के स्तर को बढ़ाता है", "सहनशक्ति और धीरज बढ़ाता है", "लिवर डिटॉक्सिफिकेशन में मदद करता है"]
    }
  },
  {
    id: 4,
    image: lemonRice,
    name: { en: "Lemon Rice (Flattened Rice)", te: "నిమ్మకాయ అన్నం (అటుకులు)", hi: "नींबू चावल (पोहा)" },
    benefits: {
      en: ["Easy to digest and light on the stomach", "Lemon improves immunity and digestion", "Provides instant energy", "Prevents dehydration"],
      te: ["సులభంగా జీర్ణమవుతుంది మరియు కడుపుపై తేలికగా ఉంటుంది", "నిమ్మకాయ రోగనిరోధక శక్తి మరియు జీర్ణక్రియను మెరుగుపరుస్తుంది", "తక్షణ శక్తిని అందిస్తుంది", "నిర్జలీకరణను నివారిస్తుంది"],
      hi: ["पचाने में आसान और पेट पर हल्का", "नींबू प्रतिरक्षा और पाचन में सुधार करता है", "तुरंत ऊर्जा प्रदान करता है", "निर्जलीकरण को रोकता है"]
    }
  },
  {
    id: 5,
    image: curdRice,
    name: { en: "Curd Rice", te: "పెరుగన్నం", hi: "दही चावल" },
    benefits: {
      en: ["Improves gut health due to probiotics", "Keeps the body cool", "Enhances digestion", "Strengthens immunity"],
      te: ["ప్రోబయోటిక్స్ వల్ల పేగు ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "శరీరాన్ని చల్లగా ఉంచుతుంది", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "రోగనిరోధక శక్తిని బలపరుస్తుంది"],
      hi: ["प्रोबायोटिक्स के कारण आंत के स्वास्थ्य में सुधार करता है", "शरीर को ठंडा रखता है", "पाचन को बढ़ाता है", "रोग प्रतिरोधक क्षमता को मजबूत करता है"]
    }
  },
  {
    id: 6,
    image: carrotPoriyal,
    name: { en: "Carrot Poriyal", te: "క్యారెట్ పోరియల్", hi: "गाजर पोरियल" },
    benefits: {
      en: ["Rich in vitamin A for good eyesight", "Improves skin health", "Boosts immunity", "Aids digestion"],
      te: ["మంచి దృష్టి కోసం విటమిన్ A అధికంగా ఉంటుంది", "చర్మ ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "రోగనిరోధక శక్తిని పెంచుతుంది", "జీర్ణక్రియకు సహాయపడుతుంది"],
      hi: ["अच्छी दृष्टि के लिए विटामिन A से भरपूर", "त्वचा के स्वास्थ्य में सुधार करता है", "रोग प्रतिरोधक क्षमता बढ़ाता है", "पाचन में सहायता करता है"]
    }
  },
  {
    id: 7,
    image: sproutSalad,
    name: { en: "Sprout Salad", te: "మొలకెత్తిన సలాడ్", hi: "अंकुरित सलाद" },
    benefits: {
      en: ["High in protein and fiber", "Supports muscle growth", "Improves digestion", "Helps in weight management"],
      te: ["ప్రోటీన్ మరియు ఫైబర్ అధికంగా ఉంటుంది", "కండరాల వృద్ధికి తోడ్పడుతుంది", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "బరువు నిర్వహణలో సహాయపడుతుంది"],
      hi: ["प्रोटीन और फाइबर से भरपूर", "मांसपेशियों की वृद्धि में सहायक", "पाचन में सुधार करता है", "वजन प्रबंधन में मदद करता है"]
    }
  },
  {
    id: 8,
    image: spinachSalad,
    name: { en: "Green (Spinach) Salad", te: "ఆకు కూరల సలాడ్ (పాలకూర)", hi: "हरी (पालक) सलाद" },
    benefits: {
      en: ["Rich in iron and calcium", "Improves blood health", "Strengthens bones", "Boosts immunity"],
      te: ["ఇనుము మరియు కాల్షియం అధికంగా ఉంటుంది", "రక్త ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "ఎముకలను బలపరుస్తుంది", "రోగనిరోధక శక్తిని పెంచుతుంది"],
      hi: ["आयरन और कैल्शियम से भरपूर", "रक्त स्वास्थ्य में सुधार करता है", "हड्डियों को मजबूत करता है", "रोग प्रतिरोधक क्षमता बढ़ाता है"]
    }
  },
  {
    id: 9,
    image: fruitSalad,
    name: { en: "Fruit Salad", te: "పండ్ల సలాడ్", hi: "फल सलाद" },
    benefits: {
      en: ["Rich in vitamins and antioxidants", "Improves digestion", "Keeps the body hydrated", "Enhances skin health"],
      te: ["విటమిన్లు మరియు యాంటీఆక్సిడెంట్లు అధికంగా ఉంటాయి", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "శరీరాన్ని హైడ్రేటెడ్‌గా ఉంచుతుంది", "చర్మ ఆరోగ్యాన్ని మెరుగుపరుస్తుంది"],
      hi: ["विटामिन और एंटीऑक्सीडेंट से भरपूर", "पाचन में सुधार करता है", "शरीर को हाइड्रेटेड रखता है", "त्वचा के स्वास्थ्य को बढ़ाता है"]
    }
  },
  {
    id: 10,
    image: groundnutSalad,
    name: { en: "Groundnut Salad", te: "వేరుశెనగ సలాడ్", hi: "मूंगफली सलाद" },
    benefits: {
      en: ["Good source of plant protein", "Provides healthy fats", "Improves heart health", "Gives long-lasting energy"],
      te: ["మొక్కల ప్రోటీన్ యొక్క మంచి మూలం", "ఆరోగ్యకరమైన కొవ్వులను అందిస్తుంది", "గుండె ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "దీర్ఘకాలిక శక్తిని అందిస్తుంది"],
      hi: ["पौधा प्रोटीन का अच्छा स्रोत", "स्वस्थ वसा प्रदान करता है", "हृदय स्वास्थ्य में सुधार करता है", "लंबे समय तक ऊर्जा देता है"]
    }
  },
  {
    id: 11,
    image: tomatoChat,
    name: { en: "Tomato Chat", te: "టమాటా చాట్", hi: "टमाटर चाट" },
    benefits: {
      en: ["Rich in vitamin C and antioxidants", "Improves skin health", "Boosts immunity", "Aids digestion"],
      te: ["విటమిన్ C మరియు యాంటీఆక్సిడెంట్లు అధికంగా ఉంటాయి", "చర్మ ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "రోగనిరోధక శక్తిని పెంచుతుంది", "జీర్ణక్రియకు సహాయపడుతుంది"],
      hi: ["विटामिन C और एंटीऑक्सीडेंट से भरपूर", "त्वचा के स्वास्थ्य में सुधार करता है", "रोग प्रतिरोधक क्षमता बढ़ाता है", "पाचन में सहायता करता है"]
    }
  },
  {
    id: 12,
    image: redAvalPayasam,
    name: { en: "Red Aval Payasam", te: "ఎర్ర అటుకుల పాయసం", hi: "लाल पोहा खीर" },
    benefits: {
      en: ["Rich in iron and fiber", "Improves digestion", "Provides sustained energy", "Helps prevent anemia"],
      te: ["ఇనుము మరియు ఫైబర్ అధికంగా ఉంటుంది", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "నిరంతర శక్తిని అందిస్తుంది", "రక్తహీనతను నివారించడంలో సహాయపడుతుంది"],
      hi: ["आयरन और फाइबर से भरपूर", "पाचन में सुधार करता है", "निरंतर ऊर्जा प्रदान करता है", "एनीमिया को रोकने में मदद करता है"]
    }
  },
  {
    id: 13,
    image: elaneerPayasam,
    name: { en: "Elaneer Payasam", te: "ఎలనీర్ పాయసం", hi: "इलनीर पायसम" },
    benefits: {
      en: ["Natural coolant for the body", "Prevents dehydration", "Improves digestion", "Rich in electrolytes"],
      te: ["శరీరానికి సహజ శీతలకారిణి", "నిర్జలీకరణను నివారిస్తుంది", "జీర్ణక్రియను మెరుగుపరుస్తుంది", "ఎలక్ట్రోలైట్లు అధికంగా ఉంటాయి"],
      hi: ["शरीर के लिए प्राकृतिक शीतलक", "निर्जलीकरण को रोकता है", "पाचन में सुधार करता है", "इलेक्ट्रोलाइट्स से भरपूर"]
    }
  },
  {
    id: 14,
    image: mangoPickle,
    name: { en: "Instant Mango Pickle", te: "ఇన్‌స్టంట్ మామిడి ఊరగాయ", hi: "इंस्टेंट आम का अचार" },
    benefits: {
      en: ["Improves appetite", "Aids digestion", "Rich in vitamin C", "Enhances taste and flavor"],
      te: ["ఆకలిని మెరుగుపరుస్తుంది", "జీర్ణక్రియకు సహాయపడుతుంది", "విటమిన్ C అధికంగా ఉంటుంది", "రుచి మరియు ఫ్లేవర్‌ను మెరుగుపరుస్తుంది"],
      hi: ["भूख में सुधार करता है", "पाचन में सहायता करता है", "विटामिन C से भरपूर", "स्वाद और फ्लेवर बढ़ाता है"]
    }
  },
  {
    id: 15,
    image: gooseberryPickle,
    name: { en: "Gooseberry Pickle", te: "ఉసిరికాయ ఊరగాయ", hi: "आंवला अचार" },
    benefits: {
      en: ["Extremely rich in vitamin C", "Strengthens immunity", "Improves hair and skin health", "Supports digestion"],
      te: ["విటమిన్ C అత్యధికంగా ఉంటుంది", "రోగనిరోధక శక్తిని బలపరుస్తుంది", "జుట్టు మరియు చర్మ ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "జీర్ణక్రియకు తోడ్పడుతుంది"],
      hi: ["विटामिन C से अत्यधिक समृद्ध", "रोग प्रतिरोधक क्षमता को मजबूत करता है", "बालों और त्वचा के स्वास्थ्य में सुधार करता है", "पाचन में सहायक"]
    }
  },
  {
    id: 16,
    image: aloeVeraJuice,
    name: { en: "Aloe Vera Juice", te: "కలబంద రసం", hi: "एलोवेरा जूस" },
    benefits: {
      en: ["Improves digestion", "Detoxifies the body", "Enhances skin health", "Boosts immunity"],
      te: ["జీర్ణక్రియను మెరుగుపరుస్తుంది", "శరీరాన్ని విషపూరితం చేస్తుంది", "చర్మ ఆరోగ్యాన్ని మెరుగుపరుస్తుంది", "రోగనిరోధక శక్తిని పెంచుతుంది"],
      hi: ["पाचन में सुधार करता है", "शरीर को डिटॉक्सीफाई करता है", "त्वचा के स्वास्थ्य को बढ़ाता है", "रोग प्रतिरोधक क्षमता बढ़ाता है"]
    }
  },
  {
    id: 17,
    image: pudinaJuice,
    name: { en: "Pudina Juice", te: "పుదీనా రసం", hi: "पुदीना जूस" },
    benefits: {
      en: ["Improves digestion", "Relieves acidity", "Refreshes the body", "Supports respiratory health"],
      te: ["జీర్ణక్రియను మెరుగుపరుస్తుంది", "ఆమ్లత్వాన్ని తగ్గిస్తుంది", "శరీరాన్ని రిఫ్రెష్ చేస్తుంది", "శ్వాసకోశ ఆరోగ్యానికి తోడ్పడుతుంది"],
      hi: ["पाचन में सुधार करता है", "एसिडिटी से राहत देता है", "शरीर को तरोताजा करता है", "श्वसन स्वास्थ्य में सहायक"]
    }
  },
  {
    id: 18,
    image: kulukkiSarbath,
    name: { en: "Kulukki Sarbath", te: "కులుక్కి షర్బత్", hi: "कुलुक्की शर्बत" },
    benefits: {
      en: ["Refreshing summer drink", "Prevents dehydration", "Rich in vitamin C", "Boosts energy instantly"],
      te: ["రిఫ్రెషింగ్ వేసవి పానీయం", "నిర్జలీకరణను నివారిస్తుంది", "విటమిన్ C అధికంగా ఉంటుంది", "తక్షణంగా శక్తిని పెంచుతుంది"],
      hi: ["ताजगी देने वाला गर्मियों का पेय", "निर्जलीकरण को रोकता है", "विटामिन C से भरपूर", "तुरंत ऊर्जा बढ़ाता है"]
    }
  }
];

const translations = {
  en: { selectLanguage: "Select Your Language", title: "Traditional Recipe Collection", subtitle: "Discover the health benefits of authentic Indian delicacies", benefits: "Health Benefits" },
  te: { selectLanguage: "మీ భాషను ఎంచుకోండి", title: "సంప్రదాయ వంటకాల సేకరణ", subtitle: "అసలైన భారతీయ వంటకాల ఆరోగ్య ప్రయోజనాలను కనుగొనండి", benefits: "ఆరోగ్య ప్రయోజనాలు" },
  hi: { selectLanguage: "अपनी भाषा चुनें", title: "पारंपरिक व्यंजन संग्रह", subtitle: "प्रामाणिक भारतीय व्यंजनों के स्वास्थ्य लाभ जानें", benefits: "स्वास्थ्य लाभ" }
};

const languageOptions: { code: Language; name: string; nativeName: string }[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" }
];

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  const t = selectedLanguage ? translations[selectedLanguage] : null;

  if (!selectedLanguage) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-background">
        <div className="text-center max-w-2xl mx-auto animate-fade-up">
          <div className="mb-8">
            <span className="inline-block text-6xl mb-4">🍯</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="text-gradient">Recipe</span> Collection
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {translations.en.selectLanguage}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {languageOptions.map((lang, index) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className="lang-btn card-elevated px-8 py-6 rounded-xl border border-border hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="block font-display text-2xl font-semibold text-foreground mb-1">
                  {lang.nativeName}
                </span>
                <span className="text-muted-foreground text-sm">
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header with Language Switcher */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">
            <span className="text-gradient">Recipe</span> Collection
          </h2>
          <div className="flex gap-2">
            {languageOptions.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedLanguage === lang.code
                    ? "lang-btn-active"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {lang.nativeName}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center max-w-3xl animate-fade-up">
          <span className="inline-block text-5xl mb-6">✨</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t?.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t?.subtitle}
          </p>
        </div>
      </section>

      {/* Parallax Section with Recipes */}
      <section
        className="parallax-section relative py-20 md:py-32"
        style={{ backgroundImage: `url(${parallaxBg})` }}
      >
        <div className="overlay-dark absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {recipes.map((recipe, index) => (
              <article
                key={recipe.id}
                className="card-elevated bg-card/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-border"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col">
                  {/* Image */}
                  <div className="aspect-square">
                    <img
                      src={recipe.image}
                      alt={recipe.name[selectedLanguage]}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {recipe.name[selectedLanguage]}
                    </h3>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        {t?.benefits}
                      </h4>
                      <ul className="space-y-1.5">
                        {recipe.benefits[selectedLanguage].map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-card-foreground"
                          >
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            Made with ❤️ for food lovers everywhere
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
