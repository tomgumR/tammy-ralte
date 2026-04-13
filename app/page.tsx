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
    title: "Immersive Reconstruction Project",
    summary:
      "A placeholder project card ready for your first demo video, GitHub repository, and short research-oriented explanation.",
    stack: ["3D Reconstruction", "XR", "Real-Time Systems"],
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    projectUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Avatar-Driven Interactive Experience",
    summary:
      "Use this slot for a project focused on avatars, interaction design, or an AR/VR prototype with a short recorded demo.",
    stack: ["AR/VR", "Avatar Interaction", "Unity or WebXR"],
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    projectUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Augmented Reality Game Prototype",
    summary:
      "Highlight a game or intelligent interactive system here, with links to a live demo, repository, or a case study page.",
    stack: ["AR Games", "Computer Vision", "Interactive Systems"],
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
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
        </div>

        <aside className="hero-card">
          <p className="card-label">Focus Areas</p>
          <ul>
            <li>3D Reconstruction</li>
            <li>Gaussian Splatting</li>
            <li>AR/VR and XR Systems</li>
            <li>3D Computer Vision</li>
            <li>Avatar-Driven Interaction</li>
            <li>Augmented Reality Games</li>
          </ul>
        </aside>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured Projects</p>
          <h2>Selected work with video demos</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="video-frame">
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} demo video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
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

      <section className="section split">
        <div>
          <p className="eyebrow">CV</p>
          <h2>Academic and project background</h2>
        </div>
      </section>
    </main>
  );
}
