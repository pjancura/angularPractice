import { ExternalLink } from "src/app/services/external-links/external-link";
import { Asset } from "src/app/services/asset/asset";

export interface ProjectDetails extends ExternalLink, Asset {
    projectTitle: string;
    description: string;
    toolsUsed: string;
}