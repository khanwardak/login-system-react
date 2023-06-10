function CrudTodo(){
    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    const todos =[{id:1, description:'I want to learn react',isDone:'false',targetDate:targetDate},
                 {id:2, description:'I want to learn react',isDone:'false', targetDate:targetDate},
                 {id:3, description:'I want to learn spring boot',isDone:'false', targetDate:targetDate}
                 ]
   
    return <div className="container TodoList">
            <table className="table">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>IS Done</td>
                        <td>target Date</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo =>(
                                <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.isDone}</td>
                                <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                        
                    }
                </tbody>
            </table>
    </div>
}
export default CrudTodo;