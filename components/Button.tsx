'use client'

import { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button type="button" className={styles.btn} {...props}>
      {children}
    </button>
  )
}
