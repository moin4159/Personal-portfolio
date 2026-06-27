import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://niladri1.vercel.app";

const PAGE_META = {
  "/": {
    title: "Moin Sayyad - Full Stack Developer | MERN Stack Expert",
    description:
      "Moin Sayyad — Full Stack Developer specializing in MERN stack, React.js, Node.js, Next.js and TypeScript. Based in Kolkata, India.",
  },
  "/about": {
    title: "About - Moin Sayyad | Full Stack Developer",
    description:
      "Learn about Moin Sayyad — B.E Computer Science graduate, Full Stack Developer with 3+ internships and 10+ projects.",
  },
  "/projects": {
    title: "Projects - Moin Sayyad | Full Stack Developer Portfolio",
    description:
      "Explore full-stack web projects built by Moin Sayyad using React.js, Node.js, MongoDB, Next.js and TypeScript.",
  },
  "/skills": {
    title: "Skills - Moin Sayyad | React, Node.js, MERN Stack",
    description:
      "Technical skills of Moin Sayyad — React.js, Node.js, Express, MongoDB, Next.js, TypeScript, AWS, Docker and more.",
  },
  "/experience": {
    title: "Experience - Moin Sayyad | Full Stack Developer",
    description:
      "Professional experience of Moin Sayyad including internships in full stack web development.",
  },
  "/education": {
    title: "Education - Moin Sayyad | B.E Computer Science",
    description:
      "Educational background of Moin Sayyad — B.E in Computer Science with 8.48 CGPA.",
  },
  "/certificates": {
    title: "Certificates - Moin Sayyad | Developer Certifications",
    description:
      "Professional certifications and achievements of Moin Sayyad in web development and cloud technologies.",
  },
  "/contact": {
    title: "Contact - Moin Sayyad | Hire a Full Stack Developer",
    description:
      "Get in touch with Moin Sayyad for freelance projects, job opportunities or collaborations.",
  },
};

const FALLBACK_META = {
  title: "Moin Sayyad - Full Stack Developer",
  description:
    "Portfolio of Moin Sayyad  — Full Stack Developer specializing in MERN stack.",
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${BASE_URL}${location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname]);
};
