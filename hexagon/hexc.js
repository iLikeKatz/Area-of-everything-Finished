function compHex() {
    let s = side.value*1
    let h = hP.value *1
    let s2 = s**2
    let sAll = s*6
    let r3 = Math.sqrt(3)
    let r32 = r3/2

    let baseArea = (3 * r32 * s2).toFixed(2)
    let baseArea2 = baseArea*2
    let sideArea =  sAll*h
    let areaAll = sideArea + baseArea2
    let volume = baseArea * h

    document.getElementById('baseArea').innerHTML = `Area = 3 * √3/2 * ${s} * ${s} = ${baseArea}`
    document.getElementById('baseArea2').innerHTML = `Area*2 = ${baseArea2}`
    document.getElementById('sideArea').innerHTML = `Side Area = (${s}*6) * ${h} = ${sideArea}`
    document.getElementById('areaAll').innerHTML = `Area All = ${baseArea2} + ${sideArea} = ${areaAll}`
    document.getElementById('volume').innerHTML = `volume = ${baseArea} * ${h} = ${volume}`

    side.value = ""
    hP.value = ""
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