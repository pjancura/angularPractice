import { Component, ElementRef, Inject } from '@angular/core';
import { AboutMeService } from './services/about-me/about-me.service';
import { AboutMe } from './services/about-me/about-me';
import { AssetService } from 'src/app/services/asset/asset.service';
import { Asset } from 'src/app/services/asset/asset';
import { SkillsService } from './services/skill/skills.service';
import { Skills } from './services/skill/skills';
import { Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ExternalLink } from 'src/app/services/external-links/external-link';
import { ExternalLinkService } from 'src/app/services/external-links/external-link.service';

@Component({
  selector: 'portfolio-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  aboutMe: AboutMe = this.aboutMeService.getAboutMe();

  resumePDF: Asset = this.assetService.getAsset('resume');

  downloadIcon: Asset = this.assetService.getAsset('download_icon');

  skills: Skills[] = this.skillsService.getSkills();

  linkedinLogo: Asset = this.assetService.getAsset('linkedin_logo');
  githubLogo: Asset = this.assetService.getAsset('github_logo');

  linkedinHref: ExternalLink = this.externalLink.getHref('myLinkedin');
  githubHref: ExternalLink = this.externalLink.getHref('myGithub');


  // constructor (private assetService: AssetService, private externalLink: ExternalLinkService) {}

  constructor(
    private aboutMeService: AboutMeService,
    private assetService: AssetService,
    private skillsService: SkillsService,
    private externalLink: ExternalLinkService,
    // Injecting DOCUMENT should allow me to create JS like scripts to do DOM manipulation
    @Inject(DOCUMENT) private document: Document,
  ) {
  }
  
  ngOnInit():void {
    // this.generateSkillTable();
    // this.changeBtnColor();
  }

  generateSkillTable(): void {
    let rows: number = 0;
    let cellsToMake: number;
    let skillsLength: number = this.skills.length;
    for (let i: number = 0; i < skillsLength; i+=3){
      let tr: HTMLTableRowElement = this.document.createElement("tr");
      this.document.getElementById("skillDisplay")?.appendChild(tr);
      this.document.getElementById("skillDisplay")?.children[rows].setAttribute("id", `skill_row_${rows}`);
      if (skillsLength - i < 3){
        cellsToMake = skillsLength - i;
      } else {
        cellsToMake = 3
      }
      for (let cell: number = 0; cell < cellsToMake; cell++) {
        let td: HTMLTableCellElement = this.document.createElement("td");
        let newTextContent: string = this.skills[i + cell].name;
        this.document.getElementById(`skill_row_${rows}`)?.appendChild(td);
        this.document.getElementById(`skill_row_${rows}`)?.children[cell].setAttribute("id", `row_${rows}_cell_${cell}`);
        this.document.getElementById(`row_${rows}_cell_${cell}`)!.textContent += newTextContent;
      }
      rows++;
      if (this.skills.length - i < 3){
        break;
      }
    }
  }

  changeBtnColor(){
    this.document.getElementById("resumeBtn")?.setAttribute("style", "background-color: #204058;border-color: #204058;" )
  }

}
