document.addEventListener("DOMContentLoaded", () => {
    let outer = document.getElementById("outer");
    let chance = false; // when chance is false we put 0, when chance is true we put x
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
       } else {
            cell.textContent = "0"
       }

       chance = !chance;
    })
})