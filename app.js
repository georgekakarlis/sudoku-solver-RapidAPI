const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const solutionDisplay = document.querySelector('#solution')
const squares = 81
const submission = []

//looping for input / we could do that with forEach also
for (let i = 0; i < squares; i++) {
const inputElement = document.createElement('input')
inputElement.setAttribute('type', 'number')
inputElement.setAttribute('min' , '0')
inputElement.setAttribute('max', '9')
// maths to create the color gray grid :)
  if (
    ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && (i < 21 || i > 53)) ||
    ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 29 && i < 51)) ||
    ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && (i < 27 || i > 59))
  ) {
      inputElement.classList.add('odd-section')
  }



puzzleBoard.appendChild(inputElement)
}


const joinValues = () => {
   const inputs = document.querySelectorAll('input')
   inputs.forEach(input => {
       if(input.value){
         submission.push(input.value)
       } else {
           submission.push('.')
       } 
       // console.log here gives us the array with the dots
   })
}


// mapping the solution with loop
const populateValues = (isSolvable, solution) => {
  const inputs = document.querySelectorAll('input')
  if(isSolvable && solution) {
    inputs.forEach((input, i) => {
      input.value = solution[i]
    })
    solutionDisplay.innerHTML = 'This is the answer.'
  } else {
      solutionDisplay.innerHTML = 'This is not solvable.'
  }
  
}


const solve = () => { 

const options = {
  method: 'POST',
  url: 'https://solve-sudoku.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com',
    'X-RapidAPI-Key': ''
  },
  data: '{"puzzle":"2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
    populateValues(response.data.solvable, response.data.solution)
}).catch(function (error) {
	console.error(error);
});
}




solveButton.addEventListener('click', solve)

