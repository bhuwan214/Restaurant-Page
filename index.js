const content = document.getElementById("content")



function createHome(){
    
    const homeDiv = document.createElement("div")
        homeDiv.setAttribute("class", "home")
        content.appendChild(homeDiv)

 //Creating the left and right part inside the home 
        const left=document.createElement('div')
        const right=document.createElement('div')
        left.setAttribute('class','left')
        right.setAttribute('class','right')
        homeDiv.appendChild(left)
        homeDiv.appendChild(right)

 //Inside the left.
        const  h2=document.createElement('h2')
        const span1= document.createElement('span')
        const p= document.createElement('p')

        h2.innerHTML=`Welcome to `
        span1.innerHTML='Bhako'
        p.innerHTML="Discover a world of sweet and savory delights. From flaky croissants to decadent cakes, each treat is handcrafted with care and the finest ingredients. Whether it's a morning indulgence or a special occasion, our bakery is your destination for deliciousness."

        left.appendChild(h2)
        left.appendChild(p)
        h2.appendChild(span1)

 //Inside the right.  
        const svgDiv = document.createElement('div')
         svgDiv.setAttribute('class', 'svg-container')
        
        const img1=document.createElement('img')
        const img2=document.createElement('img')
        const img3=document.createElement('img')
    
        img1.setAttribute('src','blob.svg')
        img1.setAttribute('class','blob')
        img2.setAttribute('src','stroke.svg')
        img2.setAttribute('class','stroke')

const  cakeDiv = document.createElement('div')
cakeDiv.setAttribute('class','pancake')

        img3.setAttribute('src','pancakee.jpg')
       img3.setAttribute("class","panImg")

    const h4 =document.createElement("h4")
    const span2=document.createElement("span")

  span2.textContent="Pancake "


        right.appendChild(svgDiv)
        svgDiv.appendChild(cakeDiv)
        cakeDiv.appendChild(img3)
        svgDiv.appendChild(img1)
        svgDiv.appendChild(img2)
        cakeDiv.appendChild(h4)
        h4.appendChild(span2)
        
        h4.innerHTML=span2.outerHTML +" with blue berries"

}
createHome()






