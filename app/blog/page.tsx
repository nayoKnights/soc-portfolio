import Link from "next/link";

const cases = [
  {
    id: "CASE-001",
    severity: "HIGH",
    title: "Phishing Campaign Targeting Finance Department",
    date: "2026-05-01",
    summary:
      "Investigation into a spear-phishing campaign that bypassed email filters and attempted credential harvesting against finance staff. Analysis covers email headers, payload, IOCs, and containment actions.",
    tags: ["Phishing", "Email Analysis", "IOC Analysis", "Splunk"],
    status: "RESOLVED",
  },
  {
    id: "CASE-002",
    severity: "CRITICAL",
    title: "Suspected Lateral Movement via Compromised Service Account",
    date: "2026-05-10",
    summary:
      "Triage and investigation of anomalous authentication events indicating lateral movement through a compromised service account. Covers log correlation, MITRE ATT&CK mapping, and incident response actions taken.",
    tags: ["Lateral Movement", "Active Directory", "Wazuh", "MITRE ATT&CK"],
    status: "RESOLVED",
  },
  {
    id: "CASE-003",
    severity: "MEDIUM",
    title: "Malware Analysis — Trojan Dropper Sample",
    date: "2026-05-20",
    summary:
      "Static and dynamic analysis of a trojan dropper sample submitted via sandbox. Covers behavioral analysis, network IOCs, persistence mechanisms identified, and recommended detection rules.",
    tags: ["Malware Analysis", "Sandbox", "Reverse Engineering", "IOC"],
    status: "RESOLVED",
  },
];

const severityStyles: Record<string, string> = {
  LOW: "border-blue-400 text-blue-400",
  MEDIUM: "border-yellow-400 text-yellow-400",
  HIGH: "border-orange-400 text-orange-400",
  CRITICAL: "border-red-500 text-red-500",
};

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white font-mono">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#0d1117] border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-green-400 font-bold text-lg">THE SHERLOCK</Link>
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <Link href="/#about" className="hover:text-green-400 transition">About</Link>
            <Link href="/#skills" className="hover:text-green-400 transition">Skills</Link>
            <Link href="/#projects" className="hover:text-green-400 transition">Projects</Link>
            <Link href="/#certifications" className="hover:text-green-400 transition">Certifications</Link>
            <Link href="/blog" className="text-green-400">SOC Blog</Link>
            <Link href="/#contact" className="hover:text-green-400 transition">Contact</Link>
          </div>
          <Link href="/" className="md:hidden text-gray-400 hover:text-green-400 text-sm transition">
            ← Home
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section className="px-8 py-16 max-w-4xl mx-auto">
        <p className="text-green-400 text-sm tracking-widest mb-2">// SOC Investigations</p>
        <h1 className="text-4xl font-bold mb-4">Case Files</h1>
        <p className="text-gray-400 max-w-xl">
          Real-world triage and investigation walkthroughs documented in the format of SOC incident reports.
          Each case covers detection, analysis, containment, and lessons learned.
        </p>
      </section>

      {/* CASE FILE LIST */}
      <section className="px-8 pb-24 max-w-4xl mx-auto">
        <div className="flex flex-col gap-6">
          {cases.map((c) => (
            <div
              key={c.id}
              className="border border-gray-700 p-6 hover:border-green-400 transition"
            >
              {/* Case Header */}
              <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 text-xs">{c.id}</span>
                  <span className={`text-xs border px-2 py-0.5 ${severityStyles[c.severity]}`}>
                    {c.severity}
                  </span>
                  <span className="text-xs border border-green-400 text-green-400 px-2 py-0.5">
                    {c.status}
                  </span>
                </div>
                <span className="text-gray-500 text-xs">{c.date}</span>
              </div>

              {/* Title & Summary */}
              <h2 className="text-lg font-bold mb-2">{c.title}</h2>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{c.summary}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {c.tags.map((tag) => (
                  <span key={tag} className="text-xs border border-gray-600 text-gray-400 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <span className="text-xs border border-gray-600 text-gray-500 px-3 py-1 cursor-not-allowed">
                Full Report — Coming Soon
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-8 py-6 text-center text-gray-600 text-sm">
        <p>Nathaniel Okyere Asomani — THE SHERLOCK</p>
      </footer>

    </main>
  );
}