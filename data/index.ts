export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I value strong client partnerships and believe in open, transparent communication throughout every project.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "genuine enthusiasm for tech and a strong focus on building impactful digital solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Event Management App",
    des: "Explore an event management app integrated with stripe connect and queue system",
    img: "/ticket.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/strip.jpg",
      "/next.svg",
      "/c.svg",
    ],
    link: "https://event-ticket-mu.vercel.app/",
  },
  {
    id: 2,
    title: "Avante consulting Solutions Web App",
    des: "Application show the vision, the mission, and the core value of the company and more",
    img: "/p1.png",
    iconLists: ["/react.svg", "/tail.svg", "node.svg", "/mongodb.svg"],
    link: "https://avantecs.netlify.app/",
  },
  {
    id: 3,
    title: "Next Generation Bank App",
    des: "Explore a banking application designed",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://next-generation-banking.netlify.app/",
  },
  {
    id: 4,
    title: "Inventory management App",
    des: "Manage products and Sales",
    img: "/inventory.png",
    iconLists: [
      "/re.svg",
      "next.svg",
      "/tail.svg",
      "/ts.svg",
      "ec2.svg",
      "rds.svg",
      "s3.svg",
    ],
    link: "https://master.dv89fstqjpcvt.amplifyapp.com/dashboard",
  },
  {
    id: 5,
    title: "Ecommerce with payment functionalities",
    des: "An ecommerce application with model after Amazon",
    img: "/shopit.jpeg",
    iconLists: ["/react.svg", "/strip.jpg", "node.svg", "mongodb.svg"],
    link: "https://techwithchizzy-ecommerce.onrender.com/",
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Chizoba on the front-end development of our ticketing website, and I couldn't be more satisfied with the results. From the beginning, Sunday demonstrated a strong understanding of modern UI/UX principles and delivered a clean, responsive, and user-friendly interface that perfectly matched our requirements.\nHe was professional, communicative, and receptive to feedback throughout the entire process. Sunday delivered on time and made sure every detail was addressed. His work has significantly improved the user experience on our platform.I highly recommend Chizoba to anyone looking for a skilled and reliable front-end developer(full stack ). Looking forward to working with him again in the future!",
    name: "Saidat Agoola",
    title: "Sale Manager of Avante Consulting solutions",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Uche Nwabeeke",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "aws",
    img: "/aws1.svg",
    nameImg: "/webservice.png",
  },
  {
    id: 3,
    name: "NAMECHEAP",
    img: "/n.svg",
    nameImg: "/namecheap.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/net.svg",
    nameImg: "/netlify.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer ",
    desc: "Developed the company's offical web site using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Fullstack Developer",
    desc: "Designed and developed a ticketing application that is used in Uk, Nigeria and Morocco",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Update & Maintained Running Applications",
    desc: "Maintained previous company and client's applications",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Developer",
    desc: "Developed the backend and api for motickets.ng blog",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/sundayuchegbu",
  },
  {
    id: 2,
    img: "/x.svg",
    url: "https://x.com/uchegbu_chizoba",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/chizoba-uchegbu-1525a51bb/",
  },
];
