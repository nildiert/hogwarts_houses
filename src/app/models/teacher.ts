export interface Teacher {
    name?: string;
    species?: string;
    gender?: string;
    house?: string;
    dateOfBirth?: string;
    yearOfBirth?: number;
    ancestry?: string;
    eyeColour?: string;
    hairColour?: string;
    wand?: {
        wood?: string;
        core?: string;
        length?: string;
    };
    patronus?: string,
    hogwartsStudent?: false,
    hogwartsStaff?: true,
    actor?: string,
    alive?: true,
    image?: "http://hp-api.herokuapp.com/images/mcgonagall.jpg"
}