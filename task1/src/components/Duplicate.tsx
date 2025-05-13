import { Card, Typography  } from "antd"
import styles from "./Duplicate.module.scss"
import { NewsSnippetHeader } from "./NewsSnippetHeader"
import { NewsSnippetInfo } from "./NewsSnippetInfo"
import { CustomButton } from "./CustomButton"
import type { IData_SnippetNews } from "../types"

interface DuplicateProps {
    data: IData_SnippetNews;
}

const { Title} = Typography
export const Duplicate = ({ data }: DuplicateProps) => {
    return (
        <Card className={styles.duplicateCard}>
            <NewsSnippetHeader DP={data.DP} REACH={data.REACH} showSentiment={false} />
            <Title level={4} style={{ color: '#0772cb' }}>{data.TI}</Title>
            <NewsSnippetInfo FAV={data.FAV} DOM={data.DOM} CNTR_CODE={data.CNTR_CODE} CNTR={data.CNTR} AU={data.AU}/>
            <CustomButton url={data.URL} text={'View Article'} />
        </Card>
    )
}