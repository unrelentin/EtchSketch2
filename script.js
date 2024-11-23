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




//Create a function that will append the grids as "square divs" children of squareGrid