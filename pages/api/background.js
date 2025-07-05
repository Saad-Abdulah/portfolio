const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'FAST NUCES Islamabad',
                degree: 'BS \'Software Engineering\'',
                detail: "Alhamdulillah, I started my Pratical Industrial Work during my 2nd year of Bachelor's Degree in Software Engineering from FAST NUCES Islamabad.GPA = Doesn't Matter",
                year: '2023-2027'
            },
            {
                id: 1,
                title: 'Cambridge International Science College - Talagang',
                degree: 'Intermediate in \'Computer Science\'',
                detail: "Secured First Position in ICS in Rawalpindi Board with (1001/1100)91% marks.",
                year: '2021-2023',
                positionLink: {
                    text: "🏆 Click here to see Position Certificate",
                    url: "https://www.facebook.com/100044570173034/posts/843159620513036/"
                }
            },
            {
                id: 2,
                title: 'Goverment High School',
                degree: 'Matric - SSC',
                detail: "Completed my Education from Grade 6-10 by acquiring Positions in each class as a Topper and Completed matriculation exam with (1026/1100)93.2% marks",
                year: '2016-2021',
                positionLink: {
                    text: "🎓 Click here to see Position Certificate",
                    url: "https://www.facebook.com/100044570173034/posts/pfbid0VuP3RMXBjAoeTugeGYMd3oUQ17ufpvH2qcQQDv2oJSk7bstaxgxE41jZt4gh9wY8l/"
                }
            },
            {
                id: 3,
                title: 'Atta Memorial (pvt school)',
                degree: 'Grade 1 to 5',
                detail: "Completed my Early Education as a Topper by Acquiring Position in almost each className.. Alhamdulillah..!",
                year: '2011-2016'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'FAST NUCES',
                role: 'Software Enginerr',
                url: 'https://not_available',
                desc: 'As a Software Engineering undergraduate, I’ve gained practical experience through collaborative academic projects and lab work, focusing on full stack development, software architecture, and intelligent system design. I\'ve worked extensively across both Linux (Ubuntu) and Windows environments, applying my skills in areas such as {Assembly Language programming, digital logic design (DLD)(yeah..! sounds irrelevant)}, and shell scripting. I’ve designed and developed desktop applications using WinForms with SQL Server integration, and implemented structured software solutions aligned with SDLC principles, object-oriented design, and design patterns. My academic exposure includes operating systems, database management, software testing, and version control with Git. I also explored AI concepts and integrated automation into web-based systems, enhancing usability and decision-making capabilities. This foundation has equipped me with both low-level and high-level system development skills, preparing me to solve real-world problems with a deep understanding of software systems. Driven by a strong enthusiasm for AI, I continuously explore how intelligent technologies can be leveraged to build smarter, adaptive, and more impactful software solutions.',
                year: '08/2023 - Present',
                location: 'Islamabad, Pakistan'
            },
            {
                id: 2,
                title: 'Startup',
                role: 'Team Member',
                url: 'https://not_available',
                desc: 'As a core team member of a Startup, I contributed to designing and developing end-to-end web solutions, collaborating with clients to understand requirements and deliver tailored features. I also played a key role in solving real-world problems by integrating innovative AI-powered functionalities, enhancing automation, efficiency, and user experience across the platform.',
                year: '05/2025 - Present',
                location: 'Islamabad, Pakistan'
            },
            // {
            //     id: 3,
            //     title: 'Encoder Bytes',
            //     role: 'PHP Developer',
            //     url: 'https://www.encoderbytes.com/',
            //     desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
            //     year: '09/2020 - 02/2021',
            //     location: 'Peshawar, Pakistan'
            // },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}

