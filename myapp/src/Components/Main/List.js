import { useEffect } from 'react'

function List({ toDos, setToDos }) {

    useEffect(() => {
        localStorage.setItem("key", JSON.stringify([...toDos]))
    }, [toDos])

    const Delete = event => {
        setToDos(toDos.filter((todo) => parseInt(todo.id) !== parseInt(event)));
    }

    const Check = e => {

        let newToDos = toDos.map((item) => {
            if (parseInt(item.id) === parseInt(e)) {
                return { ...item, check: !item.check }
            }
            return item
        })
        setToDos(newToDos)
    }

    const ClassNameChange = event => {
        if (event === true) {
            return "completed"
        }
        else if (event === false) {
            return "unCompleted"
        }
    }

    return (
        <div>
            <ol>
                {toDos.map((item, i) => (
                    <div key={i} className='toDos'>
                        <li key={item.id} className={ClassNameChange(item.check)}>
                            {item.name}
                        </li>
                        <div className='buttons'>
                            <button id={item.id} onClick={() => Delete(item.id)}>Delete</button>
                            <button id={item.id} onClick={() => Check(item.id)}>Check</button>
                        </div>
                    </div>
                ))}
            </ol>
        </div>
    )
}

export default List
