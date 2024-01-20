
function compAreaSq() {
    let l = lengthSq.value
    let w = widthSq.value
    let h = heightSq.value

    let baseArea = l * w
    let Base_circumference = (l*2) + (w*2)
    let sideArea = Base_circumference * h
    let areaAll = (baseArea * 2 )+ sideArea
    let volume = baseArea * h

    document.getElementById('baseAreaSq').innerHTML = "Base Area = " + " " + l + "*" + w + " " + "=" + " " + baseArea
    document.getElementById('baseAreaSq*2').innerHTML = "Base Area *2 =" + " " + baseArea * 2
    document.getElementById('sideAreaSq').innerHTML = "Side area = " + " " + "(" + l + "+" + l  + "+"  + w + "+" + w + ")"  + "*" + h + " =" + " " + sideArea
    document.getElementById('areaAllSq').innerHTML = "All area = " + " " + (baseArea*2) + "+" + sideArea + " = " + areaAll
    document.getElementById('volumeSq').innerHTML = "Volume = " + baseArea + "*" + h + " = " + " " + volume


    heightSq.value = ""
    widthSq.value = ""
    lengthSq.value = ""
}

function compAreaTz() {
    let paral1 = paral1Tz.value * 1;
    let paral2 = paral2Tz.value * 1;
    let sideL1 = sideL1Tz.value * 1;
    let sideL2 = sideL2Tz.value * 1;
    let hTz = heightTz.value * 1;
    let heiPriTz = hPriTz.value *1;

    let sumParal = (paral1 + paral2);
    let baseAreaTz = 1/2 * sumParal * hTz;
    let Base_circumferenceTz = paral1 + paral2 + sideL1 + sideL2;
    let sideAreaTz = Base_circumferenceTz * heiPriTz;
    let areaAllTz = (baseAreaTz * 2) + sideAreaTz;
    let volumeTz = baseAreaTz * heiPriTz;

    document.getElementById('baseAreaTz').innerHTML = "Base Area = " + " " + "1/2*" + sumParal + "*" + hTz + " = " + baseAreaTz
    document.getElementById('baseAreaTz*2').innerHTML = "Base Area*2 = " + (baseAreaTz*2)
    document.getElementById('sideAreaTz').innerHTML = "Side Area = " + "(" + paral1 + "+" + paral2 + "+" + sideL1 + "+" + sideL2 +")" + "*" + heiPriTz + " = " + sideAreaTz 
    document.getElementById('areaAllTz').innerHTML = "Area all = " + (baseAreaTz*2) + "+" + sideAreaTz + " = " + areaAllTz
    document.getElementById('volumeTz').innerHTML =  "Volume = " + baseAreaTz + "*" + heiPriTz + " = " + volumeTz

    paral1Tz.value = ""
    paral2Tz.value = ""
    sideL1Tz.value = ""
    sideL2Tz.value = ""
    hPriTz.value = ""
    heightTz.value = ""
}

function compParal() {
    let bParal = baseParal.value *1
    let hParal = heightParal.value *1
    let PriHParal = PriH.value *1

    let baseAreaPr = bParal * hParal
    let baseAreaPr2 = baseAreaPr * 2
    let AllbaseLine = (bParal*2) + (hParal*2)
    let sideAreaPr = AllbaseLine * PriHParal
    let areaAllPr = sideAreaPr + baseAreaPr2
    let volumePr = baseAreaPr * PriHParal

    document.getElementById('baseAreaPr').innerHTML = `Area = ${bParal} * ${hParal} = ${baseAreaPr}`
    document.getElementById('baseAreaPr*2').innerHTML = `Area*2 = ${baseAreaPr2}`
    document.getElementById('sideAreaPr').innerHTML = `Side Area = (${bParal} + ${bParal} + ${hParal} + ${hParal}) * ${PriHParal} = ${sideAreaPr}`
    document.getElementById('areaAllPr').innerHTML = `Area all = ${sideAreaPr} + ${baseAreaPr2} = ${areaAllPr}`
    document.getElementById('volPr').innerHTML = `volume = ${baseAreaPr} * ${PriHParal} = ${volumePr}`

    baseParal.value = ""
    heightParal.value = ""
    PriH.value = ""
}

function delay() {

            // Get all items
            const items = document.querySelectorAll('.ans');

            // Function to show items with delay
                items.forEach((ans, index) => {
                    setTimeout(() => {
                    ans.style.display = ''
                    ans.style.opacity = 1;
                }, index * 100); // Adjust the delay (in milliseconds) as needed
                });
            

             // Call the function to show items with delay
        };

function delay2() {

            // Get all items
            const items2 = document.querySelectorAll('.ans2');

            // Function to show items with delay
                items2.forEach((ans2, index) => {
                    setTimeout(() => {
                    ans2.style.display = ''
                    ans2.style.opacity = 1;
                }, index * 100); // Adjust the delay (in milliseconds) as needed
                });
            

             // Call the function to show items with delay
        };

function delay3() {

            // Get all items
            const items3 = document.querySelectorAll('.ans3');

            // Function to show items with delay
                items3.forEach((ans3, index) => {
                    setTimeout(() => {
                    ans3.style.display = ''
                    ans3.style.opacity = 1;
                }, index * 100); // Adjust the delay (in milliseconds) as needed
                });
            

             // Call the function to show items with delay
        };

        
function del() {
    const items3 = document.querySelectorAll('.ans3');
     items3.forEach((ans3, index) => {
                    ans3.style.display = 'none';
                })

    const items2 = document.querySelectorAll('.ans2');
     items2.forEach((ans2, index) => {
                    ans2.style.display = 'none';
                })

    const items = document.querySelectorAll('.ans');
     items.forEach((ans, index) => {
                    ans.style.display = 'none';
                })
}

function del2() {
    const items = document.querySelectorAll('.ans');
     items.forEach((ans, index) => {
                    ans.style.display = 'none';
                })

    const items2 = document.querySelectorAll('.ans2');
     items2.forEach((ans2, index) => {
                    ans2.style.display = 'none';
                })

    const items3 = document.querySelectorAll('.ans3');
     items3.forEach((ans3, index) => {
                    ans3.style.display = 'none';
                })
}

function del3() {
    const items = document.querySelectorAll('.ans');
     items.forEach((ans, index) => {
                    ans.style.display = 'none';
                })

    const items2 = document.querySelectorAll('.ans2');
     items2.forEach((ans2, index) => {
                    ans2.style.display = 'none';
                })

    const items3 = document.querySelectorAll('.ans3');
     items3.forEach((ans3, index) => {
                    ans3.style.display = 'none';
                })
}