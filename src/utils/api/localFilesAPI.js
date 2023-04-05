import { post, get } from '../ApiCaller';

const localFilesAPI = {
    uploadQuestionFile: async (file) => {
        const endpoint = `/local-files/upload-question-file`;
        return await post(endpoint, { files: file }, {}, { 'Content-Type': 'multipart/form-data' });
    },
};

export default localFilesAPI;
