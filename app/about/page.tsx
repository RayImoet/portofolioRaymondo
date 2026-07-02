import { Navigation } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Raymondo Stiven Sugiarto",
  description:
    "Pelajari lebih lanjut tentang perjalanan, pengalaman, dan keahlian teknis Raymondo Stiven Sugiarto dalam pengembangan web dan aplikasi mobile.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden">
        {/* Ornaments */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2" />

        {/* Vertical Text */}
        <div className="absolute left-4 top-40 hidden xl:flex flex-col gap-4 items-center opacity-20">
          <div className="w-px h-24 bg-foreground" />
          <span
            className="text-sm tracking-[0.5em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Profile
          </span>
        </div>

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover My Journey in the World of Technology
            </p>
          </div>

          {/* Introduction */}
          <div className="space-y-6 py-12 border-y border-border">
            <h2 className="text-2xl font-semibold text-foreground">
              Hello, I'm Raymondo Stiven Sugiarto
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              A Frontend Developer and IT Support professional passionate about building modern, responsive, 
              and user-friendly websites while providing reliable technical support. Skilled in web development,
               hardware and software troubleshooting, computer networking, and IT system maintenance to ensure smooth and efficient operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              My journey began with a curiosity about how technology works and how it can solve everyday challenges. Over time, 
              I developed my skills as a Frontend Developer and IT Support professional by creating responsive websites, 
              troubleshooting hardware and software issues, and maintaining IT systems to ensure optimal performance.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Technology & Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: "Frontend",
                  skills: [
                    "HTML5",
                    "CSS3"
                  ],
                },
                {
                  category: "Backend",
                  skills: [
                    "PHP",
                    "MySQL",
                  ],
                },
                {
                  category: "IT Support Skills",
                  skills: ["Hardware Troubleshooting", "Software Installation", "Windows 10/11 Administration", "Printer & Peripheral Support", "Microsoft Office 365"],
                },
                     {
                  category: "Cyber Security Skills",
                  skills: ["Penetration Testing (Basic)"  ],
                }, 
                {
                  category: "Tools & Others",
                  skills: [ "Git", "GitHub", "VSCode","VirtualBox","XAMPP","Kali Linux","Nmap",],
                },
              ].map((group, i) => (
                <div
                  key={i}
                  className="space-y-4 p-6 bg-secondary/50 rounded-sm border border-border"
                >
                  <h3 className="font-semibold text-foreground text-lg">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-background border border-border text-sm rounded-full text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Experience
            </h2>
            <div className="space-y-6">
              {[
                {
                  year: "Apr 2026 - Present",
                  title: "IT Support (Pre-opening & Opersional Support) ",
                  company: "RS. Arafiq - Semarang, Central Java",
                  points: [
                    "Installed and configured operating systems, troubleshot computer hardware, printers, and other IT support devices to ensure optimal performance.",
                    "Assembled computer hardware, installed operating systems, configured devices, and performed functional testing before deployment",
                    "Provided technical support to end users by diagnosing and resolving hardware, software, and application-related issues in a timely manner.",
                    "Prepared technical documentation and maintenance reports, including issue resolution records and routine IT support activities."
                  ],
                },
              
                {
                  year: "Aug 2024 - Sep 2025",
                  title: "Admin Retur",
                  company: "Glory Electrik - Semarang, Central Java",
                  points: [
                    "Received returned products from customers, inspected the physical condition of returned items, and verified product completeness in accordance with return procedures.",
                    "Performed inspection, documentation, and filing of records related to product return processes",
                    "Classified returned products based on their condition and return reasons to support follow-up processing.",
                    "Entered return data into the system, recorded return activities, and prepared data summaries for reporting and analysis purposes.",
                    "Prepared periodic return reports, including the number of returned products, return reasons, and evaluation results to support operational decision-making."
                  ],
                },
              
                {
                  year: "Sep 2022 - Nov 2022",
                  title: "IT Support (Internship)",
                  company: "PT Panin Sekuritas",
                  points: [
                    "Installed, configured, and troubleshot hardware devices, including laptops, desktop computers, printers, and other peripherals",
                    "Installed and configured Windows operating systems, provided user application troubleshooting, and maintained database updates.  ",
                    "Assisted in preparing technical documentation and supported data backup and system security maintenance.",
                  ],  
                },
              ].map((exp, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 md:gap-8 pb-8 border-b border-border last:border-b-0"
                >
                  <div className="flex-shrink-0 md:w-48">
                    <p className="text-sm text-accent font-semibold tracking-wide">
                      {exp.year}
                    </p>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg leading-none mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-3">
                        {exp.company}
                      </p>
                    </div>
                    <ul className="space-y-2 mt-5">
                      {exp.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
