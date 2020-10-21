export interface Student {
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
    patronus?: string;
    hogwartsStudent?: false;
    hogwartsStaff?: true;
    actor?: string;
    alive?: true;
    image?: string;
}