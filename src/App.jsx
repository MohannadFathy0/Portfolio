import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Code2,
  Terminal,
  ExternalLink,
} from "lucide-react";

function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-slate-700 p-6 rounded-xl shadow-lg">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <ul className="text-slate-300 space-y-1 list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function WebsiteCard({ title, description, imageUrl, websiteLink, githubLink }) {
  return (
    <div className="bg-slate-700 rounded-xl shadow-lg overflow-hidden flex flex-col">
      <div className="relative h-48 overflow-hidden bg-slate-600">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-300 mb-4 flex-grow">{description}</p>
        <div className="flex gap-3">
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Website
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-3xl mb-6 bg-clip-text text-purple-400">
              Hi, I'm Mohannad Fathy
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Software Developer
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Creating beautiful, responsive, and user-friendly web applications
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/MohannadFathy0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohannad-fathy-b4656b299/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:mohannadfathy.123@gmail.com"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Code2 className="w-8 h-8" />}
              title="Frontend Development"
              skills={["React", "Vue.js", "HTML/CSS", "JavaScript", "TypeScript"]}
            />
            <SkillCard
              icon={<Database className="w-8 h-8" />}
              title="UI/UX Design"
              skills={["Tailwind CSS", "Responsive Design", "Figma", "Material UI", "CSS Grid/Flexbox"]}
            />
            <SkillCard
              icon={<Server className="w-8 h-8" />}
              title="Backend Development"
              skills={["Java", "Spring Boot", "Django", "Node.js", "REST APIs"]}
            />
            <SkillCard
              icon={<Terminal className="w-8 h-8" />}
              title="Databases & Tools"
              skills={["PostgreSQL", "MongoDB", "Git", "NPM/Yarn", "Docker"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WebsiteCard
              title="Krok Plus"
              description="A comprehensive medical education platform featuring thousands of questions and exams specifically designed for medical students. Prepare for licensing exams and assessments with high-quality, exam-aligned practice materials."
              imageUrl="/public/krok.png"
              websiteLink="https://krokplus.com/en"
            />
            <WebsiteCard
              title="علم - AI Tools"
              description="An AI-powered platform specialized in searching and analyzing Arabic manuscripts. Advanced artificial intelligence tools help researchers and scholars efficiently explore and retrieve information from Arabic historical and academic documents."
              imageUrl="/public/ALM.png"
              websiteLink="https://3-lm-ai-tools.vercel.app/#"
            />
            <WebsiteCard
              title="إتقان - Courses"
              description="A comprehensive Islamic education platform offering specialized courses in religious studies and Islamic sciences. Access high-quality educational content designed to deepen knowledge and understanding of religious topics."
              imageUrl="/public/itqan.png"
              websiteLink="https://xn--kgbei0hva.com/"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-slate-300 mb-8">
              I'm always interested in hearing about new projects and
              opportunities.
            </p>
            <a
              href="mailto:mohannadfathy.123@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400">
        <p>© 2025 Software Developer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
