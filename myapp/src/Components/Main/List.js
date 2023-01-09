import { useEffect } from 'react'

function List({ toDos, setToDos }) {

    useEffect(() => {
        localStorage.setItem("key", JSON.stringify([...toDos]))
    }, [toDos])

    const Delete = event => {
        console.log(event);
        setToDos(oldValues => {
            return oldValues.filter((_, i) => i !== event)
        })
    }

    const Check = () => {

    }

    return (
        <div>
            <ul>
                {toDos.map((item) => (
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                        <li key={item.id}>
                            {item.id} - {item.name}
                        </li>
                        <button id={item.id} onClick={() => Delete(item.id)}>Delete</button>
                        <button id={item.id} onClick={Check}>Check</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default List
