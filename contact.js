const content =document.getElementById("content")

function contactPage(){
    const contactPage =document.createElement("div")
    const greetDiv =document.createElement("div")
    const h3 =document.createElement("h3")
    const p = document.createElement("p")
     
    


h3.innerHTML= "We’re Here to Help!"
p.innerHTML="Thank you for giving us the opportunity to serve you. At Bhako, we value your inquiries, feedback, and any opportunities to assist you. Whether you have questions about our products, need support, or just want to share your thoughts, we're here to listen and help."

contactPage.setAttribute("class", "contact-page")
greetDiv.setAttribute("class","greeting")

greetDiv.appendChild(h3)
greetDiv.appendChild(p)
contactPage.appendChild(greetDiv)


content.appendChild(contactPage)


const form = document.createElement("form")
const inputText =document.createElement("input")
const inputEmail =document.createElement("input")
const labelThree =document.createElement("label")
const labelTwo =document.createElement("label")
const labelOne =document.createElement("label")
const textArea =document.createElement("textarea")
const button = document.createElement("button")


button.innerHTML="Submit"
labelOne.innerHTML="FullName"
labelTwo.innerHTML="Email"
labelThree.innerHTML="Feedback"

inputText.setAttribute("type","text")
inputEmail.setAttribute("type","email")


contactPage.appendChild(form)
form.appendChild(labelOne)
form.appendChild(inputText)
form.appendChild(labelTwo)
form.appendChild(inputEmail)
form.appendChild(labelThree)
form.appendChild(textArea)
form.appendChild(button)


}

contactPage()
