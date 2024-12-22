// Exercises
// Exercise: Level 1
// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// Get each of the the paragraph using document.querySelector('#id') and by their id
// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// Loop through the nodeList and get the text content of each paragraph
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// Set id and class attribute for all the paragraphs using different attribute setting methods

document.addEventListener('DOMContentLoaded', () => {
    function1()
    function2()
    function3()
})

const function1 = () => {
    let i = 0
    while(i<5){
        const paragraph = document.createElement('p')
        paragraph.classList='paragraph'
        paragraph.id = 'p' + (i+1)
        paragraph.innerText = 'This is paragraph ' + (i+1)
        document.body.appendChild(paragraph)
        i++
    }
    const div = document.getElementsByClassName('one') 
    const timeanddate = document.createElement('h1')
    document.body.appendChild(timeanddate)
    timeanddate.innerText = new Date().toLocaleString()
    timeanddate.id = 'h3'
    if (div.length > 0) {
        div[0].appendChild(timeanddate); // Append the h1 element to the first 'one' element
      }

    const allParagraphs = document.querySelectorAll('p')
    for (i=0; i<allParagraphs.length; i++) {
        console.log(`${allParagraphs[i].id}`)
    }
    


}

// Exercise: Level 2
// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// Set text content, id and class to each paragraph

const function2 = () => {
    const allparagraphs  = document.querySelectorAll('p')
    for ( i =0 ; i<allparagraphs.length ; i++ ) {
        if (i%2 === 0) {
            allparagraphs[i].style.backgroundColor = 'green'
        } else {
            allparagraphs[i].style.backgroundColor = 'red'
        }
    }
}

// Exercise: Level 3
// DOM: Mini project 1
// Develop the following application, use the following HTML elements to get started with.
//  You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

const function3 = () => {
    const randomcolor = (x,y,z) => {
        return `rgb(${Math.floor(Math.random()*x)},${Math.floor(Math.random()*y)},${Math.floor(Math.random()*z)}`
    }

    const header = document.querySelector(`h1`)
    const year = header.textContent.match(/\b\d{4}\b/)

    if (year) {
        header.innerHTML = header.innerHTML.replace(year, `<span id="year">${year}</span>`);
        const yearelement = document.getElementById('year');

        setInterval(()=> {
            yearelement.style.color = randomcolor(255,255,255)
        },1000)
    }
    
    
    const dateandtime = document.getElementById('h3')
    setInterval(()=> {
        dateandtime.style.backgroundColor = randomcolor(255,255,255)

    },1000)


    const all = document.querySelectorAll('li')
    const Completed = []
    const onging = []
    const coming =[]

    all.forEach(element => {
        let text  = element.textContent
        if (text.includes('Done')) {
            Completed.push(element)
        }
        else if (text.includes('Ongoing')) {
            onging.push(element)
        }
        else {
            coming.push(element)
        }
    });

    Completed.forEach(item => {
        item.style.backgroundColor = 'green'
    })
    onging.forEach(item => {
        item.style.backgroundColor = 'yellow'
    })
    coming.forEach(item => {
        item.style.backgroundColor = 'red'
    })

}
