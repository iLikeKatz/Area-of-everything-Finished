function compPen() {
    let s = side.value *1
    let hP = heightP.value *1

    let s2 = s**2
    let base_circumference = s*5

    let baseArea = 1.72 * s2
    let baseArea2 = baseArea*2
    let sideArea = base_circumference * hP
    let areaAll = baseArea2 + sideArea
    let volume = baseArea * hP

    document.getElementById('baseArea').innerHTML = `Area = 1.72 * ${s} * ${s} = ${baseArea}`
    document.getElementById('baseArea2').innerHTML = `Area*2 = ${baseArea2}`
    document.getElementById('sideArea').innerHTML = `Side Area = (${s}*5) * ${hP} = ${sideArea}`
    document.getElementById('areaAll').innerHTML = `Area all = ${baseArea2} + ${sideArea} = ${areaAll}`
    document.getElementById('volume').innerHTML = `volume = ${baseArea} * ${hP} = ${volume}`

    side.value = ""
    heightP.value = ""
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

        
function del() {
    const items = document.querySelectorAll('.ans');
     items.forEach((ans, index) => {
                    ans.style.display = 'none';
                })
}