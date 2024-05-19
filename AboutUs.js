const content =document.getElementById("content")

class Section {
    constructor(title, content, imgSrc, rowClass) {
        this.title = title;
        this.content = content;
        this.imgSrc = imgSrc;
        this.rowClass = rowClass;
    }

    createSection() {
        const rowDiv = document.createElement('div');
        rowDiv.className = `row ${this.rowClass}`;

        const textDiv = document.createElement('div');
        textDiv.className = 'text';

        const titleElement = document.createElement(this.rowClass === 'one' ? 'h2' : 'h3');
        titleElement.textContent = this.title;

        const contentP = document.createElement('p');
        contentP.textContent = this.content;

        textDiv.appendChild(titleElement);
        textDiv.appendChild(contentP);

        const imgElement = document.createElement('img');
        imgElement.src = this.imgSrc;
       

        rowDiv.appendChild(this.rowClass === 'two' ? imgElement : textDiv);
        rowDiv.appendChild(this.rowClass === 'two' ? textDiv : imgElement);

        return rowDiv;
    }
}




document.addEventListener('DOMContentLoaded', () => {
    const aboutUsContainer = document.createElement("div");
    aboutUsContainer.className = 'about-us';
    content.appendChild(aboutUsContainer)

    const sections = [
        new Section('Welcome to Bhako!', 'At Bhako, we believe that every bite should be a delightful experience. Founded in 2015 with a passion for baking and a commitment to quality, Bhako has been serving the community with love and dedication.', '../pie.jpg', 'one'),
        new Section('Our Story', 'Bhako was born out of a desire to create a bakery where tradition meets innovation. Our journey began with a simple idea: to craft the finest baked goods using only the freshest and highest quality ingredients. From our humble beginnings as a small local bakery, we have grown into a beloved establishment known for our delicious pastries, bread, and cakes. Over the years, we have built a strong reputation for high-quality products and have earned goodwill in the locality.', '../rool.jpg', 'two'),
        new Section('Our Commitment', 'At Bhako, we believe that every bite should be a delightful experience. Founded in 2015 with a passion for baking and a commitment to quality, Bhako has been serving the community with love and dedication.', '../bread.jpg', 'three')
    ];

    sections.forEach(section => {
        aboutUsContainer.appendChild(section.createSection());
    });
});


