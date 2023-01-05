import { useState } from 'react'
import Header from './Main/Header'
import "./Main.css"
import PropTypes from 'prop-types'
import List from './Main/List'

function Main() {

    const [toDos, setToDos] = useState(JSON.parse(localStorage.getItem("key")) || [])

    const defaultList = [
        "Testing element one",
        "Testing element two",
        "Testing element three",
    ]

    return (
        <div>
            <header className='header'>

                <Header toDos={toDos} setToDos={setToDos} />

                <List toDos={toDos} setToDos={setToDos} />

            </header>
        </div>
    )
}

Main.propTypes = {
    toDos: PropTypes.array,
}
export default Main