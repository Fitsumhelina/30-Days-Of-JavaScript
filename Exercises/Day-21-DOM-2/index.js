// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red
const countriesAPI = 'https://restcountries.com/v2/all';

document.addEventListener('DOMContentLoaded' , () => {
  createNumberGrid()
  fetchCountries()
  createDetailsPage()
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

// Exercises: Level 3
// Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.


const createDetailsPage = () => {
  const topics = [
    {
      title: "Frontend Development",
      content: `
        <p><strong>Frontend Development</strong> focuses on the user-facing part of a web application. This includes the design, layout, structure, and interactivity of a website.</p>
        <ul>
          <li>Languages: HTML, CSS, JavaScript</li>
          <li>Frameworks: React, Angular, Vue.js</li>
          <li>Tools: Webpack, Babel, npm</li>
          <li>UI/UX Design: Figma, Adobe XD</li>
          <li>Responsive Design: Bootstrap, CSS Grid</li>
        </ul>`
    },
    {
      title: "Backend Development",
      content: `
        <p><strong>Backend Development</strong> involves the server-side of a web application, including databases, APIs, and authentication.</p>
        <ul>
          <li>Languages: Python, Java, PHP, Node.js</li>
          <li>Frameworks: Express.js, Django, Spring Boot</li>
          <li>Databases: MySQL, MongoDB, PostgreSQL</li>
          <li>API Design: RESTful APIs, GraphQL</li>
          <li>Authentication: OAuth, JWT</li>
        </ul>`
    },
    {
      title: "Mobile App Development",
      content: `
        <p><strong>Mobile App Development</strong> involves building applications for mobile devices such as smartphones and tablets.</p>
        <ul>
          <li>Languages: Swift, Kotlin, Java</li>
          <li>Frameworks: React Native, Flutter, Xamarin</li>
          <li>Tools: Android Studio, Xcode</li>
          <li>Design Guidelines: Material Design (Android), Human Interface Guidelines (iOS)</li>
        </ul>`
    },
    {
      title: "Full Stack Development",
      content: `
        <p><strong>Full Stack Development</strong> involves working on both the frontend and backend of a web application, covering all stages of development.</p>
        <ul>
          <li>Languages: HTML, CSS, JavaScript, Python, Ruby</li>
          <li>Frameworks: Node.js, Django, Rails, React</li>
          <li>Databases: MongoDB, MySQL, PostgreSQL</li>
          <li>Version Control: Git, GitHub, GitLab</li>
          <li>Deployment: Docker, AWS, Heroku</li>
        </ul>`
    }
  ];

  // Create details elements for each topic
  topics.forEach(topic => {
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.innerText = topic.title;
    details.appendChild(summary);

    const content = document.createElement('div');
    content.innerHTML = topic.content;
    details.appendChild(content);

    document.body.appendChild(details);
  });
};

