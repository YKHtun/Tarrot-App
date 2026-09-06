const tarotDeck = [
    { name: "The Fool", upright: "အစသစ်၊ လွတ်လပ်မှု၊ စွန့်စားမှု", reversed: "ပေါ့ဆမှု၊ စွန့်စားလွန်းခြင်း", advice: "သတိထားပြီး သေချာစဉ်းစားလုပ်ဆောင်ပါ" },
    { name: "The Magician", upright: "စွမ်းရည်၊ ဖန်တီးမှု၊ အခွင့်အလမ်း", reversed: "လှည့်ဖြားခံရခြင်း၊ ယုံကြည်မှုနည်းခြင်း", advice: "မိမိစွမ်းရည်ကို ယုံကြည်ပါ" },
    { name: "The High Priestess", upright: "ပင်ကိုအသိ၊ လျှို့ဝှက်ချက်", reversed: "စိတ်ရှုပ်ထွေးခြင်း၊ သံသယရှိခြင်း", advice: "စိတ်အေးအေးထားပြီး ပင်ကိုအသိကို အားကိုးပါ" },
    { name: "The Empress", upright: "အောင်မြင်မှု၊ အကူအညီရရှိခြင်း", reversed: "တိုးတက်မှုနှေးခြင်း၊ စိတ်ဖိစီးခြင်း", advice: "စိတ်ရှည်ရှည်နဲ့ အချိန်ပေးပါ" },
    { name: "The Emperor", upright: "တည်ငြိမ်မှု၊ အာဏာ၊ စည်းကမ်း", reversed: "ထိန်းချုပ်ခံရခြင်း၊ အဆင်မပြေမှု", advice: "စည်းကမ်းနှင့် တည်ငြိမ်မှုကို ဦးစားပေးပါ" },
    { name: "Wheel of Fortune", upright: "ကံကြမ္မာအကေ့းအပြောင်း၊ လာဘ်ရွှင်ခြင်း", reversed: "ကံမကောင်းခြင်း၊ အပြောင်းအလဲနှေးခြင်း", advice: "အခွင့်အလမ်းကို အမိအရဆုပ်ကိုင်ပါ" },
    { name: "The Sun", upright: "ဝမ်းမြောက်ခြင်း၊ အောင်မြင်မှု", reversed: "ယာယီအခက်အခဲ၊ စိတ်မကြည်မလင်ဖြစ်ခြင်း", advice: "တက်ကြွစွာဖြင့် ရှေ့ဆက်ပါ" }
];

function drawCards() {
    const userName = document.getElementById("userName") ? document.getElementById("userName").value.trim() : "";
    const question = document.getElementById("question").value.trim();

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
        htmlContent += `
            <div class="card">
                <small>${card.positionName}</small>
                <h3>${card.name}</h3>
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