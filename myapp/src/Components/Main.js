import { useState } from 'react'
import Header from './Header'
import "./Main.css"
import PropTypes from 'prop-types'
import List from './List'

function Main() {

    const [list, setList] = useState(JSON.parse(localStorage.getItem("i")) || [])

    return (
        <div class="d-flex flex-column justify-content-center w-100 h-100">
            <div>
                <header className='header'>
                    <Header list={list} setList={setList} />
                    <List list={list} setList={setList} />
                </header>
            </div>
        </div>
    )
}

Main.propTypes = {
    list: PropTypes.array,
}
export default Main