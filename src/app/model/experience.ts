export class Experience {
    id!: number;
    titleExp: string;
    imgExp: string;
    dateInitExp: string;
    dateEndExp: string;
    institutionExp: string;
    descriptionExp: string;

    constructor(titleExp: string, imgExp: string, dateInitExp: string, dateEndExp:string, institutionExp:string, descriptionExp:string) {
        this.titleExp = titleExp;
        this.imgExp = imgExp;
        this.dateInitExp = dateInitExp;
        this.dateEndExp = dateEndExp;
        this.institutionExp = institutionExp;
        this.descriptionExp = descriptionExp;
    }
}
