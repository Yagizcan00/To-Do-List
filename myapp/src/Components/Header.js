import { useState } from 'react'
import PropTypes from 'prop-types'

function Header({ list }) {

    const [toDo, setToDo] = useState({ name: "name", id: 1, check: false })

    return (
        <div>
            <form>
                <h1>To Do List</h1>
                <input name='name' placeholder='Please enter your to-do'></input>
                <button>Add</button>
            </form>
        </div>
    )
}

Header.propTypes = {
    name: PropTypes.string,
    check: PropTypes.bool,
    id: PropTypes.number,
}

export default Header
