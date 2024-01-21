document.addEventListener('DOMContentLoaded', function () {
    // เรียกฟังก์ชันเพื่อตรวจสอบว่ามีภาษาที่ถูกบันทึกไว้หรือไม่
    checkStoredLanguageMF2();
});

function changeLanguageMF2(lang) {
    const lanNow = {
        'en': 'Language : En' ,
        'th': 'ภาษา : ไทย'
    };

    // เปลี่ยนข้อความตามภาษาที่เลือก
    document.getElementById('lanNow').innerHTML = lanNow[lang];

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