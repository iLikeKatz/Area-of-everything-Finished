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


p = 3.14 

function Pi() {
    switch (PiValue.value) {
        case "3.14" :
            return p = 3.14;
        case "22/7" : 
            return p  = 22/7
    }
}



function compAreaCir() {
    


    let h = hOfPriCir.value
    let r = rOfCir.value

    let AreaCir = (p * r * r).toFixed(2)
    let areaCir2 = (AreaCir*2)
    let sideCir = 2 * ( p * r * h).toFixed(2)
    let areaAll = (sideCir + areaCir2).toFixed(2)
    let volume = (p * r * r * h).toFixed(2)

    document.getElementById('areaCir').innerHTML = "Area = " +  " π*" + r + "^2 = " + AreaCir
    document.getElementById('areaCir*2').innerHTML = "Area*2 = " + (AreaCir*2)
    document.getElementById('sideAreaCir').innerHTML = "Side Area = " + `2*π*${r}*${h} = ${sideCir}`
    document.getElementById('areaAll').innerHTML = `Area all = ${areaCir2} + ${sideCir} = ${areaAll}`
    document.getElementById('VolCir').innerHTML = `Volume = π * ${r} * ${r} * ${h} = ${volume}`

    hOfPriCir.value = ""
    rOfCir.value = ""

}; 

function del() {
    const items = document.querySelectorAll('.ans');
     items.forEach((ans, index) => {
                    ans.style.display = 'none';
                })
}

