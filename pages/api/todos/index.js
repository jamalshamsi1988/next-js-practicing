import { todos } from "../../../data/todos"

export default function handler(req, res){

    if(req.method === "GET"){
        res.status(200).json(todos);

    }else if(req.method === "POST"){
        const {todo} = req.body;
        console.log(req)
        //Store in DB
        const newTodo ={
            id : todos.length + 1 ,
            title : todo,
        };
       res.status(201).json({
        message :"Success",
        data : newTodo,
       });
    }else if(req.method === "DELETE"){
        res.status(200).json({message : "All Todos Deleted" , data : []});
    }else if(req.method === "PUT"){
        res.status(200).json({
            message : "Replace all tdodos",
            data : res.body
        });
    }

}