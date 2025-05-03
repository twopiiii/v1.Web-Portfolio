const projects = [
  {
    img: [
      "img/projects/goodFood/design.png",
      "img/projects/goodFood/assets.png",
      "img/projects/goodFood/wireframe.png",
    ],
    type: "Side Project",
    name: "Good Food - Food E-commerce Website",
    role: ["UI/UX Designer"],
    stack: ["Figma"],
    description:
      "Good Food is a Food E-commerce Website created as a personal project of mine to enhance my skills in UI/UX Design. The design is focused on lively colors to pop-out the food's deliciousness, user-friendly design for easy navigation, and that modern look to match today's era. This is an ongoing project and I plan to develop this using React, Laravel, and MySQL.",
    links: [
      {
        media: "Figma",
        link: "    https://www.figma.com/design/WhvtLf2YUryBgluw9n83cI/Good-Food-Template?node-id=0-1&t=rtMpAF08GcmccZfj-1",
      },
    ],
  },
  {
    img: [
      "img/projects/ctc/login 2.png",
      "img/projects/ctc/lm.png",
      "img/projects/ctc/tc.png",
      "img/projects/ctc/jo.png",
      "img/projects/ctc/jo1.png",
      "img/projects/ctc/oc.png",
    ],
    type: "Freelance Project",
    name: "Civil-Tech Connect",
    role: ["Full-stack Developer", "Quality Assurance Tester"],
    stack: ["Figma", "PostmanAPI", "Bootstrap", "React", "Laravel", "MySQL"],
    description:
      "CivilTech-Connect is specifically built for current and future Civil Technologist, offering tailored educational resources, networking opportunities, available TESDA courses, companies open for interns, and job support to enhance their professional development and success. It also have an admin page that allows to manage data and website content.",
    links: [
      {
        media: "GitHub",
        link: "https://github.com/twopiiii/CivilTech-Connect.git",
      },
    ],
  },

  {
    img: [
      "img/projects/dbp-pf/1 hero.png",
      "img/projects/dbp-pf/5 loans.png",
      "img/projects/dbp-pf/13 calcu.png",
      "img/projects/dbp-pf/14 calcu.png",
      "img/projects/dbp-pf/26 loans.png",
      "img/projects/dbp-pf/27 loans.png",
      "img/projects/dbp-pf/29 loans.png",
      "img/projects/dbp-pf/30 loans.png",
      "img/projects/dbp-pf/31 loans.png",
      "img/projects/dbp-pf/32 loans.png",
      "img/projects/dbp-pf/35 generate soa.png",
      "img/projects/dbp-pf/36 gen soa.png",
      "img/projects/dbp-pf/30 soa.png",
    ],
    type: "Internship Project",
    name: "DBP - Provident Fund Department Website, and Data Management System",
    role: ["Full-stack Developer", "Quality Assurance Tester"],
    stack: ["Figma", "Bootstrap", "SCSS", "JavaScript", "PHP", "MySQL"],
    description:
      "DBP - Provident Fund website is developed for DBP - Provident Fund Members. It allows them to login and view their loan balances, surpluses, contributions, and generate their own Statement of Account (SOA). They can also calculate loans using the Loan Calculator feature. It also have an admin page that allows to manage and store data, includes CMS, operates CRUD, generates Statement of Account (SOA), and generates Surplus Statement.",
    links: [
      {
        media: "GitHub",
        link: "https://github.com/twopiiii/Developmemnt-Bank-of-the-Philippines---Provident-Fund-Department.git",
      },
    ],
  },

  {
    img: [
      "img/projects/pawsitive/hero.png",
      "img/projects/pawsitive/book appointment.png",
      "img/projects/pawsitive/pet record.png",
      "img/projects/pawsitive/med record 1.png",
      "img/projects/pawsitive/med record 2.png",
      "img/projects/pawsitive/admin.png",
      "img/projects/pawsitive/admin 1.png",
      "img/projects/pawsitive/admin 2.png",
      "img/projects/pawsitive/pet record 1.png",
      "img/projects/pawsitive/sched appt.png",
      "img/projects/pawsitive/req appt.png",
      "img/projects/pawsitive/inventory rec.png",
      "img/projects/pawsitive/pos.png",
      "img/projects/pawsitive/pos 1.png",
      "img/projects/pawsitive/web setting.png",
      "img/projects/pawsitive/web setting 1.png",
    ],
    type: "Capstone Project",
    name: "PAWsitive: A Web-Based Pet Care Veterinary Clinic Management System",
    role: ["Front-End Developer", "Quality Assurance Tester"],
    stack: ["Figma", "Bootstrap", "SCSS", "JavaScript"],
    description:
      "PAWsitive is a web-based pet care veterinary system that allow users to order pet shop items, log in to view their pet's health records (including history), book appointments, and receive an SMS notification for appointment status and reminder. An admin page is also developed which allows for data, website content, and inventory management with staff authentication to control feature access. I designed and developed the front-end, ensuring responsiveness, scalability, and user-friendliness.",
    links: [
      {
        media: "GitHub",
        link: "https://github.com/twopiiii/PAWsitive-a-Web-Based-Pet-Care-Veterinary-System.git",
      },
    ],
  },
];

const projectContainer = document.getElementById("projects-container");
let projectHTML = "";
let projectsToDisplay = []; // store project for diplay

// if in index, display 3 projects only, else, display all
if (
  window.location.pathname.endsWith("/") ||
  window.location.pathname.endsWith("index.html")
) {
  projectsToDisplay = projects.slice(0, 3);
} else if (window.location.pathname.endsWith("projectLibrary.html")) {
  projectsToDisplay = projects;
}

// slice(0,3) = displays project from index 0 to before index 3 only
projectsToDisplay.forEach((project, index) => {
  const images = project.img
    .map((path, imgIndex) => {
      return `<img src="${path}" alt="${project.name} - img ${
        imgIndex + 1
      }" class="project-img ${
        imgIndex === 0 ? "active" : ""
      }" data-index=${imgIndex} />`;
    })
    .join("");

  const roles = project.role
    .map((role, roleIndex) => {
      let liClass = "";

      if (role === "Full-stack Developer") {
        liClass = "fullstack-dev";
      } else if (role === "Front-End Developer") {
        liClass = "frontend-dev";
      } else if (role === "Quality Assurance Tester") {
        liClass = "quality-assurance";
      } else if (role === "UI/UX Designer") {
        liClass = "designer";
      }

      return `<li class="${liClass}">${role}</li>`;
    })
    .join("");

  const stacks = project.stack
    .map((stack, stackIndex) => {
      let imgSrc = "";
      const stackClass = stack.toLowerCase();

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
        case "PostmanAPI":
          imgSrc = "img/stack/postman.png";
          break;
        case "Playwright":
          imgSrc = "img/stack/playwright.png";
          break;
        case "Selenium":
          imgSrc = "img/stack/selenium.png";
          break;
        case "Figma":
          imgSrc = "img/stack/figma.png";
          break;
        case "Canva":
          imgSrc = "img/stack/canva.png";
          break;
        case "MsOffice":
          imgSrc = "img/stack/msoffice.png";
          break;
        default:
          "";
      }

      return `<img src="${imgSrc}" alt="${stack}" class="lang ${stackClass}" />`;
    })
    .join("");

  let linksHTML = "";
  if (project.links && project.links.length > 0) {
    project.links.forEach((projectLink) => {
      let iconClass = "";
      let buttonText = "";
      let buttonClass = "";

      switch (projectLink.media.toLowerCase()) {
        case "github":
          iconClass = "fab fa-github";
          buttonText = "GitHub Repository";
          buttonClass = "github-link";
          break;
        case "figma":
          iconClass = "fab fa-figma";
          buttonText = "Figma Link";
          buttonClass = "figma-link";
          break;
        case "visit":
          iconClass = "fas fa-link";
          buttonText = "Visit";
          buttonClass = "visit-link";
          break;
        default:
          "";
      }

      linksHTML += `
        <a href="${projectLink.link}" class="${buttonClass} project-btn-link" target="_blank">
          <i class="${iconClass}"></i> 
          ${buttonText}
        </a>`;
    });
  }

  const showProject = `
    <div class="hidden container project box-shadow-mod" id="project">
        <div class="img-container" id="img-container-${index}">
            ${images}

            <div class="img-btns row justify-content-between">
                <button class="prev" data-project-index = ${index}><i class="fas fa-caret-left"></i></button>
                <button class="next" data-project-index = ${index}><i class="fas fa-caret-right"></i></button>
            </div>
        </div>

        <p class="project-type">${project.type}</p>
        <p class="project-name">${project.name}</p>
        <ul class="project-role">
            ${roles}
        </ul>
        <p class="project-description">
            ${project.description}
        </p>

        <div class="languages-used">
          ${stacks}
        </div>

        <div class="project-btns">
            ${linksHTML}
        </div>
    </div>`;

  projectHTML += showProject;
});

let viewButton = "";
if (projects.length > 3) {
  viewButton = `
      <div class="view-all-btn-container hidden">
        <a href="projectLibrary.html" target="_blank" class="view-all-projects main-btn">
          View Project Library
        </a>
      </div>`;
}

// projectContainer.innerHTML += projectHTML + viewButton;

// if in index, display project library button, else, display none
if (
  window.location.pathname.endsWith("/") ||
  window.location.pathname.endsWith("index.html")
) {
  projectContainer.innerHTML += projectHTML + viewButton;
} else if (window.location.pathname.endsWith("projectLibrary.html")) {
  projectContainer.innerHTML = projectHTML;
}

// prev and next btn for project img
projectContainer.addEventListener("click", function (e) {
  // e.preventDefault();

  const button = e.target.closest(".prev") || e.target.closest(".next");

  if (button) {
    const projectIndex = parseInt(button.dataset.projectIndex);
    const imgContainer = document.getElementById(
      `img-container-${projectIndex}`
    );

    const images = imgContainer.querySelectorAll(".project-img");

    let currentIndex = -1;

    images.forEach((img, imgCurrentIndex) => {
      if (img.classList.contains("active")) {
        currentIndex = imgCurrentIndex;
        img.classList.remove("active");
      }
    });

    let nextIndex;
    if (button.classList.contains("next")) {
      nextIndex = (currentIndex + 1) % images.length;
    } else {
      nextIndex = (currentIndex - 1 + images.length) % images.length;
    }

    images[nextIndex].classList.add("active");
  }
});
