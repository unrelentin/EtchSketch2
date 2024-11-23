const squareGrid = document.querySelector(".container");

function makeTheGrids (theGrids) {
    for (i = 0; i < theGrids; i++) {
        const gridColumns = document.createElement("div");
        gridColumns.classList.add("gridColumns");
        gridColumns.style.cssText = "width: 25px; height: 25px; background-color: white; border: 1px solid black";
        squareGrid.appendChild(gridColumns);      //Don't use " " or it will think it's a string
        gridColumns.addEventListener("mouseover", () => {
            gridColumns.style.backgroundColor = "black";         //Don't use style.cssText, it will overwrite the whole thing
        });
        
        
        for (j = 0; j < theGrids; j++) {             //use two different loops' variables "i" and "j" to prevent it from disrupting each other
            const gridRows = document.createElement("div");
            gridRows.classList.add("gridRows")
            gridRows.style.cssText= "width: 25px; height: 25px; background-color: white; border: 1px solid black";
            gridColumns.appendChild(gridRows);
            gridRows.addEventListener ("mouseover", () => {
                gridRows.style.backgroundColor = "black";
            });
        }
    }
};

makeTheGrids(16);

const askSquare = document.querySelector(".askSquare");
    askSquare.addEventListener("click", () => {
        let squares = prompt("How many squares per size do you need?", 16);
        if (isNaN(squares) || squares < 1 || squares > 100) {                    //isNaN is a method to check if it's a number or not
            alert("invalid input. Please enter a number between 1 and 100.");
        } else {
        squareGrid.innerHTML = '';                    //using innerHTML here is fine because it doesn't ask any input from the user, it's strictly internal.
        makeTheGrids(squares);
        }
    });





//Create a function that will append the grids as "square divs" children of squareGrid