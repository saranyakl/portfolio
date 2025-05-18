function ProjectsPage() {
    const projectsList = [
        {
            title: "Kitchen cart",
            description: "Implementation of a shopping cart with design taken from frontend projects.",
            time: "Feb 2025",
            project_link: "https://product-list-with-cart-sigma-three.vercel.app/",
            skills: ['HTML','CSS','Javascript']
        },
        {
            title: "Blog preview",
            description: "Simple one page website to show pixel perfect implementation of a design from frontend projects.",
            time: "Jan 2025",
            project_link: "https://blog-preview-frontend-project.vercel.app/",
            skills: ['HTML','CSS','Javascript']
        }
    ]
    return (
      <div className="ProjectsPage">
        {projectsList.map(project => (
        <div className='project-wrapper'>
          <div className="project-time">
          {project['time'].toUpperCase()}
          </div>
          <div className="project-body">
            <div className="project-title">
                <a href={project['project_link']} target="_blank" rel="noopener noreferrer">
                {project['title']}
                </a>
            </div>
            <div className="project-description">{project['description']}</div>
            <div className="project-skill-wrapper">
            {project['skills'].map(skill => (
                <div className="project-skill">{skill}</div>
            ))}
            </div>
          </div>
        </div>
    ))}
      </div>
    );
  }
  
  export default ProjectsPage;