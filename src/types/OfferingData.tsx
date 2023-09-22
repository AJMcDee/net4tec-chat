import { Net4TecEvent } from "./Net4TecEvent";
import { Net4TecOffering } from "./Net4TecOffering";
import { Net4TecSocialMedia } from "./Net4TecSocialMedia";

export interface OfferingData {
    companyName: string;
    companyDescription: string;
    membershipDescription: string;
    events: Net4TecEvent[];
    socialMedia: Net4TecSocialMedia[]
    offerings: Net4TecOffering[];
}