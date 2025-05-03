const links = [
  {
    media: "LinkedIn",
    link: "https://www.linkedin.com/in/jomar-kristoffer-besayte-587256312/",
  },
  {
    media: "GitHub",
    link: "https://github.com/twopiiii",
  },
];

const hero = document.getElementById("hero-profile-links");
const contact = document.getElementById("contact-profile-links");

const linkHTML = links
  .map((link, linkIndex) => {
    let icon = "";
    let media = link.media;
    let iconClass = media.toLowerCase();

    if (media === "LinkedIn") {
      icon = "fab fa-linkedin";
    } else if (media === "GitHub") {
      icon = "fab fa-github";
    }

    return `
    <a href="${link.link}"
        target="_blank">
            <i class="${icon} ${iconClass}"></i>
    </a>`;
  })
  .join("");

if (
  window.location.pathname.endsWith("/") ||
  window.location.pathname.endsWith("index.html")
) {
  hero.innerHTML = linkHTML;
  contact.innerHTML = linkHTML;
} else {
  contact.innerHTML = linkHTML;
}
