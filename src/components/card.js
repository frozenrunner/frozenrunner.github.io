export class Card extends HTMLElement {
    constructor() {
        super();
        
        const template = document.getElementById("card");
        const templateContent = template.content;

        const shadow = this.attachShadow({ mode: "open"});
        const clonedNode = templateContent.cloneNode(true);

        const img = clonedNode.querySelector(".card-image")

        if (this.hasAttribute("img")) {
            img.src = this.getAttribute("img");
        }
        shadow.appendChild(clonedNode);


        // const container = document.createElement("section");
        // container.setAttribute("class", "card-section");

        // const img = section.appendChild(document.createElement("img"));
        // if (this.hasAttribute("img")) {
        //     img.src = this.getAttribute("img");
        // }

        // if (this.hasAttribute("alt")) {
        //     img.setAttribute("alt", this.getAttribute("alt"));
        // }

        // const headerText = section.appendChild(document.createElement("h1"));

    }
}

customElements.define("site-card", Card);