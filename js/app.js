const loadData = (name) =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => getData(data))
}
document.getElementById('submit').addEventListener("click", function(){
    const searchCountry = document.getElementById('search')
    const searchValue = searchCountry.value;
    loadData(searchValue)
    searchCountry.value = '';
})
const getData = (countryName) => {
    const parentDiv = document.getElementById('parent-div')
    parentDiv.textContent = ''
    countryName.forEach(element => {
       const createDiv = document.createElement('div')
       createDiv.classList.add('child-div')
       createDiv.innerHTML = `
       <img class="mt-6 rounded-2xl" src="${element.flags.png}"/>
       <h1 class="text-xl text-white font-bold"> Country Name :   <span class="text-blue-600">${element.name?.common}</span>  </h1>
       <h1 class="text-xl text-white font-bold"> Country Capital :   <span class="text-blue-600">${element.capital}</span> </h1>
       <h1 class="text-xl text-white font-bold"> Country population :   <span class="text-blue-600">${element.population} </span></h1>

       ` 
       parentDiv.appendChild(createDiv)
    });
}




loadData('bangladesh')