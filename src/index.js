let addToy = false;
//try to only prepare variables before the DOMContentLoader



 document.addEventListener("DOMContentLoaded", () => {

  //Checking to see I can access the DOM
  const toyCollectionDiv = document.querySelector("#toy-collection");
  const tempH1 = document.createElement("h1");
  tempH1.textContent = "Yay!"
  
  toyCollectionDiv.append(tempH1)
  
  //fetch
  let theStateOfOurFetchData = [] 

  console.log("This is the array before the fetch: ", theStateOfOurFetchData);

const f = fetch("http://localhost:3000/toys")
  .then( response => response.json() )
  .then( (fetchData) => {
    
    console.log("This is what we got back", fetchData);

    theStateOfOurFetchData = fetchData

    console.log("This is the array after the fetch",theStateOfOurFetchData);

    let oneToy = theStateOfOurFetchData[0];
    console.log("This is the first toy's info", oneToy);

    const oneToyOnTheDOM = document.createElement("h1");
    oneToyOnTheDOM.textContent = "Yay!";

    toyCollectionDiv.append(oneToyOnTheDOM);
  })







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



});
