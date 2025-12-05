const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
        image: "/images/blog1.png",
        link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: "/images/blog2.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React", "JavaScript", "HTML & CSS", "Tailwind"],
    },
    {
        category: "Backend",
        items: ["Python", "Node.js", "Django", "Flask"],
    },
    {
        category: "DevOps & Cloud",
        items: ["AWS", "Docker", "Kubernetes","Nginx", "Terraform", "Linux","Bash", "Helm", "Vault", "Packer"],
    },
    {
        category: "Database",
        items: ["PostgreSQL", "SQLite (SQLAlchemy)"],
    },
    {
        category: "Monitoring",
        items: ["Grafana", "Prometheus", "Uptime Kuma"],
    },
    {
        category: "Tools & Design",
        items: ["GitHub","GitLab", "Postman", "Jira", "Figma", "Canva"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/Marco-03/",
    },
    {
        id: 2,
        text: "Email",
        icon: "/icons/atom.png",
        bg: "#4bcb63",
        link: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwCwVMhXHTngBhsgKQDZgWpvkmLcsjKpgkrtsRCHBckfNHxvVXXTkHmStFCtnhLNFmRKdD",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/marco-luchian-46293a244/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/casual-me.jpg",
    },
    {
        id: 2,
        img: "/images/diploma.webp",
    },
    {
        id: 3,
        img: "/images/marco.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "ImageShark Website Application",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "ImageShark Details.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "ImageShark is a secure, scalable platform I engineered for encrypted media sharing at private events.",
                        "Instead of standard uploads, it uses Fernet encryption and JWTs to ensure that user data stays strictly private.",
                        "Think of it like a digital vault for event photos—ensuring only the right people have the key to access memories.",
                        "Built with Flask and PostgreSQL, it showcases my skills in full-stack security, data protection, and scalability.",
                    ],
                },
                {
                    id: 2,
                    name: "github-repo.url",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://bit.ly/GitHub-Marco-03", // Link from CV
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "imageshark.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "DevOps Dashboard",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Dashboard Info.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "This is a real-time monitoring dashboard designed to track server uptime, resource usage, and API health.",
                        "Instead of manually checking logs, it visualizes system performance instantly, allowing for proactive maintenance.",
                        "Think of it like a cockpit for your infrastructure—giving you full control and visibility over your servers.",
                        "Built with Python, Docker, Prometheus, and Grafana, it highlights my passion for automation and reliable system operations.",
                    ],
                },
                {
                    id: 2,
                    name: "code-location.url",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://bit.ly/GitHub-Marco-03",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "dashboard.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Task Manager API",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "API Documentation.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The Task Manager API is a robust backend solution for handling secure user authentication and complex task management.",
                        "Instead of a simple to-do list app, it provides a structured REST architecture focusing on security and data integrity.",
                        "Think of it like the engine under the hood—handling all the logic efficiently so the front end runs smooth as silk.",
                        "Built with Flask, SQLAlchemy, and JWT, it demonstrates my ability to design secure APIs and structured databases.",
                    ],
                },
                {
                    id: 2,
                    name: "api-docs.url",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://bit.ly/GitHub-Marco-03",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "structure.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/marco.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/casual-me.jpg",
        },
        {
            id: 3,
            name: "diploma.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/diploma.webp",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/marco.jpg",
            description: [
                "Hey! I’m Marco 👋, a DevOps enthusiast and Developer who loves building scalable systems and automating the boring stuff.",
                "I specialize in Python, Cloud Infrastructure, and Full-stack dev—always aiming to write code that is clean, efficient, and reliable.",
                "I’m genuinely driven by curiosity and a mindset of continuous improvement. I thrive on solving complex problems and am constantly learning new technologies to stay ahead of the curve.",
                "When I’m not configuring servers or debugging pipelines, you'll find me at the gym pushing my limits, because a strong discipline in fitness translates to strong discipline in code 💪."
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };