import { OfferingData } from "../types/OfferingData";
import { eventData } from "./eventData";
import { socialMediaData } from "./socialMediaData";

export const offeringData : OfferingData = {
    companyName: "Net4Tec",
    companyDescription: "Net4Tec is a community aiming to improve women's presence in tech careers. We lift our careers to the next level of success with the power of the community and a focus on visibility for women in the community and in their careers. We are also open to men and allies who want to help boost diversity in tech. Collectively we realise our mission through: 1. Knowledge transfer - Join training sessions with global experts, career peers and senior executives, like the 60min Grow to Lead sessions. Find what works and strategically advance your career. 2. Personal Growth - Learn how to break through and overcome personal challenges, get inspired by our role models and career stories, and engage in the safe space of your net4tec community. 3. Strategic Networking - Your network is what you make out of it. Connect to other like-minded women (and men) in tech and enjoy every opportunity to become visible, build relationships, and support and learn from each other. We welcome women and men from the technology world. We support women in their careers at all career stages. We also partner with other women's tech communities to amplify our impact.",
    membershipDescription: "There are two different membership options. You decide:For the beginner: you can become a basic member, the explorer, get an overview and start taking action. This membership is free of charge. For those who want tangible results: we offer the premium membership, the pioneer. In this case, you will enjoy all the benefits of membership for a special annual fee of 120 Euro and a 30-day free trial.",
    events: eventData,
    socialMedia: socialMediaData,
    offerings: [
        {
            offeringName: "Podcast",
            offeringType: "podcast",
            offeringLocation: "Online",
            offeringLink: "https://www.net4tec.com/podcast",
            offeringDescription: "German language podcast about women in tech (only offer it if they speak German)",
            premium: false
        },
        {
            offeringName: "net4tec blog",
            offeringType: "blog",
            offeringLocation: "Online",
            offeringLink: "https://net4tec.com/category/blog/",
            offeringDescription: "Community blog where leading women in tech share their stories",
            premium: false
        },
        {
            offeringName: "Whatsapp Group",
            offeringType: "Mentorship and community chat",
            offeringLocation: "WhatsApp",
            offeringLink: "https://net4tec.com/",
            offeringDescription: "WhatsApp discussion group for premium members where they can get ad hoc support and advice",
            premium: true
        },
    ]
}