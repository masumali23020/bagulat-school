import alumniImg from "../assets/alumni.png"
import clubsImg from "../assets/clubs_icon.png"
import infoImg from "../assets/info-icon.png"
import pricipalImg from "../assets/pm_icon.png"
import resultsImg from "../assets/results_icon.png"
import tpImg from "../assets/tp.png"
export const menu = [
  {
    id: 1,
    title: "Home",
    url: "/",
   
  },
  {
    id: 2,
    title: "About ",
    url: "/about",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
     
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
       
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",

      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
    
      },
    ],
  },
  {
    id: 3,
    title: "Academic",
    url: "/academic",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
       
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
       
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
       
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
    
      },
    ],
  },
  {
    id: 4,
    title: "Admission",
    url: "/admission",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
      
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
       
      },
    ],
  },
  {
    id: 5,
    title: "Gallery",
    url: "/gallery",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
     
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
       
      },
    ],
  },
  {
    id: 6,
    title: "Notice",
    url: "/notice",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
     
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
       
      },
    ],
  },
  {
    id: 7,
    title: "Contac",
    url: "/contact",
  },
];

export const slides = [
  {
    "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
    "title": "Avatar: The Way of Water",
    "subTitle": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "interval": 1500
  },
  {
    "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    "title": "Black Adam",
    "subTitle": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    "interval": 500
  },
  {
    "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
    "title": "Black Panther: Wakanda Forever",
    "subTitle": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "interval": 2500
  }
]

export const informationOfMemmer = [
  {
    id:1,
    name:"Principal Corner",
    url: "/principal",
    img:pricipalImg,
  },
  {
    id:2,
    name:"Faculty & Staffs",
    url: "/faculty",
    img:tpImg,
  },
 
  {
    id:3,
    name:"Results",
    url: "/results",
    img:resultsImg,
  },
  {
    id:4,
    name:"Alumni",
    url: "/alumni",
    img:alumniImg,
  },
  {
    id:5,
    name:"Clubs",
    url: "/clubs",
    img:clubsImg,
  },
  {
    id:6,
    name:"Admission Information ",
    url: "/admission",
    img:infoImg,
  },
]
export const  counterOfMembers = [
  {
    id:1,
    start:0,
    end:25,
    filed: "Teachers"
  },
  {
    id:2,
    start:0,
    end:30,
    filed: "YEARS"
  },
  {
    id:3,
    start:0,
    end:2500,
    filed: "STUDENTS"
  },
  {
    id:4,
    start:0,
    end:5,
    filed: "BUILDING"
  },
]
