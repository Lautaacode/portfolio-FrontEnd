export class Skill {
    id?: number;
    skillIco: string;
    percent: number;

    constructor(skillIco: string, percent: number) {
        this.skillIco = skillIco;
        this.percent = percent;
    }
}
