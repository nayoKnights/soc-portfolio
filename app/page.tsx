"use client";

import { useState, useRef, useEffect} from "react";
function AboutCarousel() {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const touchStartX = useRef(0);

  const paragraphs = [
    "I'm Nathaniel Okyere Asomani, a cybersecurity professional focused on threat detection, incident response, and security engineering. I thrive in high-pressure environments where fast, accurate decisions protect critical systems.",
    "I'm passionate about understanding how attackers think — and using that knowledge to build stronger defenses. I'm actively pursuing roles where I can contribute to a security team and keep growing my skills.",
  ];

  const goTo = (index: number) => {
    if (sliding) return;
    setSliding(true);
    setTimeout(() => {
      setCurrent(index);
      setSliding(false);
    }, 400);
  };

  const next = () => goTo(current === paragraphs.length - 1 ? 0 : current + 1);
  const prev = () => goTo(current === 0 ? paragraphs.length - 1 : current - 1);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
  };

  return (
    <div>
      <div
        className="overflow-hidden min-h-[120px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <p
          className="text-gray-400 leading-relaxed text-sm"
          style={{
            transition: "opacity 0.4s ease, transform 0.4s ease",
            opacity: sliding ? 0 : 1,
            transform: sliding ? "translateX(30px)" : "translateX(0px)",
          }}
        >
          {paragraphs[current]}
        </p>
      </div>
      <div className="flex gap-2 mt-4">
        {paragraphs.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition ${i === current ? "bg-green-400" : "bg-gray-600"}`}
          />
        ))}
      </div>
    </div>
  );
}
function CertCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const certs = [
    {
      issuer: "EC-COUNCIL",
      title: "Certified SOC Analyst",
      desc: "CSA — Validates skills in security monitoring, SIEM management, log analysis, and incident detection and response.",
      date: "Issued November 2025",
      link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=Fr3hvt27MUbP5mXEvQ8CmyRo5tRyNHvjk/KEyKEGNGw=",
    },
    {
      issuer: "COMPTIA",
      title: "Security+",
      desc: "SY0-701 — Industry-standard certification covering threats, vulnerabilities, architecture, and security operations.",
      date: "Issued July 2024",
      link: "https://www.credly.com/badges/54ef9b62-1a9c-421e-8562-1f5f83df7444/public_url",
    },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? certs.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === certs.length - 1 ? 0 : c + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
  };

  const cert = certs[current];

  return (
    <div>
      <div
        className="border border-gray-700 rounded-2xl overflow-hidden bg-[#0d1117]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="bg-[#161b22] px-4 py-3 border-b border-gray-700">
          <p className="text-green-400 text-xs tracking-widest">{cert.issuer}</p>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
          <p className="text-gray-400 text-sm mb-1">{cert.desc}</p>
          <p className="text-gray-600 text-xs mb-4">{cert.date}</p>
          <a href={cert.link} target="_blank" className="text-xs border border-green-400 text-green-400 px-2 py-1 hover:bg-green-400 hover:text-black transition rounded-lg">Verify Certificate</a>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {certs.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition ${i === current ? "bg-green-400" : "bg-gray-600"}`}
          />
        ))}
      </div>
    </div>
  );
}

interface Project {
  filename: string;
  title: string;
  lines: string[];
  tags: string[];
  link: string;
}

interface Project {
  filename: string;
  title: string;
  lines: string[];
  tags: string[];
  link: string;
}

interface Project {
  filename: string;
  title: string;
  lines: string[];
  tags: string[];
  link: string;
}

function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      filename: "wazuh-siem-deployment.sh",
      title: "Wazuh SIEM Deployment & Agent Configuration",
      lines: [
        "> Deployed full SIEM stack on Ubuntu (manager, indexer, dashboard)",
        "> Integrated Windows & Linux endpoints for real-time alerting",
        "> Validated threat detection using simulated attack scenarios",
      ],
      tags: ["Wazuh", "Ubuntu", "SIEM", "Log Analysis", "Threat Detection"],
      link: "https://github.com/nayoKnights/Wazuh-SIEM-Deployment-and-Agent-Integration",
    },
    {
      filename: "case-management-integration.sh",
      title: "Case Management & Threat Intelligence Engine Integration",
      lines: [
        "> Deployed TheHive as a centralized SOC case management platform",
        "> Integrated Cortex via API for automated threat enrichment",
        "> Built SOC workflows from alert triage to incident documentation",
      ],
      tags: ["TheHive", "Cortex", "Threat Intelligence", "Case Management", "IOC Analysis"],
      link: "https://github.com/nayoKnights/Case-Management-and-Threat-Analysis-Engine-Integration",
    },
    {
      filename: "active-directory-lab.sh",
      title: "Active Directory Enterprise Security Lab",
      lines: [
        "> Built a fully functional AD environment with Windows Server DC",
        "> Enforced RBAC through OUs, security groups, and GPOs",
        "> Connected domain-joined endpoints and managed authentication",
      ],
      tags: ["Active Directory", "Windows Server", "GPO", "IAM", "RBAC"],
      link: "https://github.com/nayoKnights/active-directory-domain-service",
    },
  ];

  const goTo = (index: number) => {
    setDragX(0);
    setCurrent(index);
  };

  const onDragStart = (clientX: number) => {
    startX.current = clientX;
    setIsDragging(true);
  };

  const onDragMove = (clientX: number) => {
    if (!isDragging) return;
    setDragX(clientX - startX.current);
  };

  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX < -80) goTo(current === projects.length - 1 ? 0 : current + 1);
    else if (dragX > 80) goTo(current === 0 ? projects.length - 1 : current - 1);
    else setDragX(0);
  };

  const p = projects[current];

  return (
    <div>
      <div
        ref={containerRef}
        className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none"
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseMove={(e) => onDragMove(e.clientX)}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
        onTouchEnd={onDragEnd}
      >
        <div
          className="border border-gray-700 rounded-2xl overflow-hidden"
          style={{
            transform: `translateX(${dragX}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease",
          }}
        >
          <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="text-gray-500 text-xs ml-2">{p.filename}</span>
          </div>

          <div className="p-6 bg-[#0d1117]">
            <p className="text-green-400 text-xs mb-1">$ cat project_overview.txt</p>
            <h3 className="text-white font-bold text-lg mb-4">{p.title}</h3>

            <div className="mb-4 space-y-2">
              {p.lines.map((line) => (
                <p key={line} className="text-gray-400 text-sm">{line}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs border border-green-400 text-green-400 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* FIXED LINK */}
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="text-green-400 text-sm hover:underline"
              onClick={(e) => { 
                if (Math.abs(dragX) > 5) e.preventDefault(); 
              }}
            >
              $ open docs → {p.link.replace("https://", "")}
            </a>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition ${i === current ? "bg-green-400" : "bg-gray-600"}`}
          />
        ))}
      </div>
    </div>
  );
}
function SkillDropdown({ category, items }: { category: string; items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 border border-gray-700 text-white font-bold text-sm hover:bg-gray-800 transition text-left"
      >
        {category}
        <span className="text-green-400 text-lg ml-2">{open ? "✕" : "+"}</span>
      </button>

      {open && (
        <>
          {/* invisible overlay to close on outside click */}
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <ul className="absolute z-20 top-full left-0 w-full bg-[#161b22] border border-gray-600 px-4 py-3 space-y-2 shadow-xl">
            {items.map((item) => (
              <li key={item} className="text-gray-400 text-xs flex items-center gap-2">
                <span className="text-green-400">▸</span> {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0d1117] text-white font-mono">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#0d1117] border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-green-400 font-bold text-lg hover:opacity-80 transition">THE SHERLOCK</a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-green-400 transition">About</a>
            <a href="#skills" className="hover:text-green-400 transition">Skills</a>
            <a href="#projects" className="hover:text-green-400 transition">Projects</a>
            <a href="#certifications" className="hover:text-green-400 transition">Certifications</a>
            <a href="/blog" className="hover:text-green-400 transition">SOC Blog</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-400 hover:text-green-400 focus:outline-none text-2xl leading-none"
            onClick={() => setMenuOpen(!menuOpen)}
>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-3 flex flex-col gap-4 px-6 pb-4 text-sm text-gray-400 border-t border-gray-800 pt-4">
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-green-400 transition">About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-green-400 transition">Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-green-400 transition">Projects</a>
            <a href="#certifications" onClick={() => setMenuOpen(false)} className="hover:text-green-400 transition">Certifications</a>
            <a href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-green-400 transition">SOC Blog</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-green-400 transition">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="flex flex-col justify-center px-8 py-20 max-w-4xl mx-auto">
        <p className="text-green-400 text-sm mb-3 tracking-widest">// Welcome to my world!</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Nathaniel Okyere Asomani<br />
          <span className="text-green-400">SOC Analyst</span> &{" "}
          <span className="text-green-400">Security Engineer</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-xl mb-8">
          I monitor, detect, investigate, and mitigate threats to help organizations build a cyber secured fortress.
          Currently open to Cybersecurity/SOC Analyst and Security Engineering roles.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#projects" className="bg-green-400 text-black px-6 py-3 font-bold hover:bg-green-300 transition">
            View My Work
          </a>
          <a href="#contact" className="border border-green-400 text-green-400 px-6 py-3 font-bold hover:bg-green-400 hover:text-black transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
<section id="about" className="px-8 py-16 max-w-4xl mx-auto border-t border-gray-800">
  <p className="text-green-400 text-sm tracking-widest mb-2">// 01. About Me</p>
  <h2 className="text-3xl font-bold mb-6">Who I Am</h2>

  {/* Desktop — side by side */}
  <div className="hidden md:grid grid-cols-2 gap-8 text-gray-400 leading-relaxed">
    <p>
      I'm Nathaniel Okyere Asomani, a cybersecurity professional focused on threat detection,
      incident response, and security engineering. I thrive in high-pressure environments
      where fast, accurate decisions protect critical systems.
    </p>
    <p>
      I'm passionate about understanding how attackers think — and using that knowledge
      to build stronger defenses. I'm actively pursuing roles where I can contribute to
      a security team and keep growing my skills.
    </p>
  </div>

  {/* Mobile — horizontal scroll */}
  <div className="md:hidden">
    <AboutCarousel />
  </div>
</section>

      {/* SKILLS */}
<section id="skills" className="px-8 py-16 border-t border-gray-800">
  <div className="max-w-4xl mx-auto">
    <p className="text-green-400 text-sm tracking-widest mb-2">// 02. Skills</p>
    <h2 className="text-3xl font-bold mb-8">What I Work With</h2>

    {/* Top 4 — 2x2 floating dropdowns */}
    <div className="grid grid-cols-2 gap-3 mb-8">
      {[
        {
          category: "SIEM & Monitoring",
          items: ["Splunk", "Wazuh", "Palo Alto Cortex XDR"],
        },
        {
          category: "Case & Endpoint Management",
          items: ["ServiceNow", "SolarWinds Service Desk", "TheHive", "ManageEngine Endpoint Central", "Active Directory"],
        },
        {
          category: "Analysis & Investigation",
          items: ["Phishing Analysis", "Malware Analysis", "Network Traffic Analysis"],
        },
        {
          category: "Scripting & Automation",
          items: ["Python", "Bash Scripting", "Virtualization (VMware / VirtualBox)"],
        },
      ].map(({ category, items }) => (
        <SkillDropdown key={category} category={category} items={items} />
      ))}
    </div>

    {/* Concepts & Frameworks — also floating dropdowns */}
    <p className="text-green-400 text-sm font-bold tracking-widest mb-3">Concepts & Frameworks</p>
    <div className="grid grid-cols-2 gap-3">
      {[
        {
          category: "SOC & Incident Response",
          items: ["Incident Response Lifecycle", "SOC Triage & Escalation", "MITRE ATT&CK", "Threat Detection & Hunting", "Log Analysis & Correlation", "SIEM Rule Tuning", "SIEM & SOAR", "IOC & IOA Analysis", "Playbook & Runbook Development"],
        },
        {
          category: "Defensive Architecture",
          items: ["Zero Trust Architecture", "Defense in Depth", "Least Privilege", "Network Segmentation", "Firewalls, IDS/IPS", "Endpoint Detection & Response (EDR)", "Identity & Access Management (IAM)", "VAPT"],
        },
        {
          category: "Networking Fundamentals",
          items: ["TCP/IP & OSI Model", "Cryptography"],
        },
        {
          category: "Forensics & Malware",
          items: ["Digital Forensics & IR (DFIR)", "Malware Analysis & Reverse Engineering", "Phishing & Social Engineering", "Chain of Custody", "Threat Intelligence (CTI)"],
        },
        {
          category: "Concepts & Frameworks",
          items: ["CIA Triad", "MITRE ATT&CK", "Kill Chain (Lockheed Martin)", "Diamond Model of Intrusion", "Risk Assessment & Management", "Penetration Testing Concepts", "CVE & CVSS"],
        },
        {
          category: "Offensive Awareness",
          items: ["Lateral Movement & Persistence", "Privilege Escalation", "Command & Control (C2)", "Zero-Day Exploits"],
        },
        {
          category: "Compliance & Governance",
          items: ["ISO/IEC 27001", "CIS Controls", "NIST Cybersecurity Framework"],
        },
      ].map(({ category, items }) => (
        <SkillDropdown key={category} category={category} items={items} />
      ))}
    </div>

  </div>
</section>

      {/* PROJECTS */}
<section id="projects" className="px-8 py-16 border-t border-gray-800">
  <div className="max-w-4xl mx-auto">
    <p className="text-green-400 text-sm tracking-widest mb-2">// 03. Projects</p>
    <h2 className="text-3xl font-bold mb-8">What I've Built</h2>

    <ProjectCarousel />
  </div>
</section>

      {/* CERTIFICATIONS */}
<section id="certifications" className="px-8 py-16 border-t border-gray-800">
  <div className="max-w-4xl mx-auto">
    <p className="text-green-400 text-sm tracking-widest mb-2">// 04. Certifications</p>
    <h2 className="text-3xl font-bold mb-8">Credentials</h2>

    {/* Desktop — side by side */}
    <div className="hidden md:grid grid-cols-2 gap-6">
      {[
        {
          issuer: "EC-COUNCIL",
          title: "Certified SOC Analyst",
          desc: "CSA — Validates skills in security monitoring, SIEM management, log analysis, and incident detection and response.",
          date: "Issued November 2025",
          link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=Fr3hvt27MUbP5mXEvQ8CmyRo5tRyNHvjk/KEyKEGNGw=",
        },
        {
          issuer: "COMPTIA",
          title: "Security+",
          desc: "Industry-standard certification covering threats, vulnerabilities, architecture, and security operations.",
          date: "Issued July 2024",
          link: "https://www.credly.com/badges/54ef9b62-1a9c-421e-8562-1f5f83df7444/public_url",
        },
      ].map(({ issuer, title, desc, date, link }) => (
        <div key={title} className="border border-gray-700 rounded-2xl p-6 hover:border-green-400 transition">
          <p className="text-green-400 text-xs tracking-widest mb-2">{issuer}</p>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-1">{desc}</p>
          <p className="text-gray-600 text-xs mb-4">{date}</p>
          <a href={link} target="_blank" className="text-xs border border-green-400 text-green-400 px-2 py-1 hover:bg-green-400 hover:text-black transition rounded-lg">Verify Certificate</a>
        </div>
      ))}
    </div>

    {/* Mobile — carousel */}
    <div className="md:hidden">
      <CertCarousel />
    </div>

  </div>
</section>

      {/* CONTACT */}
<section id="contact" className="px-8 py-16 border-t border-gray-800">
  <div className="max-w-4xl mx-auto">
    <p className="text-green-400 text-sm tracking-widest mb-2">// 05. Contact</p>
    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
    <div className="flex items-center justify-center gap-8">
  <a href="mailto:nayoemc2@gmail.com" className="flex flex-col items-center gap-2 group">
    <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-green-400 transition">
      <span className="text-gray-400 group-hover:text-green-400 transition text-lg">✉</span>
    </div>
    <span className="text-gray-600 text-xs group-hover:text-green-400 transition">Email</span>
  </a>
  <a href="https://www.linkedin.com/in/asomani-nathaniel-okyere/" target="_blank" className="flex flex-col items-center gap-2 group">
    <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-green-400 transition">
      <span className="text-gray-400 group-hover:text-green-400 transition text-sm font-bold">in</span>
    </div>
    <span className="text-gray-600 text-xs group-hover:text-green-400 transition">LinkedIn</span>
  </a>
  <a href="https://github.com/nayoKnights" target="_blank" className="flex flex-col items-center gap-2 group">
    <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-green-400 transition">
      <svg className="text-gray-400 group-hover:text-green-400 transition" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    </div>
    <span className="text-gray-600 text-xs group-hover:text-green-400 transition">GitHub</span>
  </a>
</div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-8 py-6 flex justify-between items-center text-gray-600 text-sm">
        <p> —————— THE SHERLOCK ——————</p>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition text-gray-400">
    ↑
  </a>
</footer>

    </main>
  );
}