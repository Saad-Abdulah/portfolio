const expertise = [
    {
        id: 0,
        title: 'Full Stack Development (MERN Stack)',
        desc: 'As a skilled MERN stack developer, I build robust and dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I have hands-on experience with server-side rendering, API integration, and efficient database management. I specialize in delivering scalable, performance-optimized web solutions tailored to client needs.',
    },
    {
        id: 1,
        title: 'DevOps & Cloud Deployment',
        desc: "I have foundational experience in DevOps practices, including containerization with Docker, CI/CD workflows, cloud deployment using AWS CLI, and version control integration. I aim to bridge the gap between development and operations for faster, more reliable software delivery.",
    },
    {
        id: 2,
        title: 'Agile Project Management (Scrum & Jira)',
        desc: "I apply Agile and Scrum methodologies to manage projects effectively. Using Jira for sprint planning, task assignment, and progress tracking, I ensure timely and high-quality delivery. My commitment to Agile practices fosters collaboration, transparency, and continuous improvement within development teams.",
    },
    {
        id: 3,
        title: 'UI/UX Design and Prototyping',
        desc: 'With expertise in tools like Figma, Adobe XD, and Illustrator, I craft intuitive user interfaces and seamless user experiences. Participating in hackathons and freelance projects has strengthened my skills in wireframing, prototyping, and responsive design, fueling my passion for creative innovation.',
    },
    {
        id: 4,
        title: 'Version Control and Collaboration (Git & GitHub)',
        desc: "I leverage Git and GitHub for efficient version control, code review, and team collaboration. Utilizing pull requests, branching strategies, and continuous integration, I maintain code quality and streamline development workflows across teams.",
    },
    {
        id: 5,
        title: 'Open Source Contributor',
        desc: "I actively contribute to open-source projects, embracing the opportunity to collaborate with global developers, learn industry best practices, and give back to the community. Open-source contributions have sharpened my coding skills and expanded my professional network.",
    },
];

export default function handler(req, res) {
    res.status(200).json(expertise)
}
