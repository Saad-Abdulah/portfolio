const portfolio = [
    {
        id: 0,
        projectName: "FAST Career Connect",
        codeUrl: "https://github.com/Saad-Abdulah/FAST-Career-Connect",
        url: "https://www.linkedin.com/posts/saadabdullah786_%F0%9D%90%85%F0%9D%90%80%F0%9D%90%92%F0%9D%90%93-%F0%9D%90%82%F0%9D%90%9A%F0%9D%90%AB%F0%9D%90%9E%F0%9D%90%9E%F0%9D%90%AB-%F0%9D%90%82%F0%9D%90%A8%F0%9D%90%A7%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%9C%F0%9D%90%AD-activity-7329773721219395584-VPds",
        demoVideo: "https://youtu.be/TUju0Hgdszk?rel=0&showinfo=0",
        thumbnailimage: "projects/thumbnails/FAST_Career_Connect.png",
        projectDetail: "A .NET WinForms Desktop App using C# & MSSQL to manage student-recruiter interactions. Includes ER-based DB, role-based forms (Student, Recruiter, TPO, Booth Coordinator), RDLC reports, and complete job placement workflow (profiles, job posting, interviews, hiring, monitoring, stats & reports).",
        technologiesUsed: [
            {
                tech: "C#",
                src: "https://img.icons8.com/nolan/64/c-sharp-logo.png"
            },
            {
                tech: "SQL",
                src: "https://img.icons8.com/fluency/48/sql.png"
            },
            {
                tech: "RDLC Reports",
                src: "https://img.icons8.com/3d-fluency/48/business-report.png",
            },
            {
                tech: ".NET framework (Windows Forms)",
                src: "https://img.icons8.com/fluency/48/google-forms.png"
            },
        ],
        category: "C#"
    },
    {
        id: 1,
        projectName: "PACMAN",
        codeUrl: "https://github.com/Saad-Abdulah/PACMAN_OS_Sem-4",
        url: "https://www.linkedin.com/posts/saadabdullah786_pacman-operatingsystems-gamedevelopment-activity-7342557549025542144-m7Dq",
        demoVideo: "https://youtu.be/caOSI6g6oak?rel=0&showinfo=0",
        thumbnailimage: "projects/thumbnails/Pacman_OS_Demo.png",
        screenshots: [
            "projects/Pacman/Start-Menu.jpg",
            "projects/Pacman/playing-1.jpg",
            "projects/Pacman/playing-2.jpg",
            "projects/Pacman/terminal.jpg",
            "projects/Pacman/UI-thread-code.png",
            "projects/Pacman/board-code.png",
            "projects/Pacman/sin-code.png",
            "projects/Pacman/threads-main-code.png"
        ],
        projectDetail: "⁠Developed a 𝙢𝙪𝙡𝙩𝙞-𝙩𝙝𝙧𝙚𝙖𝙙𝙚𝙙 Pac-Man clone using C, OpenGL, and SDL2, implementing key OS concepts like 𝙘𝙤𝙣𝙘𝙪𝙧𝙧𝙚𝙣𝙘𝙮, 𝙨𝙮𝙣𝙘𝙝𝙧𝙤𝙣𝙞𝙯𝙖𝙩𝙞𝙤𝙣, and 𝙚𝙫𝙚𝙣𝙩-𝙙𝙧𝙞𝙫𝙚𝙣 programming. Game logic handled through 𝙥𝙤𝙨𝙞𝙭 𝙩𝙝𝙧𝙚𝙖𝙙𝙨, 𝙢𝙪𝙩𝙚𝙭𝙚𝙨, 𝙨𝙚𝙢𝙖𝙥𝙝𝙤𝙧𝙚𝙨, and a thread-safe input queue for real-time gameplay. Showcased responsive UI, ghost AI, and clean memory management in a fully functional arcade-style experience.",
        technologiesUsed: [
            {
                tech: "C",
                src: "https://img.icons8.com/arcade/64/c.png"
            },
            {
                tech: "OpenGL",
                src: "projects/techstack/opengl.png",
            },
            {
                tech: "SDL2",
                src:"projects/techstack/sdl-2.png",
            },
            ],
        category: "C/C++"
    },
    {
        id: 2,
        projectName: "Brick Breaker in Assembly",
        codeUrl: "https://github.com/Saad-Abdulah/Brick-Breaker-Assembly_3rd-Sem",
        url: "https://www.linkedin.com/posts/saadabdullah786_customabruserabrinterface-pauseabroption-activity-7288198763410604033-PW2a",
        demoVideo: "https://youtu.be/OwNFts5aFio?rel=0&showinfo=0",
        thumbnailimage: "projects/thumbnails/brickbreaker.jpg",
        screenshots: [
            "projects/brickbreaker/Demo-Game-Play.jpg",
            "projects/brickbreaker/Code_SS-1.png",
            "projects/brickbreaker/Code_SS-2.png",
            "projects/brickbreaker/Demo-Propsal-Showcase.jpg",
            "projects/brickbreaker/Code_SS-3.png",
            "projects/brickbreaker/Code_SS-4.png",
        ],
        projectDetail: "A Graphical Brick Breaker game in Assembly lan where the player controls a paddle to bounce a ball and destroy bricks. Game difficulty dependent on level # [1,2,3] | Speed ∝ Level# | Num(hits) to break a brick = Level#",
        technologiesUsed: [
            {
                tech: "Assembly Language",
                src: "https://img.icons8.com/nolan/64/assembly.png"
            },
            {
                tech: "irvine",
                src: "https://img.icons8.com/material-rounded/50/not-applicable.png"
            },
        ],
        category: "Assembly"
    },
    {
        id: 3,
        projectName: "Blog App",
        codeUrl: "https://github.com/Saad-Abdulah/Blog-Social-App-MERN",
        // url: ,
        //demoVideo: "https://youtu.be/5cg2H63Tz90?si=21BwQakSifWN59vB",
        screenshots:["projects/blogapp/Blog_Card.png","projects/blogapp/Blog_Create_Page.png", "projects/blogapp/Blog_Info_Page.png", "projects/blogapp/Comment_On_Post.png", "projects/blogapp/Home_Page.png", "projects/blogapp/Login_Page.png", "projects/blogapp/Search_Blog.png", "projects/blogapp/Sign_Up_Page_.png"],
        thumbnailimage: "projects/thumbnails/Blog_App.png",
        projectDetail: "A dynamic MERN-based blog platform where users can register, log in, and publish blogs with custom cover images. Includes profile image support, a rich text editor, and search functionality. Readers can engage through likes, comments, and post sharing. | Secure Auth | Blog Image Upload | User Avatars | Real-time Engagement | Modern UI/UX.",
        technologiesUsed: [
            {
                tech: "MongoDB",
                src: "https://img.icons8.com/color/48/mongodb.png"
            },
            {
                tech: "Express",
                src: "https://img.icons8.com/nolan/64/express-js.png"
            },
            {
                tech: "React",
                src: "https://img.icons8.com/nolan/64/react-native.png",
            },
            {
                tech: "NodeJS",
                src:"https://img.icons8.com/fluency/48/node-js.png"
            },
            {
                tech: "JWT & bcryptjs",
                src: "https://img.icons8.com/color/48/java-web-token.png",      
            },
        ],
        category: "Web Dev"
    },
    {
        id: 4,
        projectName: "Firebase Ecommerce",
        codeUrl: "https://github.com/Saad-Abdulah/ecommerce-app-firebase",
        // url: ,
        //demoVideo: "https://youtu.be/5cg2H63Tz90?si=21BwQakSifWN59vB",
        thumbnailimage: "projects/thumbnails/Ecommerce-Firebase.png",
        screenshots: [
            "projects/Ecommerce-firebase/Home-page.png",
            "projects/Ecommerce-firebase/Product-info.png",
            "projects/Ecommerce-firebase/CartPage.png",
            "projects/Ecommerce-firebase/Admin-Dashboard.png",
            "projects/Ecommerce-firebase/Add-product.png",
            "projects/Ecommerce-firebase/Search-function.png",
            "projects/Ecommerce-firebase/confirmation-msgfordel.png"
        ],
        projectDetail: "A modern Firebase-powered E-commerce platform featuring secure user authentication and role-based access control. Users can browse products, manage shopping carts, and access personalized dashboards. Admins have exclusive access to product management functionalities including adding and updating products. The platform showcases a responsive Material Tailwind UI, Redux state management, and protected routing for enhanced security. | Secure Auth | Role-based Access | Cart Management | Admin Dashboard | Modern UI/UX",
        technologiesUsed: [
                {
                    tech: "React",
                    src: "https://img.icons8.com/nolan/64/react-native.png",
                },
                {
                    tech: "Firebase",
                    src: "https://img.icons8.com/color/48/firebase.png",
                },
            ],
        category: "Web Dev"
    },
    {
        id: 5,
        projectName: "ECommerce-MERN",
        codeUrl: "https://github.com/Saad-Abdulah/Ecommerce-MERN/",
        // url: ,
        //demoVideo: "https://youtu.be/5cg2H63Tz90?si=21BwQakSifWN59vB",
        screenshots: [
            "projects/Ecommerce-MERN/Homepage-FullView.png",
            "projects/Ecommerce-MERN/Product-Info.png",
            "projects/Ecommerce-MERN/User-Cart-Route.png",
            "projects/Ecommerce-MERN/Checkout-Route.png",
            "projects/Ecommerce-MERN/Order-Confirmation.png",
            "projects/Ecommerce-MERN/User-Profile.png",
            "projects/Ecommerce-MERN/User-Orders-Check.png",
            "projects/Ecommerce-MERN/User-Wishlist.png",
            "projects/Ecommerce-MERN/User-Reviews.png",
            "projects/Ecommerce-MERN/Admin-allProducts-Route.png",
            "projects/Ecommerce-MERN/Admin-Orders-Route.png",
            "projects/Ecommerce-MERN/Add-Product.png",
            "projects/Ecommerce-MERN/Price-Sorting.png",
            "projects/Ecommerce-MERN/View-Shipping-Address.png"
        ],
        thumbnailimage: "projects/Ecommerce-MERN/Homepage-FullView.png",
        projectDetail: "A comprehensive MERN stack e-commerce platform with advanced features for both users and administrators. Users can browse products, manage their shopping cart, create wishlists, track orders, and leave reviews. The platform includes secure authentication with OTP verification, multiple address management, and a streamlined checkout process. Administrators have access to a powerful dashboard for product management, order processing, and sales analytics. | JWT Authentication | Redux State Management | Material UI Components | Responsive Design | Order Tracking | User Reviews | Admin Dashboard | Cart & Wishlist | Multiple Payment Methods | Email Notifications.",
        technologiesUsed: [
            {
                tech: "MongoDB",
                src: "https://img.icons8.com/color/48/mongodb.png"
            },
            {
                tech: "Express.js",
                src: "https://img.icons8.com/nolan/64/express-js.png"
            },
            {
                tech: "React.js",
                src: "https://img.icons8.com/nolan/64/react-native.png",
            },
            {
                tech: "Node.js",
                src: "https://img.icons8.com/fluency/48/node-js.png"
            },
            {
                tech: "Redux Toolkit",
                src: "https://img.icons8.com/color/48/redux.png"
            },
            {
                tech: "Material UI",
                src: "https://img.icons8.com/color/48/material-ui.png"
            },
            {
                tech: "JWT",
                src: "https://img.icons8.com/color/48/java-web-token.png"
            },
            {
                tech: "SMTP",
                src: "https://img.icons8.com/fluency/48/mail.png"  // Using mail icon for SMTP
            }
        ],
        category: "Web Dev"
    },
    {
        id: 6,
        projectName: "FormCO MERN Platform",
        codeUrl: "https://github.com/Saad-Abdulah/FormCo-MERN",
        thumbnailimage: "projects/FormCo/Application-Organizer.png",
        screenshots: [
            "projects/FormCo/Application-Organizer.png",
            "projects/FormCo/Certificate-Generation.png",
            "projects/FormCo/Events:all.png",
            "projects/FormCo/Home-Page.png",
            "projects/FormCo/New-Competition-1.png",
            "projects/FormCo/New-Competition-2.png",
            "projects/FormCo/Sign-Up-Page.png",
            "projects/FormCo/Student-Dashboard.png",
            "projects/FormCo/Student-Profile.png"
        ],
        projectDetail: "A comprehensive competition management collaborative platform, FormCO (platFORM for COmpetitions) provides a complete solution for organizations to create, manage, and host competitions while offering students an intuitive platform to discover and participate in various events. Features include multi-competition management, brand customization, organizer management, application tracking, automated certificate generation, payment integration, team management, and real-time status updates. Built with Next.js 15, React 19, TypeScript, MongoDB, and modern authentication systems.",
        technologiesUsed: [
            {
                tech: "React 19",
                src: "https://img.icons8.com/nolan/64/react-native.png"
            },
            {
                tech: "TypeScript",
                src: "https://img.icons8.com/color/48/typescript.png"
            },
            {
                tech: "MongoDB",
                src: "https://img.icons8.com/color/48/mongodb.png"
            },
            {
                tech: "NextAuth.js",
                src: "https://img.icons8.com/color/48/java-web-token.png"
            },
            {
                tech: "JWT",
                src: "https://img.icons8.com/color/48/java-web-token.png"
            },
            {
                tech: "bcryptjs",
                src: "https://img.icons8.com/color/48/security-checked.png"
            },
            {
                tech: "Canvas",
                src: "https://img.icons8.com/deco-color/48/easel.png"
            },
            {
                tech: "Nodemailer",
                src: "https://img.icons8.com/fluency/48/mail.png"
            }
        ],
        category: "Web Dev"
    },
    // {
    //     id: 0,
    //     projectName: "ALSN",
    //     url: "https://alsn.app/",
    //     image: "projects/alsn.png",
    //     projectDetail: "ASLN drives digital transformation with certified document translation services. In an interconnected world where seamless communication is imperative, they are strategically positioned to cater to the needs of businesses, individuals, and organizations.",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: ".net"
    //         },
    //         {
    //             tech: "REST API's"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    // {
    //     id: 0,
    //     projectName: "FirmSanad",
    //     url: "/domain-expired",
    //     image: "projects/firmsanad.png",
    //     projectDetail: "Invest in Saudi Arabia, Streamline Your Business Setup Process in Saudi Arabia with FirmSanad Simplify the process of obtaining licenses and starting a business in Saudi Arabia with our streamlined platform.",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: ".net"
    //         },
    //         {
    //             tech: "REST API's"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    // {
    //     id: 0,
    //     projectName: "Fateh Al Mustaqbil",
    //     url: "https://fatehtour.com/",
    //     image: "projects/fateh.png",
    //     projectDetail: "Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to cater to the interests of travelers across the globe, founded in 2023 in Riyadh, Saudi Arabia. Their expertise lies in crafting exceptional journeys tailored to each client's unique requirements, whether it be ticketing, hotel bookings, or visa assistance.",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: ".net"
    //         },
    //         {
    //             tech: "REST API's"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    // {
    //     id: 0,
    //     projectName: "Tojjar",
    //     url: "/domain-expired",
    //     image: "projects/tojjar.png",
    //     projectDetail: "Tojjar is ecommerce website,  where you can open your own store and sell products of different brands!",
    //     technologiesUsed: [
    //         {
    //             tech: "Nextjs with SSR"
    //         },
    //         {
    //             tech: "Laravel"
    //         },
    //         {
    //             tech: "REST API's"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    // {
    //     id: 1,
    //     projectName: "Otawix",
    //     url: "https://b2c.otawix.com/",
    //     image: "projects/otawix.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "NextJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "REST API's"
    //         },
    //         {
    //             tech: "MUI"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    // {
    //     id: 2,
    //     projectName: "Spatay",
    //     url: "https://spatay.com/",
    //     image: "projects/spatay.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "REST API's"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
