import React from 'react'
import Link from "next/link"
import styles from '../../styles/components/LinkHref/LinkHref.module.scss'

const LinkHref = ({ text, href }) => {
    return (
        <Link href={href} className={styles.link}>
            {text}
        </Link>
    )
}

export default LinkHref