"use client";

import { useState, useRef, useEffect } from "react";

const navItems = [
  {
    id: "about",
    label: "About",
    href: "#about",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    id: "certifications",
    label: "Certifications",
    href: "#certifications",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="4"/>
        <path d="M9 21l3-3 3 3"/>
        <path d="M6.2 17.4A8 8 0 1 1 17.8 17.4"/>
      </svg>
    ),
  },
  {
    id: "blog",
    label: "SOC Blog",
    href: "/blog",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="8" y1="13" x2="16" y2="13"/>
        <line x1="8" y1="17" x2="12" y2="17"/>
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

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
    setTimeout(() => { setCurrent(index); setSliding(false); }, 400);
  };

  const next = () => goTo(current === paragraphs.length - 1 ? 0 : current + 1);
  const prev = () => goTo(current === 0 ? paragraphs.length - 1 : current - 1);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next(); else if (diff < -50) prev();
  };

  return (
    <div>
      <div className="overflow-hidden min-h-[120px]" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <p className="text-gray-400 leading-relaxed text-base" style={{ transition: "opacity 0.4s ease, transform 0.4s ease", opacity: sliding ? 0 : 1, transform: sliding ? "translateX(30px)" : "translateX(0px)" }}>
          {paragraphs[current]}
        </p>
      </div>
      <div className="flex gap-2 mt-4">
        {paragraphs.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`w-2 h-2 rounded-full transition ${i === current ? "bg-green-400" : "bg-gray-600"}`} />
        ))}
      </div>
    </div>
  );
}

function CertCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const certs = [
    { issuer: "EC-COUNCIL", title: "Certified SOC Analyst", desc: "CSA validates skills in security monitoring, SIEM management, log analysis, and incident detection and response.", date: "Issued November 2025", link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=Fr3hvt27MUbP5mXEvQ8CmyRo5tRyNHvjk/KEyKEGNGw=" },
    { issuer: "COMPTIA", title: "Security+", desc: "An industry-standard certification covering threats, vulnerabilities, architecture, and security operations.", date: "Issued July 2024", link: "https://www.credly.com/badges/54ef9b62-1a9c-421e-8562-1f5f83df7444/public_url" },
  ];

  const goTo = (index: number) => { setDragX(0); setCurrent(index); };
  const onDragStart = (clientX: number) => { startX.current = clientX; setIsDragging(true); };
  const onDragMove = (clientX: number) => { if (!isDragging) return; setDragX(clientX - startX.current); };
  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX < -80 && current < certs.length - 1) goTo(current + 1);
    else if (dragX > 80 && current > 0) goTo(current - 1);
    else setDragX(0);
  };

  const width = containerRef.current?.offsetWidth || 1;
  const dragPercent = (dragX / width) * 100;

  return (
    <div>
      <div
        ref={containerRef}
        className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: "pan-y" }}
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseMove={(e) => onDragMove(e.clientX)}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
        onTouchEnd={onDragEnd}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(${-current * 100}% + ${dragPercent}%))`,
            transition: isDragging ? "none" : "transform 0.3s ease",
          }}
        >
          {certs.map((cert) => (
            <div key={cert.title} className="w-full flex-shrink-0 border border-gray-700 rounded-2xl overflow-hidden bg-[#0d1117]">
              <div className="bg-[#161b22] px-4 py-3 border-b border-gray-700">
                <p className="text-green-400 text-sm tracking-widest">{cert.issuer}</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-base mb-1">{cert.desc}</p>
                <p className="text-gray-600 text-sm mb-4">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  className="text-sm border border-green-400 text-green-400 px-2 py-1 hover:bg-green-400 hover:text-black transition rounded-lg"
                  onClick={(e) => { if (isDragging || Math.abs(dragX) > 5) e.preventDefault(); }}
                >
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {certs.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`w-2 h-2 rounded-full transition ${i === current ? "bg-green-400" : "bg-gray-600"}`} />
        ))}
      </div>
    </div>
  );
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
      summary: "Deployed a full SIEM stack on Ubuntu and integrated Windows & Linux endpoints for real-time alerting and threat detection.",
      link: "https://github.com/nayoKnights/Wazuh-SIEM-Deployment-and-Agent-Integration",
    },
    {
      filename: "case-management-integration.sh",
      title: "Case Management & Threat Intelligence Engine Integration",
      summary: "Deployed TheHive with Cortex for automated threat enrichment, building SOC workflows from alert triage to incident documentation.",
      link: "https://github.com/nayoKnights/Case-Management-and-Threat-Analysis-Engine-Integration",
    },
    {
      filename: "active-directory-lab.sh",
      title: "Active Directory Enterprise Security Lab",
      summary: "Built a fully functional AD environment enforcing RBAC through OUs, security groups, and GPOs across domain-joined endpoints.",
      link: "https://github.com/nayoKnights/active-directory-domain-service",
    },
  ];

  const goTo = (index: number) => { setDragX(0); setCurrent(index); };
  const onDragStart = (clientX: number) => { startX.current = clientX; setIsDragging(true); };
  const onDragMove = (clientX: number) => { if (!isDragging) return; setDragX(clientX - startX.current); };
  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX < -80 && current < projects.length - 1) goTo(current + 1);
    else if (dragX > 80 && current > 0) goTo(current - 1);
    else setDragX(0);
  };

  const width = containerRef.current?.offsetWidth || 1;
  const dragPercent = (dragX / width) * 100;

  return (
    <div>
      <div
        ref={containerRef}
        className="overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: "pan-y" }}
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseMove={(e) => onDragMove(e.clientX)}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
        onTouchEnd={onDragEnd}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(${-current * 100}% + ${dragPercent}%))`,
            transition: isDragging ? "none" : "transform 0.3s ease",
          }}
        >
          {projects.map((p) => (
            <div key={p.filename} className="w-full flex-shrink-0 border border-gray-700 rounded-2xl overflow-hidden bg-[#0d1117]">
              <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
                <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
                <span className="text-gray-500 text-sm ml-2">{p.filename}</span>
              </div>
              <div className="p-6 bg-[#0d1117]">
                <p className="text-green-400 text-sm mb-1">$ cat project_overview.txt</p>
                <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-gray-400 text-base mb-4">{p.summary}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 text-base hover:underline"
                  onClick={(e) => { if (isDragging || Math.abs(dragX) > 5) e.preventDefault(); }}
                >
                  $ open docs →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} className={`w-2 h-2 rounded-full transition ${i === current ? "bg-green-400" : "bg-gray-600"}`} />
        ))}
      </div>
    </div>
  );
}

function SkillDropdown({ category, items }: { category: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center px-4 py-3 border border-gray-700 text-white font-bold text-base hover:bg-gray-800 transition text-left">
        {category}
        <span className="text-green-400 text-lg ml-2">{open ? "✕" : "+"}</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <ul className="absolute z-20 top-full left-0 w-full bg-[#161b22] border border-gray-600 px-4 py-3 space-y-2 shadow-xl">
            {items.map((item) => (
              <li key={item} className="text-gray-400 text-sm flex items-center gap-2">
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["about", "skills", "projects", "certifications", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const sectionLabel: Record<string, string> = {
    home: "Home",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact",
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-mono flex">

      {/* ── DESKTOP SIDEBAR ── */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-14 bg-[#0d1117] border-r border-gray-800 z-50 items-center py-5 gap-1">
        {/* Brand mark */}
        <a href="#" className="text-green-400 font-bold text-xs mb-6 tracking-widest writing-mode-vertical rotate-180" style={{ writingMode: "vertical-rl" }}>TS</a>

        {/* Nav icons */}
        {navItems.map(({ id, label, href, icon }) => (
          <a
            key={id}
            href={href}
            title={label}
            className={`relative group w-10 h-10 flex items-center justify-center rounded-lg transition
              ${activeSection === id ? "text-green-400 bg-gray-800" : "text-gray-500 hover:text-gray-300 hover:bg-gray-800"}`}
          >
            {icon}
            {/* Tooltip */}
            <span className="absolute left-14 bg-[#161b22] border border-gray-700 text-gray-300 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none z-50">
              {label}
            </span>
          </a>
        ))}
      </aside>

      {/* ── MOBILE SIDEBAR OVERLAY ── */}
      {menuOpen && (
        <>
          <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-60" onClick={() => setMenuOpen(false)} />
          <div className="md:hidden fixed top-0 left-0 h-full w-60 z-50 bg-[#0d1117] border-r border-gray-800 flex flex-col slide-in">
            <div className="flex items-center justify-between px-5 py-5 border-b border-gray-800">
              <a href="#" className="text-green-400 font-bold text-lg" onClick={() => setMenuOpen(false)}>THE SHERLOCK</a>

              <button onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white text-2xl">✕</button>
            </div>
            <div className="flex flex-col gap-1 px-3 py-5">
              {navItems.map(({ id, label, href, icon }) => (
                <a
                  key={id}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-4 px-3 py-3 rounded-lg transition group
                    ${activeSection === id ? "text-green-400 bg-gray-800" : "text-gray-500 hover:text-gray-300 hover:bg-gray-800"}`}
                >
                  <span>{icon}</span>
                  <span className="text-base">{label}</span>
                </a>
              ))}
            </div>
            <div className="mt-auto px-5 py-4 border-t border-gray-800">
              <p className="text-gray-600 text-sm">THE SHERLOCK // v1.0</p>
            </div>
          </div>
        </>
      )}

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 md:ml-14 flex flex-col">

        {/* Top breadcrumb bar */}
        <header className="sticky top-0 z-30 bg-[#0d1117] border-b border-gray-800 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
            <button className="md:hidden text-gray-200 hover:text-white text-3xl mr-2 p-1" onClick={() => setMenuOpen(true)}>☰</button>
            <span className="text-gray-600">THE SHERLOCK</span>
            <span className="text-gray-700">/</span>
            <span className="text-green-400">{sectionLabel[activeSection] ?? "Home"}</span>
          </div>
          {/* Desktop brand */}
          <a href="#" className="hidden md:block text-green-400 font-bold text-sm hover:opacity-80 transition">THE SHERLOCK</a>
        </header>

        <main className="flex-1">

          {/* HERO */}
          <section className="flex flex-col justify-center px-8 py-20 max-w-4xl mx-auto">
            <p className="text-green-400 text-sm mb-3 tracking-widest">// Welcome to my world!</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Nathaniel Okyere Asomani<br />
              <span className="text-green-400">SOC Analyst</span> &{" "}
              <span className="text-green-400">Security Engineer</span>
            </h1>
          </section>

          {/* ABOUT */}
          <section id="about" className="px-8 py-16 max-w-4xl mx-auto border-t border-gray-800">
            <p className="text-green-400 text-base md:text-sm tracking-widest mb-2">// 01. About Me</p>
            <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
            <div className="hidden md:grid grid-cols-2 gap-8 text-gray-400 leading-relaxed">
              <p>I'm Nathaniel Okyere Asomani, a cybersecurity professional focused on threat detection, incident response, and security engineering. I thrive in high-pressure environments where fast, accurate decisions protect critical systems.</p>
              <p>I'm passionate about understanding how attackers think — and using that knowledge to build stronger defenses. I'm actively pursuing roles where I can contribute to a security team and keep growing my skills.</p>
            </div>
            <div className="md:hidden"><AboutCarousel /></div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="px-8 py-16 border-t border-gray-800">
            <div className="max-w-4xl mx-auto">
              <p className="text-green-400 text-base md:text-sm tracking-widest mb-2">// 02. Skills</p>
              <h2 className="text-3xl font-bold mb-8">What I Work With</h2>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { category: "SIEM & Monitoring", items: ["Splunk", "Wazuh", "Palo Alto Cortex XDR"] },
                  { category: "Case & Endpoint Management", items: ["ServiceNow", "SolarWinds Service Desk", "TheHive", "ManageEngine Endpoint Central", "Active Directory"] },
                  { category: "Analysis & Investigation", items: ["Phishing Analysis", "Malware Analysis", "Network Traffic Analysis"] },
                  { category: "Scripting & Automation", items: ["Python", "Bash Scripting", "Virtualization (VMware / VirtualBox)"] },
                ].map(({ category, items }) => (<SkillDropdown key={category} category={category} items={items} />))}
              </div>
              <p className="text-green-400 text-base md:text-sm font-bold tracking-widest mb-3">Concepts & Frameworks</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { category: "SOC & Incident Response", items: ["Incident Response Lifecycle", "SOC Triage & Escalation", "MITRE ATT&CK", "Threat Detection & Hunting", "Log Analysis & Correlation", "SIEM Rule Tuning", "SIEM & SOAR", "IOC & IOA Analysis", "Playbook & Runbook Development"] },
                  { category: "Defensive Architecture", items: ["Zero Trust Architecture", "Defense in Depth", "Least Privilege", "Network Segmentation", "Firewalls, IDS/IPS", "Endpoint Detection & Response (EDR)", "Identity & Access Management (IAM)", "VAPT"] },
                  { category: "Networking Fundamentals", items: ["TCP/IP & OSI Model", "Cryptography"] },
                  { category: "Forensics & Malware", items: ["Digital Forensics & IR (DFIR)", "Malware Analysis & Reverse Engineering", "Phishing & Social Engineering", "Chain of Custody", "Threat Intelligence (CTI)"] },
                  { category: "Concepts & Frameworks", items: ["CIA Triad", "MITRE ATT&CK", "Kill Chain (Lockheed Martin)", "Diamond Model of Intrusion", "Risk Assessment & Management", "Penetration Testing Concepts", "CVE & CVSS"] },
                  { category: "Offensive Awareness", items: ["Lateral Movement & Persistence", "Privilege Escalation", "Command & Control (C2)", "Zero-Day Exploits"] },
                  { category: "Compliance & Governance", items: ["ISO/IEC 27001", "CIS Controls", "NIST Cybersecurity Framework"] },
                ].map(({ category, items }) => (<SkillDropdown key={category} category={category} items={items} />))}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="px-8 py-16 border-t border-gray-800">
            <div className="max-w-4xl mx-auto">
              <p className="text-green-400 text-base md:text-sm tracking-widest mb-2">// 03. Projects</p>
              <h2 className="text-3xl font-bold mb-8">What I've Built</h2>
              <ProjectCarousel />
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section id="certifications" className="px-8 py-16 border-t border-gray-800">
            <div className="max-w-4xl mx-auto">
              <p className="text-green-400 text-base md:text-sm tracking-widest mb-2">// 04. Certifications</p>
              <h2 className="text-3xl font-bold mb-8">Credentials</h2>
              <div className="hidden md:grid grid-cols-2 gap-6">
                {[
                  { issuer: "EC-COUNCIL", title: "Certified SOC Analyst", desc: "CSA validates skills in security monitoring, SIEM management, log analysis, and incident detection and response.", date: "Issued November 2025", link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=Fr3hvt27MUbP5mXEvQ8CmyRo5tRyNHvjk/KEyKEGNGw=" },
                  { issuer: "COMPTIA", title: "Security+", desc: "Industry-standard certification covering threats, vulnerabilities, architecture, and security operations.", date: "Issued July 2024", link: "https://www.credly.com/badges/54ef9b62-1a9c-421e-8562-1f5f83df7444/public_url" },
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
              <div className="md:hidden"><CertCarousel /></div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="px-8 py-16 border-t border-gray-800">
            <div className="max-w-4xl mx-auto">
              <p className="text-green-400 text-base md:text-sm tracking-widest mb-2">// 05. Contact</p>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="flex items-center justify-center gap-8">
                <a href="mailto:nayoemc2@gmail.com" className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-green-400 transition">
                    <span className="text-gray-400 group-hover:text-green-400 transition text-lg">✉</span>
                  </div>
                  <span className="text-gray-600 text-sm group-hover:text-green-400 transition">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/asomani-nathaniel-okyere/" target="_blank" className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-green-400 transition">
                    <span className="text-gray-400 group-hover:text-green-400 transition text-sm font-bold">in</span>
                  </div>
                  <span className="text-gray-600 text-sm group-hover:text-green-400 transition">LinkedIn</span>
                </a>
                <a href="https://github.com/nayoKnights" target="_blank" className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-green-400 transition">
                    <svg className="text-gray-400 group-hover:text-green-400 transition" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm group-hover:text-green-400 transition">GitHub</span>
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-gray-800 px-8 py-6 flex justify-between items-center text-gray-600 text-sm">
            <p>—————— THE SHERLOCK ——————</p>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition text-gray-400">↑</a>
          </footer>

        </main>
      </div>
    </div>
  );
}