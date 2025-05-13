import { useState } from "react"
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons"
import styles from "./NewsSnippetText.module.scss"

interface NewsSnippetTextProps {
    HIGHLIGHTS: string[]
}

export const NewsSnippetText = ({ HIGHLIGHTS }: NewsSnippetTextProps) => {
    const [expanded, setExpanded] = useState(false)

    const fullText = HIGHLIGHTS.join(" ")
    
    // NOTE: must be sanitized on backend to prevent xss
    const processedHtml = fullText.replace(
        /<kw>(.*?)<\/kw>/g,
        `<span class="${styles.keywordHighlight}">$1</span>`
    )
    return (
        <div>
            <span className={`${styles.highlightText} ${!expanded ? styles.highlightTextCollapsed : ''}`} dangerouslySetInnerHTML={{ __html: processedHtml }}/>
            <a className={styles.showMore} onClick={() => setExpanded(!expanded)}>
                {expanded ? <>Show less <CaretUpOutlined /></> : <>Show more <CaretDownOutlined /></>}
            </a>
        </div>
    )
}