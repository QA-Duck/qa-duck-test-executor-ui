export default class Job {
    
    containerId: string
    status: string
    
    constructor(containerId: string, status: string) {
        this.containerId = containerId;
        this.status = status;
    }
}