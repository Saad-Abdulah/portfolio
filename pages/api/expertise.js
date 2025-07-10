const expertise = [
    {
        id: 0,
        title: 'Full Stack Web Development (MERN Stack)',
        desc: 'As a MERN Stack Developer, I design and develop dynamic, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. I bring proven expertise in server-side rendering, RESTful API integration, and optimized database architecture. My focus is on delivering scalable, secure, and user-centric solutions that align seamlessly with your business goals.',
        skills : [
            {
              title: "MERN Stack",
              level: "95%",
            },
            {
              title: "Database Design (MongoDB, SQL, Postgres, Firebase)",
              level: "95%",
            },
            {
              title: "Testing & Debugging (Jest, Mocha)",
              level: "50%",
            },
          ]
    },
    {
        id: 1,
        title: 'Data Science Career',
        desc: 'As a Data Science Career, I have a strong foundation in data analysis, machine learning, and artificial intelligence. I specialize in using Python, R, and SQL to extract insights from data, build predictive models, and develop AI-powered solutions. My expertise enables organizations to make data-driven decisions and drive innovation through advanced analytics.',
        skills : [
            {
              title: "Python",
              level: "90%",
            },
            {
              title: "SQL",
              level: "90%",
            },
            {
              title: "Probability & Statistics",
              level: "90%",
            },
            {
              title: "Numpy, Pandas, Matplotlib, Seaborn",
              level: "95%",
            },
          ]
    },
    {
        id: 2,
        title: 'DevOps & Cloud Deployment',
        desc: 'I have hands-on experience with core DevOps practices, including Docker-based containerization, CI/CD pipeline setup, cloud deployments via AWS CLI, and seamless version control integration. My goal is to streamline collaboration between development and operations teams to enable faster, more reliable software delivery.',
        skills : [
            {
              title: "Docker",
              level: "60%",
            },
            {
              title: "CI/CD",
              level: "60%",
            },
            {
              title: "Git/Github",
              level: "60%",
            },
          ]
    },
    {
        id: 3,
        title: 'UI/UX Design and Prototyping',
        desc: 'With expertise in tools like Figma, Canva, and Photoshop, I craft intuitive user interfaces and seamless user experiences. Participating in hackathons and freelance projects has strengthened my skills in wireframing, prototyping, and responsive design, fueling my passion for creative innovation.',
        skills : [
            {
              title: "Figma",
              level: "75%",
            },
            {
              title: "Canva",
              level: "75%",
            },
            {
              title: "Photoshop",
              level: "60%",
            },
            {
              title: "Video Editing",
              level: "80%",
            },
          ]
    },
    {
        id: 4,
        title: 'Database Design (MongoDB, SQL, Postgres, Firebase)',
        desc: 'As a Database Developer, I design and manage robust, scalable, and efficient databases using MongoDB, SQL, and Firebase. I specialize in optimizing data storage, query optimization, and ensuring high availability and security. My expertise ensures seamless data management and seamless integration with web applications.',
        skills : [
            {
              title: "MongoDB",
              level: "95%",
            },
            {
              title: "SQL",
              level: "90%",
            },
            {
              title: "Postgres",
              level: "90%",
            },
            {
              title: "Firebase",
              level: "90%",
            },
          ]
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
