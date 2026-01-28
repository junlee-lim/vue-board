import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080'

class HttpService{
    async save(jsonBody){
        const res = await axios.post('/board', jsonBody);
        return res.data;
    }
    async findAll(){
        const res = await axios.get('/board');
        return res.data;
    }
    async findById(id){
        const res = await axios.get(`/board/${id}`);
        return res.data;
    }
    async delete(params){
        const res = await axios.delete('/board', {params});
        return res.data;
    }
    async update(jsonBody){
        const res = await axios.put('/board', jsonBody);
        return res.data;
    }

}

export default new HttpService();