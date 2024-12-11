// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.

// countriesAPI = "https://restcountries.com/v2/all";
// const capitalCountries = async () => {
//   try {
//     const response = await fetch(countriesAPI);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
// capitalCountries();

// Exercises: Level 2
// Print out all the cat names in to catNames variable.
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// const catNames = async () => {
//   try {
//     const response = await fetch(catsAPI);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// catNames();

// Exercises: Level 3

// Read the cats api and find the average weight of cat in metric unit.

// const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// const catWeight = async () => {
//   try {
//     const response = await fetch(catsAPI);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// catsAPI()

// Read the countries api and find out the 10 largest countries

// const countriesAPI = 'https://restcountries.com/v2/all'

// const largestCountries = async () => {
  //   try {
    //     const response = await fetch (countriesAPI)
    //     const data = await response.json()
    //     const countries = data.map ((i)=>{
      //       return {
        //         name : i.name+ " " +  i.area
        //       }
        //     })
        //     const largestCountries = countries.sort((a, b) => b.area - a.area).slice(0, 10)
        //     console.log(largestCountries)
        //   }
        //   catch (error) {
          //     console.error("Error:", error)
          // }
// }

// largestCountries()

// Read the countries api and count total number of languages in the world used as officials.

const countriesAPI = 'https://restcountries.com/v2/all'
const totalLanguages = async () => {
  const response = await fetch(countriesAPI)
  const data = await response.json()

  try{

    const lang = data.map ((i)=>{
      return i.languages
    })
    console.log(lang.length)

  }catch(err){
    console.error('Error:', err)
  }
}

totalLanguages()