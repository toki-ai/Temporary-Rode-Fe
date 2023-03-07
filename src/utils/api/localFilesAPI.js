import { post, get } from '../ApiCaller';

const localFilesAPI = {
    uploadQuestionFile: async (files) => {
        const formData = new FormData();
        files.forEach((file) => {
            formData.append('files', file);
        });

        // formData.entries().forEach((pair) => console.log(pair));
        for (let pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        const endpoint = `/local-files/upload-question-file`;
        return await post(
            endpoint,
            { files: formData },
            {},
            { 'Content-Type': 'multipart/form-data' }
        );
    },
};

export default localFilesAPI;
