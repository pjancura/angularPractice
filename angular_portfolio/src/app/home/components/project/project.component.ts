import { Component, Inject } from '@angular/core';
import { ProjectDetailsService } from './services/project-details/project-details.service';
import { ProjectDetails } from './services/project-details/project-details';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'portfolio-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  crmProject: ProjectDetails = this.projectDetailsService.getProject("Full Stack CRM Project");

  projects: ProjectDetails[] = this.projectDetailsService.projects;

  constructor (private projectDetailsService: ProjectDetailsService, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.generateProjectAccordion();
  }

  generateProjectAccordion():void{
    const projectAccordion: HTMLElement | null = this.document.getElementById("projectAccordion");
    let projectLength: number = this.projects.length;
    for (let i = 0; i < projectLength; i++) {
      let divCreate: HTMLDivElement = this.document.createElement("div");
      let h2Create: HTMLHeadingElement = this.document.createElement("h2");
      let buttonCreate: HTMLButtonElement = this.document.createElement("button");
      let pCreate: HTMLParagraphElement = this.document.createElement("p");
      let h6Create: HTMLHeadingElement = this.document.createElement("h6");
      let smallCreate: HTMLElement = this.document.createElement("small");
      let aCreate: HTMLAnchorElement = this.document.createElement("a");
      let imgCreate: HTMLImageElement = this.document.createElement("img");
      let panelNum: string = this.switchNumberToWord(i + 1)
        // creates the accordion panel
        projectAccordion?.appendChild(divCreate);
        projectAccordion?.children[i].setAttribute("class", "accordion-item");
        projectAccordion?.children[i].setAttribute("id", `accordion-item-${i}`);
        // creates the heading for the Accordion
        this.document.getElementById(`accordion-item-${i}`)?.appendChild(h2Create);
        this.document.getElementById(`accordion-item-${i}`)?.children[0].setAttribute("class", "accordion-header");
        this.document.getElementById(`accordion-item-${i}`)?.children[0].setAttribute("id", `panelsStayOpen-heading${panelNum}`);
        this.document.getElementById(`panelsStayOpen-heading${panelNum}`)?.appendChild(buttonCreate);
        if (i == 0){
          this.document.getElementById(`panelsStayOpen-heading${panelNum}`)?.children[0].setAttribute("class", "accordion-button");
        } else {
          this.document.getElementById(`panelsStayOpen-heading${panelNum}`)?.children[0].setAttribute("class", "accordion-button collapsed");
        }
        this.document.getElementById(`panelsStayOpen-heading${panelNum}`)?.children[0].setAttribute("type", "button");
        this.document.getElementById(`panelsStayOpen-heading${panelNum}`)?.children[0].setAttribute("data-bs-toggle", "collapse");
        this.document.getElementById(`panelsStayOpen-heading${panelNum}`)?.children[0].setAttribute("data-bs-target", `#panelsStayOpen-collapse${panelNum}`);
        if (i == 0 ){
          this.document.getElementById(`panelsStayOpen-heading${panelNum}`)?.children[0].setAttribute("aria-expanded", "true");
        } else {
          this.document.getElementById(`panelsStayOpen-heading${panelNum}`)?.children[0].setAttribute("aria-expanded", "false");
        }
        this.document.getElementById(`panelsStayOpen-heading${panelNum}`)?.children[0].setAttribute("aria-controls", `panelsStayOpen-collapse${panelNum}`);
        this.document.getElementById(`panelsStayOpen-heading${panelNum}`)!.children[0].textContent = this.projects[i].projectTitle;
        // creates the body or collapsible part of the accordion
        this.document.getElementById(`accordion-item-${i}`)?.appendChild(this.document.createElement("div"));
        if (i == 0) {
          this.document.getElementById(`accordion-item-${i}`)?.children[1].setAttribute("class", "accordion-collapse collapse show");
        } else {
          this.document.getElementById(`accordion-item-${i}`)?.children[1].setAttribute("class", "accordion-collapse collapse");
        }
        this.document.getElementById(`accordion-item-${i}`)?.children[1].setAttribute("id", `panelsStayOpen-collapse${panelNum}`);
        this.document.getElementById(`accordion-item-${i}`)?.children[1].setAttribute("aria-labelledby", `panelsStayOpen-heading${panelNum}`);
        this.document.getElementById(`panelsStayOpen-collapse${panelNum}`)?.appendChild(this.document.createElement("div"));
        this.document.getElementById(`panelsStayOpen-collapse${panelNum}`)?.children[0].setAttribute("class", "accordion-body");
        this.document.getElementById(`panelsStayOpen-collapse${panelNum}`)?.children[0].appendChild(this.document.createElement("div"));
        this.document.getElementById(`panelsStayOpen-collapse${panelNum}`)?.children[0].children[0].setAttribute("class", "mb-3 ms-auto me-auto");
        this.document.getElementById(`panelsStayOpen-collapse${panelNum}`)?.children[0].children[0].appendChild(this.document.createElement("div"));
        this.document.getElementById(`panelsStayOpen-collapse${panelNum}`)?.children[0].children[0].children[0].setAttribute("class", "row g-0");
        this.document.getElementById(`panelsStayOpen-collapse${panelNum}`)?.children[0].children[0].children[0].appendChild(this.document.createElement("div"));
        this.document.getElementById(`panelsStayOpen-collapse${panelNum}`)?.children[0].children[0].children[0].children[0].setAttribute("class", "col-md-8");
        this.document.getElementById(`panelsStayOpen-collapse${panelNum}`)?.children[0].children[0].children[0].children[0].appendChild(this.document.createElement("div"));
        this.document.getElementById(`panelsStayOpen-collapse${panelNum}`)?.children[0].children[0].children[0].children[0].children[0].setAttribute("class", "card-body");
        this.document.getElementsByClassName("card-body")[i].appendChild(this.document.createElement("p"));
        this.document.getElementsByClassName("card-body")[i].children[0].setAttribute("class", "card-text");
        this.document.getElementsByClassName("card-body")[i].children[0].textContent = this.projects[i].description;
        this.document.getElementsByClassName("card-body")[i].appendChild(h6Create);
        this.document.getElementsByClassName("card-body")[i].children[1].setAttribute("class", "card-text");
        this.document.getElementsByClassName("card-body")[i].children[1].textContent = "Tools:"
        this.document.getElementsByClassName("card-body")[i].appendChild(pCreate);
        this.document.getElementsByClassName("card-body")[i].children[2].setAttribute("class", "card-text");
        this.document.getElementsByClassName("card-body")[i].children[2].appendChild(smallCreate);
        this.document.getElementsByClassName("card-body")[i].children[2].children[0].setAttribute("class", "text-muted");
        this.document.getElementsByClassName("card-body")[i].children[2].children[0].textContent = this.projects[i].toolsUsed;
        this.document.getElementsByClassName("card-body")[i].appendChild(aCreate);
        this.document.getElementsByClassName("card-body")[i].children[3].setAttribute("href", this.projects[i].href);
        this.document.getElementsByClassName("card-body")[i].children[3].setAttribute("class", "btn btn-primary");
        this.document.getElementsByClassName("card-body")[i].children[3].textContent = "See Demo";
        this.document.getElementsByClassName("row g-0")[i].appendChild(this.document.createElement("div"));
        this.document.getElementsByClassName("row g-0")[i].children[1].setAttribute("class", "col-md-4 px-5")
        this.document.getElementsByClassName("row g-0")[i].children[1].appendChild(imgCreate);
        this.document.getElementsByClassName("row g-0")[i].children[1].children[0].setAttribute("src", this.projects[i].assetURL);
        this.document.getElementsByClassName("row g-0")[i].children[1].children[0].setAttribute("class", "img-fluid rounded-3 ");
        if (this.projects[i].altText){
          this.document.getElementsByClassName("row g-0")[i].children[1].children[0].setAttribute("alt", this.projects[i].altText!);
        }
      }

  }

  switchNumberToWord(num: number): string{
    const numberWordsArray: string[] = ['Zero', 'One', 'Two', 'Three','Four','Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty']
    return numberWordsArray[num];
  }
}
