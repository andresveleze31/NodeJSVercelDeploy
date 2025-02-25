import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/holi", (req,res) => {
    res.json({message: "Hola como estan"})
})

app.get("/pokemones", async(req, res) => {
    var options = {
        method: "GET",
        url: "https://app.nocodb.com/api/v2/tables/mhjgcoquihloxhk/records",
        params: {offset: '0', limit: '25', where: '', viewId: 'vw4mp5b4lcljo09s'},
        headers:{
            'xc-token': 'qx2ueGRhg-m66NW7bcH0aZECMeLkqBKQ9UJ61xgr'
        }
    }

    try {
        const response = await axios.request(options);
        res.json(response.data)
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Error fetching data"})
        
    }
   
})

app.listen(port, () => {
    console.log( `Servidor escuchando en http://localhost:${port}`)
})