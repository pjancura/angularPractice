import { Injectable } from '@angular/core';
import { ProjectDetails } from './project-details';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  projects: ProjectDetails[] = [
    {
      projectTitle: "Full Stack CRM Project",
      description: "Collaborated on a Python-based customer relations manager web application, streamlining communication tracking for employees.",
      toolsUsed: "Python, SQLite3, Web2Py, Javascript, HTML / CSS",
      assetTitle: "crm_screen_grab",
      whereUsed: "Projects Component",
      assetURL: "assets/images/header_pic_new.jpeg",
      altText: "Picture of the PERT CRM Project",
      linkTitle: "Pert Demo Link",
      href: "https://www.youtube.com/",
    },
    {
      projectTitle: "Grieg Lyric Pieces Database",
      description: "Utilized MySQL to design a database for storing information about Grieg Lyric Pieces, facilitating easy querying and recording management.",
      toolsUsed: "MySQL, MySQL Workbench",
      assetTitle: "grieg_database_screen_grab",
      whereUsed: "Projects Component",
      assetURL: "assets/images/header_pic_new.jpeg",
      altText: "Picture of SQL Queries",
      linkTitle: "Grieg Database Demo Link",
      href: "https://www.youtube.com/",
    },
    {
      projectTitle: "Simon Game Clone",
      description: "Developed a clone of the classic game Simon.  This demonstrates linking events to DOM elements to create an interactive experience.",
      toolsUsed: "Javascript, HTML / CSS, Bootstrap",
      assetTitle: "simon_clone_screen_grab",
      whereUsed: "Projects Component",
      assetURL: "assets/images/header_pic_new.jpeg",
      altText: "Picture of Simon Game Clone",
      linkTitle: "Live Simon Game",
      href: "https://www.youtube.com/",
    },
    {
      projectTitle: "Python CLI Project",
      description: "Created a Python application to convert HTML table text files into CSV format, improving data accessibility and usability.",
      toolsUsed: "Python",
      assetTitle: "python_cli_screen_grab",
      whereUsed: "Projects Component",
      assetURL: "assets/images/header_pic_new.jpeg",
      altText: "Picture of Python Code",
      linkTitle: "HTML Table to CSV Demo",
      href: "https://www.youtube.com/",
    },
  ]

  constructor() { }

  getTitleArray(): String[] {
    const projectTitle: String[] = [];
    for (let i = 0; i < this.projects.length; i++){
        projectTitle.push(this.projects[i].projectTitle);
    }
    return projectTitle;
  };

  getProject(projectTitle: string): ProjectDetails {
    const titleArray : String[] = this.getTitleArray();
    return this.projects[titleArray.indexOf(projectTitle)];
  };
}





