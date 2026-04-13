const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tammy-ralte-0744851b5/",
  },
  {
    label: "GitHub",
    href: "https://github.com/tomgumR",
  },
];

const featuredProjects = [
  {
    title: "Avatar-Driven Interactive Experience",
    summary: "",
    stack: ["AR/VR", "Avatar Interaction", "Unity or WebXR"],
    demoLabel: "Demo coming soon",
    projectUrl: "#",
    repoUrl: "#",
  },
  {
    title: "3D Reconstruction of Room with 3D Gaussian Splatting and Exploring in VR",
    summary: "",
    stack: ["3D Reconstruction", "XR", "Real-Time Systems"],
    demoLabel: "Demo coming soon",
    projectUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Augmented Reality Game Prototype",
    summary: "",
    stack: ["AR Games", "Computer Vision", "Interactive Systems"],
    demoLabel: "Demo coming soon",
    projectUrl: "#",
    repoUrl: "#",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="nameplate">Tammy Ralte</p>
          <p className="lede">
            I am a PhD candidate at the Indian Institute of Science (IISc),
            Bangalore, advised by{" "}
            <a
              className="inline-link"
              href="https://cambum.net/PB/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Prof. Pradipta Biswas
            </a>{" "}
            in the{" "}
            <a
              className="inline-link"
              href="https://cambum.net/I3D.htm"
              target="_blank"
              rel="noreferrer noopener"
            >
              I3D Lab
            </a>
            . My research and development interests span 3D reconstruction,
            AR/VR, 3D computer vision, Gaussian Splatting, and intelligent
            interactive systems. I am particularly interested in building
            immersive experiences through real-time reconstruction,
            avatar-driven interaction, XR systems, and augmented reality games.
            I previously completed my M.Tech in Augmented Reality and Virtual
            Reality from the School of AI and Data Science, IIT Jodhpur.
          </p>
          <div className="actions">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className="button"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noreferrer noopener"
                    : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="status-note">Portfolio in progress ...</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured Projects</p>
          <h2>Selected work with video demos</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-body">
                <h3>{project.title}</h3>
                {project.summary ? <p>{project.summary}</p> : null}
                <p className="demo-note">{project.demoLabel}</p>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.projectUrl}>Project Link</a>
                  <a href={project.repoUrl}>GitHub Repo</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
