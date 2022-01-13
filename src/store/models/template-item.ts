import Job from "./job";

export default class TemplateItem {
    
    gitProject: string;
    name: string;
    uid: string;
    jobs: Array<Job>

    constructor(gitProject: string, name: string, uid: string) {
        this.gitProject = gitProject;
        this.name = name;
        this.uid = uid;
        this.jobs = new Array<Job>();
    }

}