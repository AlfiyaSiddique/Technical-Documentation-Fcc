// Christmas Day Output Sentence

if (christmas() == 1) {
  document.getElementById("p3out").innerText = `${christmas()} day is left for Christmas`
} else {
  document.getElementById("p3out").innerText = `${christmas()} days are left for Christmas`
}

//  Copy Button Functionality
function copy(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  let button = document.getElementsByClassName("cbtn");
  for (let i = 0; i < button.length; i++) {
    button[i].innerText = "Copied";
    setTimeout(() => {
      button[i].innerText = "Copy"
    }, 3000);  
  }
}

//   Christmas days Functions
function christmas() {
  let today = new Date();
  let christmas;
  let remainedDays;

  if (today.getMonth() == 11 && today.getDate() > 25) {
    christmas = new Date(today.getFullYear() + 1, 11, 25);
  } else {
    christmas = new Date(today.getFullYear(), 11, 25);
  }

  remainedDays = christmas.getTime() - today.getTime();
  remainedDays = Math.ceil(remainedDays / (3600 * 1000 * 24));
  return remainedDays;
}


//   Responsive code for web layout
if (window.innerWidth <= 1010) {

  // Useful Elements
  let burger = document.getElementsByClassName("fa-bars")[0];
  let nav = document.getElementById("navbar");
  let ref = document.getElementById("reference");
  let crosses = document.getElementsByClassName("icons");

  // Creating Extra Elements
  addElement("navbar", "Go to Reference",1)
  addElement("reference", "Go to navbar",2)

  // Displaying burger icon
  removeClass(burger, "display2");

  // Adding menu functionality
  burger.addEventListener("click", () => {
  removeClass(nav, "display");
  removeClass(ref, "display");
    for (let i = 1; i < 3; i++) {
      removeClass(crosses[i], "display2");
      crosses[i].addEventListener("click", () => {
        ref.classList.add("display");
        nav.classList.add("display");
      })
    }
  })
}

// Function to crete node elements
function addElement(id, text, classCode) {
  let elem = document.createElement("a");
  elem.innerText = text;
  document.getElementById(id).appendChild(elem);
  (classCode == 1)?elem.classList.add("nav-link"):elem.classList.add("ref-link");
}

//Event Listeneres to change side bars 
lastLink("nav-link").addEventListener("click",()=>{
  linkChange("navbar","reference");
})
lastLink("ref-link").addEventListener("click",()=>{
  linkChange("reference","navbar");
});



// Function for linkChange
function linkChange(id1, id2){
  let refLink = document.getElementById(id1);
  let navLink = document.getElementById(id2);
    refLink.classList.remove("zee");
    navLink.classList.add("zee");

}


// function to remove elements
function removeClass(sub, className) {
  sub.classList.remove(className);
}

// Function for last link
function lastLink(className){
  let Arr = document.getElementsByClassName(className);
 return Arr[Arr.length-1];
}