const projectsLists = [
  {
    name: "Valentine Parallex",
    desc: "This is parralex effect made using html, css and js. position absolute and js onscroll were used.",
    url: "/valentineParallex",
    img: "https://i.imgur.com/q2lDmpV.png",
  },
  {
    name: "Accordian",
    desc: "This is accordian made using css grid. This accordian is responsive and can be used in any website.",
    url: "/accordian",
    img: "https://i.imgur.com/KFzhICV.png",
  },
  {
    name: "Animated Profile",
    desc: "This is an animated profile card made using css flex. This profile card is animated and has a hover effect and border animation.",
    url: "/animatedProfile",
    img: "https://i.imgur.com/KXH24Gu.png",
  },
  {
    name: "Cursor Star Trial",
    desc: "This is cursor star trial meaning that a trial of star will follow your cursor in the screen. This is made using html, css and js.",
    url: "/cursorStarTrial",
    img: "https://i.imgur.com/mGUCzbm.png",
  },
  {
    name: "Dot Spinner / Loader",
    desc: "This is a dot spinner or loader made using html and css. This is a simple loader which speed can also be changed.",
    url: "/dotSpinner",
    img: "https://i.imgur.com/HGxLrIu.png",
  },
  {
    name: "Lists Collection",
    desc: "This is example of grid layout in the list form, list are of four types text, avatar, bin variants.",
    url: "/listsCollection",
    img: "https://i.imgur.com/SKJGUhk.png",
  },
];

const rndClr = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 29%)`;
};

const singleCard = (project) => {
  return `
  <div class="card" style="--clr: ${rndClr()}">
    <div class="imgBx">
      <img src="${project.img}" referrerpolicy="no-referrer" />
    </div>
    <div class="content">
      <h2>${project.name}</h2>
      <p>
        ${project.desc}
      </p>
      <a href="${project.url}">View Project</a>
    </div>
  </div>
  `;
};

const productsCardsContainer = document.querySelector(
  ".productsCardsContainer"
);

productsCardsContainer.innerHTML = "";

projectsLists.forEach((project) => {
  productsCardsContainer.innerHTML += singleCard(project);
});
