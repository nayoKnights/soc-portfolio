"use client";

import { useState } from "react";
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
          <span className="text-green-400 font-bold text-lg">THE SHERLOCK</span>

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
            className="md:hidden text-gray-400 hover:text-green-400 focus:outline-none"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 leading-relaxed">
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
          <div className="grid grid-cols-1 gap-6">
  {[
  {
    title: "Wazuh SIEM Deployment & Agent Configuration",
    summary: "Deployed a full Wazuh SIEM stack on Ubuntu and integrated Windows and Linux endpoints for centralized log collection, real-time alerting, and threat detection validation using simulated attack scenarios.",
    tags: ["Wazuh", "Ubuntu", "SIEM", "Log Analysis", "Threat Detection", "Compliance Monitoring"],
    link: "https://github.com/nayoKnights/Wazuh-SIEM-Deployment-and-Agent-Integration",
  },
  {
    title: "Case Management & Threat Intelligence Engine Integration",
    summary: "Deployed TheHive and integrated Cortex via API for automated threat enrichment, enabling end-to-end SOC workflows from alert triage and case creation to incident documentation.",
    tags: ["TheHive", "Cortex", "Threat Intelligence", "SOC Workflows", "Case Management", "API Integration", "IOC Analysis"],
    link: "https://github.com/nayoKnights/Case-Management-and-Threat-Analysis-Engine-Integration",
  },
  {
    title: "Active Directory Enterprise Security Lab",
    summary: "Built a fully functional Active Directory environment with a Windows Server Domain Controller, enforcing role-based access control through OUs, security groups, and Group Policy Objects across domain-joined endpoints.",
    tags: ["Active Directory", "Windows Server", "GPO", "IAM", "RBAC", "Domain Controller", "Identity Management"],
    link: "https://github.com/nayoKnights/active-directory-domain-service",
  },
].map(({ title, summary, tags, link }) => (
  <div key={title} className="border border-gray-700 p-6 hover:border-green-400 transition">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-lg font-bold">{title}</h3>
      <a href={link} target="_blank" className="text-green-400 text-sm hover:underline ml-4 whitespace-nowrap">View Docs →</a>
    </div>
    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{summary}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-xs border border-green-400 text-green-400 px-2 py-1">{tag}</span>
      ))}
    </div>
  </div>
))}
</div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="px-8 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 text-sm tracking-widest mb-2">// 04. Certifications</p>
          <h2 className="text-3xl font-bold mb-8">Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="border border-gray-700 p-6 hover:border-green-400 transition">
              <p className="text-green-400 text-xs tracking-widest mb-2">EC-COUNCIL</p>
              <h3 className="text-xl font-bold mb-1">Certified SOC Analyst</h3>
              <p className="text-gray-400 text-sm mb-1">CSA — Validates skills in security monitoring, SIEM management, log analysis, and incident detection and response.</p>
              <p className="text-gray-600 text-xs mb-4">Issued November 2025</p>
              <a href="https://aspen.eccouncil.org/VerifyBadge?type=certification&a=Fr3hvt27MUbP5mXEvQ8CmyRo5tRyNHvjk/KEyKEGNGw=" target="_blank" className="text-xs border border-green-400 text-green-400 px-2 py-1 hover:bg-green-400 hover:text-black transition">Verify Certificate</a>
            </div>

            <div className="border border-gray-700 p-6 hover:border-green-400 transition">
              <p className="text-green-400 text-xs tracking-widest mb-2">COMPTIA</p>
              <h3 className="text-xl font-bold mb-1">Security+</h3>
              <p className="text-gray-400 text-sm mb-1">SY0-701 — Industry-standard certification covering threats, vulnerabilities, architecture, and security operations.</p>
              <p className="text-gray-600 text-xs mb-4">Issued July 2024</p>
              <a href="https://www.credly.com/badges/54ef9b62-1a9c-421e-8562-1f5f83df7444/public_url" target="_blank" className="text-xs border border-green-400 text-green-400 px-2 py-1 hover:bg-green-400 hover:text-black transition">Verify Certificate</a>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 text-sm tracking-widest mb-2">// 05. Contact</p>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-8 max-w-xl">
            I'm currently open to SOC Analyst and Security Engineer roles. Whether you have an opportunity, a question, or just want to connect — my inbox is open.
          </p>
          <div className="flex flex-col gap-4">
            <a href="mailto:nayoemc2@gmail.com" className="flex items-center gap-4 border border-gray-700 px-6 py-4 hover:border-green-400 transition group">
              <span className="text-green-400 text-xl">✉</span>
              <div>
                <p className="text-xs text-gray-500 mb-1">Email</p>
                <p className="text-white group-hover:text-green-400 transition">n.okyereasomani@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/asomani-nathaniel-okyere/" target="_blank" className="flex items-center gap-4 border border-gray-700 px-6 py-4 hover:border-green-400 transition group">
              <span className="text-green-400 text-xl">in</span>
              <div>
                <p className="text-xs text-gray-500 mb-1">LinkedIn</p>
                <p className="text-white group-hover:text-green-400 transition">linkedin.com/in/asomani-nathaniel-okyere</p>
              </div>
            </a>
            <a href="https://github.com/nayoKnights" target="_blank" className="flex items-center gap-4 border border-gray-700 px-6 py-4 hover:border-green-400 transition group">
              <span className="text-green-400 text-xl">⌥</span>
              <div>
                <p className="text-xs text-gray-500 mb-1">GitHub</p>
                <p className="text-white group-hover:text-green-400 transition">github.com/nayoKnights</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-8 py-6 text-center text-gray-600 text-sm">
        <p>Nathaniel Okyere Asomani — THE SHERLOCK </p>
      </footer>

    </main>
  );
}