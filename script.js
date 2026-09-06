// Tarot Deck 78 Cards (Major Arcana 22 + Minor Arcana 56)
const tarotDeck = [
    // --- MAJOR ARCANA (22 Cards) ---
    { name: "0. The Fool", upright: "အစသစ်၊ လွတ်လပ်မှု၊ စွန့်စားမှု", reversed: "ပေါ့ဆမှု၊ စွန့်စားလွန်းခြင်း", advice: "သတိထားပြီး သေချာစဉ်းစားလုပ်ဆောင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg" },
    { name: "I. The Magician", upright: "စွမ်းရည်၊ ဖန်တီးမှု၊ အခွင့်အလမ်း", reversed: "လှည့်ဖြားခံရခြင်း၊ ယုံကြည်မှုနည်းခြင်း", advice: "မိမိစွမ်းရည်ကို ယုံကြည်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg" },
    { name: "II. The High Priestess", upright: "ပင်ကိုအသိ၊ လျှို့ဝှက်ချက်", reversed: "စိတ်ရှုပ်ထွေးခြင်း၊ သံသယရှိခြင်း", advice: "စိတ်အေးအေးထားပြီး ပင်ကိုအသိကို အားကိုးပါ", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg" },
    { name: "III. The Empress", upright: "အောင်မြင်မှု၊ အကူအညီရရှိခြင်း", reversed: "တိုးတက်မှုနှေးခြင်း၊ စိတ်ဖိစီးခြင်း", advice: "စိတ်ရှည်ရှည်နဲ့ အချိန်ပေးပါ", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg" },
    { name: "IV. The Emperor", upright: "တည်ငြိမ်မှု၊ အာဏာ၊ စည်းကမ်း", reversed: "ထိန်းချုပ်ခံရခြင်း၊ အဆင်မပြေမှု", advice: "စည်းကမ်းနှင့် တည်ငြိမ်မှုကို ဦးစားပေးပါ", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg" },
    { name: "V. The Hierophant", upright: "လမ်းညွှန်မှုရရှိခြင်း၊ သင်ယူခြင်း", reversed: "သဘောထားကွဲလွဲခြင်း၊ လွတ်လပ်ချင်ခြင်း", advice: "လူကြီးသူမများ၏ အကြံဉာဏ်ကို ရယူပါ", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg" },
    { name: "VI. The Lovers", upright: "ချစ်ခြင်း၊ သဘောတူညီမှု၊ ရွေးချယ်မှု", reversed: "မညီမျှမှု၊ ဆုံးဖြတ်ရခက်ခြင်း", advice: "နှလုံးသားနှင့် ဦးနှောက် မျှတစွာ ရွေးချယ်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/RWS_Tarot_06_Lovers.jpg" },
    { name: "VII. The Chariot", upright: "အောင်မြင်စွာ ကျော်လွှားနိုင်ခြင်း၊ ထိန်းချုပ်မှု", reversed: "ထိန်းချုပ်ရခက်ခြင်း၊ လမ်းကြောင်းလွဲခြင်း", advice: "ဇွဲစိုက်ထုတ်ပြီး ရှေ့ဆက်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg" },
    { name: "VIII. Strength", upright: "သတ္တိ၊ စိတ်ဓာတ်ကြံ့ခိုင်မှု၊ စိတ်ရှည်မှု", reversed: "ဇဝေဇဝါဖြစ်ခြင်း၊ အားနည်းခြင်း", advice: "ကြင်နာမှုနှင့် စိတ်ရှည်မှုဖြင့် ဖြေရှင်းပါ", image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg" },
    { name: "IX. The Hermit", upright: "ဆင်ခြင်တုံတရား၊ မိမိကိုယ်တိုင် ပြန်လည်စိစစ်ခြင်း", reversed: "တစ်ကောင်ကြွက်ဖြစ်ခြင်း၊ အထီးကျန်ခြင်း", advice: "အေးဆေးစွာ သုံးသပ်ရန် အချိန်ယူပါ", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg" },
    { name: "X. Wheel of Fortune", upright: "ကံကြမ္မာအလှည့်အပြောင်း၊ လာဘ်ရွှင်ခြင်း", reversed: "ကံမကောင်းခြင်း၊ အပြောင်းအလဲနှေးခြင်း", advice: "အခွင့်အလမ်းကို အမိအရဆုပ်ကိုင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg" },
    { name: "XI. Justice", upright: "တရားမျှတမှု၊ အမှန်တရား၊ ဆုံးဖြတ်ချက်", reversed: "မမျှတမှု၊ ဆုံးဖြတ်ချက်မှားခြင်း", advice: "မှန်ကန်သော လမ်းကြောင်းအတိုင်း ဆောင်ရွက်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg" },
    { name: "XII. The Hanged Man", upright: "အနစ်နာခံခြင်း၊ အမြင်သစ်ရရှိခြင်း", reversed: "အလကားအချိန်ကုန်ခြင်း၊ အချိန်ဆွဲခြင်း", advice: "ကိစ္စများကို အမြင်သစ်တစ်ခုဖြင့် ကြည့်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg" },
    { name: "XIII. Death", upright: "အဆုံးသတ်နှင့် အစသစ်၊ ပြောင်းလဲခြင်း", reversed: "ပြောင်းလဲရန် ငြင်းဆန်ခြင်း၊ အဟောင်းကို ဖက်တွယ်ထားခြင်း", advice: "အသစ်စတင်ရန် အဟောင်းကို စွန့်လွှတ်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg" },
    { name: "XIV. Temperance", upright: "မျှတမှု၊ ညှိနှိုင်းဖြေရှင်းနိုင်ခြင်း", reversed: "ဟန်ချက်ပျက်ခြင်း၊ လွန်ကဲခြင်း", advice: "အစွန်းမရောက်ဘဲ ဟန်ချက်ညီအောင် ထိန်းပါ", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg" },
    { name: "XV. The Devil", upright: "စွဲလမ်းမှု၊ ထိန်းချုပ်ခံရခြင်း", reversed: "လွတ်မြောက်ခြင်း၊ သတိဝင်လာခြင်း", advice: "မကောင်းသော အကျင့်များကို စွန့်လွှတ်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg" },
    { name: "XVI. The Tower", upright: "ရုတ်တရက် အပြောင်းအလဲ၊ အမှန်တရား ပေါ်ပေါက်ခြင်း", reversed: "ကျရှုံးမှုကို ရှောင်လွှဲနိုင်ခြင်း", advice: "အခက်အခဲမှ သင်ခန်းစာယူ၍ ပြန်လည်စတင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg" },
    { name: "XVII. The Star", upright: "မျှော်လင့်ချက်၊ အေးချမ်းမှု၊ ယုံကြည်မှု", reversed: "စိတ်ပျက်ခြင်း၊ မျှော်လင့်ချက်မဲ့ခြင်း", advice: "အကောင်းမြင်စိတ်ဖြင့် မျှော်လင့်ချက် ထားရှိပါ", image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg" },
    { name: "XVIII. The Moon", upright: "စိုးရိမ်ပူပန်မှု၊ မရေမရာဖြစ်ခြင်း", reversed: "သံသယများ ရှင်းလင်းသွားခြင်း", advice: "စိတ်ကူးယဉ် စိုးရိမ်မှုများကို လျှော့ချပါ", image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg" },
    { name: "XIX. The Sun", upright: "ဝမ်းမြောက်ခြင်း၊ အောင်မြင်မှု၊ တက်ကြွမှု", reversed: "ယာယီအခက်အခဲ၊ စိတ်မကြည်မလင်ဖြစ်ခြင်း", advice: "တက်ကြွစွာဖြင့် ရဲရဲဝံ့ဝံ့ ဆက်လက်လုပ်ဆောင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg" },
    { name: "XX. Judgement", upright: "ဆုံးဖြတ်ချက်၊ သတင်းကောင်း၊ ပြန်လည်နိုးထခြင်း", reversed: "နောင်တရခြင်း၊ မိမိကိုယ်ကို သံသယဖြစ်ခြင်း", advice: "အတိတ်ကို ထားခဲ့ပြီး ဆုံးဖြတ်ချက်မှန်မှန် ချပါ", image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg" },
    { name: "XXI. The World", upright: "ပြည့်စုံခြင်း၊ အောင်မြင်စွာ ပြီးမြောက်ခြင်း", reversed: "မပြီးဆုံးသေးခြင်း၊ အဟန့်အတားရှိခြင်း", advice: "ကြိုးစားမှုကို အဆုံးထိ လက်မလျှော့ပါနဲ့", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg" },

    // --- MINOR ARCANA: WANDS (14 Cards) ---
    { name: "Ace of Wands", upright: "စိတ်ကူးသစ်၊ စတင်မှု၊ တက်ကြွမှု", reversed: "ကြန့်ကြာမှု၊ စိတ်အားထက်သန်မှုနည်းခြင်း", advice: "အခွင့်အလမ်းသစ်ကို အမြန်ဆုပ်ကိုင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg" },
    { name: "Two of Wands", upright: "အနာဂတ်အစီအစဉ်၊ ဆုံးဖြတ်ချက်", reversed: "ကြောက်ရွံ့ခြင်း၊ အစီအစဉ်မရှိခြင်း", advice: "ရည်မှန်းချက်ကြီးကြီး ထားရှိပါ", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg" },
    { name: "Three of Wands", upright: "တိုးတက်မှု၊ မျှော်လင့်ချက်၊ ခရီးစဉ်", reversed: "အဟန့်အတား၊ မျှော်လင့်သလိုမဖြစ်ခြင်း", advice: "ရေရှည်ကြည့်၍ ပြင်ဆင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/ff/ff/Wands03.jpg" },
    { name: "Four of Wands", upright: "အောင်ပွဲ၊ မင်္ဂလာသတင်း၊ တည်ငြိမ်မှု", reversed: "အိမ်တွင်း မငြိမ်းချမ်းမှု၊ မတည်ငြိမ်မှု", advice: "အောင်မြင်မှုကို အတူတကွ အောင်ပွဲခံပါ", image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg" },
    { name: "Five of Wands", upright: "ပြိုင်ဆိုင်မှု၊ ပဋိပက္ခ၊ သဘောထားကွဲခြင်း", reversed: "ပဋိပက္ခ ပြီးဆုံးခြင်း၊ ညှိနှိုင်းရရှိခြင်း", advice: "စိတ်အေးအေးထားပြီး ညှိနှိုင်းပါ", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg" },
    { name: "Six of Wands", upright: "အောင်မြင်မှု၊ အသိအမှတ်ပြုခံရခြင်း", reversed: "ကျရှုံးမှု၊ ဂုဏ်သိက္ခာထိခိုက်ခြင်း", advice: "ကြိုးစားမှုကို ဆက်လက်ထိန်းသိမ်းပါ", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg" },
    { name: "Seven of Wands", upright: "ကာကွယ်ခြင်း၊ စိန်ခေါ်မှုကို ရင်ဆိုင်ခြင်း", reversed: "လက်လျှော့ခြင်း၊ ဖိအားများခြင်း", advice: "မိမိရပ်တည်ချက်ကို ခိုင်ခိုင်မာမာ ဆုပ်ကိုင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg" },
    { name: "Eight of Wands", upright: "မြန်ဆန်သော တိုးတက်မှု၊ သတင်းကောင်း", reversed: "ကြန့်ကြာမှု၊ အမှားအယွင်းဖြစ်ခြင်း", advice: "အမြန်ဆုံး မဆိုင်းမတွ လုပ်ဆောင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg" },
    { name: "Nine of Wands", upright: "ကြံ့ခိုင်မှု၊ အဆုံးသတ် စိန်ခေါ်မှု", reversed: "ပင်ပန်းနွမ်းနယ်ခြင်း၊ စိတ်ဓာတ်ကျခြင်း", advice: "အဆုံးအထိ ဇွဲမလျှော့ဘဲ ကြိုးစားပါ", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Wands09.jpg" },
    { name: "Ten of Wands", upright: "ဝန်ထုပ်ဝန်ပိုး၊ စိတ်ဖိစီးမှု extreme", reversed: "ဝန်ထုတ်ဝန်ပိုး လျှော့ချခြင်း", advice: "တာဝန်များကို ခွဲဝေယူပါ", image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg" },
    { name: "Page of Wands", upright: "သတင်းကောင်း၊ အကွက်သစ်၊ သင်ယူမှု", reversed: "သတင်းဆိုး၊ စိတ်အားထက်သန်မှုမရှိခြင်း", advice: "စိတ်ကူးသစ်များကို စမ်းသပ်ကြည့်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg" },
    { name: "Knight of Wands", upright: "တက်ကြွစွာ ဆောင်ရွက်ခြင်း၊ ခရီးစဉ်", reversed: "စိတ်တိုလွယ်ခြင်း၊ မဆင်မခြင်လုပ်ခြင်း", advice: "ရည်မှန်းချက်ဆီ မြန်မြန်ဆန်ဆန် သွားပါ", image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg" },
    { name: "Queen of Wands", upright: "ယုံကြည်မှု၊ ဆွဲဆောင်မှု၊ ရဲရင့်မှု", reversed: "မနာလိုခြင်း၊ စိတ်တိုလွယ်ခြင်း", advice: "မိမိကိုယ်ကို ယုံကြည်မှု အပြည့်ထားပါ", image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg" },
    { name: "King of Wands", upright: "ခေါင်းဆောင်မှု၊ ကြီးမားသော အောင်မြင်မှု", reversed: "အာဏာရှင်ဆန်ခြင်း၊ အလျင်စလိုဖြစ်ခြင်း", advice: "ခေါင်းဆောင်ကောင်းပီသစွာ ဆုံးဖြတ်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg" },

    // --- MINOR ARCANA: CUPS (14 Cards) ---
    { name: "Ace of Cups", upright: "ချစ်ခြင်းမေတ္တာ၊ ပျော်ရွှင်မှု၊ အစသစ်", reversed: "စိတ်ဒဏ်ရာ၊ မေတ္တာမဲ့ခြင်း", advice: "နှလုံးသားကို ဖွင့်ဟထားပါ", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg" },
    { name: "Two of Cups", upright: "သဟဇာတဖြစ်ခြင်း၊ အချစ်၊ မိတ်ဆွေကောင်း", reversed: "နားလည်မှုလွဲခြင်း၊ လမ်းခွဲခြင်း", advice: "အချင်းချင်း နားလည်မှုတည်ဆောက်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg" },
    { name: "Three of Cups", upright: "အောင်ပွဲခံခြင်း၊ မိတ်ဆွေများနှင့် ပျော်ရွှင်ရခြင်း", reversed: "အတင်းအဖျင်း၊ အထီးကျန်ခြင်း", advice: "ချစ်ခင်ရသူများနှင့် အချိန်ပေးပါ", image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg" },
    { name: "Four of Cups", upright: "ငြီးငွေ့ခြင်း၊ အခွင့်အလမ်းကို မမြင်ခြင်း", reversed: "နိုးထလာခြင်း၊ အခွင့်အလမ်းသစ်တွေ့ခြင်း", advice: "ဘေးပတ်ဝန်းကျင်ကို သတိထားကြည့်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg" },
    { name: "Five of Cups", upright: "ဝမ်းနည်းခြင်း၊ ဆုံးရှုံးမှုအပေါ် အာရုံရောက်ခြင်း", reversed: "အတိတ်မှ ရုန်းထွက်နိုင်ခြင်း", advice: "ကျန်ရှိနေသော အကောင်းဘက်ကို ကြည့်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg" },
    { name: "Six of Cups", upright: "အတိတ်၏ အမှတ်တရ၊ ကလေးဘဝ၊ အကူအညီရခြင်း", reversed: "အတိတ်တွင် ပိတ်မိနေခြင်း", advice: "အပြုသဘောဆောင်သော အမှတ်တရများကို သတိရပါ", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg" },
    { name: "Seven of Cups", upright: "စိတ်ကူးယဉ်ခြင်း၊ ရွေးချယ်စရာများပြားခြင်း", reversed: "အမှန်တရားကို မြင်လာခြင်း", advice: "လက်တွေ့ကျသော အရာကို ရွေးချယ်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg" },
    { name: "Eight of Cups", upright: "စွန့်ခွာခြင်း၊ ပိုကောင်းသောအရာကို ရှာဖွေခြင်း", reversed: "တွန့်ဆုတ်နေခြင်း၊ မစွန့်လွှတ်နိုင်ခြင်း", advice: "မလိုအပ်တော့သော အရာများကို စွန့်လွှတ်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg" },
    { name: "Nine of Cups", upright: "ဆန္ဒပြည့်ဝခြင်း၊ စိတ်ချမ်းသာခြင်း", reversed: "အတ္တကြီးခြင်း၊ လောဘကြီးခြင်း", advice: "ရရှိထားသော အရာများအပေါ် ကျေနပ်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg" },
    { name: "Ten of Cups", upright: "မိသားစု ပျော်ရွှင်မှု၊ ပြည့်စုံသော အချစ်", reversed: "မိသားစု အဆင်မပြေမှု", advice: "မိသားစုနှင့် အချစ်ကို ဦးစားပေးပါ", image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg" },
    { name: "Page of Cups", upright: "သတင်းကောင်း၊ စိတ်ကူးစိတ်သန်း၊ အချစ်သတင်း", reversed: "စိတ်ခံစားချက် မတည်ငြိမ်ခြင်း", advice: "နူးညံ့သော စိတ်ဓာတ်ဖြင့် ရင်ဆိုင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Cups11.jpg" },
    { name: "Knight of Cups", upright: "အချစ်ကမ်းလှမ်းမှု၊ အနုပညာ၊ အိပ်မက်", reversed: "ကတိမတည်ခြင်း၊ စိတ်ကူးယဉ်လွန်းခြင်း", advice: "နှလုံးသား၏ ခေါ်ဆောင်ရာသို့ လိုက်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/fa/fa/Cups12.jpg" },
    { name: "Queen of Cups", upright: "ကြင်နာမှု၊ စာနာတတ်ခြင်း၊ ပင်ကိုအသိ", reversed: "စိတ်ခံစားချက် လွန်ကဲခြင်း", advice: "စာနာနားလည်မှုပေးပါ", image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg" },
    { name: "King of Cups", upright: "စိတ်ဓာတ် တည်ငြိမ်မှု၊ စာနာတတ်သော ခေါင်းဆောင်", reversed: "စိတ်ခံစားချက် ကမောက်ကမဖြစ်ခြင်း", advice: "စိတ်အေးအေးထားပြီး ထိန်းချုပ်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg" },

    // --- MINOR ARCANA: SWORDS (14 Cards) ---
    { name: "Ace of Swords", upright: "အမှန်တရား၊ ရှင်းလင်းသော အမြင်၊ အနိုင်ရခြင်း", reversed: "ဇဝေဇဝါဖြစ်ခြင်း၊ အမှား", advice: "ပြတ်သားစွာ ဆုံးဖြတ်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg" },
    { name: "Two of Swords", upright: "ဆုံးဖြတ်ရခက်ခြင်း၊ မျက်စိမှိတ်ထားခြင်း", reversed: "အမှန်တရားကို လက်ခံရခြင်း", advice: "သတ္တိရှိရှိ ဆုံးဖြတ်ချက်ချပါ", image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg" },
    { name: "Three of Swords", upright: "နှလုံးသားထိခိုက်ရခြင်း၊ ဝမ်းနည်းမှု၊ လမ်းခွဲရခြင်း", reversed: "စိတ်ဒဏ်ရာ သက်သာလာခြင်း", advice: "အချိန်ပေး၍ စိတ်ဒဏ်ရာကို ကုစားပါ", image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg" },
    { name: "Four of Swords", upright: "နားနေခြင်း၊ စိတ်အေးချမ်းမှုရှာခြင်း", reversed: "ပြန်လည်နိုးထလာခြင်း၊ စိတ်ဖိစီးခြင်း", advice: "ခဏတာ အနားယူပါ", image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg" },
    { name: "Five of Swords", upright: "အနိုင်ရသော်လည်း ဆုံးရှုံးရခြင်း၊ ပဋိပက္ခ", reversed: "ကျေအေးခြင်း၊ သင်ခန်းစာရခြင်း", advice: "မလိုအပ်သော တိုက်ပွဲများကို ရှောင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg" },
    { name: "Six of Swords", upright: "ခက်ခဲသောအချိန်မှ လွတ်မြောက်ခြင်း၊ ခရီး", reversed: "အတိတ်တွင် ပိတ်မိနေခြင်း", advice: "ရှေ့ဆက်သွားရန် အချိန်တန်ပြီ", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg" },
    { name: "Seven of Swords", upright: "လှည့်ဖြားမှု၊ မရိုးသားမှု၊ တိတ်တဆိတ်လုပ်ခြင်း", reversed: "အမှန်တရား ပေါ်ပေါက်ခြင်း", advice: "သတိထားပြီး စိစစ်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg" },
    { name: "Eight of Swords", upright: "ပိတ်မိနေခြင်း၊ စိတ်ဓာတ်ကျခြင်း", reversed: "လွတ်မြောက်ခြင်း၊ အမြင်ကျယ်လာခြင်း", advice: "မိမိကိုယ်ကို ပိတ်လှောင်မထားပါနဲ့", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg" },
    { name: "Nine of Swords", upright: "စိုးရိမ်လွန်ခြင်း၊ အိပ်မက်ဆိုး၊ စိတ်ဖိစီးမှု", reversed: "စိုးရိမ်မှုများ လျှော့ပါးသွားခြင်း", advice: "အကြောက်တရားကို ရင်ဆိုင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg" },
    { name: "Ten of Swords", upright: "အဆုံးသတ်၊ ကျရှုံးမှု extreme၊ နာကျင်မှု", reversed: "ပြန်လည် ထူထောင်လာခြင်း", advice: "အောက်ဆုံးသို့ ရောက်ပြီးပြီမို့ အသစ်ပြန်စပါ", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg" },
    { name: "Page of Swords", upright: "စိစစ်လေ့လာခြင်း၊ သတင်းအချက်အလက်", reversed: "အတင်းအဖျင်း၊ မဆင်မခြင်ပြောဆိုခြင်း", advice: "သတင်းအချက်အလက် သေချာစုဆောင်းပါ", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg" },
    { name: "Knight of Swords", upright: "မြန်ဆန်စွာ လုပ်ဆောင်ခြင်း၊ ရဲရင့်မှု", reversed: "မဆင်မခြင် စိုက်ထုတ်ခြင်း", advice: "ဦးနှောက်နှင့် အကြံအစည်ပါတွဲပါ", image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg" },
    { name: "Queen of Swords", upright: "ပြတ်သားမှု၊ အမှန်တရား၊ ဉာဏ်ပညာ", reversed: "ရက်စက်ခြင်း၊ စိတ်ခံစားချက်မဲ့ခြင်း", advice: "ဉာဏ်ပညာနှင့် ပြတ်သားစွာ ဆုံးဖြတ်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg" },
    { name: "King of Swords", upright: "ဉာဏ်ပညာကြီးမားခြင်း၊ တရားမျှတမှု", reversed: "အာဏာအလွဲသုံးစားလုပ်ခြင်း", advice: "အချက်အလက်နှင့် ယုတ္တိဗေဒကို အသုံးပြုပါ", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg" },

    // --- MINOR ARCANA: PENTACLES (14 Cards) ---
    { name: "Ace of Pentacles", upright: "ငွေကြေး အခွင့်အလမ်း၊ အစသစ်၊ အောင်မြင်မှု", reversed: "အခွင့်အလမ်း ဆုံးရှုံးခြင်း", advice: "ငွေကြေး အခွင့်အလမ်းကို မလွတ်ပါစေနဲ", image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Penta01.jpg" },
    { name: "Two of Pentacles", upright: "ဟန်ချက်ထိန်းခြင်း၊ စီမံခန့်ခွဲမှု", reversed: "ဟန်ချက်ပျက်ခြင်း၊ ငွေကြေးကျဉ်းတောင်းခြင်း", advice: "အချိန်နှင့် ငွေကြေးကို စနစ်တကျ ထိန်းပါ", image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Penta02.jpg" },
    { name: "Three of Pentacles", upright: "အဖွဲ့လိုက် လုပ်ဆောင်ခြင်း၊ ကျွမ်းကျင်မှု", reversed: "ပူးပေါင်းဆောင်ရွက်မှု မရှိခြင်း", advice: "အခြားသူများနှင့် ပူးပေါင်းလုပ်ဆောင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Penta03.jpg" },
    { name: "Four of Pentacles", upright: "ငွေကြေး စုဆောင်းခြင်း၊ တည်ငြိမ်မှု", reversed: "ကပ်စေးနည်းခြင်း သို့မဟုတ် သုံးစွဲလွန်းခြင်း", advice: "ငွေကြေး တည်ငြိမ်အောင် ထိန်းသိမ်းပါ", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Penta04.jpg" },
    { name: "Five of Pentacles", upright: "ငွေကြေး အခက်အခဲ၊ အကူအညီမဲ့ခြင်း", reversed: "အခက်အခဲမှ လွတ်မြောက်ခြင်း", advice: "အကူအညီ တောင်းခံရန် မရှက်ပါနှင့်", image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Penta05.jpg" },
    { name: "Six of Pentacles", upright: "မျှဝေခြင်း၊ လှူဒါန်းခြင်း၊ အကူအညီရခြင်း", reversed: "မမျှတမှု၊ အမြတ်ထုတ်ခံရခြင်း", advice: "အပြန်အလှန် ကူညီဖေးမပါ", image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Penta06.jpg" },
    { name: "Seven of Pentacles", upright: "အသီးအပွင့် ခံစားရခြင်း၊ စိတ်ရှည်မှု", reversed: "ကြိုးစားမှု အလကားဖြစ်ခြင်း", advice: "အသီးအပွင့်များ ရရှိရန် စိတ်ရှည်စွာ စောင့်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Penta07.jpg" },
    { name: "Eight of Pentacles", upright: "ကြိုးစားအားထုတ်ခြင်း၊ ကျွမ်းကျင်မှု တိုးတက်ခြင်း", reversed: "ပျင်းရိခြင်း၊ အရည်အသွေးမမီခြင်း", advice: "မိမိကျွမ်းကျင်မှုကို ပိုမိုမြှင့်တင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Penta08.jpg" },
    { name: "Nine of Pentacles", upright: "ကြွယ်ဝချမ်းသာမှု၊ လွတ်လပ်စွာ စည်းစိမ်ခံစားရခြင်း", reversed: "ငွေကြေး မှီခိုရခြင်း", advice: "မိမိ အောင်မြင်မှုကို ဂုဏ်ယူပါ", image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Penta09.jpg" },
    { name: "Ten of Pentacles", upright: "မိသားစု ကြွယ်ဝမှု၊ အမွေအနှစ်၊ အေးချမ်းမှု", reversed: "မိသားစု ငွေကြေး ပြဿနာ", advice: "ရေရှည် တည်ငြိမ်မှုကို တည်ဆောက်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Penta10.jpg" },
    { name: "Page of Pentacles", upright: "သင်ယူလိုစိတ်၊ ငွေကြေး သတင်းကောင်း", reversed: "အခွင့်အလမ်း လွတ်သွားခြင်း", advice: "ပညာ သို့မဟုတ် စီးပွားရေးသစ် သင်ယူပါ", image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Penta11.jpg" },
    { name: "Knight of Pentacles", upright: "ဇွဲရှိခြင်း၊ တာဝန်ကျေခြင်း၊ အလုပ်လုပ်ခြင်း", reversed: "ပျင်းရိခြင်း၊ တင်းခံနေခြင်း", advice: "ဖြည်းဖြည်းနှင့် မှန်မှန် ကြိုးစားပါ", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Penta12.jpg" },
    { name: "Queen of Pentacles", upright: "ကြွယ်ဝမှု၊ စိစစ်ခန့်ခွဲနိုင်မှု၊ မိခင်စိတ်", reversed: "ငွေကြေး ပူပန်လွန်းခြင်း", advice: "လက်တွေ့ကျကျ စိစစ်စီမံပါ", image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Penta13.jpg" },
    { name: "King of Pentacles", upright: "စီးပွားရေး အောင်မြင်မှု၊ ဩဇာတိက္ကမ", reversed: "လောဘကြီးခြင်း၊ စီးပွားရေး ကျဆင်းခြင်း", advice: "စီးပွားရေးကို တည်ငြိမ်စွာ ဦးဆောင်ပါ", image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Penta14.jpg" }
];

// Main Draw Function
function drawCards() {
    const userNameInput = document.getElementById("userName");
    const questionInput = document.getElementById("question");
    
    const userName = userNameInput ? userNameInput.value.trim() : "";
    const question = questionInput ? questionInput.value.trim() : "";

    if (!question) {
        alert("ကျေးဇူးပြု၍ မေးခွန်း ရိုက်ထည့်ပေးပါခင်ဗျာ။");
        return;
    }

    const container = document.getElementById("result-container");

    // Shuffle and pick 3 unique cards
    const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
    const selectedCards = shuffled.slice(0, 3);
    const positions = ["အတိတ်/နောက်ခံ", "ပစ္စုပ္ပန်/စိန်ခေါ်မှု", "အနာဂတ်/ရလဒ်"];

    const drawnResults = selectedCards.map((card, index) => {
        const isReversed = Math.random() < 0.5;
        return {
            positionName: positions[index],
            name: card.name,
            orientation: isReversed ? "Reversed (ပြောင်းပြန်)" : "Upright (အမှန်)",
            meaning: isReversed ? card.reversed : card.upright,
            advice: card.advice,
            image: card.image,
            isReversed: isReversed
        };
    });

    const aiReadingText = generateLocalAiReading(question, drawnResults, userName);
    const nameHeader = userName ? `👤 <b>${userName}</b> အတွက် ဟောစာတမ်း` : "🔮 သင့်အတွက် တားရော့ ဟောစာတမ်း";
    
    let htmlContent = `
        <div style="width: 100%; margin-top: 20px;">
            <h2>${nameHeader}</h2>
            <p><b>မေးမြန်းထားသော မေးခွန်း -</b> "${question}"</p>
        </div>
        <div class="cards-grid">
    `;

    drawnResults.forEach(card => {
        const imageStyle = card.isReversed ? "transform: rotate(180deg);" : "";
        
        htmlContent += `
            <div class="card">
                <small>${card.positionName}</small>
                <h3>${card.name}</h3>
                <div class="card-img-container">
                    <img src="${card.image}" alt="${card.name}" style="${imageStyle}">
                </div>
                <p><b>အနေအထား:</b> ${card.orientation}</p>
                <p><b>အဓိပ္ပာယ်:</b> ${card.meaning}</p>
            </div>
        `;
    });

    htmlContent += `</div>
    <div style="margin-top: 30px; width: 100%; text-align: left; background: #16213e; padding: 20px; border-radius: 10px; border-left: 4px solid #e94560;">
        <h3>🤖 Tarot Reading AI ဟောစာတမ်း</h3>
        <div style="white-space: pre-line; line-height: 1.6;">${aiReadingText}</div>
    </div>`;

    container.innerHTML = htmlContent;
}

// Generates local Burmese AI interpretation text
function generateLocalAiReading(question, cards, userName) {
    const person = userName ? userName : "မေးမြန်းသူ";
    const reversedCount = cards.filter(c => c.isReversed).length;
    let overallTone = "";
    
    if (reversedCount === 0) {
        overallTone = "အလွန် အပြုသဘောဆောင်ပြီး အခွင့်အလမ်းကောင်းများ ပွင့်လန်းနေသည့် အခြေအနေ ဖြစ်ပါသည်။";
    } else if (reversedCount === 1) {
        overallTone = "အခြေအနေကောင်းများ ရှိနေသော်လည်း အနည်းငယ် သတိထားစောင့်ကြည့်ရမည့် အပိုင်းရှိနေပါသည်။";
    } else {
        overallTone = "စိန်ခေါ်မှုများနှင့် အဟန့်အတားအချို့ကို ကျော်လွှားရမည့် ကာလဖြစ်ပါသည်။";
    }

    return `
<b>[ အထွေထွေ သုံးသပ်ချက် ]</b>
${person} မေးမြန်းထားသည့် "${question}" နှင့် ပတ်သက်၍ ထွက်ရှိလာသော တားရော့ကတ်များ၏ နိမိတ်အရ ${overallTone}

<b>[ အသေးစိတ် စိစစ်ချက် ]</b>
• <b>${cards[0].positionName} - ${cards[0].name}:</b> အရင်က ${cards[0].meaning} အခြေအနေများ ရှိခဲ့ပြီး လက်ရှိ ဖြစ်စဉ်အပေါ် သက်ရောက်မှု ရှိနေပါသည်။
• <b>${cards[1].positionName} - ${cards[1].name}:</b> လက်ရှိတွင် ${cards[1].meaning} ဆိုသည့် အခြေအနေနှင့် ရင်ဆိုင်နေရပြီး သတိထား စီမံရပါမည်။
• <b>${cards[2].positionName} - ${cards[2].name}:</b> ရှေ့ဆက်တွင် ${cards[2].meaning} အလားအလာသို့ ဦးတည်သွားမည် ဖြစ်ပါသည်။

<b>[ အနှစ်ချုပ်နှင့် အကြံပြုချက် ]</b>
လက်ရှိ အခြေအနေကို အကောင်းဆုံး ကျော်လွှားနိုင်ရန်အတွက် <b>"${cards[2].advice}"</b> ဟု တားရော့ကတ်များက ညွှန်ပြနေပါသည်။
    `.trim();
}
