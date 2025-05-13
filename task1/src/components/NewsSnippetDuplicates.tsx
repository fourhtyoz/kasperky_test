import { useState } from "react";
import { Button } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Duplicate } from "./Duplicate";
import styles from "./NewsSnippetDuplicates.module.scss"
import type { IData_SnippetNews } from "../types";

interface NewsSnippetDuplicatesProps {
    duplicates: IData_SnippetNews;
}

// NOTE: this is a mock because we dont have duplicates in the current data
export const NewsSnippetDuplicates = ({ duplicates }: NewsSnippetDuplicatesProps) => {
    const [showDuplicates, setShowDuplicates] = useState(false);

    const duplicateCount = 5
    return (
        <>
        {duplicateCount > 0 && (
            <div>
                {(showDuplicates ? Array.from({ length: duplicateCount }) : [null]).map((_, index) => (
                    <Duplicate key={index} data={duplicates} />
                ))}

                <Button className={styles.showDuplicates} onClick={() => setShowDuplicates(!showDuplicates)} type="default">
                {showDuplicates ? <UpOutlined /> : <DownOutlined />}
                {showDuplicates ? 'Hide Duplicates' : `View Duplicates`}
                </Button>
            </div>
        )}
        </>
    )
}