const technologies = [
  {
    image: "javascript.png",
    title: "JavaScript",
    link: {
      label: "w3schools.com/js",
      url: "https://w3schools.com/js",
    },
    content:
      "Langage de programmation essentiel du web, utilisé pour rendre les pages interactives et dynamiques. Polyvalent et exécuté côté navigateur comme côté serveur, il est au cœur des applications modernes.",
  },
  {
    image: "python.png",
    title: "Python",
    link: {
      label: "python.org",
      url: "https://python.org",
    },
    content:
      "Langage polyvalent, simple et lisible, idéal pour le développement web, l'automatisation, la data science et l'IA. Grâce à son vaste écosystème de librairies, Python permet de créer rapidement des solutions puissantes et fiables.",
  },
  {
    image: "java.png",
    title: "Java",
    link: {
      label: "docs.oracle.com/en/java",
      url: "https://docs.oracle.com/en/java",
    },
    content:
      "Langage orienté objet, robuste et multiplateforme, largement utilisé pour les applications d'entreprise. Grâce à sa stabilité, sa sécurité et son vaste écosystème, Java reste un pilier du développement backend et des systèmes distribués.",
  },
  {
    image: "angular.png",
    title: "Angular",
    link: {
      label: "https://angular.dev",
      url: "https://angular.dev",
    },
    content:
      "Framework JavaScript/TypeScript complet, structuré et maintenu par Google. Il facilite la création d'applications web robustes, modulaires et performantes grâce à son architecture claire, ses composants réutilisables et son puissant système de tooling.",
  },
  {
    image: "react.png",
    title: "ReactJS",
    link: {
      label: "react.dev",
      url: "https://react.dev",
    },
    content:
      "Bibliothèque JavaScript créée par Meta, centrée sur la création d'interfaces utilisateur rapides et interactives. Basée sur les composants et le Virtual DOM, elle permet de construire des applications web modernes, réactives et facilement maintenables.",
  },
  {
    image: "vuejs.png",
    title: "VueJS",
    link: {
      label: "vuejs.com",
      url: "https://vuejs.com",
    },
    content:
      "Framework JavaScript progressif, simple et flexible, idéal pour construire des interfaces modernes. Grâce à son approche réactive et sa courbe d'apprentissage douce, Vue.js permet de développer rapidement des applications élégantes et performantes.",
  },
  {
    image: "nestjs.png",
    title: "NestJS",
    link: {
      label: "nestjs.com",
      url: "https://nestjs.com",
    },
    content:
      "Framework Node.js moderne basé sur TypeScript, conçu pour créer des applications serveur fiables et structurées. Il adopte une architecture modulaire inspirée d'Angular, facilitant la maintenabilité, l'évolutivité et le développement d'API robustes.",
  },
  {
    image: "spring-boot.png",
    title: "Spring Boot",
    link: {
      label: "spring.io",
      url: "https://spring.io",
    },
    content:
      "Framework Java basé sur Spring, conçu pour simplifier la création d'applications backend. Il offre une configuration minimale, une structure claire et des outils puissants pour développer rapidement des API et services robustes, sécurisés et prêts pour la production.",
  },
  {
    image: "fastapi.png",
    title: "Fast API",
    link: {
      label: "fastapi.tiangolo.com",
      url: "https://fastapi.tiangolo.com",
    },
    content:
      "Framework JavaScript progressif, simple et flexible, idéal pour construire des interfaces modernes. Grâce à son approche réactive et sa courbe d'apprentissage douce, Vue.js permet de développer rapidement des applications élégantes et performantes.",
  },
];

const techContainer = document.querySelector(".tech-container");
const resetTechContainer = () => { techContainer.innerHTML = "" };

const noMatch = (filteredTechnologies) => {
  const errorMsg = document.querySelectorAll("p.errorMsg");
  if(errorMsg.length !== 0) errorMsg.forEach(el => el.remove());
  if(filteredTechnologies.length !== 0 ) return;
  const p = document.createElement("p");
  p.className = "errorMsg"
  p.textContent = "Aucun element correspondant"

  techContainer.parentNode.appendChild(p)
}

const initTechnologies = (filteredTechnologies) => {
  resetTechContainer();
  noMatch(filteredTechnologies)
  filteredTechnologies.forEach((el) => {
    const card = document.createElement("div");
    const cardHeader = document.createElement("div");
    const cardContent = document.createElement("div");
    const cardDivider = document.createElement("div");
    const cardFooter = document.createElement("div");
    const techInfo = document.createElement("div");
    const techLogoContainer = document.createElement("div");
    const imgTechLogoContainer = document.createElement("img");

    // ClassName
    card.className = "card";
    cardHeader.className = "card-header";
    cardContent.className = "card-content";
    cardDivider.className = "divider";
    cardFooter.className = "card-footer";
    techInfo.className = "tech-info";
    techLogoContainer.className = "tech-logo-container";
    imgTechLogoContainer.className = "";

    // More Button
    const btnContainer = document.createElement("div");
    const btn = document.createElement("div");
    const iconMore = document.createElement("i");

    //
    techLogoContainer.className = "tech-logo-container";
    imgTechLogoContainer.setAttribute("src", `assets/images/${el.image}`);
    imgTechLogoContainer.setAttribute("alt", `${el.image}`);
    imgTechLogoContainer.setAttribute("srcset", `assets/images/${el.image}`);

    //
    const techInfoText = document.createElement("div");
    const techInfoTitle = document.createElement("div");
    const techLink = document.createElement("a");

    const techTitle = document.createElement("div");
    techTitle.className = "tech-title";
    techTitle.textContent = el.title;

    techInfoText.className = "tech-infos-text";
    techInfoTitle.className = "tech-title";
    techLink.className = "tech-link";
    techLink.setAttribute("target", "_blank");
    techLink.setAttribute("href", el.link.url);
    techLink.innerText = el.link.label;

    btn.className = "btn btn-more";
    iconMore.className = "fas fa-ellipsis";

    // Text Info Text
    techInfoText.appendChild(techTitle);
    techInfoText.appendChild(techLink);

    // Tech Logo Container
    techLogoContainer.appendChild(imgTechLogoContainer);

    // Bouton Container
    btn.appendChild(iconMore);
    btnContainer.appendChild(btn);

    // Tech Info
    techInfo.appendChild(techLogoContainer);
    techInfo.appendChild(techInfoText);
    techInfo.appendChild(btnContainer);

    // Card Header
    cardHeader.appendChild(techInfo);

    // Card
    cardContent.textContent = el.content;
    card.appendChild(cardHeader);
    card.appendChild(cardDivider);
    card.appendChild(cardContent);
    card.appendChild(cardFooter);

    // New Instance of Card in TECH
    techContainer.appendChild(card);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const searchCancel = document.querySelector(
    ".search-input-container :nth-child(3)"
  );
  const search = document.querySelector("#search");

  search.addEventListener("change", () => {
    searchCancel.style.display = search.value.length === 0 ? "none" : "block";
  });

  search.addEventListener("keyup", (e) => {
    search.setAttribute("value", e.target.value);
    console.log(e.target.value, search.value)
    searchCancel.style.display = search.value.length === 0 ? "none" : "block";

    const filters = (e.target.value.toString().length > 0) ? technologies.filter(el => el.title.toLowerCase().includes(e.target.value.toString().toLowerCase())) : technologies;
    initTechnologies(filters);
  });

  searchCancel.addEventListener("click", () => {
    search.value = "";
    searchCancel.style.display = search.value.length === 0 ? "none" : "block";
      initTechnologies(technologies);
  });

  initTechnologies(technologies);
});

window.addEventListener("focus", () => {
  document.title = "SYGESCO | Bon retour parmi nous";
});

window.addEventListener("blur", () => {
  document.title = "SYGESCO | Vous avez quitté la page";
});
