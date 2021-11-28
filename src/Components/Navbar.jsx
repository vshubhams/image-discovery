import { useState } from "react"
import styles from "./Navbar.module.css"

function Navbar({getSearchData}) {
    const [value, setValue] = useState('');

    const handleSearch = () => {
        getSearchData(value);
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>Images</div>
            <div className={styles.right}>
                <input onChange={(e)=>{setValue(e.target.value)}} type="search" placeholder="Search..." />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default Navbar
