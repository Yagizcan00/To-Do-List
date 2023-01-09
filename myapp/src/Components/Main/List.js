import { useEffect } from 'react'

function List({ toDos, setToDos }) {

    useEffect(() => {
        localStorage.setItem("key", JSON.stringify([...toDos]))
    }, [toDos])

    const Delete = event => {
        setToDos(toDos.filter((todo) => parseInt(todo.id) !== parseInt(event)));
    }

    const Check = event => {
        console.log(event);
    }

    return (
        <div>
            <ol>
                {toDos.map((item) => (
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                        <li key={item.id}>
                            {item.name}
                        </li>
                        <button id={item.id} onClick={() => Delete(item.id)}>Delete</button>
                        <button id={item.id} onClick={() => Check(item.check)}>Check</button>
                    </div>
                ))}
            </ol>
        </div>
    )
}

export default List
