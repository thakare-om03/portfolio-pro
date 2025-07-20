import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Om Thakare",
  initials: "OT",
  url: "https://om-thakare.dev",
  location: "Tamil Nadu, India",
  locationLink: "https://maps.app.goo.gl/FebMpkN27qZ9vtBu7",
  description:
    "Final year dev passionate about building, learning, currently navigating the full-stack & ai/ml landscapes.",
  summary:
    "I'm a B.Tech Computer Science Engineering student at SRMIST. I've [interned at Crest Data Systems](/#work), [partcipated in hackathons](/#hackathons), and built [innovative projects](/#projects) like TimeGrid.",
  avatarUrl: "/me.png",
  skills: [
    "C++",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Git",
    "SQL",
    "MongoDB",
    "Python",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "om.thakare3217@gmail.com",
    tel: "+91 9512383217",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/thakare-om03",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/om-thakare-8768bb166/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/thakare_twts",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:om.thakare3217@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      Resume: {
        name: "Click to view resume",
        url: "https://drive.google.com/drive/folders/1nKyT43a5PNX9Bv4Y4rwVGd5isUODaq8h?usp=sharing",
        icon: Icons.googleDrive,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Crest Data Systems",
      href: "https://www.crestdata.ai/",
      badges: ["Intern"],
      location: "Gujarat, India",
      title: "Software Engineer Intern",
      logoUrl: "/crest_data_logo.jpeg",
      start: "June 2025",
      end: "June 2025",
      description:
        "Learned core concepts of FastAPI backend development and Unit Testing practices across the SDLC. Applied Prompt Engineering and utilized GitHub Copilot Agent to automate internal unit testing processes. Achieved 25% to 90% and 99.58% test coverage across two internal projects by automating 1000+ unit test cases within 2 days.",
    },
    {
      company: "Intel Unnati Industrial Training Program",
      badges: ["Trainee"],
      href: "https://www.intel.in/content/www/in/en/corporate/unnati/industrial-training-program.html",
      location: "Remote",
      title: "Trainee",
      logoUrl: "/intel-unnati.png",
      start: "February 2025",
      end: "April 2025",
      description:
        "Developed an AI-powered educational gaming platform that generates adaptive content using Generative AI and Machine Learning. The goal was to make learning more engaging by providing game elements that adapt in real-time based on players performance and interests.",
    },
  ],
  education: [
    {
      school: "S.R.M Institute of Science and Technology",
      href: "https://www.srmist.edu.in/",
      degree: "B.Tech in Computer Science Engineering",
      logoUrl: "/srm.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "TimeGrid",
      href: "https://time-grid.netlify.app/",
      dates: "April 2025 - Present",
      active: true,
      description:
        "TimeGrid is an interactive life-calendar that visualizes every month of a 90-year lifespan as colored dots based on your current age and habits. Inspired by Dino Ambrosi's TED Talk, it aims to raise awareness of how screen time and daily routines shape your future and empowers users to make intentional choices about how they invest their time.",
      technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://time-grid.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/thakare-om03/timegrid",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Malware Detection",
      href: "https://github.com/thakare-om03/malware-detection",
      dates: "January 2025",
      active: true,
      description:
        "Developed as the winning solution for the Crest Data problem statement at the MINED 2025 Hackathon hosted by Nirma University. Engineered an intelligent system to identify and classify malware using advanced machine learning techniques from input CSV.",
      technologies: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "Cybersecurity",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/thakare-om03/malware-detection",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "YouTube Semantic Segmenter",
      href: "https://github.com/thakare-om03/youtube_semantic_segmenter",
      dates: "January 2025",
      active: true,
      description:
        "A Python tool that downloads YouTube videos using yt-dlp, transcribes audio via OpenAI's Whisper model, and segments the transcriptions into semantically meaningful chunks and generates comprehensive metadata for each processed chunk.",
      technologies: [
        "Python",
        "OpenAI Whisper",
        "Machine Learning",
        "Natural Language Processing",
        "yt-dlp",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/thakare-om03/youtube_semantic_segmenter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "WorklyAI",
      href: "https://github.com/achalbajpai/workly-ai",
      dates: "April 2025",
      active: true,
      description:
        "Agentic Ai that finds job postings as per your resume and applies on your behalf. Built during IntelliHack 25' where we secured first runner-up position in the Agentic AI category.",
      technologies: ["React", "Typescript", "Large Language Models"],
      links: [
        {
          type: "Source",
          href: "https://github.com/thakare-om03/worklyai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "MINED 2025",
      dates: "2025",
      location: "Nirma University",
      description:
        "Winner amongst 1600 participants conducted by Nirma University. Also winner of Crest Data Problem Statement.",
      image: "/mined.png",
      win: "Winner",
      links: [],
    },
    {
      title: "IntelliHack 25'",
      dates: "2025",
      location: "MeetStream AI",
      description:
        "Secured first runner-up in the Agentic AI category with WorklyAI project.",
      image: "/intellihack.svg",
      win: "Runner Up",
      links: [],
    },
    {
      title: "NMIMS Datathon 25'",
      dates: "2025",
      location: "NMIMS",
      description:
        "Finalist amongst 500+ participants with youtube-semantic-segmenter project.",
      image: "/datathon.png",
      links: [],
    },
    {
      title: "National Level Technical Expo 24'",
      dates: "2024",
      location: "India",
      description:
        "Secured 2nd runner-up in the AI/ML category with ResearchGuardian project.",
      image: "/srm.png",
      win: "2nd Runner Up",
      links: [],
    },
    {
      title: "SIH Internal Hackathon 24'",
      dates: "2024",
      location: "SRM Institute",
      description: "Finalist with project for the Ministry of Law & Justice.",
      image: "/sih.jpg",
      links: [],
    },
    {
      title: "SIH Internal Hackathon 23'",
      dates: "2023",
      location: "SRM Institute",
      description: "Finalist with project for the Government of Gujarat.",
      image: "/sih.jpg",
      links: [],
    },
    {
      title: "DSBS DataKon Hunt 2023",
      dates: "2023",
      location: "DSBS",
      description:
        "Secured first runner-up in the Ideathon category with eNyaySaathi project.",
      image: "/srm.png",
      win: "Runner Up",
      links: [],
    },
    {
      title: "OODP Hackathon 2023",
      dates: "2023",
      location: "India",
      description:
        "Secured first place in the Coding Round and Top 10 out of 788 teams.",
      image: "/srm.png",
      win: "Top 10 Finalist",
      links: [],
    },
  ],
} as const;
