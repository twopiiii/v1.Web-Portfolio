const techStack = [
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "Tailwind",
  "JavaScript",
  "React",
  "PHP",
  "Laravel",
  "MySQL",
  "Playwright",
];

const tools = ["Figma", "PostmanAPI", "Selenium", "MsOffice", "Canva"];

const techStacks = techStack
  .map((stack, stackIndex) => {
    const stackClass = stack.toLowerCase();
    let imgSrc = "";

    switch (stack) {
      case "HTML":
        imgSrc = "img/stack/html.png";
        break;
      case "CSS":
        imgSrc = "img/stack/css.png";
        break;
      case "SCSS":
        imgSrc = "img/stack/scss.png";
        break;
      case "Bootstrap":
        imgSrc = "img/stack/bootstrap.png";
        break;
      case "Tailwind":
        imgSrc = "img/stack/tailwind.png";
        break;
      case "JavaScript":
        imgSrc = "img/stack/javascript.png";
        break;
      case "React":
        imgSrc = "img/stack/react.png";
        break;
      case "PHP":
        imgSrc = "img/stack/php.png";
        break;
      case "Laravel":
        imgSrc = "img/stack/laravel.png";
        break;
      case "MySQL":
        imgSrc = "img/stack/mysql.png";
        break;
      case "Playwright":
        imgSrc = "img/stack/playwright.png";
        break;
      default:
        "";
    }

    return `
        <div class="stack-cont col-4 col-md-3 col-lg-2">
            <img src="${imgSrc}" alt="${stack}" class="stack-img stack-${stackClass}" />
            <p class="stack-name">${stack}</p>
        </div>
        `;
  })
  .join("");

const toolStacks = tools
  .map((tool, toolIndex) => {
    const toolClass = tool.toLowerCase();
    let imgSrc = "";

    switch (tool) {
      case "Figma":
        imgSrc = "img/stack/figma.png";
        break;
      case "PostmanAPI":
        imgSrc = "img/stack/postman.png";
        break;
      case "Selenium":
        imgSrc = "img/stack/selenium.png";
        break;
      case "MsOffice":
        imgSrc = "img/stack/msOffice.png";
        break;
      case "Canva":
        imgSrc = "img/stack/canva.png";
        break;
      default:
        "";
    }

    return `
        <div class="stack-cont col-4 col-md-3 col-lg-2">
            <img src="${imgSrc}" alt="${tool}" class="stack-img stack-${toolClass}" />
            <p class="stack-name">${tool}</p>
        </div>
        `;
  })
  .join("");

const stackProject = `
    <div class="stack hidden">
        <p class="tech-stack-title">Development & Testing</p>

        <div class="stack-container">
            ${techStacks}
        </div>
    </div>

    <div class="stack hidden">
        <p class="tech-stack-title">Tools</p>

        <div class="stack-container">
            ${toolStacks}
        </div>
    </div>
`;

const stackContainer = document.getElementById("stack-container");
stackContainer.innerHTML = stackProject;
