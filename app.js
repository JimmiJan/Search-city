const wrapper = document.querySelector(".wrapper")
const select_btn = document.querySelector(".select-btn")


const options = document.querySelector(".option")

let countries =[ "Afghanistan ","Albania " ,"Algeria ","Antigua","Argentina ","Armenia","Australia " ,"Austria","Azerbaijan","Azores ","Bahamas ","Bangladesh " ,"Barbados","Belarus ","Belgium ","Belize ","Bermuda " ,"Bolivia ","Bosnia ","Brazil ","Pakistan","India" ,"Nepal","Usa","America","" ]

function addCountry(){
    countries.forEach(country=>{
        // console.log(country)
        let li = ` <li onclick="updateName(this)">${country}</li>`
        options.insertAdjacentHTML("beforeend",li)
    })
    
}
addCountry()

function updateName(selected){
    console.log(selected.innerText)
    wrapper.classList.remove("active")
    select_btn.firstElementChild.innerHTML = selected.innerText
}



select_btn.addEventListener("click",()=>{
    wrapper.classList.toggle("active")
})
