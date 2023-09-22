import { Net4TecEvent } from "../types/Net4TecEvent";

export const eventData : Net4TecEvent[] = [
    {
        eventName: "Imposter Syndrome in Tech",
        eventDate: "2023-10-01",
        eventType: "Webinar",
        eventLocation: "Online",
        eventLink: "https://www.net4tec.com",
        eventDescription: "Are you an imposter? Sometimes it feels like it! Join this webinar to learn how to overcome imposter syndrome",
        premium: false,
    },
    {
        eventName: "Women in Tech Quarterly Lunch",
        eventDate: "2023-11-21",
        eventType: "Networking Lunch",
        eventLocation: "Berlin",
        eventLink: "https://www.net4tec.com",
        eventDescription: "This quarterly lunch event brings together Berlin women to discuss their careers in an open forum",
        premium: false
    },
    {
        eventName: "Executive Leadership in Tech",
        eventDate: "2023-10-17",
        eventType: "60 min leadership session",
        eventLocation: "Frankfurt",
        eventLink: "https://www.net4tec.com",
        eventDescription: "CEO Anna McDougall presents her vision for a tech future with more women executives",
        premium: true
    },
]