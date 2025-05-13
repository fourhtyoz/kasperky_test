import { Tag } from "antd"
import styles from "./NewsSnippetKeywords.module.scss"
import type { IData_TagItem } from "../types"

interface NewsSnippetKeywordsProps {
    KW: IData_TagItem[]
}

export const NewsSnippetKeywords = ({ KW }: NewsSnippetKeywordsProps) => {
    return (
        <div className={styles.keywords}>
                {KW.slice(0, 5).map((kw) => (
                    <Tag key={kw.value} className={styles.keywordTag}>{kw.value} {kw.count > 1 && <span className={styles.count}>{kw.count}</span>}</Tag>
                ))}
                {KW.length > 5 && (
                    <a href="#" className={styles.showAll}>
                        Show All +{KW.length - 5}
                    </a>
                )}
            </div>
    )
}