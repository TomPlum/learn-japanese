import React from "react"
import styles from "../../styles/sass/components/learn/DefinitionList.module.scss"

const DefinitionList: React.FC<{ words: string[] | undefined; mode: "inline" | "stacked" }> = ({ words, mode }) => {
    return (
        <div className={mode === "inline" ? styles.inline : styles.stacked}>
            {words?.map((meaning: string, i: number) => {
                if (i < words!.length - 1) {
                    if (mode === "stacked") {
                        return (
                            <div key={i}>
                                <p className={styles.meaning}>{meaning}</p>
                                <p className={styles.or}> or</p>
                            </div>
                        )
                    } else {
                        return [
                            <span className={styles.meaning} key={"meaning-" + i}>
                                {meaning}
                            </span>,
                            <span className={styles.or} key={"or-" + i}>
                                {" "}
                                or
                            </span>
                        ]
                    }
                } else {
                    if (mode === "stacked") {
                        return (
                            <p className={styles.meaning} key={i}>
                                {" "}
                                {meaning}
                            </p>
                        )
                    } else {
                        return (
                            <span className={styles.meaning} key={i}>
                                {" "}
                                {meaning}
                            </span>
                        )
                    }
                }
            })}
        </div>
    )
}

export default DefinitionList
