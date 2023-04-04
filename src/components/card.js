export class Card extends HTMLElement {
    constructor() {
        super();
        
        const template = document.getElementById("card");
        const templateContent = template.content;

        const shadow = this.attachShadow({ mode: "open"});
        const clonedNode = templateContent.cloneNode(true);

        const imgContainer = clonedNode.querySelector(".card-image-container");
        const img = clonedNode.querySelector(".card-image")

        if (this.classList.contains("wide-logo")) {
            img.classList.add("wide-logo");
        }

        if (this.hasAttribute("img")) {
            img.src = this.getAttribute("img");
        } else {
            imgContainer.remove();
        }
        shadow.appendChild(clonedNode);
    }
}

customElements.define("site-card", Card);