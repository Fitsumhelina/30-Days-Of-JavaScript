// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red
const countriesAPI = 'https://restcountries.com/v2/all';

document.addEventListener('DOMContentLoaded' , () => {
  createNumberGrid()
  fetchCountries()
  
})

const createNumberGrid =() => {

  let container = document.createElement('div');
  document.body.appendChild(container);

for (let i = 0; i <= 100; i++) {
        let number = document.createElement('div');
        number.innerText = i;
        number.style.width = '50px';
        number.style.height = '50px';
        number.style.lineHeight = '50px';
        number.style.display = 'inline-block';
        number.style.textAlign = 'center';
        number.style.margin = '2px';
        
      if (isPrime(i)) {
          number.style.backgroundColor = 'red';
        } else if (i % 2 === 0) {
          number.style.backgroundColor = 'green';
        } else {
          number.style.backgroundColor = 'yellow';
        }
        container.appendChild(number);
      }
    }
    

const fetchCountries = async() =>{
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    displayCountries(data);
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
}

function displayCountries(countries) {
  const container = document.createElement('div');
  container.style.marginTop = '20px';
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  document.body.appendChild(container);

  countries.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.innerText = country.name;
    countryDiv.style.border = '1px solid black';
    countryDiv.style.margin = '20px';
    countryDiv.style.padding = '10px';
    countryDiv.style.flex = '1 0 21%'; // Adjusts country blocks for responsive layout
    container.appendChild(countryDiv);
  });
}

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}



// Use the countries array to display all the countries.See the design

//completed

