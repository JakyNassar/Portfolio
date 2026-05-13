 import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
 
 function Constants() {
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
     <div className={darkMode?"bg-black text-white":"bg-white"}>
      
      <NavBar name="Jaky" items={items} darkMode={darkMode} setMode={setDarkMode}   activeSection={activeSection} />
        <main className="flex-grow">
          <Outlet />
       </main>
        <Footer/>
     

     </div>
   )
 }
 
 export default Constants
 
