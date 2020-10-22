export interface Person {
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
    age?: number;
}
export type Teacher= Person;
export type Student= Person;
export type Character= Person;