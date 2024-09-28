import Project from "../Component /Project";
import './Project.css'



export default function Portfolio() {
  const project = {
    name: "My project",
    description:" ",
    url:'',
    githubProject:''
  }
 




  const projectArray = [ //this is the array of project objects that will be used to render the Project component
    {
      id:0,
      name: "Vehicle-Builder",
    description:"This application prompts the user to either create a new vehicle or select an existing vehicle",
    url:'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubProject:'https://github.com/marquel12/Vehicle-Builder'
    },
    {
      id:1,
      name: "Lakers-Employee-Tracker ",
    description:"The purpose of this application was to build a database using SQL for companies to track and manage their employees. ",
    url:'https://images.unsplash.com/photo-1719521178357-64ac2316f0ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubProject:'https://github.com/marquel12/Lakers-Employee-Tracker'
    },
    {
      id:2,
      name: "Weather-Scanner",
    description:"The purpose of this application was to build a weather dashboard application that calls the OpenWeather API and renders data in the browser. This will generate a 5 day weather report based on which city the user input. ",
    url:'https://images.unsplash.com/photo-1630260643564-7f9c9c140682?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubProject:'https://github.com/marquel12/Weather-Scanner'
    },
    {
      id:3,
      name: "Readme-Generator",
    description:"The purpose of this project was to create a Readme Generator that will allow the user to create a professional README.md file (using node.js and inquirer). This will help the user save time and focus on the project itself. ",
    url:'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubProject:'https://github.com/marquel12/Readme-Generator-'
    },
    {
      id:4,
      name: "Bike-shop",
    description:"Created a bike ecomerce website with a group of 4 people. I was responsible for the front end UI for product description page",
    url:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubProject:''
    },
    {
      id:5,
      name: "Coming Soon",
    description:"any dummy description here four ",
    url:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubProject:''
    },
  ]





    return (
      <div className="container">
        <h2 className='projectTitle'><b>CHECK OUT MY PROJECTS</b></h2>
       
        <div className="justify-content-center">
          {
            projectArray.map(projectparams=>( //this is the map function that will iterate through the projectArray and return a Project component for each project
              <Project project={projectparams} /> //this is the Project component that will be rendered for each project
            ))
          }

        </div>
      </div>
    );
  }
  