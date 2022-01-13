export default class Job {
    
    startJobTime!: string;
    containerId: string
    status: string
    
    constructor(containerId: string, status: string, startJobTime: string) {
        this.containerId = containerId;
        this.status = status;
        this.startJobTime = startJobTime;
    }
}