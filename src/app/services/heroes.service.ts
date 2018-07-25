import { Hero } from "../shared/hero.model";
export class Heroes {

    public heroes: Hero[] = [
        {
            id: 0,
            name: "Marvin",
            life: 11,
            regeneration: 2,
            powerName: "complain",
            powerNumber: 2,
            photo: [
                {url: "/assets/marvim.jpg"}
            ]
        }
    ];

    public getHeroes(): Array<Hero> {
        return this.heroes;
    }
}