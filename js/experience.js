const experiences = [
  {
    dateSpan: "Sept. 2024 - Dec. 2024",
    type: "Freelance",
    position: ["Full Stack Developer"],
    company: "CivilTech - Connect",
    description:
      "I worked as a freelance Full-stack Web Developer for CivilTech, responible for designing and developing a high-quality, full-stack web platform for Civil Technologists using Figma for design, and React, Laravel, and MySQL for the development. My responsibilities included close collaboration with stakeholders and a strong emphasis on testing. I implemented manual testing methodologies, ensuring that it meets the project requirements, verifying expected functionality, and prioritizing web accessibility. Furthermore, as a one-man team, I conducted API testing with PostmanAPI and managed the testing process through the creation and execution of test cases and accurate bug tracking using MS Excel, all in a user's POV.",
  },
  {
    dateSpan: "Feb. 2024 - May. 2024",
    type: "Internship",
    position: ["Full Stack Developer"],
    company: "Development Bank of the Philippines - Provident Fund Department",
    description:
      "Originally applied as a Front End Developer intern, being the sole intern, I took the role as a Full Stack Developer, and somehow embraced the Quality Assurance Tester role. I successfully designed and developed a high-quality, full-stack web platform for the Development Bank of the Philippines - Provident Fund Members, automating their operations and demonstrably reducing phone call inquiries. I utilized Figma for design, and JavaScript, PHP, and MySQL for development. Maintaining continuous communication with the stakeholders to ensure that I am developing the features correctly, particularly in the accounting features. I integrated manual testing practices, verifying project requirements and ensuring the functionalities work as expected. The experience of managing the entire testing process, from test case creation to detailed bug tracking using MS Excel, marked the beginning of my passion for Quality Assurance.",
  },
];

const experienceContainer = document.getElementById("experience-container");

experiences.forEach((experience, index) => {
  const positions = experience.position
    .map((position, index) => {
      return `<li class="li-positions">
                  ${position}
                </li>`;
    })
    .join(` <span class="separator">|</span> `);

  let typeClass = "";

  if (experience.type === "Freelance") {
    typeClass = "freelance";
  } else if (experience.type === "Internship") {
    typeClass = "internship";
  } else if (experience.type === "Part-time") {
    typeClass = "part-time";
  } else if (experience.type === "Full-time") {
    typeClass = "full-time";
  }

  const experienceHTML = `
    <div class="experience hidden container">
        <div class="row">
            <div class="col-md-4 col-xl-3">
                <p class="date-span">${experience.dateSpan}</p>
            </div>

            <div class="col">
                <p class="job-type ${typeClass}">${experience.type}</p>
                <p class="company-name">${experience.company}</p>
                <ul class="positions">
                  ${positions}
                </ul>
                <p class="role-desc">
                 ${experience.description}
                </p>
            </div>
        </div>
    </div>
`;

  experienceContainer.innerHTML += experienceHTML;
});
