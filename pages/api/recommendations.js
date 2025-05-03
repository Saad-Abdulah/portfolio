// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Husnain Ashfaq',
    image: "images/husnain.jpeg",
    designation: 'Software Engineer | Full Stack + AI Integration | Develop Large Scale Web Apps',
    view: "Hey everyone! I wanted to take a moment to recommend Saad Abdullah for any Web dev opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of UI design and backend concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Saad is a reliable and dedicated team member who would be a great asset to any developement team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/husnain-ashfaq-158aba216/"
  },
  {
    id: 1,
    name: 'Amir Shahzad',
    image: "images/amir.jpg",
    designation: 'Full Stack Web Developer | Software Engineer',
    view: "I had the privilege of working alongside Saad on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team for a Project, where Saad's professionalism and attention to detail shone brightly. I wholeheartedly endorse Saad for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/amir-shahzad-5a250029b/"
  },
  {
    id: 2,
    name: 'Nouman Ahmed',
    image: "images/nomi.jpeg",
    designation: 'Full Stack Web Developer',
    view: "I strongly recommend Saad as a skilled and versatile software engineer with a strong command of modern frontend architectures and a deep understanding of component-driven UI design principles. His expertise extends across backend systems and API integrations, enabling him to engineer scalable, maintainable, and performance-optimized solutions. Saad consistently demonstrates analytical thinking, technical precision, and a commitment to high-quality delivery - making him an asset to any cross-functional development team.",
    linkednURL: "https://www.linkedin.com/in/nouman-ahmed-1843b6276/"
  },
  {
    id: 3,
    name: 'Burhan Aslam',
    image: "images/burhan.jpeg",
    designation: 'MERN Stack Developer at Productbox',
    view: "I highly recommend Saad Abdullah for roles in modern web application development. He demonstrates a solid grasp of front-end frameworks, server-side logic, and system design, enabling him to deliver end-to-end solutions with clarity and efficiency. His professionalism, adaptability, and commitment to writing clean, maintainable code make him a strong contributor to any engineering team.",
    linkednURL: "https://www.linkedin.com/in/burhan-aslam/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
