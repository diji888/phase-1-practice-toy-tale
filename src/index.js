let addToy = false;
//try to only prepare variables before the DOMContentLoader

const f = fetch('http://localhost:3000/toys')
console.log(f);

 document.addEventListener("DOMContentLoaded", () => {

  //fetch

  const addBtn = document.querySelector("#new-toy-btn");

  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  //Checking to see I can access the DOM
  const toyCollectionDiv = document.querySelector("#toy-collection");
  const tempH1 = document.createElement("h1");
  tempH1.textContent = "Yay!"
  
  toyCollectionDiv.append(tempH1)

});
