import React, { useState } from 'react'
import { useParams } from "react-router-dom";

import Card from '../components/Card'
import Linear from '../components/Linear'
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer'
//iamage-projects
import trippy from '/images/trippy.png'
import dashboard from '/images/dashboard.png'
import yourname from '/images/yourname.png'
import managepost from'/images/manngepost.png'
import travel from'/images/travel.png'
import flora from'/images/flora.png'
import crud from'/images/crud.png'
import digital from '/images/Digital.png'
import mid from '/images/maid.png'
import toList from '/images/to.png'
import doob from '/images/doob.png'
import skiing from '/images/skiing.png'


function ProjectsPage() {
  const contentCards=[

            { 
                img: trippy,
                paragraph: "Educational Platform",
                date:"10-4-2026",
                content: "A multi‑page React project built using React Router for seamless navigation, React Icons for modern and consistent visuals, and Tailwind CSS for a fully responsive, utility‑first design.The project features modular components, clean file structure, and optimized layout for scalability and maintainability. It demonstrates best practices in state management, component reusability, and responsive UI architecture, making it ideal for real‑world dashboard or content management applications.", 
                Basic:"HTML5 , javascript ",
                Framework:"Taillwind",
                Library:"React.js",
                icon:'/images/icondemo.png' , // مالقيتا ايقونة
                url: "https://trippy-app.netlify.app/",
                contentButton:"Github Repo",
                repo:"https://github.com/SafaaTr/Trippy"
            },
            { 
              img:dashboard,
              paragraph: "Educational Platform",
              date:"4-5-2026",
              content: "A modern, fully responsive React Dashboard built with Axios for real API data fetching.The project includes secure authentication pages, protected and dynamic routing, reusable UI components, and a clean utility‑first design powered by Tailwind CSS. It follows best practices in component architecture, state handling, and API integration, making it scalable and easy to maintain.", 
              Basic: " HTML5 , javascript",
              Framework:"Tailwind",
              Library:"React.js",
              icon:'/images/icondemo.png' , 
              url: "https://dashboard-api-vica.netlify.app",
              contentButton:"Github Repo",
              repo:"https://github.com/SafaaTr/dashboard-api-react"
          },
          { 
            img:yourname,
            paragraph: "Educational Platform",
            date:"12-3-2024",
            content: "A fully responsive React authentication modal (Login & Sign-up) built with clean UI principles, smooth CSS-driven animations, and optimized state management. Designed to be easily integrated into larger applications and provide a smooth, intuitive user experience.", 
            Basic:"  Html5 , Css , Javascript", 
            Library:"React.js",
            icon:'/images/icondemo.png' , 
            url: "https://safaatr.github.io/mid-project-safaa-altarshan/",
            contentButton:"Github Repo",
            repo:"https://github.com/SafaaTr/mid-project-safaa-altarshan"
        },
        { 
          img: travel,
          paragraph: "Educational Platform",
          date:"1-1-2026",
          content: "A responsive HTML and CSS task focused on building a clean layout and adapting the design to different screen sizes using modern layout techniques.", 
          Basic:"  Html5 , Css ",
          // Framework:"Bootstrap",
          // Library:"React.js",
          icon:'/images/icondemo.png' , 
          url: "https://safaatr.github.io/Travel-Css/",
          contentButton:"Github Repo",
          repo:"https://github.com/SafaaTr/Travel-Css"
      },
      { 
        img: mid,
        paragraph: "Educational Platform",
        date:"29-12-2025",
        content: " A sophisticated, multi-page web platform designed to demonstrate advanced front-end development techniques. The project focuses on creating a seamless user experience (UX) across all devices by combining the structural power of HTML5, the styling flexibility of Custom CSS3, and the responsive efficiency of the Bootstrap 5 framework.", 
        Basic: " Html5 , Css ",
        // Framework:"Bootstrap",
        Library:"Bootstrap",
        icon:'/images/icondemo.png' , 
        url: "https://safaatr.github.io/mid-project-safaa-altarshan/",
        contentButton:"Github Repo",
        repo:"https://github.com/SafaaTr/mid-project-safaa-altarshan"
      },
      { 
        img: managepost,
        paragraph: "Educational Platform",
        date:"1-3-2026",
        content: "A lightweight Manage Posts application built with HTML, CSS, and JavaScript, fully integrated with an external API to handle CRUD operations. Users can fetch, create, update, and delete posts through a clean and responsive interface. ", 
        Basic:"  Html5 , Css , Javascript",
        // Framework:"Bootstrap",
        // Library:"React.js",
        icon:'/images/icondemo.png' , 
        url: "https://safaatr.github.io/Manage-Posts-api-js/",
        contentButton:"Github Repo",
        repo:"https://github.com/SafaaTr/Manage-Posts-api-js"
    },
    { 
      img: flora,
      paragraph: "Educational Platform",
      date:"25-12-2025",
      content: "A simple training project built using HTML and CSS. It focuses on practicing the fundamentals of web page structure, styling elements, and creating clean, responsive user interface layouts.", 
      Basic:"  Html5 , Css ",
      // Framework:"Bootstrap",
      // Library:"React.js",
      icon:'/images/icondemo.png' , 
      url: "https://safaatr.github.io/flora-css/",
      contentButton:"Github Repo",
      repo:"https://github.com/SafaaTr/flora-css"
  },
  { 
    img: crud,
    paragraph: "Educational Platform",
    date:"12-2-2026",
    content: "A simple shopping cart project built with HTML, CSS, and JavaScript, featuring full CRUD functionality. Products can be added, edited, deleted, and stored persistently using localStorage, with the cart updating dynamically based on user interactions. ", 
    Basic:"  Html5 , Css , Javascript",
    // Framework:"Bootstrap",
    // Library:"React.js",
    icon:'/images/icondemo.png' , 
    url: "safaatr.github.io/Product-Cart-CRUD/",
    contentButton:"Github Repo",
    repo:"https://github.com/SafaaTr/Product-Cart-CRUD"
},
{ 
  img: digital,
  paragraph: "Educational Platform",
  date:"30-12-2025",
  content: "Responsive Landing Page created using Bootstrap and CSS, showcasing a customized carousel slider that adapts from a single-card view on mobile to a three-card layout on desktop. The project follows a mobile‑first design approach and includes clean, structured components for a modern user experience. ", 
  Basic: " Html5 , Css ",
  // Framework:"Bootstrap",
  Library:"Bootstrap",
  icon:'/images/icondemo.png' , 
  url: "https://safaatr.github.io/one-bootstrap-project/",
  contentButton:"Github Repo",
  repo:"https://github.com/SafaaTr/one-bootstrap-project"
},
{ 
  img: toList,
  paragraph: "Educational Platform",
  date:"30-12-2025",
  content: "A simple and interactive To‑Do List application built using HTML, CSS, and JavaScript. The app allows users to add tasks, mark them as completed, delete tasks, and automatically save all data using localStorage so the list remains even after refreshing the page", 
  Basic: " Html5 , Css ,javascript",
  // Framework:"Bootstrap",
  // Library:"Bootstrap",
  icon:'/images/icondemo.png' , 
  url: "https://safaatr.github.io/To-Do-List-/",
  contentButton:"Github Repo",
  repo:"https://github.com/SafaaTr/To-Do-List-"
 
},
{ 
  img: doob,
  paragraph: "Educational Platform",
  date:"30-12-2025",
  content: "A simple Landing Page built with HTML and CSS. This is my first practice project, focusing on basic page structuring and styling as I start my journey in Front-end development.", 
  Basic: " Html5 , Css ",
  // Framework:"Bootstrap",
  // Library:"Bootstrap",
  icon:'/images/icondemo.png' , 
  url: "https://safaatr.github.io/First-front-end-project/",
  contentButton:"Github Repo",
  repo:"https://github.com/SafaaTr/First-front-end-project"
},
{ 
  img: skiing,
  paragraph: "Educational Platform",
  date:"20-12-2025",
  content: "A comprehensive Responsive Web Design project developed using HTML5, CSS3,. This multi-page application focuses on implementing modern layout techniques, such as Flexbox and Grid, ensuring a fully fluid and adaptive user interface across all device screen sizes", 
  Basic: " Html5 , Css ",
  // Framework:"Bootstrap",
  // Library:"Bootstrap",
  icon:'/images/icondemo.png' , 
  url: "https://k2skiing.netlify.app/",
  contentButton:"Github Repo",
  repo:"https://github.com/SafaaTr/K2Skiing-css"
},

    
  ]

  const { id } = useParams();
  const activeId = id !== undefined ? id : 0;
  const project = contentCards[activeId];
  return (
    <div>
      <div className="md:mx-70 md:my-70 my-40 mx-20">
      
        {project ? (
          <div className="mb-10">
            <ProjectDetails project={project} />
            
          </div>
        ):(<p>No Project Found</p>)}
      </div>

      <Linear/>
      <Card slider={true}/>
      <Footer/>
      
     
    </div>
  );

}

export default ProjectsPage