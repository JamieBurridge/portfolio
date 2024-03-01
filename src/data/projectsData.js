import { languages } from "../helpers/languages";

export const projectsData = [
  {
    sectionTitle: "Full-stack projects",
    projects: [
      {
        heading: "Hyperstack",
        description:
          "Hyperstack is a Cloud computing platform. I worked on the front-end of this platform using NextJS and TailwindCSS.",
        link: "https://www.hyperstack.cloud/",
        languages_used: [languages.nextjs, languages.css],
      },
      {
        heading: "4rums",
        description: "4rums is a forum site made with PHP, Bootstrap and MySQL",
        link: "https://github.com/JamieBurridge/4rums",
        languages_used: [
          languages.php,
          languages.html,
          languages.css,
          languages.bootstrap,
          languages.mysql,
        ],
      },
    ],
  },
  {
    sectionTitle: "Front-end mini projects",
    projects: [
      {
        heading: "Factopix",
        description:
          "Factopix is a website that generates a random fact with a random picture.",
        link: "https://jamieburridge.github.io/Factopix/",
        languages_used: [languages.html, languages.css, languages.javascript],
      },
      {
        heading: "Coffee Machine",
        description:
          "An interactive coffee machine made. This was built mainly to practice SASS and CSS animations.",
        link: "https://jamieburridge.github.io/coffee-machine/",
        languages_used: [
          languages.html,
          languages.css,
          languages.sass,
          languages.javascript,
        ],
      },
    ],
  },
  {
    sectionTitle: "CLI Projects",
    projects: [
      {
        heading: "Pycal",
        description: "Pycal is a simple, lightweight list-style calendar.",
        link: "https://github.com/JamieBurridge/pycal",
        languages_used: [languages.python],
      },
      {
        heading: "Tic Tac Toe",
        description:
          "Just a fun tic-tac-toe game made with Python. Play against a bot.",
        link: "https://github.com/JamieBurridge/python-tic-tac-toe",
        languages_used: [languages.python],
      },
      {
        heading: "HTML Comment Finder",
        description:
          "A CLI tool made with Python to find all comments in html files.",
        link: "https://github.com/JamieBurridge/html-comment-finder",
        languages_used: [languages.python],
      },
    ],
  },
];
