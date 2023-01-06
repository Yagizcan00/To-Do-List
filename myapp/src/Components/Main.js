import { useState } from 'react'
import Header from './Main/Header'
import "./Main.css"
import PropTypes from 'prop-types'
import List from './Main/List'

function Main() {

    const [toDos, setToDos] = useState(
        JSON.parse(localStorage.getItem("key")) || []
    )

    return (
        <div>
            <header>
                <Header toDos={toDos} setToDos={setToDos} />
            </header>
            <section>
                <List toDos={toDos} setToDos={setToDos} />
            </section>
        </div>
    )
}

Main.propTypes = {
    toDos: PropTypes.array,
}
export default Main