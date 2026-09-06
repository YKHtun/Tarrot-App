// Tarot Deck 78 Cards with Resized CDN Links
const tarotDeck = [
    // --- MAJOR ARCANA (22) ---
    { name: "0. The Fool", upright: "အစသစ်၊ လွတ်လပ်မှု၊ စွန့်စားမှု", reversed: "ပေါ့ဆမှု၊ စွန့်စားလွန်းခြင်း", advice: "သတိထားပြီး သေချာစဉ်းစားလုပ်ဆောင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m00.jpg" },
    { name: "I. The Magician", upright: "စွမ်းရည်၊ ဖန်တီးမှု၊ အခွင့်အလမ်း", reversed: "လှည့်ဖြားခံရခြင်း၊ ယုံကြည်မှုနည်းခြင်း", advice: "မိမိစွမ်းရည်ကို ယုံကြည်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m01.jpg" },
    { name: "II. The High Priestess", upright: "ပင်ကိုအသိ၊ လျှို့ဝှက်ချက်", reversed: "စိတ်ရှုပ်ထွေးခြင်း၊ သံသယရှိခြင်း", advice: "စိတ်အေးအေးထားပြီး ပင်ကိုအသိကို အားကိုးပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m02.jpg" },
    { name: "III. The Empress", upright: "အောင်မြင်မှု၊ အကူအညီရရှိခြင်း", reversed: "တိုးတက်မှုနှေးခြင်း၊ စိတ်ဖိစီးခြင်း", advice: "စိတ်ရှည်ရှည်နဲ့ အချိန်ပေးပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m03.jpg" },
    { name: "IV. The Emperor", upright: "တည်ငြိမ်မှု၊ အာဏာ၊ စည်းကမ်း", reversed: "ထိန်းချုပ်ခံရခြင်း၊ အဆင်မပြေမှု", advice: "စည်းကမ်းနှင့် တည်ငြိမ်မှုကို ဦးစားပေးပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m04.jpg" },
    { name: "V. The Hierophant", upright: "လမ်းညွှန်မှုရရှိခြင်း၊ သင်ယူခြင်း", reversed: "သဘောထားကွဲလွဲခြင်း၊ လွတ်လပ်ချင်ခြင်း", advice: "လူကြီးသူမများ၏ အကြံဉာဏ်ကို ရယူပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m05.jpg" },
    { name: "VI. The Lovers", upright: "ချစ်ခြင်း၊ သဘောတူညီမှု၊ ရွေးချယ်မှု", reversed: "မညီမျှမှု၊ ဆုံးဖြတ်ရခက်ခြင်း", advice: "နှလုံးသားနှင့် ဦးနှောက် မျှတစွာ ရွေးချယ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m06.jpg" },
    { name: "VII. The Chariot", upright: "အောင်မြင်စွာ ကျော်လွှားနိုင်ခြင်း၊ ထိန်းချုပ်မှု", reversed: "ထိန်းချုပ်ရခက်ခြင်း၊ လမ်းကြောင်းလွဲခြင်း", advice: "ဇွဲစိုက်ထုတ်ပြီး ရှေ့ဆက်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m07.jpg" },
    { name: "VIII. Strength", upright: "သတ္တိ၊ စိတ်ဓာတ်ကြံ့ခိုင်မှု၊ စိတ်ရှည်မှု", reversed: "ဇဝေဇဝါဖြစ်ခြင်း၊ အားနည်းခြင်း", advice: "ကြင်နာမှုနှင့် စိတ်ရှည်မှုဖြင့် ဖြေရှင်းပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m08.jpg" },
    { name: "IX. The Hermit", upright: "ဆင်ခြင်တုံတရား၊ မိမိကိုယ်တိုင် ပြန်လည်စိစစ်ခြင်း", reversed: "တစ်ကောင်ကြွက်ဖြစ်ခြင်း၊ အထီးကျန်ခြင်း", advice: "အေးဆေးစွာ သုံးသပ်ရန် အချိန်ယူပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m09.jpg" },
    { name: "X. Wheel of Fortune", upright: "ကံကြမ္မာအလှည့်အပြောင်း၊ လာဘ်ရွှင်ခြင်း", reversed: "ကံမကောင်းခြင်း၊ အပြောင်းအလဲနှေးခြင်း", advice: "အခွင့်အလမ်းကို အမိအရဆုပ်ကိုင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m10.jpg" },
    { name: "XI. Justice", upright: "တရားမျှတမှု၊ အမှန်တရား၊ ဆုံးဖြတ်ချက်", reversed: "မမျှတမှု၊ ဆုံးဖြတ်ချက်မှားခြင်း", advice: "မှန်ကန်သော လမ်းကြောင်းအတိုင်း ဆောင်ရွက်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m11.jpg" },
    { name: "XII. The Hanged Man", upright: "အနစ်နာခံခြင်း၊ အမြင်သစ်ရရှိခြင်း", reversed: "အလကားအချိန်ကုန်ခြင်း၊ အချိန်ဆွဲခြင်း", advice: "ကိစ္စများကို အမြင်သစ်တစ်ခုဖြင့် ကြည့်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m12.jpg" },
    { name: "XIII. Death", upright: "အဆုံးသတ်နှင့် အစသစ်၊ ပြောင်းလဲခြင်း", reversed: "ပြောင်းလဲရန် ငြင်းဆန်ခြင်း၊ အဟောင်းကို ဖက်တွယ်ထားခြင်း", advice: "အသစ်စတင်ရန် အဟောင်းကို စွန့်လွှတ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m13.jpg" },
    { name: "XIV. Temperance", upright: "မျှတမှု၊ ညှိနှိုင်းဖြေရှင်းနိုင်ခြင်း", reversed: "ဟန်ချက်ပျက်ခြင်း၊ လွန်ကဲခြင်း", advice: "အစွန်းမရောက်ဘဲ ဟန်ချက်ညီအောင် ထိန်းပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m14.jpg" },
    { name: "XV. The Devil", upright: "စွဲလမ်းမှု၊ ထိန်းချုပ်ခံရခြင်း", reversed: "လွတ်မြောက်ခြင်း၊ သတိဝင်လာခြင်း", advice: "မကောင်းသော အကျင့်များကို စွန့်လွှတ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m15.jpg" },
    { name: "XVI. The Tower", upright: "ရုတ်တရက် အပြောင်းအလဲ၊ အမှန်တရား ပေါ်ပေါက်ခြင်း", reversed: "ကျရှုံးမှုကို ရှောင်လွှဲနိုင်ခြင်း", advice: "အခက်အခဲမှ သင်ခန်းစာယူ၍ ပြန်လည်စတင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m16.jpg" },
    { name: "XVII. The Star", upright: "မျှော်လင့်ချက်၊ အေးချမ်းမှု၊ ယုံကြည်မှု", reversed: "စိတ်ပျက်ခြင်း၊ မျှော်လင့်ချက်မဲ့ခြင်း", advice: "အကောင်းမြင်စိတ်ဖြင့် မျှော်လင့်ချက် ထားရှိပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m17.jpg" },
    { name: "XVIII. The Moon", upright: "စိုးရိမ်ပူပန်မှု၊ မရေမရာဖြစ်ခြင်း", reversed: "သံသယများ ရှင်းလင်းသွားခြင်း", advice: "စိတ်ကူးယဉ် စိုးရိမ်မှုများကို လျှော့ချပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m18.jpg" },
    { name: "XIX. The Sun", upright: "ဝမ်းမြောက်ခြင်း၊ အောင်မြင်မှု၊ တက်ကြွမှု", reversed: "ယာယီအခက်အခဲ၊ စိတ်မကြည်မလင်ဖြစ်ခြင်း", advice: "တက်ကြွစွာဖြင့် ရဲရဲဝံ့ဝံ့ ဆက်လက်လုပ်ဆောင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m19.jpg" },
    { name: "XX. Judgement", upright: "ဆုံးဖြတ်ချက်၊ သတင်းကောင်း၊ ပြန်လည်နိုးထခြင်း", reversed: "နောင်တရခြင်း၊ မိမိကိုယ်ကို သံသယဖြစ်ခြင်း", advice: "အတိတ်ကို ထားခဲ့ပြီး ဆုံးဖြတ်ချက်မှန်မှန် ချပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m20.jpg" },
    { name: "XXI. The World", upright: "ပြည့်စုံခြင်း၊ အောင်မြင်စွာ ပြီးမြောက်ခြင်း", reversed: "မပြီးဆုံးသေးခြင်း၊ အဟန့်အတားရှိခြင်း", advice: "ကြိုးစားမှုကို အဆုံးထိ လက်မလျှော့ပါနဲ့", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/m21.jpg" },

    // --- MINOR ARCANA: WANDS ---
    { name: "Ace of Wands", upright: "စိတ်ကူးသစ်၊ စတင်မှု", reversed: "ကြန့်ကြာမှု", advice: "အခွင့်အလမ်းသစ်ကို အမြန်ဆုပ်ကိုင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w01.jpg" },
    { name: "Two of Wands", upright: "အနာဂတ်အစီအစဉ်", reversed: "ကြောက်ရွံ့ခြင်း", advice: "ရည်မှန်းချက်ကြီးကြီး ထားရှိပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w02.jpg" },
    { name: "Three of Wands", upright: "တိုးတက်မှု၊ ခရီးစဉ်", reversed: "အဟန့်အတား", advice: "ရေရှည်ကြည့်၍ ပြင်ဆင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w03.jpg" },
    { name: "Four of Wands", upright: "အောင်ပွဲ၊ မင်္ဂလာသတင်း", reversed: "မတည်ငြိမ်မှု", advice: "အောင်မြင်မှုကို အောင်ပွဲခံပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w04.jpg" },
    { name: "Five of Wands", upright: "ပြိုင်ဆိုင်မှု၊ ပဋိပက္ခ", reversed: "ပဋိပက္ခ ပြီးဆုံးခြင်း", advice: "စိတ်အေးအေးထားပြီး ညှိနှိုင်းပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w05.jpg" },
    { name: "Six of Wands", upright: "အောင်မြင်မှု၊ အသိအမှတ်ပြုခံရခြင်း", reversed: "ကျရှုံးမှု", advice: "ကြိုးစားမှုကို ဆက်လက်ထိန်းသိမ်းပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w06.jpg" },
    { name: "Seven of Wands", upright: "စိန်ခေါ်မှုကို ရင်ဆိုင်ခြင်း", reversed: "လက်လျှော့ခြင်း", advice: "မိမိရပ်တည်ချက်ကို ဆုပ်ကိုင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w07.jpg" },
    { name: "Eight of Wands", upright: "မြန်ဆန်သော တိုးတက်မှု", reversed: "ကြန့်ကြာမှု", advice: "အမြန်ဆုံး မဆိုင်းမတွ လုပ်ဆောင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w08.jpg" },
    { name: "Nine of Wands", upright: "ကြံ့ခိုင်မှု၊ စိန်ခေါ်မှု", reversed: "ပင်ပန်းနွမ်းနယ်ခြင်း", advice: "အဆုံးအထိ ဇွဲမလျှော့ပါနဲ့", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w09.jpg" },
    { name: "Ten of Wands", upright: "ဝန်ထုပ်ဝန်ပိုး၊ စိတ်ဖိစီးမှု", reversed: "ဝန်ထုတ်ဝန်ပိုး လျှော့ချခြင်း", advice: "တာဝန်များကို ခွဲဝေယူပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w10.jpg" },
    { name: "Page of Wands", upright: "သတင်းကောင်း၊ အကွက်သစ်", reversed: "သတင်းဆိုး", advice: "စိတ်ကူးသစ်များကို စမ်းသပ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w11.jpg" },
    { name: "Knight of Wands", upright: "တက်ကြွစွာ ဆောင်ရွက်ခြင်း", reversed: "မဆင်မခြင်လုပ်ခြင်း", advice: "ရည်မှန်းချက်ဆီ မြန်မြန်သွားပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w12.jpg" },
    { name: "Queen of Wands", upright: "ယုံကြည်မှု၊ ဆွဲဆောင်မှု", reversed: "စိတ်တိုလွယ်ခြင်း", advice: "မိမိကိုယ်ကို ယုံကြည်မှုထားပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w13.jpg" },
    { name: "King of Wands", upright: "ခေါင်းဆောင်မှု၊ အောင်မြင်မှု", reversed: "အာဏာရှင်ဆန်ခြင်း", advice: "ခေါင်းဆောင်ကောင်းပီသစွာ ဆုံးဖြတ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/w14.jpg" },

    // --- MINOR ARCANA: CUPS ---
    { name: "Ace of Cups", upright: "ချစ်ခြင်းမေတ္တာ၊ အစသစ်", reversed: "စိတ်ဒဏ်ရာ", advice: "နှလုံးသားကို ဖွင့်ဟထားပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c01.jpg" },
    { name: "Two of Cups", upright: "သဟဇာတဖြစ်ခြင်း၊ မိတ်ဆွေကောင်း", reversed: "နားလည်မှုလွဲခြင်း", advice: "အချင်းချင်း နားလည်မှုတည်ဆောက်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c02.jpg" },
    { name: "Three of Cups", upright: "အောင်ပွဲခံခြင်း၊ ပျော်ရွှင်ရခြင်း", reversed: "အထီးကျန်ခြင်း", advice: "ချစ်ခင်ရသူများနှင့် အချိန်ပေးပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c03.jpg" },
    { name: "Four of Cups", upright: "ငြီးငွေ့ခြင်း", reversed: "နိုးထလာခြင်း", advice: "ဘေးပတ်ဝန်းကျင်ကို သတိထားကြည့်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c04.jpg" },
    { name: "Five of Cups", upright: "ဝမ်းနည်းခြင်း၊ ဆုံးရှုံးမှု", reversed: "အတိတ်မှ ရုန်းထွက်နိုင်ခြင်း", advice: "ကျန်ရှိနေသော အကောင်းဘက်ကို ကြည့်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c05.jpg" },
    { name: "Six of Cups", upright: "အတိတ်၏ အမှတ်တရ", reversed: "အတိတ်တွင် ပိတ်မိနေခြင်း", advice: "အပြုသဘောဆောင်သော အမှတ်တရများကို သတိရပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c06.jpg" },
    { name: "Seven of Cups", upright: "စိတ်ကူးယဉ်ခြင်း", reversed: "အမှန်တရားကို မြင်လာခြင်း", advice: "လက်တွေ့ကျသော အရာကို ရွေးချယ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c07.jpg" },
    { name: "Eight of Cups", upright: "စွန့်ခွာခြင်း", reversed: "တွန့်ဆုတ်နေခြင်း", advice: "မလိုအပ်တော့သော အရာများကို စွန့်လွှတ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c08.jpg" },
    { name: "Nine of Cups", upright: "ဆန္ဒပြည့်ဝခြင်း", reversed: "အတ္တကြီးခြင်း", advice: "ရရှိထားသော အရာများအပေါ် ကျေနပ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c09.jpg" },
    { name: "Ten of Cups", upright: "မိသားစု ပျော်ရွှင်မှု", reversed: "မိသားစု အဆင်မပြေမှု", advice: "မိသားစုနှင့် အချစ်ကို ဦးစားပေးပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c10.jpg" },
    { name: "Page of Cups", upright: "သတင်းကောင်း၊ စိတ်ကူး", reversed: "စိတ်ခံစားချက် မတည်ငြိမ်ခြင်း", advice: "နူးညံ့သော စိတ်ဓာတ်ဖြင့် ရင်ဆိုင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c11.jpg" },
    { name: "Knight of Cups", upright: "အချစ်ကမ်းလှမ်းမှု", reversed: "စိတ်ကူးယဉ်လွန်ခြင်း", advice: "နှလုံးသား၏ ခေါ်ဆောင်ရာသို့ လိုက်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c12.jpg" },
    { name: "Queen of Cups", upright: "ကြင်နာမှု၊ ပင်ကိုအသိ", reversed: "စိတ်ခံစားချက် လွန်ကဲခြင်း", advice: "စာနာနားလည်မှုပေးပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c13.jpg" },
    { name: "King of Cups", upright: "စိတ်ဓာတ် တည်ငြိမ်မှု", reversed: "စိတ်ခံစားချက် ကမောက်ကမဖြစ်ခြင်း", advice: "စိတ်အေးအေးထားပြီး ထိန်းချုပ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/c14.jpg" },

    // --- MINOR ARCANA: SWORDS ---
    { name: "Ace of Swords", upright: "အမှန်တရား၊ အနိုင်ရခြင်း", reversed: "ဇဝေဇဝါဖြစ်ခြင်း", advice: "ပြတ်သားစွာ ဆုံးဖြတ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s01.jpg" },
    { name: "Two of Swords", upright: "ဆုံးဖြတ်ရခက်ခြင်း", reversed: "အမှန်တရားကို လက်ခံရခြင်း", advice: "သတ္တိရှိရှိ ဆုံးဖြတ်ချက်ချပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s02.jpg" },
    { name: "Three of Swords", upright: "နှလုံးသားထိခိုက်ရခြင်း", reversed: "စိတ်ဒဏ်ရာ သက်သာလာခြင်း", advice: "အချိန်ပေး၍ စိတ်ဒဏ်ရာကို ကုစားပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s03.jpg" },
    { name: "Four of Swords", upright: "နားနေခြင်း၊ စိတ်အေးချမ်းမှု", reversed: "ပြန်လည်နိုးထလာခြင်း", advice: "ခဏတာ အနားယူပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s04.jpg" },
    { name: "Five of Swords", upright: "ပဋိပက္ခ၊ ဆုံးရှုံးရခြင်း", reversed: "ကျေအေးခြင်း", advice: "မလိုအပ်သော တိုက်ပွဲများကို ရှောင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s05.jpg" },
    { name: "Six of Swords", upright: "ခက်ခဲချိန်မှ လွတ်မြောက်ခြင်း", reversed: "အတိတ်တွင် ပိတ်မိနေခြင်း", advice: "ရှေ့ဆက်သွားရန် အချိန်တန်ပြီ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s06.jpg" },
    { name: "Seven of Swords", upright: "လှည့်ဖြားမှု၊ တိတ်တဆိတ်လုပ်ခြင်း", reversed: "အမှန်တရား ပေါ်ပေါက်ခြင်း", advice: "သတိထားပြီး စိစစ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s07.jpg" },
    { name: "Eight of Swords", upright: "ပိတ်မိနေခြင်း", reversed: "လွတ်မြောက်ခြင်း", advice: "မိမိကိုယ်ကို ပိတ်လှောင်မထားပါနဲ့", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s08.jpg" },
    { name: "Nine of Swords", upright: "စိုးရိမ်လွန်ခြင်း၊ စိတ်ဖိစီးမှု", reversed: "စိုးရိမ်မှုများ လျှော့ပါးသွားခြင်း", advice: "အကြောက်တရားကို ရင်ဆိုင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s09.jpg" },
    { name: "Ten of Swords", upright: "အဆုံးသတ်၊ နာကျင်မှု", reversed: "ပြန်လည် ထူထောင်လာခြင်း", advice: "အသစ်ပြန်စပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s10.jpg" },
    { name: "Page of Swords", upright: "စိစစ်လေ့လာခြင်း", reversed: "အတင်းအဖျင်း", advice: "သတင်းအချက်အလက် စုဆောင်းပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s11.jpg" },
    { name: "Knight of Swords", upright: "မြန်ဆန်စွာ လုပ်ဆောင်ခြင်း", reversed: "မဆင်မခြင် စိုက်ထုတ်ခြင်း", advice: "ဦးနှောက်နှင့် အကြံအစည်ပါတွဲပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s12.jpg" },
    { name: "Queen of Swords", upright: "ပြတ်သားမှု၊ ဉာဏ်ပညာ", reversed: "စိတ်ခံစားချက်မဲ့ခြင်း", advice: "ဉာဏ်ပညာနှင့် ပြတ်သားစွာ ဆုံးဖြတ်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s13.jpg" },
    { name: "King of Swords", upright: "ဉာဏ်ပညာကြီးမားခြင်း", reversed: "အာဏာအလွဲသုံးစားလုပ်ခြင်း", advice: "ယုတ္တိဗေဒကို အသုံးပြုပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/s14.jpg" },

    // --- MINOR ARCANA: PENTACLES ---
    { name: "Ace of Pentacles", upright: "ငွေကြေး အခွင့်အလမ်း", reversed: "အခွင့်အလမ်း ဆုံးရှုံးခြင်း", advice: "ငွေကြေး အခွင့်အလမ်းကို မလွတ်ပါစေနဲ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p01.jpg" },
    { name: "Two of Pentacles", upright: "ဟန်ချက်ထိန်းခြင်း", reversed: "ဟန်ချက်ပျက်ခြင်း", advice: "အချိန်နှင့် ငွေကြေးကို စနစ်တကျ ထိန်းပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p02.jpg" },
    { name: "Three of Pentacles", upright: "အဖွဲ့လိုက် လုပ်ဆောင်ခြင်း", reversed: "ပူးပေါင်းဆောင်ရွက်မှု မရှိခြင်း", advice: "အခြားသူများနှင့် ပူးပေါင်းလုပ်ဆောင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p03.jpg" },
    { name: "Four of Pentacles", upright: "ငွေကြေး စုဆောင်းခြင်း", reversed: "သုံးစွဲလွန်းခြင်း", advice: "ငွေကြေး တည်ငြိမ်အောင် ထိန်းသိမ်းပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p04.jpg" },
    { name: "Five of Pentacles", upright: "ငွေကြေး အခက်အခဲ", reversed: "အခက်အခဲမှ လွတ်မြောက်ခြင်း", advice: "အကူအညီ တောင်းခံရန် မရှက်ပါနှင့်", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p05.jpg" },
    { name: "Six of Pentacles", upright: "မျှဝေခြင်း၊ လှူဒါန်းခြင်း", reversed: "အမြတ်ထုတ်ခံရခြင်း", advice: "အပြန်အလှန် ကူညီဖေးမပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p06.jpg" },
    { name: "Seven of Pentacles", upright: "အသီးအပွင့် ခံစားရခြင်း", reversed: "ကြိုးစားမှု အလကားဖြစ်ခြင်း", advice: "စိတ်ရှည်စွာ စောင့်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p07.jpg" },
    { name: "Eight of Pentacles", upright: "ကြိုးစားအားထုတ်ခြင်း", reversed: "ပျင်းရိခြင်း", advice: "မိမိကျွမ်းကျင်မှုကို ပိုမိုမြှင့်တင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p08.jpg" },
    { name: "Nine of Pentacles", upright: "ကြွယ်ဝချမ်းသာမှု", reversed: "ငွေကြေး မှီခိုရခြင်း", advice: "မိမိ အောင်မြင်မှုကို ဂုဏ်ယူပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p09.jpg" },
    { name: "Ten of Pentacles", upright: "မိသားစု ကြွယ်ဝမှု", reversed: "မိသားစု ငွေကြေး ပြဿနာ", advice: "ရေရှည် တည်ငြိမ်မှုကို တည်ဆောက်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p10.jpg" },
    { name: "Page of Pentacles", upright: "သင်ယူလိုစိတ်၊ ငွေကြေး သတင်းကောင်း", reversed: "အခွင့်အလမ်း လွတ်သွားခြင်း", advice: "ပညာ သို့မဟုတ် စီးပွားရေးသစ် သင်ယူပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p11.jpg" },
    { name: "Knight of Pentacles", upright: "ဇွဲရှိခြင်း၊ တာဝန်ကျေခြင်း", reversed: "ပျင်းရိခြင်း", advice: "ဖြည်းဖြည်းနှင့် မှန်မှန် ကြိုးစားပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p12.jpg" },
    { name: "Queen of Pentacles", upright: "ကြွယ်ဝမှု၊ စိစစ်ခန့်ခွဲနိုင်မှု", reversed: "ငွေကြေး ပူပန်လွန်းခြင်း", advice: "လက်တွေ့ကျကျ စိစစ်စီမံပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p13.jpg" },
    { name: "King of Pentacles", upright: "စီးပွားရေး အောင်မြင်မှု", reversed: "လောဘကြီးခြင်း", advice: "စီးပွားရေးကို တည်ငြိမ်စွာ ဦးဆောင်ပါ", image: "https://raw.githubusercontent.com/evercoder/tarot-api/master/static/cards/p14.jpg" }
];
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
        <div style="width: 100%; margin-top: 20px; text-align: center;">
            <h2>${nameHeader}</h2>
            <p><b>မေးမြန်းထားသော မေးခွန်း -</b> "${question}"</p>
        </div>
        <div class="cards-grid">
    `;

    drawnResults.forEach(card => {
        const imageStyle = card.isReversed ? "transform: rotate(180deg);" : "";
        
        htmlContent += `
            <div class="card">
                <small style="color: #e94560; font-weight: bold;">${card.positionName}</small>
                <h3 style="margin: 5px 0;">${card.name}</h3>
                <div class="card-img-container">
                    <img src="${card.image}" alt="${card.name}" style="${imageStyle}">
                </div>
                <p><b>အနေအထား:</b> ${card.orientation}</p>
                <p><b>အဓိပ္ပာယ်:</b> ${card.meaning}</p>
            </div>
        `;
    });

    htmlContent += `</div>
    <div style="margin-top: 30px; width: 100%; text-align: left; background: #16213e; padding: 20px; border-radius: 10px; border-left: 4px solid #e94560; box-sizing: border-box;">
        <h3>🤖 Tarot Reading AI ဟောစာတမ်း</h3>
        <div style="white-space: pre-line; line-height: 1.6;">${aiReadingText}</div>
    </div>`;

    container.innerHTML = htmlContent;
}

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
