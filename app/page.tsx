"use client";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white font-mono">

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
        <span className="text-green-400 font-bold text-lg">THE SHERLOCK</span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-green-400 transition">About</a>
          <a href="#skills" className="hover:text-green-400 transition">Skills</a>
          <a href="#projects" className="hover:text-green-400 transition">Projects</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col justify-center px-8 py-32 max-w-4xl mx-auto">
        <p className="text-green-400 text-sm mb-3 tracking-widest">// Welcome to my world!</p>
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Nathaniel Okyere Asomani<br />
          <span className="text-green-400">SOC Analyst</span> &{" "}
          <span className="text-green-400">Security Engineer</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mb-8">
          I monitor,detect, investigate, and mitigate threats to help organizations build a cyber secured fortress.
          Currently open to Cybersecurity/SOC Analyst and Security Engineering roles.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="bg-green-400 text-black px-6 py-3 font-bold hover:bg-green-300 transition">
            View My Work
          </a>
          <a href="#contact" className="border border-green-400 text-green-400 px-6 py-3 font-bold hover:bg-green-400 hover:text-black transition">
            Contact Me
          </a>
        </div>
      </section>
      {/* ABOUT */}
<section id="about" className="px-8 py-24 max-w-4xl mx-auto border-t border-gray-800">
  <p className="text-green-400 text-sm tracking-widest mb-2">// 01. About Me</p>
  <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 leading-relaxed">
    <p>
      I'm a hardworking cybersecurity professional focused on threat detection, 
      incident response, and security engineering. A BSc. Computer Science graduate with over a year experience working in a SOC 
      environment. Other work experiences include IT support technician & Datacenter Support Engineer.
    </p>
    <p>
      I'm passionate about understanding how attackers think — and using that knowledge 
      to build stronger defenses. I'm actively pursuing roles where I can contribute to 
      a security team and keep growing my skills.
    </p>
  </div>
</section>
 {/*SKILLS*/}
 {/* SKILLS */}
<section id="skills" className="px-8 py-24 border-t border-gray-800 bg-[#0d1117]">
  <div className="max-w-4xl mx-auto">
    <p className="text-green-400 text-sm tracking-widest mb-2">// 02. Skills</p>
    <h2 className="text-3xl font-bold mb-10">What I Work With</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div>
        <h3 className="text-green-400 font-bold mb-4">SIEM & Monitoring</h3>
        <ul className="text-gray-400 space-y-2">
          <li>Splunk</li>
          <li>Wazuh</li>
          <li>Palo Alto Cortex XDR</li>
        </ul>
      </div>

      <div>
        <h3 className="text-green-400 font-bold mb-4">Case & Endpoint Management</h3>
        <ul className="text-gray-400 space-y-2">
          <li>ServiceNow</li>
          <li>SolarWinds Service Desk</li>
          <li>TheHive</li>
          <li>ManageEngine Endpoint Central</li>
          <li>Active Directory</li>
        </ul>
      </div>

      <div>
        <h3 className="text-green-400 font-bold mb-4">Analysis & Investigation</h3>
        <ul className="text-gray-400 space-y-2">
          <li>Phishing Analysis</li>
          <li>Malware Analysis</li>
          <li>Network Traffic Analysis</li>
        </ul>
      </div>

      <div>
        <h3 className="text-green-400 font-bold mb-4">Scripting & Automation</h3>
        <ul className="text-gray-400 space-y-2">
          <li>Python</li>
          <li>Bash Scripting</li>
        </ul>
      </div>

      <div className="md:col-span-3">
  <h3 className="text-green-400 font-bold mb-4">Concepts & Frameworks</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {[
      {
        category: "SOC & Incident Response",
        items: [
          "Incident Response Lifecycle",
          "SOC Triage & Escalation",
          "MITRE ATT&CK",
          "Threat Detection & Hunting",
          "Log Analysis & Correlation",
          "SIEM Rule Tuning",
          "SIEM & SOAR",
          "IOC & IOA Analysis",
          "Playbook & Runbook Development",
        ],
      },
      {
        category: "Defensive Architecture",
        items: [
          "Zero Trust Architecture",
          "Defense in Depth",
          "Least Privilege",
          "Network Segmentation",
          "Firewalls, IDS/IPS",
          "Endpoint Detection & Response (EDR)",
          "Identity & Access Management (IAM)",
          "Patch Management",
        ],
      },
      {
        category: "Networking Fundamentals",
        items: [
          "TCP/IP & OSI Model",
          "CIA Triad",
          "Cryptography Fundamentals",
          "Cloud Security (AWS)",
          "Vulnerability Management",
          "CVE & CVSS",
        ],
      },
      {
        category: "Forensics & Malware",
        items: [
          "Digital Forensics & IR (DFIR)",
          "Malware Analysis & Reverse Engineering",
          "Phishing & Social Engineering",
          "Chain of Custody",
          "Threat Intelligence (CTI)",
        ],
      },
      {
        category: "Advanced Frameworks",
        items: [
          "Kill Chain (Lockheed Martin)",
          "Diamond Model of Intrusion",
          "Risk Assessment & Management",
          "Penetration Testing Concepts",
        ],
      },
      {
        category: "Offensive Awareness",
        items: [
          "Lateral Movement & Persistence",
          "Privilege Escalation",
          "Command & Control (C2)",
          "Zero-Day Exploits",
        ],
      },
      {
        category: "Compliance & Governance",
        items: [
          "ISO/IEC 27001",
          "CIS Controls",
          "NIST Cybersecurity Framework",
        ],
      },
    ].map(({ category, items }) => (
      <details
        key={category}
        className="border border-gray-700 group"
      >
        <summary className="flex justify-between items-center px-4 py-3 cursor-pointer text-white font-bold hover:bg-gray-800 transition list-none">
          {category}
          <span className="text-green-400 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
        </summary>
        <ul className="px-4 py-3 space-y-2 border-t border-gray-700">
          {items.map((item) => (
            <li key={item} className="text-gray-400 text-sm flex items-center gap-2">
              <span className="text-green-400">▸</span> {item}
            </li>
          ))}
        </ul>
      </details>
    ))}
  </div>
</div>

    </div>
  </div>
</section>
{/* PROJECTS */}
<section id="projects" className="px-8 py-24 border-t border-gray-800">
  <div className="max-w-4xl mx-auto">
    <p className="text-green-400 text-sm tracking-widest mb-2">// 03. Projects</p>
    <h2 className="text-3xl font-bold mb-10">What I've Built</h2>
    <div className="grid grid-cols-1 gap-8">

      {/* Project 1 */}
      <div className="border border-gray-700 p-6 hover:border-green-400 transition">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">Wazuh SIEM Deployment & Agent Configuration</h3>
          <a href="https://github.com/nayoKnights/Wazuh-SIEM-Deployment-and-Agent-Integration" target="_blank" className="text-green-400 text-sm hover:underline ml-4 whitespace-nowrap">View Docs →</a>
        </div>
        <ul className="text-gray-400 text-sm space-y-2 mb-5">
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Deployed a full Wazuh SIEM stack (manager, indexer, dashboard) on Ubuntu for centralized security monitoring.</li>
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Integrated Windows and Linux endpoints for centralized log collection and real-time alerting.</li>
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Validated threat detection, compliance monitoring, and event correlation using simulated attack scenarios.</li>
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Gained hands-on experience in SIEM tuning, alert validation, and security visibility across endpoints.</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["Wazuh", "Ubuntu", "SIEM", "Log Analysis", "Threat Detection", "Compliance Monitoring"].map(tag => (
            <span key={tag} className="text-xs border border-green-400 text-green-400 px-2 py-1">{tag}</span>
          ))}
        </div>
      </div>

      {/* Project 2 */}
      <div className="border border-gray-700 p-6 hover:border-green-400 transition">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">Case Management & Threat Intelligence Engine Integration</h3>
          <a href="https://github.com/nayoKnights/Case-Management-and-Threat-Analysis-Engine-Integration" target="_blank" className="text-green-400 text-sm hover:underline ml-4 whitespace-nowrap">View Docs →</a>
        </div>
        <ul className="text-gray-400 text-sm space-y-2 mb-5">
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Deployed and configured TheHive as a centralized SOC case management platform for handling security investigations.</li>
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Integrated Cortex with TheHive via API to enable automated enrichment of security observables.</li>
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Configured Cortex analysers to perform threat intelligence lookups on IPs, domains, URLs, and file hashes directly from TheHive.</li>
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Developed SOC workflows covering alert triage, case creation, threat enrichment, IR coordination, and findings documentation.</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["TheHive", "Cortex", "Threat Intelligence", "SOC Workflows", "Case Management", "API Integration", "IOC Analysis"].map(tag => (
            <span key={tag} className="text-xs border border-green-400 text-green-400 px-2 py-1">{tag}</span>
          ))}
        </div>
      </div>

      {/* Project 3 */}
      <div className="border border-gray-700 p-6 hover:border-green-400 transition">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">Active Directory Enterprise Security Lab</h3>
          <a href="https://github.com/nayoKnights/active-directory-domain-service" target="_blank" className="text-green-400 text-sm hover:underline ml-4 whitespace-nowrap">View Docs →</a>
        </div>
        <ul className="text-gray-400 text-sm space-y-2 mb-5">
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Set up a Windows Server as a Domain Controller and built a fully functional Active Directory environment from scratch.</li>
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Designed Organizational Units to mirror real enterprise department structures for efficient user and resource management.</li>
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Managed domain user accounts and security groups to enforce role-based access control across the domain.</li>
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Applied Group Policy Objects (GPOs) to centrally enforce security settings and manage endpoints across the domain.</li>
          <li className="flex gap-2"><span className="text-green-400 mt-1">▸</span>Connected Windows client machines to the domain and managed authentication, demonstrating end-to-end IAM in practice.</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          {["Active Directory", "Windows Server", "GPO", "IAM", "RBAC", "Domain Controller", "Identity Management"].map(tag => (
            <span key={tag} className="text-xs border border-green-400 text-green-400 px-2 py-1">{tag}</span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
 {/* CERTIFICATIONS */}
<section id="certifications" className="px-8 py-24 border-t border-gray-800">
  <div className="max-w-4xl mx-auto">
    <p className="text-green-400 text-sm tracking-widest mb-2">// 04. Certifications</p>
    <h2 className="text-3xl font-bold mb-10">Credentials</h2>
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
        <p className="text-gray-400 text-sm mb-1">SY0-601 — Industry-standard certification covering threats, vulnerabilities, architecture, and security operations.</p>
        <p className="text-gray-600 text-xs mb-4">Issued July 2024</p>
        <a href="https://www.credly.com/badges/54ef9b62-1a9c-421e-8562-1f5f83df7444/public_url" target="_blank" className="text-xs border border-green-400 text-green-400 px-2 py-1 hover:bg-green-400 hover:text-black transition">Verify Certificate</a>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}
