import { ArchiveItem } from "@/types/schemas";

export const galleryCategoriesData = [
  { id: "all", label: "كافة الأرشيف" },
  { id: "documents", label: "الوثائق والمخطوطات" },
  { id: "historical", label: "المعالم والتاريخ" },
  { id: "nature", label: "الدلتا والزراعة" },
  { id: "coast", label: "شقرة والبحر" },
];

export const galleryArchiveData: ArchiveItem[] = [
  {
    id: "doc-1",
    category: "documents",
    categoryLabel: "الوثائق والمخطوطات",
    title: "معاهدة تنظيم الري بالدلتا عام 1948م",
    year: "1948م",
    location: "زنجبار - لجنة دلتا أبين",
    aspectRatio: "aspect-[4/5]",
    bgGradient: "from-amber-900 via-emerald-900 to-slate-900",
    description:
      "وثيقة تاريخية نادرة تدون الاتفاقية الأولى لتنظيم سقي السيول وقنوات الري بين قبائل ومزارعي دلتا بنا وحسان، وتأسيس أول هيئة رسمية لإدارة المحاصيل الزراعية والقطن طويل التيلة.",
  },
  {
    id: "hist-1",
    category: "historical",
    categoryLabel: "المعالم والتاريخ",
    title: "صورة تاريخية لحصن القارة المعلق",
    year: "1952م",
    location: "يافع أبين - القارة",
    aspectRatio: "aspect-[3/4]",
    bgGradient: "from-emerald-900 via-slate-800 to-slate-900",
    description:
      "لقطة تاريخية فريدة تظهر عمارة حصن القارة الحجرية المعلقة على القمم الشاهقة، وتبيّن المنعة والجمال المعماري الأصيل لقلعة سلاطين يافع بني قاصد.",
  },
  {
    id: "nature-1",
    category: "nature",
    categoryLabel: "الدلتا والزراعة",
    title: "افتتاح سد باتيس الحديث عام 1954م",
    year: "1954م",
    location: "باتيس - خنفر",
    aspectRatio: "aspect-video",
    bgGradient: "from-[#059669] via-emerald-800 to-slate-900",
    description:
      "مشهد توثيقي نادر لتدفق مياه السيول الأولى عبر سد باتيس الحديث بعد اكتمال تشييده، وتحول طمي السد إلى بساتين ومزارع خضراء امتدت حتى زنجبار والكود.",
  },
  {
    id: "doc-2",
    category: "documents",
    categoryLabel: "الوثائق والمخطوطات",
    title: "رسالة السلطان الفضلي إلى أعيان شقرة",
    year: "1935م",
    location: "شقرة - العاصمة القديمة",
    aspectRatio: "aspect-[4/3]",
    bgGradient: "from-amber-950 via-slate-900 to-slate-800",
    description:
      "مخطوطة سلطانية مكتوبة بخط الثلث العربي الأصيل، تنظم حركة الملاحة والتجارة البحرية في ميناء شقرة وتحدد أجور الصيد والتصدير مع موانئ الخليج وعدن.",
  },
  {
    id: "coast-1",
    category: "coast",
    categoryLabel: "شقرة والبحر",
    title: "أسطول الصيد التقليدي في ميناء شقرة",
    year: "1960م",
    location: "ساحل شقرة - البحر العربي",
    aspectRatio: "aspect-square",
    bgGradient: "from-sky-900 via-slate-800 to-slate-900",
    description:
      "صورة أرشيفية توثق سفن وقوارب الصيادين التقليدية على شواطئ شقرة البكر، وعمليات إنزال أسماك الديرك والثمد وتصديرها للأسواق المجاورة.",
  },
  {
    id: "nature-2",
    category: "nature",
    categoryLabel: "الدلتا والزراعة",
    title: "موسم جني القطن طويل التيلة (الذهب الأبيض)",
    year: "1962م",
    location: "الدرجاج - جعار",
    aspectRatio: "aspect-[3/4]",
    bgGradient: "from-[#0284c7] via-emerald-900 to-slate-900",
    description:
      "مشهد مبهج لفلاحي وعمال أبين في مزارع الدرجاج وجعار أثناء جني الذهب الأبيض، ونقله إلى محلج القطن بجعار تمهيداً لشحنه للأسواق العالمية.",
  },
];
