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
        "Developed a Korean dictionary website using SvelteKit that utilizes KRDict API",
        "Designed a simple user-friendly interface with a search bar and an on-screen Korean idboard for inputting Korean words",
        "Enabled the app to function as a dictionary for Korean input and a translator for English input, displaying results in a card format"
      ]
    },
    techStacks: [
      "sveltekit",
      "tailwind"
    ],
    github: "https://github.com/ana117/korean-dictionary",
    website: "https://kordict.ana117.com/"
  },

  {
    id: "pushover",
    title: "Pushover",
    description: {
      summary: "Mobile app to push notification from your phone to your computer",
      points: [
        "Developed a mobile app that allows users to send notifications from their phone to their computer via a REST API",
        "Implemented a simple mobile interface with a customizable server URL",
        "Created a REST API server using Go that handles incoming notifications and sends them to the user's computer as an alert",
      ]
    },
    techStacks: [
      "android",
      "go"
    ],
    github: "https://github.com/ana117/pushover-android"
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
      "nextjs",
      "tailwind"
    ],
    github: "https://github.com/ana117/web-games",
    website: "https://www.ana117.com/web-games/"
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
];
  
export default projects;
  