import { useState } from "react";
import parallaxBg from "@/assets/food-parallax-bg.jpg";
import dryFruitsLaddu from "@/assets/dry-fruits-laddu.jpg";
import besanLadoo from "@/assets/besan-ladoo.jpg";
import energyBalls from "@/assets/energy-balls.jpg";

type Language = "en" | "te" | "hi";

interface Translation {
  selectLanguage: string;
  title: string;
  subtitle: string;
  benefits: string;
  recipes: Recipe[];
}

interface Recipe {
  id: number;
  name: string;
  benefits: string[];
  image: string;
}

const translations: Record<Language, Translation> = {
  en: {
    selectLanguage: "Select Your Language",
    title: "Traditional Sweet Recipes",
    subtitle: "Discover the authentic taste of homemade Indian delicacies",
    benefits: "Health Benefits",
    recipes: [
      {
        id: 1,
        name: "Dry Fruits Laddu",
        benefits: [
          "Rich in natural proteins and healthy fats",
          "Boosts energy and immunity",
          "Excellent source of vitamins and minerals",
          "Perfect for weight management",
          "Supports brain health and memory"
        ],
        image: dryFruitsLaddu
      },
      {
        id: 2,
        name: "Besan Ladoo",
        benefits: [
          "High in plant-based protein",
          "Promotes digestive health",
          "Rich in iron and fiber",
          "Natural mood enhancer",
          "Supports healthy skin and hair"
        ],
        image: besanLadoo
      },
      {
        id: 3,
        name: "Oats Energy Balls",
        benefits: [
          "Sustained energy release",
          "Heart-healthy whole grains",
          "Aids in weight management",
          "Rich in antioxidants",
          "Perfect pre-workout snack"
        ],
        image: energyBalls
      }
    ]
  },
  te: {
    selectLanguage: "మీ భాషను ఎంచుకోండి",
    title: "సంప్రదాయ మిఠాయిల వంటకాలు",
    subtitle: "ఇంట్లో తయారు చేసిన భారతీయ వంటకాల అసలైన రుచిని కనుగొనండి",
    benefits: "ఆరోగ్య ప్రయోజనాలు",
    recipes: [
      {
        id: 1,
        name: "డ్రై ఫ్రూట్స్ లడ్డు",
        benefits: [
          "సహజ ప్రోటీన్లు మరియు ఆరోగ్యకరమైన కొవ్వులు అధికంగా ఉంటాయి",
          "శక్తి మరియు రోగనిరోధక శక్తిని పెంచుతుంది",
          "విటమిన్లు మరియు ఖనిజాల అద్భుతమైన మూలం",
          "బరువు నిర్వహణకు అనుకూలం",
          "మెదడు ఆరోగ్యం మరియు జ్ఞాపకశక్తికి మద్దతు ఇస్తుంది"
        ],
        image: dryFruitsLaddu
      },
      {
        id: 2,
        name: "బేసన్ లడ్డు",
        benefits: [
          "మొక్కల ఆధారిత ప్రోటీన్ అధికంగా ఉంటుంది",
          "జీర్ణ ఆరోగ్యాన్ని ప్రోత్సహిస్తుంది",
          "ఇనుము మరియు ఫైబర్ అధికంగా ఉంటుంది",
          "సహజ మానసిక స్థితిని మెరుగుపరుస్తుంది",
          "ఆరోగ్యకరమైన చర్మం మరియు జుట్టుకు మద్దతు ఇస్తుంది"
        ],
        image: besanLadoo
      },
      {
        id: 3,
        name: "ఓట్స్ ఎనర్జీ బాల్స్",
        benefits: [
          "స్థిరమైన శక్తి విడుదల",
          "హృదయానికి ఆరోగ్యకరమైన తృణధాన్యాలు",
          "బరువు నిర్వహణలో సహాయపడుతుంది",
          "యాంటీఆక్సిడెంట్లు అధికంగా ఉంటాయి",
          "వ్యాయామం ముందు అనువైన స్నాక్"
        ],
        image: energyBalls
      }
    ]
  },
  hi: {
    selectLanguage: "अपनी भाषा चुनें",
    title: "पारंपरिक मिठाई व्यंजन",
    subtitle: "घर पर बनी भारतीय व्यंजनों के प्रामाणिक स्वाद की खोज करें",
    benefits: "स्वास्थ्य लाभ",
    recipes: [
      {
        id: 1,
        name: "ड्राई फ्रूट्स लड्डू",
        benefits: [
          "प्राकृतिक प्रोटीन और स्वस्थ वसा से भरपूर",
          "ऊर्जा और प्रतिरक्षा को बढ़ाता है",
          "विटामिन और खनिजों का उत्कृष्ट स्रोत",
          "वजन प्रबंधन के लिए उत्तम",
          "मस्तिष्क स्वास्थ्य और स्मृति का समर्थन करता है"
        ],
        image: dryFruitsLaddu
      },
      {
        id: 2,
        name: "बेसन लड्डू",
        benefits: [
          "पौधे आधारित प्रोटीन में उच्च",
          "पाचन स्वास्थ्य को बढ़ावा देता है",
          "आयरन और फाइबर से भरपूर",
          "प्राकृतिक मूड बढ़ाने वाला",
          "स्वस्थ त्वचा और बालों का समर्थन करता है"
        ],
        image: besanLadoo
      },
      {
        id: 3,
        name: "ओट्स एनर्जी बॉल्स",
        benefits: [
          "निरंतर ऊर्जा रिलीज",
          "हृदय-स्वस्थ साबुत अनाज",
          "वजन प्रबंधन में सहायक",
          "एंटीऑक्सीडेंट से भरपूर",
          "व्यायाम से पहले उत्तम नाश्ता"
        ],
        image: energyBalls
      }
    ]
  }
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
          <div className="max-w-4xl mx-auto space-y-8">
            {t?.recipes.map((recipe, index) => (
              <article
                key={recipe.id}
                className="card-elevated bg-card/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-border"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-2/5 lg:w-1/3">
                    <div className="aspect-square md:h-full">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 lg:w-2/3 p-6 md:p-8">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {recipe.name}
                    </h3>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                        {t?.benefits}
                      </h4>
                      <ul className="space-y-2">
                        {recipe.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-card-foreground"
                          >
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-base leading-relaxed">{benefit}</span>
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
