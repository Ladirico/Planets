import axios from "axios"

export const dest = () => axios.get("http://localhost:3001/destinations").then(res=>(res.data))