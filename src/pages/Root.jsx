import { Outlet } from "react-router"
import NavBar from "../components/NavBar/NavBar"
import { useEffect, useState } from "react"
import './Root.css'
import Home from "./../components/Home/Home"
import About from "./../components/About/About"
import Education from "../components/Education/Education"
import Risk from "../components/Risk/Risk"
import Contact from "../components/Contact/Contact"
import Projects from "../components/Projects/Projects"



 
function Root() {

 
     const items=[
   {link:"Home",
    path:"/",
    id:"home"
  },
  {link:"About me",
    path:"/about",
    id:"about"
  },
  {link:"Education",
    path:"/education",
    id:"education"

  },
  {link:"Projects",
    path:"/projects",
    id:"projects"
  },
  {link:"Contact",
    path:"/contact",
    id:"contact"
  },
    
  ]
   const [activeSection, setActiveSection] = useState("home");
   const [darkMode,setDarkMode]=useState(false)
   useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY ;

      items.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop -150;
           const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  
  return (
    <div className= {darkMode?"bg-black text-[white]":""} font-primaryText>
     
    <section id="home"><Home/></section>
    <section id="about"><About/></section>
    <section id="education"><Education/></section>
    <section id="education"><Risk/></section>
    <section id="projects"><Projects/></section>
    <section id="contact"><Contact/></section>
    </div>
  )
}

export default Root
