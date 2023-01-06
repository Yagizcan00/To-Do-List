import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Header({ toDos, setToDos }) {

    var currentIndex = toDos.length;
    
    const [form, setForm] = useState({ name: "", id: currentIndex, check: false })

    const onChangeInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const onSubmit = (event) => {

        event.preventDefault()

        if (form.name === "") {
            alert("You have to enter something!!!")
            return false
        }

        setForm({
            ...form,
            name: "",
            check: false,
            id: form.id += 1,
        })

        setToDos([...toDos, form])
        localStorage.setItem("key", JSON.stringify([...toDos, form]))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>To Do List</h1>
                <input
                    name='name'
                    value={form.name}
                    onChange={onChangeInput}
                    placeholder='Please enter your to-do'>
                </input>
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
