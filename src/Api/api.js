import axios from "axios";

const API=axios.create({
    baseURL:`http://localhost:5611`,
})

export const getUser=async () => {
    API.get("/getdata").then((res)=>{return res}).catch((err)=>{return err});
}