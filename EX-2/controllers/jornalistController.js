import { journalists ,articles} from "../models/data.js";

const getAllJournalists = (req,res) => {
    res.status(200).json(journalists);
}

const getJournalistById = (req,res) => {
    const journalistId = parseInt(req.params.id)
    const journalist = journalists.find(j => j.id === journalistId)
    if(!journalist)res.status(404).json({message: 'Journalist not found'});
    res.status(200).json(journalist);
}
const createJournalist = (req,res) => {
    const {name,email} = req.body;
    if(!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newJournalist = {
        id: journalists.length + 1,
        name,
        email
    }
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
}
const updateJournalist = (req,res) => {
    const journalistId = parseInt(req.params.id)
    const {name,email} = req.body;
    const journalist = journalists.find(j => j.id === journalistId)
    if(!journalist) return res.status(404).json({ error: 'Journalist not found' });
    if(name)journalist.name = name;
    if(email)journalist.email=email;
    res.status(200).json(journalist);
}
const deleteJournalist = (req,res) => {
    const journalistId = parseInt(req.params.id)
    const index = journalists.findIndex(j => j.id===journalistId)
    if(index=== -1)return res.status(404).json({ error: 'hello Journalist not found' });
    journalists.splice(index,1);
    console.log(journalists)
    res.status(204).send();
}
const getJournalistArticles = (req,res) => {
    const journalistId = parseInt(req.params.id)
    const journalistArticle = articles.filter(a => a.id === journalistId)
    if(!journalistArticle) return res.status(404).json({ error: 'Journalist not found' });
    res.status(200).json(journalistArticle);
}
export {getAllJournalists,createJournalist,updateJournalist,deleteJournalist,getJournalistById,getJournalistArticles};
