import { Injectable } from '@angular/core';
import { ExternalLink } from './external-link';

@Injectable({
  providedIn: 'root'
})
export class ExternalLinkService {

  externalLinks: ExternalLink[] = [
    {
      linkTitle: 'myLinkedin',
      href: 'https://www.linkedin.com/in/paul-jancura-4a6a12178'
    },
    {
      linkTitle: 'myGithub',
      href: 'https://github.com/pjancura'
    }
  ]


  constructor() { }

  getTitleArray(): String[] {
    const hrefTitle: String[] = [];
    for (let i = 0; i < this.externalLinks.length; i++){
        hrefTitle.push(this.externalLinks[i].linkTitle);
    }
    return hrefTitle;
  };

  getHref(externalLinkTitle: string): ExternalLink {
    const titleArray : String[] = this.getTitleArray();
    return this.externalLinks[titleArray.indexOf(externalLinkTitle)];
  };
}
