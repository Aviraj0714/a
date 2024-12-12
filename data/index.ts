import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
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
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "I'm currently working across various frameworks.",
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
      title: "3d Portfolio using three.js",
      des: "An immersive Three.js portfolio showcasing 3D visuals with interactive sound effects for an engaging user experience.",
      img: "/Screenshot (293).png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://aviraj-bhaliya-portfolio.netlify.app/",
    },
    {
      id: 2,
      title: "PropertEase-home rental system",
      des: "A comprehensive home rental system built with the MERN stack, offering seamless property listings, bookings, and management for users.",
      img: "/Screenshot (226).png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://properteasehomerent.netlify.app/",
    },
    {
      id: 3,
      title: "H&A E-commerce shopping website",
      des: "A dynamic eCommerce shopping site built with HTML, CSS, and JavaScript, offering a smooth and responsive user experience for browsing and purchasing products.",
      img: "/Screenshot (294).png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/Aviraj0714/E-commerce-shopping-website.git",
    },
    {
      id: 4,
      title: "Luxe - Webpage for resturant",
      des: "A modern restaurant website built with HTML, CSS, and JavaScript, featuring an intuitive design, menu showcase, and interactive user experience.",
      img: "/Screenshot (296).png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://luxeresturant.netlify.app/",
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
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
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
      title: "web developer - codeclause",
      desc: "Completed a virtual internship, developing three projects using HTML, CSS, and JavaScript. Demonstrated proficiency in front-end technologies, ensuring a seamless user experience and adherence to design principles.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "web development & designing-Oasis Infobyte",
      desc: "During my virtual internship, I successfully developed projects,showcasing my proficiency in web development. These projects demonstrated my ability to create innovative solutions while refining my coding and problem-solving skills",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
      
    },
    {
      id: 3,
      title: "web Developer-Bharat Intern",
      desc: "During my virtual internship, I successfully developed three projects utilizing HTML, CSS, and JavaScript. Demonstrated proficiency in web development, emphasizing creativity,functionality, and responsive design.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Trainee Engineer-Astier Informatics",
      desc: "Completed an internship at Astier Informatics as an Engineer Trainee, focusing on C/C++ development. Gained hands-on experience in software development, debugging, and optimizing code for performance and efficiency.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/Aviraj0714"
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/aviraj-bhaliya-4483a7236"
    },
  ];