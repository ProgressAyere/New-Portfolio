"use client";

import { motion } from "framer-motion";
import ProjectGrid from "./ProjectGrid";
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiMongodb, 
  SiMysql,
  SiFramer,
  SiNodedotjs,
  SiNextdotjs,
  SiSolidity,
  SiEthereum,
  SiIpfs
} from "react-icons/si";

export default function ProjectsShowcase() {
  // Sample projects data
  const projects = [
    {
      title: "BlockChain on Campus Platform",
      outcome: "Unified digital experience serving students across campuses",
      thumbnailSrc: "/bcc-home.png",
      videoSrc: "/bcc-landscape video-mockup.mp4",
      problem:
        "BlockChain on Campus at Yaba College of Technology, Epe had been quietly making impact in the Web3 space, hosting events, educating students, and building a community from the ground up. But none of it was visible online. No digital home, no proof of existence, no record of the work being done. For a campus already low on visibility, BCC was at risk of doing meaningful work that the world would never see,and that future students would never find.",
      solution:
        "Built a dedicated web platform that gives BCC a permanent home on the internet. A clean, fast, and fully responsive website that documents the community's journey, showcases its events and impact, and makes BCC discoverable to students, partners, and the wider Web3 ecosystem, now and forever.",
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "SQL", icon: <SiMysql />, color: "#4479A1" },
      ],
      results: [
        "BCC now has a permanent, professional digital presence",
        "Campus blockchain community visible to the wider Web3 ecosystem",
        "Events, milestones, and community impact documented online",
        "A lasting proof of work that outlives the founding team",
      ],
      liveSiteUrl: "https://bcc-yct.vercel.app",
    },
    {
      title: "Ghonsi Proof",
      outcome: "Web3 portfolio verification platform with on-chain attestations",
      thumbnailSrc: "/ghonsi-home-mockup.png",
      videoSrc: "/ghonsi-landscape video.mp4",
      problem:
        "Developers struggle to prove their work across scattered platforms (GitHub, Discord, Twitter), making it hard for recruiters and clients to verify authentic contributions and skills.",
      solution:
        "Created a Web3 platform that aggregates developer work, verifies contributions through blockchain attestations, and generates verifiable on-chain portfolios with achievement NFTs.",
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      ],
      results: [
        "1,200+ verified developer portfolios",
        "Integration with 5+ major Web3 protocols",
        "Zero-knowledge proof verification system",
        "Featured in ETHGlobal showcase",
      ],
      liveSiteUrl: "https://ghonsiproof.com",
    },
    {
      title: "Interactive Dashboard System",
      outcome: "Phone repair platform that links customers, engineers, and dispatch riders in one seamless flow",
      thumbnailSrc: "/phone-fix.png",
      videoSrc: "/phone-fix.mp4",
      problem:
        "Getting a phone repaired in Nigeria is unnecessarily stressful. Customers have to locate a trusted engineer, travel to a physical shop, wait for hours, and still have no guarantee of quality or safety. On the other side, skilled phone engineers sit in fixed locations with limited customer reach, and dispatch riders have no structured way to connect their services to repair workflows. Three groups that needed each other had no single place to find each other.",
      solution:
        "Built a platform that connects customers, phone engineers, and dispatch riders in one seamless flow. A customer logs a repair request from home, gets matched with a verified phone engineer nearby, and a dispatch rider handles the pickup and return of the device. No travel, no uncertainty, no wasted time. The entire repair experience, from request to return, happens without the customer leaving their house.",
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "SQL", icon: <SiMysql />, color: "#4479A1" },
      ],
      results: [
        "Customers can book phone repairs entirely from home",
        "Phone engineers gain access to a wider, structured customer base",
        "Dispatch riders are integrated directly into the repair workflow",
        "Removes the friction of finding trusted repair services in Nigeria",
        "Three separate user roles managed within one unified platform",
      ],
      liveSiteUrl: "https://ever-fix.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Label tag */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-teal-400/10 border border-emerald-400/20 rounded-full text-emerald-400"
          >
            // Selected Work
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Projects That Ship
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Real products, real users, real impact — from Web3 protocols to enterprise platforms
          </p>
        </motion.div>

        {/* Projects Grid */}
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
