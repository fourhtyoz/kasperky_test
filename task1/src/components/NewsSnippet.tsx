import { Card, Typography } from "antd"
import { NewsSnippetHeader } from "./NewsSnippetHeader"
import { NewsSnippetInfo } from "./NewsSnippetInfo"
import { NewsSnippetText } from "./NewsSnippetText"
import { NewsSnippetKeywords } from "./NewsSnippetKeywords"
import { NewsSnippetFooter } from "./NewsSnippetFooter"
import { NewsSnippetDuplicates } from "./NewsSnippetDuplicates"
import styles from "./NewsSnippet.module.scss"
import type { IData_SnippetNews } from "../types"

interface NewsSnippetProps {
    data: IData_SnippetNews
}

const { Title } = Typography
export const NewsSnippet = ({ data }: NewsSnippetProps) => {
    if (!data) {
        return (
            <Title style={{ color: 'white' }}>No data</Title>
        )
    }
    
    return (
        <Card className={styles.newsCard}>
            <NewsSnippetHeader DP={data.DP} REACH={data.REACH} TRAFFIC={data.TRAFFIC} SENT={data.SENT} showSentiment={true} />
            <Title level={4} style={{ color: '#0772cb' }}>{data.TI}</Title>
            <NewsSnippetInfo FAV={data.FAV} DOM={data.DOM} CNTR_CODE={data.CNTR_CODE} CNTR={data.CNTR} LANG={data.LANG} AU={data.AU} />
            <NewsSnippetText HIGHLIGHTS={data.HIGHLIGHTS} />
            <NewsSnippetKeywords KW={data.KW} />
            <NewsSnippetFooter URL={data.URL} />
            <NewsSnippetDuplicates duplicates={data} />
        </Card>
    )
}
