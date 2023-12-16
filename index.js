document.addEventListener("DOMContentLoaded", () => {
    let outer = document.getElementById("outer");
    let chance = false; // when chance is false we put 0, when chance is true we put x
    let arr = Array(9).fill(undefined);
    outer.addEventListener("click", (e) => {
       let cell = e.target;
       let cellNumber = cell.getAttribute("data-cell");
       
    //    console.log(cellNumber)

       if(cell.getAttribute("data-clicked")) {
            return;
       }
       cell.setAttribute("data-clicked", "true");

       if(chance == true) {
            cell.textContent = "x";
            arr[cellNumber] = "x";
            winningCombo("x");
       } else {
            cell.textContent = "o";
            arr[cellNumber] = "o";
            winningCombo("o");
       }
       console.log(arr);
       chance = !chance;
    })

    function winningCombo(char) {
        let result = document.getElementById("result");
        if(arr[0] == char && arr[1] == char && arr[2]) { 
            // the 0th row is having the char
            result.textContent = `${char} wins`;
        }
        else if(arr[3] == char && arr[4] == char && arr[5]) {
            // the 1th row is having the char
            result.textContent = `${char} wins`;
        }
        else if(arr[6] == char && arr[7] == char && arr[8]) {
            // the 2th row is having the char
            result.textContent = `${char} wins`;
        }
        else if(arr[0] == char && arr[3] == char && arr[6]) {
            // the 0th col is having the char
            result.textContent = `${char} wins`;
        }
        else if(arr[1] == char && arr[4] == char && arr[7]) {
            // the 1th col is having the char
            result.textContent = `${char} wins`;
        }
        else if(arr[2] == char && arr[5] == char && arr[8]) {
            // the 2th col is having the char
            result.textContent = `${char} wins`;
        }
        else if(arr[0] == char && arr[4] == char && arr[8]) {
            // the 2th digonal is having the char
            result.textContent = `${char} wins`;
        }
        else if(arr[2] == char && arr[4] == char && arr[6]) {
            // the 2th digonal is having the char
            result.textContent = `${char} wins`;
        }
    }
})