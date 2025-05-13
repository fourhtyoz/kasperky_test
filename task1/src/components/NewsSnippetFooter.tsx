import { useState } from "react"
import { Dropdown, Typography } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { CustomButton } from "./CustomButton"
import styles from "./NewsSnippetFooter.module.scss"

interface NewsSnippetFooterProps {
    URL: string
}

const { Text } = Typography
export const NewsSnippetFooter = ({ URL }: NewsSnippetFooterProps) => {
    const [sortBy, setSortBy] = useState("relevance")
    
    // mocks
    const duplicates = 5
    const sortOptions = [
        { key: "relevance", label: "By Relevance" },
        { key: "date", label: "By Date" },
        { key: "country", label: "By Country" }
    ]
    return (
        <div className={styles.footer}>
                <CustomButton url={URL} text={'Original Source'} />
                <div className={styles.footerInfo}>
                    <Text style={{ color: 'darkgray' }}>Duplicates: {duplicates}</Text>
                    {/* NOTE: This is a mock because our duplicates are complete clones, so no reason to implement this functionality properly */}
                    <Dropdown menu={{ items: sortOptions, onClick: (item) => setSortBy(item.key)}} trigger={['click']}>
                        <Text style={{ color: 'darkgray', cursor: 'pointer' }}>
                            {sortOptions.find(o => o.key === sortBy)?.label} <DownOutlined />
                        </Text>
                    </Dropdown>
                </div>
            </div>
    )
}