// Exercises
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

// Exercises Level 1
// Change skills array to JSON using JSON.stringify()


// const skill = JSON.stringify(skills)
// console.log(skill)


// Stringify the age variable
// const ages = JSON.stringify(age)
// console.log(ages)

// Stringify the isMarried variable
// const Married = JSON.stringify(isMarried)
// console.log(Married)

// Stringify the student object
// const students = JSON.stringify(student, undefined ,4 )
// console.log(students)

// Exercises Level 2
// Stringify the students object with only firstName, lastName and skills properties

// const students =  JSON.stringify(student, ['firstName', 'lastName', 'skills'] ,3)
// console.log(students)



const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// Exercises Level 3
// Parse the txt JSON to object.
const TXT = JSON.parse(txt)
// console.log(TXT)

// Find the user who has many skills from the variable stored in txt.

let maxSkills = 0 
let userWithMaxSkills = ''
for (let key in TXT) {
    if (TXT[key].skills.length > maxSkills) {
        maxSkills = TXT[key].skills.length;
        userWithMaxSkills = key;
    }
}

console.log(userWithMaxSkills);
