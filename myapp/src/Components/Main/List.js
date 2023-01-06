import { useEffect } from 'react'

function List({ toDos, setToDos }) {

    useEffect(() => {
        localStorage.setItem("key", JSON.stringify([...toDos]))
    }, [toDos])

    return (
        <div>
            <ul>
                {toDos.map((item) => (
                    <div style={{ flexDirection: 'row', display: 'flex'}}>
                        <li key={item.id}>
                            {item.id} - {item.name}
                        </li>
                        <button>Delete</button>
                        <button>Check</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default List
