document.addEventListener('DOMContentLoaded', function () {
    // เรียกฟังก์ชันเพื่อตรวจสอบว่ามีภาษาที่ถูกบันทึกไว้หรือไม่
    checkStoredLanguageMF2();
});

function changeLanguageMF2(lang) {
    const lanNow = {
        'en': 'Language : En' ,
        'th': 'ภาษา : ไทย'
    };
    const joke = {
        'en': 'tap to see The best programmer in the universe',
        'th': 'แตะเพื่อดูโปรแกรมเมอร์ที่ดีที่สุดในจักรวาล'
    }
    const cool = {
        'en': 'Cool and bestest programmer :',
        'th': 'โปรเเกรมเมอร์ที่โคตรเจ๋งโคตรโหดโคตรตึง'
    }
    const trash = {
        'en': 'trash',
        'th': 'ขยะ:)'
    }
    // เปลี่ยนข้อความตามภาษาที่เลือก
    document.getElementById('lanNow').innerHTML = lanNow[lang];
    document.getElementById('joke').innerHTML = joke[lang]
    document.getElementById('coolText').innerHTML = cool[lang]
    document.getElementById('trashText').innerHTML = trash[lang]


    // บันทึกภาษาที่ถูกเลือกลงใน localStorage
    localStorage.setItem('selectedLanguage', lang);
}

function checkStoredLanguageMF2() {
    // ตรวจสอบว่ามีภาษาที่ถูกบันทึกไว้หรือไม่
    const storedLanguage = localStorage.getItem('selectedLanguage');

    // ถ้ามีภาษาที่ถูกบันทึกไว้ ให้ทำการเปลี่ยนภาษา
    if (storedLanguage) {
        changeLanguageMF2(storedLanguage);
    }
}

function joke() {
    document.getElementById('secret').style.display = "inline"
}