import BasicInfo from "./basic-info";
import Experience from "./work-experience";
import Education from "./education";

export default class Overview {
    constructor() {
        this.basic = false;
        this.workExp = false;
        this.edu = false;
    }

    basic: BasicInfo | false;
    workExp: Experience | false;
    edu: Education | false;
}
