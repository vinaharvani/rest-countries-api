const countriesElem = document.querySelector(".countries");
const search = document.querySelector(".search");
const dropElem = document.querySelector('.drop');
const region = document.querySelectorAll('.region');
const searchInput = document.querySelector('.searchInput');
const toggle = document.querySelector('.toggle')
const moon = document.querySelector('.moon')


async function getCountry(){
    const url = await fetch('https://restcountries.com/v3.1/all');
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element)
    });
}

getCountry()

function showCountry(data) {
    const country = document.createElement('div');
    country.classList.add('country')
    country.innerHTML = `
        <div class="country-img">
            <img src="${data.flags.png}" alt="">
        </div>
        <div class="country-info">
            <h5 class="countryName">${data.name.common}</h5>
            <p><strong>Population:</strong>${data.population}</p>
            <p class="regionName"><strong>Region:</strong>${data.region}</p>
            <p><strong>Capital:</strong>${data.capital}</p>
        </div> `

    countriesElem.appendChild(country)    
}

search.addEventListener("click", ()=>{
    dropElem.classList.toggle('showDropDown');
})

// const regionName = document.getElementsByClassName('.regionName')
// region.forEach(element=>{
//     console.log(element)
//     element.addEventListener('click', ()=>{
//         Array.from(regionName).forEach(elem=>{
//             console.log(elem.innerText)
//             if(elem.innerText.includes(element.innerText) || element.innerText == "All"){
//                 elem.parentElement.parentElement.style.display = 'grid';
//             } else {
//                 elem.parentElement.parentElement.style.display = 'none';
//             }
//         })
//     })
// })

const countryName = document.getElementsByClassName('.countryName')
searchInput.addEventListener('input',()=>{
    Array.from(countryName).forEach(elem => {
        if(elem.innerText.toLowerCase().includes(searchInput.value.toLowerCase())){
            elem.parentElement.style.display = 'grid';
        } else {
            elem.parentElement.style.display = 'none';
        }
    })
})


