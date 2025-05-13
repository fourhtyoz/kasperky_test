import { Typography, Tag } from "antd"
import { getSentimentColor } from "../utils"
import dayjs from "dayjs"
import styles from "./NewsSnippetHeader.module.scss"
import type { IData_TrafficItem } from "../types"

interface NewsSnippetHeaderProps {
    DP: string | Date | number;
    REACH?: number;
    TRAFFIC?: IData_TrafficItem[];
    SENT?: string;
    showSentiment?: boolean;
}

const { Text } = Typography
export const NewsSnippetHeader = ({ DP, REACH, TRAFFIC, SENT, showSentiment }: NewsSnippetHeaderProps) => {
    const formattedDate = dayjs(DP).format("D MMM YYYY")
    return (
        <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <Text style={{ color: 'darkgray' }}>{formattedDate}</Text>
                    {REACH && <Text style={{ color: 'darkgray' }}>{Math.round(REACH / 1000)}K Reach</Text>}
                    {TRAFFIC && <Text style={{ color: 'darkgray' }}>
                        Top Traffic:{" "}
                        {TRAFFIC.slice()
                            .sort((a, b) => b.count - a.count)
                            .map((item, index) => (
                                <span key={index}>
                                    <b>{item.value}</b> {(item.count * 100).toFixed(0)}%
                                    {index < TRAFFIC.length - 1 ? ", " : ""}
                                </span>
                            ))}
                    </Text>}
                </div>
                {SENT && showSentiment && 
                <div className={styles.headerRight}>
                    <Tag color={getSentimentColor(SENT)}>{SENT}</Tag>
                </div>
                }
        </div>
    )
}