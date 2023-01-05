import { useEffect } from 'react'

function List({ toDos, setToDos }) {

    console.log(toDos);

    useEffect(() => {
        localStorage.setItem("key", JSON.stringify([...toDos]))
    }, [toDos])

    return (
        <div>
            <ul>
                {toDos?.map((item) =>
                <li>{item}</li> 
                )}
            </ul>
        </div>
    )
}

export default List
