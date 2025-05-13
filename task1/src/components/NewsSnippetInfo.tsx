import { Typography } from "antd"
import { toTitleCase, displayAuthors, getEmojiFlag } from "../utils"
import { GlobalOutlined, ReadOutlined, UserOutlined } from "@ant-design/icons"
import styles from "./NewsSnippetInfo.module.scss"

interface NewsSnippetInfoProps {
    FAV?: string;
    DOM?: string;
    CNTR_CODE?: string;
    CNTR?: string;
    LANG?: string;
    AU?: string[];
  }

const { Text, Link } = Typography
export const NewsSnippetInfo = ({ FAV, DOM, CNTR_CODE, CNTR, LANG, AU = [] }: NewsSnippetInfoProps) => {
    return (
        <div className={styles.domainRow}>
            {DOM &&
            <div className={styles.domainRowItem}>
                {FAV ? <img src={FAV} alt="favicon" className={styles.favicon} /> : <GlobalOutlined style={{ color: 'darkgray' }}/>}
                <Link underline>{DOM}</Link>
            </div>
            }
            {CNTR_CODE && CNTR && 
            <div className={styles.domainRowItem}>
                <Text style={{ color: 'darkgray' }}>
                    {CNTR_CODE.toUpperCase() && <span style={{ marginRight: 8 }}>{getEmojiFlag(CNTR_CODE.toUpperCase())}</span>}
                    {CNTR}
                </Text>
            </div>
            }
            {LANG &&
            <div className={styles.domainRowItem}>
                <ReadOutlined style={{ color: 'darkgray' }}/>
                <Text style={{ color: 'darkgray' }}>{toTitleCase(LANG)}</Text>
            </div>
            }
            <div className={styles.domainRowItem}>
                <UserOutlined style={{ color: 'darkgray' }}/>
                <Text style={{ color: 'darkgray' }}>
                    {AU.length === 0 ? "Unknown Author" : displayAuthors(AU)}
                </Text>
            </div>
        </div>
    )
}