const content = document.getElementById("content")

class  menuItem {

    constructor(itemNumber,imgSrc, itemName, price,details) {
       this.itemNumber=itemNumber
        this.imgSrc=imgSrc;
        this.itemName=itemName;
        this.price=price;
        this.details=details;
    }

   CreateItemCard(){
    const itemCard= document.createElement("div");
    itemCard.className=`item-card ${this.itemNumber}`

    const imgELe = document.createElement("img");
    imgELe.src=this.imgSrc;

    const pricingDiv = document.createElement("div")
    pricingDiv.className="pricing"

    const h3 =document.createElement("h3");
    h3.textContent=this.itemName;

    const price =document.createElement("p");
    price.textContent=`Price: $${this.price}`;


    pricingDiv.appendChild(h3);
    pricingDiv.appendChild(price);




    const details =document.createElement("p");
    details.className="details";
    details.textContent=this.details;

    const Btn =document.createElement("button");
    Btn.textContent="Order Now";


itemCard.appendChild(imgELe);
itemCard.appendChild(pricingDiv);
itemCard.appendChild(details);
itemCard.appendChild(Btn);

return itemCard;

   } 

}

export function menuPage(content){

    const Menu = document.createElement("div");
    Menu.className="menu";

    content.appendChild(Menu);

    const itemCards = [
        new menuItem("One","/bread.jpg","bread","14.99","loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc"),
        new menuItem("One","/bread.jpg","bread","14.99","Indulge in the timeless delight of freshly baked loaf bread at our bakery,try for it yourself "),
        new menuItem("One","/bread.jpg","bread","14.99"," Experience the comfort and satisfaction of warm, freshly baked bread with every bite at our bakery."),
        new menuItem("One","/bread.jpg","bread","14.99","loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc"),
        new menuItem("One","/bread.jpg","bread","14.99","loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc"),
        new menuItem("One","/bread.jpg","bread","14.99","Indulge in the timeless delight of freshly baked loaf bread at our bakery"),
        new menuItem("One","/bread.jpg","bread","14.99"," Experience the comfort and satisfaction of warm, freshly baked bread with every bite at our bakery."),
        new menuItem("One","/bread.jpg","bread","14.99","loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc"),
        new menuItem("One","/bread.jpg","bread","14.99","loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc"),
        new menuItem("One","/bread.jpg","bread","14.99","loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc")
    ]

    itemCards.forEach((ItemCard)=>{
        Menu.appendChild(ItemCard.CreateItemCard());

    })
    
}