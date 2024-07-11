import axios from "axios";

async function data1(id){
    const jsonPromise = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
    const d = await jsonPromise.json()
    console.log(d["todo"])
}
async function data2(id){
    const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    console.log(res.data.todo)
}

data1(1)
data2(2)
