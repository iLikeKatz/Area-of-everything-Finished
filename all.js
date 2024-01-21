
function navigate() {
            // ดึงค่าที่ถูกเลือก
            var selectedValue = document.getElementById("selectSomethi").value;

            // นำค่าที่ถูกเลือกไปยังหน้าใหม่
            window.location.href = selectedValue;

            // บันทึกค่าที่ถูกเลือกลงใน localStorage
            localStorage.setItem('selectedValue', selectedValue);
        }

        // ตรวจสอบค่าที่ถูกเลือกใน localStorage เมื่อหน้าเว็บโหลด
        window.onload = function() {
            var selectedValue = localStorage.getItem('selectedValue');

            // ถ้ามีค่าที่ถูกเลือก, ให้เปลี่ยนค่าใน <select>
            if (selectedValue) {
                document.getElementById('selectSomethi').value = selectedValue;
            }
                    //change content language
                    var selectedValue = document.getElementById("selectSomethi").value; //var only , dont change it pls , to me in fture
                    let element = selectedValue;
                    //circle
                    let selectCon = document.getElementById('cir').innerHTML;

                        if (element=='/circle/cirh.html') {
                            switch (selectCon) {
                                case ('วงกลม') :
                                    document.getElementById('arOfcir').innerHTML = "พื้นที่วงกลม"
                                    document.getElementById('rOfCir').setAttribute('placeholder', 'รัศมี, r')
                                    document.getElementById('hOfPriCir').setAttribute('placeholder', 'สูง, h')
                                    document.getElementById('subCir').innerHTML = 'ส่ง'
                                    document.getElementById('theans').innerHTML = 'คำตอบ : '
                                    break;
                                    
                                default :
                                    break;
                    }} else {

                            }
                    //triangle
                    let selectConTri = document.getElementById('Tri').innerHTML;
                        if (element=='/triangle/trih.html') {
                            switch (selectConTri) {
                                case ('สามเหลี่ยม') :
                                    document.getElementById('Trihead').innerHTML = 'พื้นที่สามเหลี่ยม'
                                    document.getElementById('sideL1').setAttribute('placeholder', 'เส้นด้านข้าง(1), s1')
                                    document.getElementById('sideL2').setAttribute('placeholder', 'เส้นด้านข้าง(2), s3')
                                    document.getElementById('base').setAttribute('placeholder', 'ฐาน , s2')
                                    document.getElementById('height').setAttribute('placeholder', 'ความสูงของฐาน , h')
                                    document.getElementById('hofPri').setAttribute('placeholder', 'ความสูงของปริซึม , l')
                                    document.getElementById('subTri').innerHTML = 'ส่ง'
                                    document.getElementById('theans').innerHTML = 'คำตอบ :'
                                    break;
                                default :
                                    break;
                         }
                        }
                    //square
                    let selectConSqu = document.getElementById('Squ').innerHTML;
                        if (element=='/square/sqh.html') {
                            switch (selectConSqu) {
                                case ('สี่เหลี่ยม') :
                                    document.getElementById('sqHead').innerHTML = 'พื้นที่สี่เหลี่ยมจัตุรัสเเละผืนผ้า'
                                    document.getElementById('lengthSq').setAttribute('placeholder', 'ความยาว , x')
                                    document.getElementById('widthSq').setAttribute('placeholder', 'ความกว้าง , y')
                                    document.getElementById('heightSq').setAttribute('placeholder', 'ความสูง')
                                    document.getElementById('subSq').innerHTML = 'ส่ง'
                                    document.getElementById('subTrape').innerHTML = 'ส่ง'
                                    document.getElementById('subPar').innerHTML = 'ส่ง'
                                    document.getElementById('paral1Tz').setAttribute('placeholder', 'ด้านขนาน(1), a')
                                    document.getElementById('paral2Tz').setAttribute('placeholder', 'ด้านขนาน(2), c')
                                    document.getElementById('sideL1Tz').setAttribute('placeholder', 'เส้นด้านข้าง(1), d')
                                    document.getElementById('sideL2Tz').setAttribute('placeholder', 'เส้นด้านข้าง(2), b')
                                    document.getElementById('heightTz').setAttribute('placeholder', 'ความสูงของฐาน ,h')
                                    document.getElementById('hPriTz').setAttribute('placeholder', 'ความสูงของปริซึม')
                                    document.getElementById('theans').innerHTML = 'คำตอบ :'
                                    document.getElementById('theans2').innerHTML = 'คำตอบ :'
                                    document.getElementById('theans3').innerHTML = 'คำตอบ :'
                                    break;
                                default :
                                    break;
                            }
                        }
                        //Pentagon
                        let selectConPen = document.getElementById('Pen').innerHTML;
                            if (element=='/pentagon/penh.html') {
                                switch (selectConPen) {
                                    case ('ห้าเหลี่ยม') :
                                        document.getElementById('side').setAttribute('placeholder', 'ด้าน , A')
                                        document.getElementById('heightP').setAttribute('placeholder', 'ความสูงของปริซึม')
                                        document.getElementById('subPen').innerHTML = 'ส่ง'
                                        document.getElementById('penHead').innerHTML = 'พื้นที่ห้าเหลี่ยม'
                                        document.getElementById('theans').innerHTML = 'คำตอบ :'
                                        break;
                                    default :
                                        break;
                                }
                            }
                        //Hexagon
                        let selectConHex = document.getElementById('Hex').innerHTML;
                            if (element=='/hexagon/hexh.html') {
                                switch (selectConHex) {
                                    case ('หกเหลี่ยม') :
                                        document.getElementById('hexHead').innerHTML = 'พื้นที่หกเหลี่ยม'
                                        document.getElementById('theans').innerHTML = 'คำตอบ :'
                                        document.getElementById('subHex').innerHTML = 'ส่ง'
                                        document.getElementById('side').setAttribute('placeholder', 'ด้าน, a')
                                        document.getElementById('hP').setAttribute('placeholder', 'ความสูงปริซึม, h')
                                }
                            }
 };


document.addEventListener('DOMContentLoaded', function () {
    // เรียกฟังก์ชันเพื่อตรวจสอบว่ามีภาษาที่ถูกบันทึกไว้หรือไม่
    checkStoredLanguage();
});

function changeLanguage(lang) {

    const set = {
        'en': 'Setting',
        'th': 'ตั้งค่า'
    };

    const cir = {
        'en': 'Circle' ,
        'th': 'วงกลม'
    }

    const Tri = {
        'en': 'Triangle' ,
        'th': 'สามเหลี่ยม'
    }

    const Squ = {
        'en': 'Square' ,
        'th': 'สี่เหลี่ยม'
    }
    const Pen = {
        'en': 'Pentagon' ,
        'th': 'ห้าเหลี่ยม'
    }

    const Hex = {
        'en': 'Hexagon' ,
        'th': 'หกเหลี่ยม'
    }


    // เปลี่ยนข้อความตามภาษาที่เลือก
    document.getElementById('set').innerHTML = set[lang];
    document.getElementById('cir').innerHTML = cir[lang];
    document.getElementById('Tri').innerHTML = Tri[lang];
    document.getElementById('Squ').innerHTML = Squ[lang];
    document.getElementById('Pen').innerHTML = Pen[lang];
    document.getElementById('Hex').innerHTML = Hex[lang];



    // บันทึกภาษาที่ถูกเลือกลงใน localStorage
    localStorage.setItem('selectedLanguage', lang);
}

function checkStoredLanguage() {
    // ตรวจสอบว่ามีภาษาที่ถูกบันทึกไว้หรือไม่
    const storedLanguage = localStorage.getItem('selectedLanguage');

    // ถ้ามีภาษาที่ถูกบันทึกไว้ ให้ทำการเปลี่ยนภาษา
    if (storedLanguage) {
        changeLanguage(storedLanguage);
    }
}

