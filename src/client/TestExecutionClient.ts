class TestExecutionClient {

    public url =  process.env.VUE_APP_API_URL;
    private TEMPLATES_KEY = "templates";
    private JOB_KEYS = "jobs";

    public async runTest (templateUUID: any) {

        const controller = new AbortController()

        const timeoutId = setTimeout(() => controller.abort(), 20000)

        return await fetch(`${this.url}/templates/${templateUUID}/run`, {signal: controller.signal, method: 'POST'})
    }
    
    public async create(template: any) {
        return await fetch(
            `${this.url}/templates`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(template)
            }
        )
    }

    public async getTemplates() {
        const response = await fetch(`${this.url}/templates`);
        const data = await response.json();
        localStorage.setItem(this.TEMPLATES_KEY, JSON.stringify(data));
        return data;
    }

    public async getJobs(templateUUID: any) {
        const response = await fetch(`${this.url}/templates/${templateUUID}/jobs`);
        const data = await response.json();
        localStorage.setItem(this.JOB_KEYS, JSON.stringify(data));
        return data;
    }

    public getJobFromStorageByContainerId(containerId: any) {
        const str: any = localStorage.getItem(this.JOB_KEYS);
        const data = JSON.parse(str);
        let jobsResult = {}
        data.forEach((job: any) => {
            if(job.containerId == containerId) {
                jobsResult = job;
            }
        });
        return jobsResult;
    }

    public getTemplatesFromStorageByUUID(templateUUID: any): any {
        const str: any = localStorage.getItem(this.TEMPLATES_KEY);
        const data = JSON.parse(str);
        let templateResult = {}
        data.forEach((template: any) => {
            if(template.uid == templateUUID) {
                templateResult = template;
            }
        });
        return templateResult;
    }

    public async getLogs(containerId: any) {
        const response = await fetch(`${this.url}/container/logs/${containerId}/file`);
        return await response.json();
    }

}


const executionClient = new TestExecutionClient();
export default executionClient;