import { Component } from '@angular/core';
import { ExternalLink } from 'src/app/services/external-links/external-link';
import { ExternalLinkService } from 'src/app/services/external-links/external-link.service';
import { Asset } from 'src/app/services/asset/asset';
import { AssetService } from 'src/app/services/asset/asset.service';



@Component({
  selector: 'portfolio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  thisYear: Date = new Date()

  linkedinLogo: Asset = this.assetService.getAsset('linkedin_logo');
  githubLogo: Asset = this.assetService.getAsset('github_logo');

  linkedinHref: ExternalLink = this.externalLink.getHref('myLinkedin');
  githubHref: ExternalLink = this.externalLink.getHref('myGithub');


  constructor (private assetService: AssetService, private externalLink: ExternalLinkService) {}

  ngOnInit (): void {}
}
