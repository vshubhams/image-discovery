import styles from "./ImageGrid.module.css";
function ImageGrid({data}) {
    return (
        <div className={styles.grid}>
            {
                data.map((el) => (
                    <div className={styles.card} key={el.id}>
                        <img src={el.urls.small} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default ImageGrid
