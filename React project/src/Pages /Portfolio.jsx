import Project from "../Component /Project";


export default function Portfolio() {
  const project = {
    name: "project name",
    description:"any dummy description here ",
    url:''
  }




  const projectArray = [
    {
      id:0,
      name: "project name",
    description:"any dummy description here ",
    url:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id:1,
      name: "project two",
    description:"any dummy description here ",
    url:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id:2,
      name: "project three",
    description:"any dummy description here ",
    url:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id:3,
      name: "project four",
    description:"any dummy description here four ",
    url:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ]




    return (
      <div>
        <h2>My Projects</h2>
        <div className="d-flex flex-wrap items-center">
          {
            projectArray.map(projectparams=>(
              <Project project={projectparams} />
            ))
          }

        </div>
      </div>
    );
  }
  