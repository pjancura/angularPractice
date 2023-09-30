import { Injectable } from '@angular/core';
import { AboutMe } from './about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  aboutMe : AboutMe = {
    title: "About Me",
    body: `I first took the initiative to start learning to code through 
     a Udemy course a year ago. It has been fun building the various projects, 
     as they solidify what I am learning from the curriculum. Also, even though my degree isn’t in Computer Science or Business, 
     I have proven that I can adapt to new fields and be successful. Through the Cleveland Codes Software Developers 
     Academy at Cuyahoga Community College, I have further enhanced my skills with Python, MySQL, Javascript, HTML and CSS.`
  }

  constructor() { }

  getAboutMe(): AboutMe{
    return this.aboutMe;
  }
}
