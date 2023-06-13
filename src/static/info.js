import bobRoss from "../images/bob-ross.jpeg";
import tuneIn from "../images/tune-in.png";
import circleLogo from "../images/circle-logo.png";
import dotsAndBoxes from "../images/dots-and-boxes.png";
import youtube from "../images/youtube.jpeg";
import github from "../images/github.png";

export const projects = [
  {
    image: bobRoss,
    badges: ["React", "Node.js", "Docker"],
    title: "Bob Ross Together",
    description:
      "Interactive coloring book application created with MongoDB, Express, React, Node.js and Docker containerization. Facilitates simultaneous coloring on SVG canvases by multiple users, leveraging a distributed architecture to ensure fault tolerance, synchronization and consistency.",
    link: "https://github.com/ychama/CPSC-559-Project",
    linkText: "View Project",
  },
  {
    image: circleLogo,
    badges: ["Python", "React", "Django"],
    title: "AVP - Circle CVI",
    description:
      "Aggregation and visualization platform allowing health care practitioners to view and analyze cardiovascular data. Developed with Python, React, Django and TypeScript, facilitating batch processing and real-time data visualization of 20+ cardiovascular metrics.",
    link: "https://www.circlecvi.com/",
    linkText: "View Project Sponsor",
  },
  {
    image: tuneIn,
    badges: ["React", "Node.js", "MongoDB"],
    title: "TuneIn",
    description:
      "Music sharing application created with Matine, React.js, Node.js, and MongoDB. Share your song of the day, anywhere at anytime. Uses the Spotify API to search and hear previews of all your favourite songs before posting.",
    link: "https://github.com/cobereinbold/TuneIn",
    linkText: "View Project",
  },
  {
    image: dotsAndBoxes,
    badges: ["React", "Node.js", "Express"],
    title: "Dots and Boxes",
    description:
      "Dots and Boxes game created using React.js, Node.js and Express. Three player game where players take turns drawing lines on a board to complete squares. The player who completes the most squares wins the game.",
    link: "https://github.com/thomaskahessay/dots-and-boxes",
    linkText: "View Project",
  },
  {
    image: youtube,
    badges: ["Python", "PySpark", "Pandas"],
    title: "YouTube Sentiment Analysis",
    description:
      "Sentiment analysis of Youtube comments using PySpark and the VADER library to determine the sentiment of a comment and attempt to predict the number of dislikes a video will receive with linear regression.",
    link: "https://colab.research.google.com/drive/18uowYAIVZw5JXtTEjJduiJ7N08_k0z6i?usp=sharing",
    linkText: "View Project",
  },
  {
    image: github,
    badges: [],
    title: "More Projects on GitHub",
    description: "View all of my past projects on Github!",
    link: "https://github.com/thomaskahessay",
    linkText: "View More Projects",
  },
];
