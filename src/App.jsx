import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Code2,
  Terminal,
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

function ProjectCard({ title, description, tech, githubLink }) {
  return (
    <div className="bg-slate-700 p-6 rounded-xl shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-slate-600 text-sm px-2 py-1 rounded-md text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline mt-auto"
      >
        View on GitHub
      </a>
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
              Backend Developer
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Building robust, scalable server-side solutions
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
              icon={<Server className="w-8 h-8" />}
              title="Backend Development"
              skills={["Java", "Spring Boot", "Python", "Django"]}
            />
            <SkillCard
              icon={<Database className="w-8 h-8" />}
              title="Databases"
              skills={["PostgreSQL", "MongoDB", "Redis", "MySQL"]}
            />
            <SkillCard
              icon={<Code2 className="w-8 h-8" />}
              title="API Development"
              skills={["REST", "GraphQL", "WebSockets", "gRPC"]}
            />
            <SkillCard
              icon={<Terminal className="w-8 h-8" />}
              title="DevOps"
              skills={["Docker", "Kubernetes", "CI/CD", "AWS"]}
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
            <ProjectCard
              title="E-Commerce Backend"
              description="Ongoing development focused on improving user experience and scalability."
              tech={["Java", "MySQL", "JPA", "Docker"]}
              githubLink="https://github.com/MohannadFathy0/Spring-boot-E-Commerce"
            />
            <ProjectCard
              title="Real-time Chat app"
              description="Built a scalable real-time chat application with user authentication and message persistence, ensuring fast and secure messaging."
              tech={["Java", "MySQL", "JavaScript", "WebSockets"]}
              githubLink="https://github.com/MohannadFathy0/web-socket-app"
            />
            <ProjectCard
              title="API Gateway"
              description="Developed an API Gateway to route requests to appropriate microservices, ensuring secure and efficient communication across services."
              tech={["Java", "Microservices", "Spring Cloud", "eureka"]}
              githubLink="https://github.com/MohannadFathy0/spring-boot-microservices"
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
        <p>© 2025 Backend Developer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
