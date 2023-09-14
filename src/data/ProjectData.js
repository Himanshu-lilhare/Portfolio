import img1 from "../assets/Images/portfolioimg.jpeg";
import img2 from "../assets/Images/portfolioimg2.jpeg";

export const ProjectsData = [
  {
    id: 1,
    name: "Paid Course Website with Awesome Admin Panel",
    link: "https://course-selling-frontend.vercel.app/",
    codeLink: "https://github.com/Himanshu-lilhare/my-startup-frontend",
    imgSrc: img1,
    category: "All , MernStack , React , Nodejs",
  },
  {
    id: 2,
    name: "Fully Fledge Social Media app wih Amazing Features ",
    link: "https://social-media-frontend-omega.vercel.app/",
    codeLink: "https://github.com/Himanshu-lilhare/social-media-frontend",
    imgSrc: img2,
    category: "All , MernStack , React , Nodejs",
  },
  {
    id: 3,
    name: "Basic Todo List using LocalStorage",
    link: "https://zakarpakar-todolist.vercel.app/",
    codeLink: "https://github.com/Himanshu-lilhare/ZAKARPAKAR-todolist",
    imgSrc: img2,
    category: "All , React",
  },
];

export function filteruniqueCategory(data) {
  let string = "";
  data.forEach((item, index) => {
    if (index === 0) {
      string = string + item.category;
    } else {
      string = string + " , " + item.category;
    }
  });

  const uniqueArray = string
    .split(",")
    .map((item) => item.trim())
    .filter((value, index, self) => self.indexOf(value) === index);

  return uniqueArray;
}
