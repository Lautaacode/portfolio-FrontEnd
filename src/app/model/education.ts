export class Education {
    id!: number;
    titleEdu: string;
    imgEdu: string;
    dateInitEdu: string;
    dateEndEdu: string;
    institutionEdu: string;
    descriptionEdu: string;

    constructor(title: string, img: string, dateInit: string, dateEnd: string, institutionEdu: string, descriptionEdu: string) {
    this.titleEdu = title;
    this.imgEdu = img;
    this.dateInitEdu = dateInit;
    this.dateEndEdu = dateEnd;
    this.institutionEdu = institutionEdu;
    this.descriptionEdu = descriptionEdu;
    }
}
