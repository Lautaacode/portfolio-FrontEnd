export class User {
    //atributos
    id!: number;
    name: string;
    lastname: string;
    title: string;
    aboutMe: string;
    profileImg: string;
    bannerImg: string;
    jobImg: string;
    studyImg: string;


    //constructor con parámetros
    constructor(name: string, lastname: string, title: string, aboutMe: string,
        profileImg: string, bannerImg: string, jobImg: string, studyImg: string) {
        this.name = name;
        this.lastname = lastname;
        this.title = title;
        this.aboutMe = aboutMe;
        this.profileImg = profileImg;
        this.bannerImg = bannerImg;
        this.jobImg = jobImg;
        this.studyImg = studyImg;
    }
}


