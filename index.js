// a couple of const to define variables
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

// first event listener, tells the search bar what to do
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
    const isVisible = 
    user.name.toLowerCase().includes(value) ||
    user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

//fetch request, pulls information from an API into the page so that it can be used
    fetch("https://jsonplaceholder.typicode.com/users") 
 .then(res => res.json())
 .then(data => {
    
    users = data.map(user => {

//defining my cards in scope
        const card = document.createElement("div")

//functions that define what the call back functions will do in the event listeners below
        function mouseover(){
          card.style.border = "2px solid red"}
         function mouseleave(){
          card.style.border = "1px solid black"}
         function mousedown(){
          card.style.border = "2px solid blue";
        }

        card.addEventListener("mouseover", mouseover)
        card.addEventListener("mousedown", mousedown)
        card.addEventListener("mouseleave", mouseleave) 
      
//what information should be pulled from the API and displayed on the cards

        card.setAttribute("class", "card")
         const header2 = document.createElement("p")
         const phone = document.createElement("p")
         const email = document.createElement("p")
         const website = document.createElement("p")
         header2.textContent = user.name
         phone.textContent = user.phone
         email.textContent = user.email
         website.textContent = user.website
        card.append(header2)
        card.append(phone)
        card.append(email)
        card.append(website)
        userCardContainer.append(card)

         return { name: user.name, email: user.email, website: user.website, element: card }
        
     })
 })

