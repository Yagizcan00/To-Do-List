import {useEffect} from 'react'

function Footer({ toDos, setToDos }) {

    const ClearAll = () => {
        setToDos([])
    }

    const ClearJustChecked = () => {
        
        setToDos(toDos.filter((todo) => {
            return todo.check !== true
        }))
    }
    
    useEffect(() => {
        localStorage.setItem("key", JSON.stringify([...toDos]))
    }, [toDos])

    return (
        <div>
            <button onClick={ClearAll}>Clear All</button>
            <button onClick={ClearJustChecked}>Clear Just Checked</button>
        </div>
    )
}

export default Footer
