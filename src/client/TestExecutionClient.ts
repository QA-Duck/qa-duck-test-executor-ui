class TestExecutionClient {

    private url = "http://localhost:8081";


    public async runTest (template: any) {
        return await fetch(this.url + "/run", {
                method: 'POST',
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(template)
            }
        )
    }

    public async getJobs (projectName: any) {
        const response = await fetch(this.url + "/jobs/" + projectName);
        return await response.json();
    }
}


const executionClient = new TestExecutionClient();
export default executionClient;