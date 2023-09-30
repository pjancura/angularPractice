import { Injectable } from '@angular/core';
import { HeaderDetails } from './header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  headerInformation : HeaderDetails = {
    heading: "HI, I'M PAUL JANCURA",
    subheader: "Filler Subheading",
    introduction: "I first took the initiative to start learning to code through a Udemy course a year ago. It has been fun building the various projects, as they solidify what I am learning from the curriculum. Also, even though my degree isn’t in Computer Science or Business, I have proven that I can adapt to new fields and be successful. Through the Cleveland Codes Software Developers Academy at Cuyahoga Community College, I have further enhanced my skills with Python, MySQL, Javascript, HTML and CSS."
  }


  constructor() { }

  getHeading() {
    return this.headerInformation;
  }
}
