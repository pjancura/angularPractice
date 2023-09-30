import { Injectable } from '@angular/core';
import { Asset } from './asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  assets : Asset[] = [
    {
      assetTitle: 'linkedin_logo',
      whereUsed: 'footer Component on home page',
      assetURL: "assets/icons/linkedin_logo.svg",
      altText: "linkedin_logo.svg"
    },
    {
      assetTitle: 'github_logo',
      whereUsed: 'footer Component on home page',
      assetURL: "assets/icons/github_logo.svg",
      altText: 'github_logo.svg'
    },
    {
      assetTitle: 'resume',
      whereUsed: 'aboutMe Component',
      assetURL: "assets/downloadables/jancura_resume.pdf",
    },
    {
      assetTitle: 'download_icon',
      whereUsed: 'aboutMe Component',
      assetURL: "assets/icons/download_icon.svg",
      altText: 'download_icon.svg'
    },
  ]


  constructor() { }
  
  getTitleArray(): String[] {
    const assetTitle: String[] = [];
    for (let i = 0; i < this.assets.length; i++){
        assetTitle.push(this.assets[i].assetTitle);
    }
    return assetTitle;
  };

  getAsset(assetTitle: string): Asset {
    const titleArray : String[] = this.getTitleArray();
    return this.assets[titleArray.indexOf(assetTitle)];
  };
}
