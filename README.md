
# Sudoku Solver

Since Sudoku and 2048 are two of my favourite games to play on train, tram, metro I felt the need to make something like that to brushen up my plain-old (but BEST of) Javascript skills.

The logic here is to take the hardcoded data from the API and map them to the cells by using loop and playing around to display it as array. 

Simple, yet useful! :)

What I did was to actually call the API service from a dummy backend which I set with Express and it looks for the port:8000/solve and then the function does all the magic by res(ponse) and req(uest). And we don't get to solve the sudoku by ourselves :(

NOTE*** 

The application will not run with this API key, because it is coming from RAPID API hub and it NEEDS your personal key. I am using .env file to cover up. 

