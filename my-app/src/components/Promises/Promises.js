import axios from "axios";
import {useState} from "react";


const api = {
    getTodolist(){
        return axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((res)=> res.data)
    }
}

export const Promises = () => {

    const [todos, setTodos] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const onClick = () =>{
        setIsLoading(true)
        api.getTodolist()
            .then((todolist)=>{
                setTodos([...todos, todolist])
                console.log(todolist)
            })
            .catch((e) => {
                console.log(e)
                setError('Something went wrong1')
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }
    return isLoading ? (<div>Loading...</div>) : (
        <div>
            <button onClick={onClick}>load todolist</button>
            {error && <div>{error}</div>}
            {
                todos.map((t, id) =>{
                    return <div key={id}>{t.title}</div>
                })
            }
        </div>
    )
}