function iconList(x) {
    x.classList.toggle("list-change")
}


window.onload = ()=> {
    scroll_function();
    let card1 = document.querySelector(".discuss-first-card");
    let card2 = document.querySelector(".discuss-sound-card");
    let card3 = document.querySelector(".discuss-third-card");
    let cardContainer1 = document.querySelector(".discuss-first-card-container");
    let cardContainer2 = document.querySelector(".discuss-sound-card-container");
    let cardContainer3 = document.querySelector(".discuss-third-card-container");
    

    card1.style.cssText = `
        transition:transform 0.5s;
        transform: translate(0 , 50px);
    `
    card2.style.cssText = `
        transition:transform 0.5s;
        transition-delay: 0.5s;
        transform: translate(0 , 50px);
    `
    card3.style.cssText = `
        transition:transform 0.5s;
        transition-delay: 1s;
        transform: translate(0 , 50px);
    `
    cardContainer1.style.cssText = `
        opacity: 1;
    `
    cardContainer2.style.cssText = `
        opacity: 1;
        transition-delay: 0.5s;
    `
    cardContainer3.style.cssText = `
        opacity: 1;
        transition-delay: 1s;
    `
}

window.onscroll =() => scroll_function();



function scroll_function()  {
    
    if(scrollY >= 307) {
        document.getElementById("discuss-project-img").style.cssText = `
        transition: 1s;
        transform: translate(0 , 0);
        opacity: 1;
        `
    }
    if(scrollY >= 700) {
        document.getElementById("we-can-help-img").style.cssText = `
        transition: 1s;
        transform: translate(0 , 0);
        opacity: 1;
        `
    }
    if(scrollY >= 3000) {
        let pricing_container1 = document.getElementById("pricing-card-container1");
        let pricing_container2 = document.getElementById("pricing-card-container2");
        let pricing_container3 = document.getElementById("pricing-card-container3");

        let pricingCard1 = document.getElementById("pricing-card-1");
        let pricingCard2 = document.getElementById("pricing-card-2");
        let pricingCard3 = document.getElementById("pricing-card-3");
        pricingCard1.style.cssText = `
        transition:transform 0.5s;
        transform: translate(0 , 50px);
        transition-timing-function: ease;
        `
        pricingCard2.style.cssText = `
            transition:transform 0.5s;
            transition-delay: 0.5s;
            transform: translate(0 , 50px);
        `
        pricingCard3.style.cssText = `
            transition:transform 0.5s;
            transition-delay: 1s;
            transform: translate(0 , 50px);
        `
        pricing_container1.style.cssText = `
            opacity: 1;
        `
        pricing_container2.style.cssText = `
            opacity: 1;
            transition-delay: 0.5s;
        `
        pricing_container3.style.cssText = `
            opacity: 1;
            
            transition-delay: 1s;
        `
   }
   

   if(scrollY >= 3440) {
        let incrementText1 = document.getElementById("incrementText1")
        let incrementText2 = document.getElementById("incrementText2")
        let incrementText3 = document.getElementById("incrementText3")
        let incrementText4 = document.getElementById("incrementText4")
        function incrementFunction(element , start , end  , timer){
            let increment = 1;
            let current = start;
            let timing = setInterval(function () {
                current += increment ;
                element.textContent = current;
                if(current == end){
                    clearInterval(timing)
                }

            } , timer)
           
        }
        incrementFunction(incrementText1 , 0 , 126 , 12 )
        incrementFunction(incrementText2 , 0 , 63 , 18 )
        incrementFunction(incrementText3 , 0 , 18 , 82 )
        incrementFunction(incrementText4 , 0 , 27 , 52 )
        console.log(incrementText1.TEXT_NODE)

   }


}
 




// let incrementText1 = document.getElementById("incrementText1")



// incrementText1.textContent.length


function scrollLink(x) {
    if(x == 1) {
        
    }
}