export const selectJob = (job) => {
    console.log("You clicked on job: ", job.job_id +" - "+ job.job_name);
    return {
        type: 'JOB_SELECTED',
        payload: job
    }
};
