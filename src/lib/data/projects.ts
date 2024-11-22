import type { Project } from "$lib/types";

const projects: Project[] = [
  {
    id: "cloudcipher",
    title: "CloudCipher",
    description: {
      summary: "End-to-end encrypted cloud storage desktop app",
      points: [
        "Developed an end-to-end encrypted cloud storage desktop application utilizing a <a href='https://doi.org/10.1109/IWBIS.2017.8275110' target='_blank' rel='noopener noreferrer'>proxy re-encryption scheme</a>",
        "Created a desktop app with JavaFX and a server with SpringBoot",
        "Deployed the server on AWS EC2 and stored files on AWS S3"
      ]
    },
    techStacks: [
      "java",
      "javafx",
      "springboot",
      "aws"
    ],
    github: "https://github.com/cloudcipher-ui/"
  },

  {
    id: "kordict",
    title: "Korean Dictionary",
    description: {
      summary: "Korean-English dictionary web app using Korean Dictionary API",
      points: [
        "Developed a Korean dictionary website using ReactJS that utilizes KRDict API",
        "Implemented a Flask proxy server to bypass CORS restrictions",
        "Designed a simple user-friendly interface with a search bar and an on-screen Korean idboard for inputting Korean words",
        "Enabled the app to function as a dictionary for Korean input and a translator for English input, displaying results in a card format"
      ]
    },
    techStacks: [
      "react",
      "python",
      "tailwind"
    ],
    github: "https://github.com/ana117/korean-dictionary",
    website: "https://ana117.github.io/korean-dictionary/"
  },

  {
    id: "go-chat",
    title: "GoChat",
    description: {
      summary: "A simple real-time chat application using Go and WebSockets",
      points: [
        "Developed a real-time chat web app using Golang and WebSockets",
        "Implemented multiple room functionality where users can pick an available room and choose their own username",
        "Designed an interactive chat room interface with real-time messaging"
      ]
    },
    techStacks: [
      "go",
      "tailwind"
    ],
    github: "https://github.com/ana117/go-chat"
  },

  {
    id: "web-games",
    title: "Web Games",
    description: {
      summary: "Collections of Javascript browser-based games",
      points: [
        "Developed a Rock-Paper-Scissors game with interactive user interface",
        "Developed a Memory Tile game to enhance cognitive skills through memorization",
        "Developed a Korean word flashcard game to aid in language learning with randomized word display",
        "Added local highscore for all games to enhance user engagement and track performance by utilizing web storage API"
      ]
    },
    techStacks: [
      "react",
      "tailwind"
    ],
    github: "https://github.com/ana117/web-games",
    website: "https://ana117.github.io/web-games/"
  },
];
  
export default projects;
  