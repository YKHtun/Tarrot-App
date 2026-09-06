// Tarot Deck 78 Cards with Resized CDN Links
const tarotDeck = [
    // --- MAJOR ARCANA (22) ---
    { 
        name: "0. The Fool", 
        upright: "ဘဝမှာ အစသစ်တစ်ခု စတော့မယ်၊ ရဲရဲဝံ့ဝံ့ စွန့်စားကြည့်လိုက်ပါ", 
        reversed: "ပေါ့ဆလွန်းရင် ပျက်စီးနိုင်တယ်၊ မဆင်မခြင် စွန့်စားတာမျိုး သတိထားပါ", 
        advice: "ခြေလှမ်းမလှမ်းခင် သေချာစဉ်းစားပါ၊ စိတ်ဇောနဲ့တင် မလုပ်လိုက်ပါနဲ့", 
        image: "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg" 
    },
    { 
        name: "I. The Magician", 
        upright: "မင်းမှာ လိုအပ်တဲ့ စွမ်းရည်နဲ့ အခွင့်အလမ်း အကုန်ရှိနေပြီ၊ စတင်လိုက်တော့", 
        reversed: "ကိုယ့်ကိုယ်ကို ယုံကြည်မှု မရှိသေးဘူး၊ ဒါမှမဟုတ် သူတစ်ပါး လှည့်ဖြားတာ ခံရနိုင်တယ်", 
        advice: "ကိုယ့်မှာရှိတဲ့ ပင်ကိုစွမ်းရည်ကို ပညာရှိရှိ အသုံးပြုပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg" 
    },
    { 
        name: "II. The High Priestess", 
        upright: "အတွင်းစိတ်ရဲ့ အသံကို နားထောင်ပါ၊ လျှို့ဝှက်ချက် အမှန်တရားတွေ ပေါ်လာလိမ့်မယ်", 
        reversed: "စိတ်ဓာတ်မတည်ငြိမ်ဘဲ ဖြစ်နေတယ်၊ ဘာလုပ်ရမှန်းမသိ လမ်းပျောက်နေသလိုမျိုးပါ", 
        advice: "လောဘမကြီးဘဲ စိတ်အေးအေးထားပြီး ကိုယ့်ရဲ့ ပင်ကိုအသိကို အားကိုးပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg" 
    },
    { 
        name: "III. The Empress", 
        upright: "တိုးတက်အောင်မြင်မှုတွေ ရတော့မယ်၊ ဘဝက အဆင်ပြေ သာယာနေပါပြီ", 
        reversed: "လုပ်သလောက် ခရီးမရောက်ဘဲ တိုးတက်မှု နှေးကွေးနေလို့ စိတ်ဖိစီးနေရတယ်", 
        advice: "လောမကြီးပါနဲ့၊ အချိန်တန်ရင် အရာရာ အဆင်ပြေလာမှာမို့ စိတ်ရှည်ပေးပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg" 
    },
    { 
        name: "IV. The Emperor", 
        upright: "အခြေအနေတွေကို ထိန်းချုပ်နိုင်ပြီ၊ အလုပ်နဲ့ ဘဝမှာ တည်ငြိမ်မှုရလိမ့်မယ်", 
        reversed: "သူများ ထိန်းချုပ်တာ ခံနေရတယ်၊ စည်းကမ်းမရှိဘဲ အဆင်မပြေဖြစ်နေတယ်", 
        advice: "စည်းကမ်းရှိရှိနဲ့ တည်ငြိမ်စွာ ဆုံးဖြတ်ချက်ချပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg" 
    },
    { 
        name: "V. The Hierophant", 
        upright: "လူကြီးသူမတွေရဲ့ လမ်းညွှန်မှု ရလိမ့်မယ်၊ အစဉ်အလာအတိုင်း သွားတာ အကောင်းဆုံးပါ", 
        reversed: "စနစ်ဟောင်းတွေကို မကြိုက်ဘဲ ရုန်းထွက်ချင်နေတယ်၊ သဘောထားကွဲလွဲနိုင်တယ်", 
        advice: "ဝါရင့်သူတွေနဲ့ လူကြီးသူမတွေရဲ့ အကြံဉာဏ်ကို တိုတိုတုတ်တုတ် တိုင်ပင်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg" 
    },
    { 
        name: "VI. The Lovers", 
        upright: "အချစ်ရေးနဲ့ ပူးပေါင်းဆောင်ရွက်မှုတွေမှာ အဆင်ပြေမယ်၊ သဘောတူညီမှု ရလိမ့်မယ်", 
        reversed: "လမ်းခွဲရခက်နေတယ်၊ ရွေးချယ်မှု မှားယွင်းပြီး မညီမမျှဖြစ်နေတယ်", 
        advice: "နှလုံးသားရော ဦးနှောက်ပါ မျှတစွာ သုံးပြီး သေချာရွေးချယ်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/TheLovers.jpg" 
    },
    { 
        name: "VII. The Chariot", 
        upright: "အခက်အခဲတွေကို အောင်မြင်စွာ ကျော်လွှားနိုင်မယ်၊ ပန်းတိုင်ကို အရောက်သွားပါ", 
        reversed: "ထိန်းချုပ်ရခက်နေတယ်၊ လမ်းကြောင်းလွဲပြီး ဇဝေဇဝါ ဖြစ်နေတယ်", 
        advice: "ဇွဲစိုက်ထုတ်ပြီး ရှေ့ကိုဘဲ ရဲရဲဝံ့ဝံ့ ဆက်သွားပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg" 
    },
    { 
        name: "VIII. Strength", 
        upright: "စိတ်ဓာတ်ကြံ့ခိုင်မှုနဲ့ ခန္ဓာကိုယ် စွမ်းအားပြည့်ဝနေတယ်၊ အရာရာကို ရင်ဆိုင်နိုင်တယ်", 
        reversed: "စိတ်ဓာတ်ကျနေတယ်၊ ကိုယ့်အစွမ်းအစကို ယုံကြည်မှု နည်းပါးနေတယ်", 
        advice: "ဒေါသနဲ့ အကြမ်းမဖက်ဘဲ ကြင်နာမှုနဲ့ စိတ်ရှည်မှု သုံးပြီး ဖြေရှင်းပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/RWS_Tarot_08_Strength.jpg" 
    },
    { 
        name: "IX. The Hermit", 
        upright: "အေးဆေးစွာ စိစစ်စဉ်းစားရမယ့် အချိန်ပါ၊ ကိုယ့်အဖြေကို ကိုယ်တိုင် ရှာတွေ့လိမ့်မယ်", 
        reversed: "အထီးကျန်လွန်းနေတယ်၊ ပတ်ဝန်းကျင်နဲ့ အဆက်အသွယ် ဖြတ်ထားသလို ဖြစ်နေတယ်", 
        advice: "တစ်ယောက်တည်း အေးဆေးစွာ သုံးသပ်ဖို့ ခဏတာ အချိန်ယူလိုက်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg" 
    },
    { 
        name: "X. Wheel of Fortune", 
        upright: "ကံကြမ္မာ အလှည့်အပြောင်း ရောက်ပြီ၊ အခြေအနေတွေ ပိုမိုကောင်းမွန်လာတော့မယ်", 
        reversed: "ကံမကောင်းသလို ခံစားရမယ်၊ ပြောင်းလဲမှုတွေက နှေးကွေးနေတယ်", 
        advice: "ရောက်လာတဲ့ အခွင့်အလမ်းကို မလွတ်တမ်း အမိအရ ဆုပ်ကိုင်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg" 
    },
    { 
        name: "XI. Justice", 
        upright: "တရားမျှတမှု ရလိမ့်မယ်၊ လုပ်ခဲ့တဲ့ အတိုင်း ပြန်လည် ရရှိမှာပါ", 
        reversed: "မမျှတမှုတွေ ကြုံရနိုင်တယ်၊ ဆုံးဖြတ်ချက် လွဲမှားနိုင်တယ်", 
        advice: "မှန်ကန်ကြောင်း သေချာတဲ့ လမ်းကြောင်းအတိုင်းပဲ ဆောင်ရွက်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg" 
    },
    { 
        name: "XII. The Hanged Man", 
        upright: "အမြင်သစ်တစ်ခု ရဖို့အတွက် အချိန်ခဏတာ စောင့်ဆိုင်း အနစ်နာခံရလိမ့်မယ်", 
        reversed: "အလကား အချိန်ကုန်နေတယ်၊ အချိန်ဆွဲလွန်းလို့ အခွင့်အလမ်း လွတ်နေတယ်", 
        advice: "ကိစ္စတွေကို ပုံမှန်ကြည့်နေကျ မဟုတ်တဲ့ အမြင်သစ်တစ်ခုနဲ့ ကြည့်ပေးပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg" 
    },
    { 
        name: "XIII. Death", 
        upright: "အဟောင်းတွေ အဆုံးသတ်ပြီး အသစ်စတင်ရတော့မယ်၊ ကြီးမားတဲ့ အပြောင်းအလဲပါ", 
        reversed: "ပြောင်းလဲမှုကို ငြင်းဆန်နေတယ်၊ အဟောင်းတွေကို ဖက်တွယ်ထားလို့ နာကျင်ရတယ်", 
        advice: "အသစ်စတင်နိုင်ဖို့ မလိုတော့တဲ့ အဟောင်းတွေကို ရဲရဲစွန့်လွှတ်လိုက်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg" 
    },
    { 
        name: "XIV. Temperance", 
        upright: "အရာရာ ဟန်ချက်ညီနေပြီ၊ စိတ်အေးချမ်းမှုနဲ့ ညှိနှိုင်းမှုတွေ အဆင်ပြေမယ်", 
        reversed: "ဟန်ချက်ပျက်နေတယ်၊ တစ်ခုခုကို လွန်လွန်ကဲကဲ လုပ်မိနေတယ်", 
        advice: "အစွန်းမရောက်စေဘဲ မျှမျှတတဖြစ်အောင် စိတ်ကို ထိန်းပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg" 
    },
    { 
        name: "XV. The Devil", 
        upright: "မကောင်းတဲ့ အကျင့် သို့မဟုတ် စွဲလမ်းမှုတစ်ခုခုရဲ့ ထိန်းချုပ်မှုကို ခံနေရတယ်", 
        reversed: "မကောင်းတဲ့ စွဲလမ်းမှုတွေကနေ လွတ်မြောက်ပြီး သတိဝင်လာပြီ", 
        advice: "ကိုယ့်ကို ဒုက္ခပေးနေတဲ့ စွဲလမ်းမှု သို့မဟုတ် အကျင့်ဆိုးတွေကို စွန့်လွှတ်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg" 
    },
    { 
        name: "XVI. The Tower", 
        upright: "ရုတ်တရက် အပြောင်းအလဲကြီး ကြုံရနိုင်တယ်၊ အမှန်တရား ပေါ်ပေါက်လာမယ်", 
        reversed: "ကျရှုံးမှု သို့မဟုတ် ဘေးအန္တရာယ်တစ်ခုကို သီသီလေး လွတ်မြောက်ခဲ့တယ်", 
        advice: "ဖြစ်ပျက်သွားတဲ့ အရာတွေကနေ သင်ခန်းစာယူပြီး ပြန်စပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg" 
    },
    { 
        name: "XVII. The Star", 
        upright: "မျှော်လင့်ချက် ရောင်ခြည် လင်းလာပြီ၊ အေးချမ်းမှုနဲ့ အဆင်ပြေမှုတွေ ရောက်လာမယ်", 
        reversed: "စိတ်ပျက်လက်ပျက် ဖြစ်နေတယ်၊ မျှော်လင့်ချက်မဲ့နေသလို ခံစားရမယ်", 
        advice: "အကောင်းမြင်စိတ် မပျောက်ပါစေနဲ့၊ အရာရာ အဆင်ပြေလာမှာပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg" 
    },
    { 
        name: "XVIII. The Moon", 
        upright: "စိတ်စိုးရိမ်မှုတွေ များနေတယ်၊ ဘာမှ သေချာမသိရသေးဘဲ မရေမရာ ဖြစ်နေမယ်", 
        reversed: "သံသယတွေ ရှင်းသွားပြီ၊ မကြာခင် အမှန်တရားကို သိမြင်ရတော့မယ်", 
        advice: "စိတ်ကူးယဉ်ပြီး ပူပန်နေတာတွေကို လျှော့ပါ၊ အမှန်တရားကို စောင့်ကြည့်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg" 
    },
    { 
        name: "XIX. The Sun", 
        upright: "အရမ်းကောင်းတဲ့ ကတ်ပါ၊ ပျော်ရွှင်မှု၊ အောင်မြင်မှုနဲ့ တက်ကြွမှုတွေ ပြည့်နှက်နေမယ်", 
        reversed: "ယာယီ အခက်အခဲလေးတွေ ရှိနိုင်ပေမဲ့ အကြီးအကျယ် စိုးရိမ်စရာ မလိုပါဘူး", 
        advice: "ယုံကြည်မှု အပြည့်နဲ့ တက်ကြွစွာ ရှေ့ဆက်လိုက်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg" 
    },
    { 
        name: "XX. Judgement", 
        upright: "သတင်းကောင်း ရမယ်၊ အတိတ်က အမှားတွေကို ပြင်ဆင်ပြီး နိုးထရမယ့် အချိန်ပါ", 
        reversed: "အတိတ်ကို နောင်တရနေတုန်းပဲ၊ ကိုယ့်ကိုယ်ကို သံသယဖြစ်ပြီး ဆုံးဖြတ်ရခက်နေတယ်", 
        advice: "အတိတ်ကို ထားခဲ့လိုက်ပါ၊ အနာဂတ်အတွက် ဆုံးဖြတ်ချက် မှန်မှန်ချပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/RWS_Tarot_20_Judgement.jpg" 
    },
    { 
        name: "XXI. The World", 
        upright: "ပန်းတိုင်ကို အောင်မြင်စွာ ရောက်ရှိပြီ၊ ဘဝမှာ ပြည့်စုံမှု ရရှိပါလိမ့်မယ်", 
        reversed: "အရာရာ မပြီးဆုံးသေးဘူး၊ လမ်းခုလတ်မှာ အဟန့်အတားလေးတွေ ကြုံနေရတယ်", 
        advice: "ကြိုးစားထားတာတွေကို အဆုံးထိ လက်မလျှော့ဘဲ ဆက်လုပ်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg" 
    },

    // --- MINOR ARCANA: WANDS ---
    { 
        name: "Ace of Wands", 
        upright: "စိတ်ကူးသစ်နဲ့ အခွင့်အလမ်းသစ် ရလာတော့မယ်၊ ချက်ချင်း စတင်လိုက်ပါ", 
        reversed: "အစီအစဉ်တွေ အထမမြောက်ဘဲ ကြန့်ကြာနေလိမ့်မယ်", 
        advice: "ရောက်လာတဲ့ အခွင့်အလမ်းသစ်ကို မဆိုင်းမတွ အမြန်ဆုပ်ကိုင်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg" 
    },
    { 
        name: "Two of Wands", 
        upright: "ရှေ့ဆက်ရမယ့် အစီအစဉ်တွေကို သေချာ ရေးဆွဲရတော့မယ့် အချိန်ပါ", 
        reversed: "ကြောက်ရွံ့နေလို့ ရှေ့မတိုးရဲဘဲ ဖြစ်နေတယ်", 
        advice: "ရည်မှန်းချက် ကြီးကြီးထားပြီး သေချာ စီမံကိန်းဆွဲပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg" 
    },
    { 
        name: "Three of Wands", 
        upright: "ကြိုးစားထားတာတွေ အသီးအပွင့် စတင်သီးပွင့်လာပြီ၊ တိုးတက်မှု ရလာမယ်", 
        reversed: "မျှော်လင့်ထားသလို ဖြစ်မလာဘဲ အဟန့်အတားတွေ ကြုံနေရတယ်", 
        advice: "ရေရှည်ကြည့်ပြီး ပညာရှိရှိ ပြင်ဆင်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/ff/ff/Wands03.jpg" 
    },
    { 
        name: "Four of Wands", 
        upright: "အောင်ပွဲခံရမယ့် အချိန်ပါ၊ မိသားစုနဲ့အတူ မင်္ဂလာသတင်း ကြားရလိမ့်မယ်", 
        reversed: "အိမ်တွင်း ဒါမှမဟုတ် အဖွဲ့အစည်းထဲမှာ မတည်ငြိမ်မှုလေးတွေ ရှိနေတယ်", 
        advice: "ရရှိထားတဲ့ အောင်မြင်မှုကို ဝမ်းမြောက်စွာ အောင်ပွဲခံပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg" 
    },
    { 
        name: "Five of Wands", 
        upright: "ပြိုင်ဆိုင်မှုတွေ၊ သဘောထား ကွဲလွဲမှုတွေနဲ့ ကြုံရနိုင်တယ်", 
        reversed: "ပဋိပက္ခတွေ ပြီးဆုံးသွားပြီး အေးချမ်းသွားမယ်", 
        advice: "ဒေါသ မထွက်ပါနဲ့၊ စိတ်အေးအေးထားပြီး ညှိနှိုင်းပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg" 
    },
    { 
        name: "Six of Wands", 
        upright: "လူတွေရဲ့ အသိအမှတ်ပြုမှုကို ရရှိပြီး အောင်ပွဲဆင်ရလိမ့်မယ်", 
        reversed: "မျှော်လင့်ထားသလို အသိအမှတ်ပြု မခံရဘဲ စိတ်ပျက်ရနိုင်တယ်", 
        advice: "ခုလို ကြိုးစားမှုကို မလျှော့ဘဲ ဆက်လက် ထိန်းသိမ်းထားပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg" 
    },
    { 
        name: "Seven of Wands", 
        upright: "စိန်ခေါ်မှုတွေကို ရင်ဆိုင်နေရတယ်၊ ဒါပေမဲ့ မင်း အနိုင်ရမှာပါ", 
        reversed: "စိတ်ဓာတ်ကျပြီး လက်လျှော့ချင်နေတယ်", 
        advice: "ကိုယ့်ရပ်တည်ချက်ကို မယိမ်းယိုင်ဘဲ ခိုင်ခိုင်မာမာ ဆုပ်ကိုင်ထားပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg" 
    },
    { 
        name: "Eight of Wands", 
        upright: "ကိစ္စအဝဝ မြန်မြန်ဆန်ဆန် တိုးတက်လာမယ်၊ သတင်းကောင်း ရလိမ့်မယ်", 
        reversed: "အစီအစဉ်တွေ ကြန့်ကြာပြီး တိုင်ပတ်နေမယ်", 
        advice: "အချိန်မဆွဲပါနဲ့၊ မဆိုင်းမတွ မြန်မြန်ဆန်ဆန် လုပ်ဆောင်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg" 
    },
    { 
        name: "Nine of Wands", 
        upright: "ပင်ပန်းနေပြီ ဆိုပေမဲ့ ပန်းတိုင် ရောက်ခါနီးပြီ၊ အဆုံးထိ တောင့်ခံလိုက်ပါ", 
        reversed: "အားကုန်နေပြီ၊ ဆက်မတောင့်ခံနိုင်တော့ဘဲ လက်လျှော့ချင်နေတယ်", 
        advice: "နီးနေပါပြီ၊ အဆုံးထိ ဇွဲမလျှော့ဘဲ ရင်ဆိုင်လိုက်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg" 
    },
    { 
        name: "Ten of Wands", 
        upright: "တာဝန်တွေ များလွန်းလို့ ဝန်ထုပ်ဝန်ပိုးဖြစ်ပြီး ပင်ပန်းနေရတယ်", 
        reversed: "ဝန်ထုတ်ဝန်ပိုးတွေ လျှော့ချနိုင်တော့မယ်၊ ပေါ့ပါးသွားမယ်", 
        advice: "အရာရာကို တစ်ယောက်တည်း မထမ်းပါနဲ့၊ အကူအညီ တောင်းခံပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg" 
    },
    { 
        name: "Page of Wands", 
        upright: "စိတ်အားထက်သန်စရာ သတင်းကောင်း ဒါမှမဟုတ် စိတ်ကူးသစ် ရလိမ့်မယ်", 
        reversed: "သတင်းဆိုး ကြားရနိုင်တယ်၊ အစီအစဉ်တွေ ပျက်ပြယ်နိုင်တယ်", 
        advice: "စိတ်ကူးသစ်တွေကို စမ်းသပ်ကြည့်ဖို့ မတွန့်ဆုတ်ပါနဲ့", 
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg" 
    },
    { 
        name: "Knight of Wands", 
        upright: "တက်ကြွဇွဲရှိစွာနဲ့ ပန်းတိုင်ကို အမြန်သွားနေတယ်", 
        reversed: "မဆင်မခြင် စိုက်ထုတ်မိလို့ အမှားအယွင်း ဖြစ်နိုင်တယ်", 
        advice: "ရည်မှန်းချက်ဆီ မြန်မြန်သွားပါ၊ သို့သော် သတိထားပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg" 
    },
    { 
        name: "Queen of Wands", 
        upright: "ယုံကြည်မှုအပြည့်နဲ့ စွဲဆောင်မှုရှိတဲ့ ခေါင်းဆောင်တစ်ယောက် ဖြစ်နေတယ်", 
        reversed: "စိတ်တိုလွယ်ပြီး ဒေါသရှေ့ထားမိလို့ ပြဿနာဖြစ်နိုင်တယ်", 
        advice: "မိမိကိုယ်ကို ယုံကြည်မှုအပြည့်နဲ့ အလုပ်လုပ်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg" 
    },
    { 
        name: "King of Wands", 
        upright: "ခေါင်းဆောင်စွမ်းရည် ပြည့်ဝပြီး အောင်မြင်မှုတွေ ရရှိလိမ့်မယ်", 
        reversed: "အာဏာရှင်ဆန်လွန်းလို့ ဘေးလူတွေ စိတ်ညှစ်ရနိုင်တယ်", 
        advice: "ခေါင်းဆောင်ကောင်း ပီသစွာ ဆုံးဖြတ်ချက်များ ချပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/ce/ce/Wands14.jpg" 
    },

    // --- MINOR ARCANA: CUPS ---
    { 
        name: "Ace of Cups", 
        upright: "ချစ်ခြင်းမေတ္တာနဲ့ ပျော်ရွှင်မှု သစ်တွေ စတင်တော့မယ်", 
        reversed: "စိတ်ဒဏ်ရာ ရထားလို့ နှလုံးသားကို ပိတ်ပင်ထားမိတယ်", 
        advice: "နှလုံးသားကို ဖွင့်ဟထားပါ၊ ချစ်ခြင်းတွေကို လက်ခံလိုက်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg" 
    },
    { 
        name: "Two of Cups", 
        upright: "နားလည်မှုရှိတဲ့ မိတ်ဆွေ သို့မဟုတ် ချစ်သူ ရရှိလိမ့်မယ်", 
        reversed: "နားလည်မှုလွဲပြီး သဘောထား ကွဲလွဲနေရတယ်", 
        advice: "အချင်းချင်း မျှမျှတတ နားလည်မှု တည်ဆောက်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg" 
    },
    { 
        name: "Three of Cups", 
        upright: "သူငယ်ချင်းတွေနဲ့အတူ ပျော်ရွှင်စွာ အောင်ပွဲခံရလိမ့်မယ်", 
        reversed: "အဖွဲ့ထဲမှာ အထီးကျန်သလို ခံစားရမယ်", 
        advice: "ချစ်ခင်ရသူတွေနဲ့ အချိန်ပေးပြီး ပျော်ရွှင်မှုကို မျှဝေပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg" 
    },
    { 
        name: "Four of Cups", 
        upright: "ရှိပြီးသားကို မကျေနပ်ဘဲ ငြီးငွေ့နေတယ်၊ အခွင့်အလမ်းတွေကို မမြင်ဘဲ ဖြစ်နေတယ်", 
        reversed: "ငြီးငွေ့မှုကနေ သတိဝင်လာပြီး အခွင့်အလမ်းသစ်ကို မြင်လာပြီ", 
        advice: "ဘေးပတ်ဝန်းကျင်က အခွင့်အလမ်းတွေကို သတိထားကြည့်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg" 
    },
    { 
        name: "Five of Cups", 
        upright: "ဆုံးရှုံးမှုတစ်ခုကြောင့် ဝမ်းနည်းစိတ်ပျက်နေရတယ်", 
        reversed: "အတိတ်က ဆုံးရှုံးမှုကို မေ့ပစ်ပြီး ရှေ့ဆက်ရုန်းထွက်နိုင်ပြီ", 
        advice: "ဆုံးရှုံးသွားတာထက် ကျန်ရှိနေသေးတဲ့ အကောင်းဘက်ကို ကြည့်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg" 
    },
    { 
        name: "Six of Cups", 
        upright: "အတိတ်က မိတ်ဆွေဟောင်းတွေနဲ့ ပြန်ဆုံရမယ်၊ အမှတ်တရကောင်းတွေ ကြားရမယ်", 
        reversed: "အတိတ်မှာ ပိတ်မိနေပြီး ရှေ့မတိုးနိုင်ဘဲ ဖြစ်နေတယ်", 
        advice: "အတိတ်က အမှတ်တရကောင်းတွေကို ခွန်အားယူပြီး ရှေ့ဆက်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg" 
    },
    { 
        name: "Seven of Cups", 
        upright: "ရွေးချယ်စရာတွေ များပြီး စိတ်ကူးယဉ်နေရတယ်၊ အမှန်မသိဖြစ်နေတယ်", 
        reversed: "စိတ်ကူးယဉ်မနေတော့ဘဲ လက်တွေ့ကျကျ စဉ်းစားလာနိုင်ပြီ", 
        advice: "စိတ်ကူးမယဉ်ပါနဲ့၊ လက်တွေ့ကျကျ အကျိုးရှိမယ့်အရာကို ရွေးပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg" 
    },
    { 
        name: "Eight of Cups", 
        upright: "အဆင်မပြေတော့တဲ့ အခြေအနေတစ်ခုကနေ စွန့်ခွာရတော့မယ်", 
        reversed: "မကောင်းမှန်းသိပေမဲ့ စွန့်ခွာဖို့ တွန့်ဆုတ်နေမိတယ်", 
        advice: "ကိုယ့်အတွက် မလိုအပ်တော့တဲ့ အရာတွေကို ရဲရဲစွန့်လွှတ်လိုက်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg" 
    },
    { 
        name: "Nine of Cups", 
        upright: "လိုချင်တဲ့ ဆန္ဒတွေ ပြည့်ဝပြီး စိတ်ချမ်းသာရလိမ့်မယ်", 
        reversed: "လိုချင်တာရပေမဲ့ စိတ်ထဲ တစ်ခုခု လိုအပ်နေသလို ခံစားရမယ်", 
        advice: "ခုရထားတဲ့ အရာတွေအပေါ် ကျေနပ်ရောင့်ရဲပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg" 
    },
    { 
        name: "Ten of Cups", 
        upright: "မိသားစုနဲ့ ချစ်သူကြား သာယာဝပြောပြီး အင်မတန် ပျော်ရွှင်ရလိမ့်မယ်", 
        reversed: "မိသားစု သို့မဟုတ် အချစ်ရေးမှာ အဆင်မပြေမှုလေးတွေ ရှိနေမယ်", 
        advice: "မိသားစုနဲ့ ချစ်ခင်ရသူတွေကို မေတ္တာပေးပြီး ဦးစားပေးပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg" 
    },
    { 
        name: "Page of Cups", 
        upright: "စိတ်လှုပ်ရှားစရာ သတင်းကောင်း ဒါမှမဟုတ် ချစ်ခြင်းမေတ္တာ ကမ်းလှမ်းမှု ရမယ်", 
        reversed: "စိတ်ခံစားချက် မတည်ငြိမ်ဘဲ ကလေးဆန်နေမိတယ်", 
        advice: "နူးညံ့တဲ့ စိတ်ဓာတ်နဲ့ အရာရာကို ရင်ဆိုင်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/ad/ad/Cups11.jpg" 
    },
    { 
        name: "Knight of Cups", 
        upright: "အချစ် သို့မဟုတ် အခွင့်အလမ်းကောင်းတစ်ခု ကမ်းလှမ်းခံရလိမ့်မယ်", 
        reversed: "စိတ်ကူးယဉ်လွန်းပြီး လက်တွေ့မကျတဲ့ ကမ်းလှမ်းမှုဖြစ်နိုင်တယ်", 
        advice: "နှလုံးသား ခေါ်ဆောင်ရာနောက်ကို လက်တွေ့ကျကျ လိုက်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg" 
    },
    { 
        name: "Queen of Cups", 
        upright: "စာနာနားလည်မှု ရှိပြီး စိတ်အေးချမ်းမှုကို ပေးနိုင်လိမ့်မယ်", 
        reversed: "စိတ်ခံစားချက် လွန်ကဲပြီး အစွန်ရောက်နေမိတယ်", 
        advice: "သူတစ်ပါးကို စာနာနားလည်ပေးပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg" 
    },
    { 
        name: "King of Cups", 
        upright: "စိတ်ခံစားချက်ကို သေချာ ထိန်းချုပ်နိုင်ပြီး တည်ငြိမ်မှု ရလိမ့်မယ်", 
        reversed: "စိတ်ခံစားချက် ကမောက်ကမဖြစ်ပြီး စိတ္တဇဖြစ်နေရတယ်", 
        advice: "စိတ်အေးအေးထားပြီး ရင့်ကျက်စွာ ထိန်းချုပ်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg" 
    },

    // --- MINOR ARCANA: SWORDS ---
    { 
        name: "Ace of Swords", 
        upright: "အမှန်တရားကို သိမြင်ပြီး ရှင်းရှင်းလင်းလင်း ဆုံးဖြတ်နိုင်တော့မယ်", 
        reversed: "ဇဝေဇဝါ ဖြစ်နေတယ်၊ အမှားအယွင်း ဆုံးဖြတ်မိနိုင်တယ်", 
        advice: "ဝေဒနာမပါဘဲ ဦးနှောက်နဲ့ ပြတ်သားစွာ ဆုံးဖြတ်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg" 
    },
    { 
        name: "Two of Swords", 
        upright: "လမ်းနှစ်ခွမှာ ဘာရွေးရမှန်းမသိ ဆုံးဖြတ်ရခက်နေတယ်", 
        reversed: "အမှန်တရားကို လက်ခံရတော့မယ့် အချိန် ရောက်ပြီ", 
        advice: "မျက်စိမှိတ်မထားပါနဲ့၊ သတ္တိရှိရှိ ဆုံးဖြတ်ချက်ချပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg" 
    },
    { 
        name: "Three of Swords", 
        upright: "စကားများရခြင်း၊ စိတ်ဒဏ်ရာရခြင်း သို့မဟုတ် ဝမ်းနည်းရခြင်း ကြုံရမယ်", 
        reversed: "စိတ်ဒဏ်ရာတွေ သက်သာလာပြီး ပြန်လည် ကုစားနိုင်ပြီ", 
        advice: "နာကျင်မှုကို အချိန်ပေးပြီး ဖြည်းဖြည်းချင်း ကုစားပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg" 
    },
    { 
        name: "Four of Swords", 
        upright: "အနားယူရမယ့် အချိန်ပါ၊ စိတ်ရော ခန္ဓာပါ ခန့်မှန်းခြေ နားလိုက်ပါ", 
        reversed: "နားနေတာ တော်လောက်ပြီ၊ ပြန်လည် နိုးထလှုပ်ရှားရတော့မယ်", 
        advice: "စိတ်ဖိစီးမှုတွေကို ခဏမေ့ပြီး အနားယူလိုက်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg" 
    },
    { 
        name: "Five of Swords", 
        upright: "ပဋိပက္ခဖြစ်ပြီး နှစ်ဦးနှစ်ဖက် နစ်နာရလိမ့်မယ်", 
        reversed: "အငြင်းပွားမှုတွေ ကျေအေးသွားကြပြီ", 
        advice: "မလိုအပ်တဲ့ အနိုင်ရလိုစိတ်နဲ့ တိုက်ပွဲများကို ရှောင်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg" 
    },
    { 
        name: "Six of Swords", 
        upright: "ခက်ခဲတဲ့ အခြေအနေကနေ အဆင်ပြေမယ့် ဘက်ကို ကူးပြောင်းနေပြီ", 
        reversed: "အတိတ်က ပြဿနာတွေဆီ ပြန်လည် ပိတ်မိနေတယ်", 
        advice: "အဆင်ပြေတော့မှာမို့ ရှေ့ဆက်သွားဖို့ဘဲ စဉ်းစားပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg" 
    },
    { 
        name: "Seven of Swords", 
        upright: "မရိုးမသား လုပ်ခံရနိုင်တယ်၊ သတိထားဖို့ လိုတယ်", 
        reversed: "အမှန်တရား ပေါ်ပေါက်သွားပြီး လှည့်ကွက်တွေ ပေါ်သွားပြီ", 
        advice: "သူများကို ကောက်ကျစ်တာမျိုး မလုပ်ပါနဲ့၊ သတိနဲ့ နေပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg" 
    },
    { 
        name: "Eight of Swords", 
        upright: "ကိုယ့်အတွေးနဲ့ ကိုယ် ပိတ်မိနေတယ်၊ ထွက်ပေါက် မရှိသလို ခံစားရမယ်", 
        reversed: "အတွေးဆိုးတွေကနေ လွတ်မြောက်လာပြီ", 
        advice: "မျက်စိကို ဖွင့်ကြည့်ပါ၊ ထွက်ပေါက်က ရှိပြီးသားပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg" 
    },
    { 
        name: "Nine of Swords", 
        upright: "စိုးရိမ်လွန်ပြီး ညဘက် အိပ်မပျော်နိုင်အောင် စိတ်ဖိစီးနေရတယ်", 
        reversed: "စိုးရိမ်မှုတွေ လျှော့ပါးသွားပြီး စိတ်သက်သာရာ ရလာမယ်", 
        advice: "အတွေးလွန်ပြီး မကြောက်ပါနဲ့၊ လက်တွေ့မှာ ထိသလောက် မဆိုးပါဘူး", 
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg" 
    },
    { 
        name: "Ten of Swords", 
        upright: "အဆိုးဆုံး အခြေအနေ အဆုံးသတ်သွားပြီ၊ အောက်ဆုံးကို ရောက်သွားတာပါ", 
        reversed: "ဒဏ်ရာတွေကနေ ပြန်လည် ရုန်းထလာနေပြီ", 
        advice: "ဒါ အောက်ဆုံးမို့လို့ နောက်ပိုင်း ပိုကောင်းလာဖို့ပဲ ရှိတော့တယ်", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg" 
    },
    { 
        name: "Page of Swords", 
        upright: "သတင်းအချက်အလက် စုဆောင်းနေတယ်၊ စိစစ်လေ့လာဖို့ လိုအပ်တယ်", 
        reversed: "အတင်းအဖျင်းတွေနဲ့ အလိမ်အညာ သတင်းတွေ ကြားရနိုင်တယ်", 
        advice: "အလောမကြီးဘဲ သတင်းအချက်အလက် သေချာ စုဆောင်းပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg" 
    },
    { 
        name: "Knight of Swords", 
        upright: "ပြတ်သားစွာနဲ့ အရှိန်အဟုန်မြှင့် လုပ်ဆောင်နေတယ်", 
        reversed: "မဆင်မခြင် စိုက်ထုတ်မိလို့ စကားမှား၊ အလုပ်မှား ဖြစ်နိုင်တယ်", 
        advice: "ဉာဏ်ကို အခြေခံပြီး စဉ်းစားပြီးမှ အရှိန်နဲ့ သွားပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg" 
    },
    { 
        name: "Queen of Swords", 
        upright: "ပြတ်သားတယ်၊ ဉာဏ်ပညာရှိတယ်၊ အမှန်တရားကိုပဲ အလေးထားတယ်", 
        reversed: "စိတ်ခံစားချက် မရှိသလို ရက်စက်လွန်းနေတယ်", 
        advice: "ဉာဏ်ပညာနဲ့ တရားမျှတမှုကို သုံးပြီး ဆုံးဖြတ်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg" 
    },
    { 
        name: "King of Swords", 
        upright: "သြဇာအာဏာရှိပြီး ယုတ္တိဗေဒကျကျ ဆုံးဖြတ်နိုင်တယ်", 
        reversed: "အာဏာကို အလွဲသုံးစားလုပ်ပြီး စိတ်ကြီးဝင်နေတယ်", 
        advice: "စိတ်အေးအေးထားပြီး ယုတ္တိဗေဒကျကျ သုံးသပ်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg" 
    },

    // --- MINOR ARCANA: PENTACLES ---
    { 
        name: "Ace of Pentacles", 
        upright: "ငွေကြေး သို့မဟုတ် စီးပွားရေး အခွင့်အလမ်းကောင်း စတင်ရရှိလိမ့်မယ်", 
        reversed: "အခွင့်အလမ်းကောင်း လွတ်သွားနိုင်တယ်၊ စီမံကိန်း မှားနိုင်တယ်", 
        advice: "ရောက်လာတဲ့ ငွေကြေး အခွင့်အလမ်းကို မလွတ်ပါစေနဲ့", 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Penta01.jpg" 
    },
    { 
        name: "Two of Pentacles", 
        upright: "ငွေကြေးနဲ့ အချိန်ကို အဆင်ပြေအောင် ဟန်ချက်ထိန်းနေရတယ်", 
        reversed: "ဟန်ချက်ပျက်ပြီး စီမံခန့်ခွဲမှု လွဲနေတယ်", 
        advice: "ဝင်ငွေထွက်ငွေနဲ့ အချိန်ကို စနစ်တကျ ထိန်းညှိပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Penta02.jpg" 
    },
    { 
        name: "Three of Pentacles", 
        upright: "အဖွဲ့လိုက် ပူးပေါင်းဆောင်ရွက်မှု ကောင်းမွန်ပြီး အောင်မြင်မယ်", 
        reversed: "ပူးပေါင်းဆောင်ရွက်မှု မရှိဘဲ အဆင်မပြေ ဖြစ်နေတယ်", 
        advice: "အခြားသူတွေရဲ့ ကျွမ်းကျင်မှုကို အသုံးချပြီး ပူးပေါင်းပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Penta03.jpg" 
    },
    { 
        name: "Four of Pentacles", 
        upright: "ငွေကြေး တည်ငြိမ်အောင် စုဆောင်းနိုင်တယ်၊ ဒါပေမဲ့ ကပ်စေးနည်းမိနိုင်တယ်", 
        reversed: "ငွေကြေး စီမံမှု လွဲပြီး သုံးစွဲလွန်းနေတယ်", 
        advice: "ငွေကြေး တည်ငြိမ်အောင် ထိန်းထားပါ၊ သို့သော် လောဘမကြီးပါနဲ့", 
        image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Penta04.jpg" 
    },
    { 
        name: "Five of Pentacles", 
        upright: "ငွေကြေး အခက်အခဲ သို့မဟုတ် အကူအညီမဲ့သလို ခံစားရမယ်", 
        reversed: "ဒုက္ခတွေကနေ လွတ်မြောက်ပြီး အဆင်ပြေလာတော့မယ်", 
        advice: "အကူအညီ လိုရင် တောင်းဖို့ မရှက်ပါနဲ့၊ ကူညီမယ့်သူ ရှိပါတယ်", 
        image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Penta05.jpg" 
    },
    { 
        name: "Six of Pentacles", 
        upright: "မျှဝေခြင်း၊ လှူဒါန်းခြင်းနဲ့ အကူအညီ ရရှိခြင်းတွေ ကြုံရမယ်", 
        reversed: "အမြတ်ထုတ်ခံရခြင်း သို့မဟုတ် မမျှတမှုတွေ ကြုံရနိုင်တယ်", 
        advice: "နိုင်သလောက် ကူညီပါ၊ အပြန်အလှန် ဖေးမပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Penta06.jpg" 
    },
    { 
        name: "Seven of Pentacles", 
        upright: "စိုက်ပျိုးထားတာတွေ ရိတ်သိမ်းရတော့မယ်၊ အသီးအပွင့် ခံစားရမယ်", 
        reversed: "ကြိုးစားထားတာတွေ အဖတ်မတင်ဘဲ စိတ်ပျက်ရနိုင်တယ်", 
        advice: "အသီးအပွင့် ရဖို့ စိတ်ရှည်ရှည် စောင့်ဆိုင်းပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Penta07.jpg" 
    },
    { 
        name: "Eight of Pentacles", 
        upright: "ကြိုးစားအားထုတ်ပြီး ကျွမ်းကျင်မှုတွေကို မြှင့်တင်နေတယ်", 
        reversed: "ပျင်းရိနေတယ်၊ အလုပ်မှာ အာရုံမစိုက်နိုင် ဖြစ်နေတယ်", 
        advice: "ဇွဲရှိရှိနဲ့ ကိုယ့်ကျွမ်းကျင်မှုကို ပိုမို လေ့ကျင့်ပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Penta08.jpg" 
    },
    { 
        name: "Nine of Pentacles", 
        upright: "ကိုယ့်ခြေထောက်ပေါ် ကိုယ်ရပ်တည်နိုင်ပြီး ကြွယ်ဝ ချမ်းသာမှုကို ခံစားရမယ်", 
        reversed: "သူများအပေါ် မှီခိုနေရတယ်၊ ငွေကြေး မတည်ငြိမ်ဘူး", 
        advice: "ကိုယ့်ရဲ့ အောင်မြင်မှုနဲ့ လွတ်လပ်မှုကို ဂုဏ်ယူပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Penta09.jpg" 
    },
    { 
        name: "Ten of Pentacles", 
        upright: "မိသားစုအလိုက် ကြွယ်ဝချမ်းသာပြီး ရေရှည် တည်ငြိမ်မှု ရရှိမယ်", 
        reversed: "မိသားစု အမွေပြဿနာ သို့မဟုတ် ငွေကြေး ဆုံးရှုံးမှု ဖြစ်နိုင်တယ်", 
        advice: "ရေရှည် တည်ငြိမ်မှုနဲ့ မိသားစု အကျိုးကို ရှေးရှုပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Penta10.jpg" 
    },
    { 
        name: "Page of Pentacles", 
        upright: "ငွေကြေး သတင်းကောင်း ရမယ်၊ ပညာသစ် သင်ယူဖို့ အခွင့်အလမ်း ရမယ်", 
        reversed: "အခွင့်အလမ်းကောင်း ပျောက်ဆုံးသွားနိုင်တယ်", 
        advice: "လက်တွေ့ကျတဲ့ စီးပွားရေးနဲ့ ပညာရပ်တွေကို လေ့လာပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Penta11.jpg" 
    },
    { 
        name: "Knight of Pentacles", 
        upright: "ဇွဲရှိရှိနဲ့ တာဝန်ကျေစွာ မှန်မှန် လုပ်ဆောင်နေတယ်", 
        reversed: "ပျင်းရိလွန်းတယ်၊ ပျင်းရိမှုကြောင့် အလုပ်မဖြစ်ဘူး", 
        advice: "ဖြည်းဖြည်းနဲ့ မှန်မှန် ကြိုးစားသွားပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Penta12.jpg" 
    },
    { 
        name: "Queen of Pentacles", 
        upright: "လက်တွေ့ကျကျ စိစစ် စီမံနိုင်ပြီး ပြည့်စုံ ကြွယ်ဝသူ ဖြစ်တယ်", 
        reversed: "ငွေကြေးအတွက် ပူပန်လွန်းနေတယ်", 
        advice: "သဘောထား ကြီးကြီးထားပြီး လက်တွေ့ကျကျ စီမံပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Penta13.jpg" 
    },
    { 
        name: "King of Pentacles", 
        upright: "စီးပွားရေးမှာ အလွန်အောင်မြင်ပြီး ငွေကြေး တည်ငြိမ်သူ ဖြစ်မယ်", 
        reversed: "လောဘကြီးလွန်းလို့ ပြဿနာဖြစ်နိုင်တယ်", 
        advice: "စီးပွားရေးကို တည်ငြိမ်စွာ ဦးဆောင် စီမံပါ", 
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Penta14.jpg" 
    }
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
