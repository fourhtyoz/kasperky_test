import styles from "./CustomButton.module.scss"

interface CustomButtonProps {
    url: string
    text: string
}
export const CustomButton = ({ url, text }: CustomButtonProps) => {
    return (
        <a href={url} className={styles.button} target="_blank">{text}</a>
    )
}