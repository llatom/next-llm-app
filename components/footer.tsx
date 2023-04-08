import Link from "next/link";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className={styles.grid}>
    <div className={styles.card}>
      <h2 className={inter.className}>
        Style <span>-&gt;</span>
      </h2>
      <a href="https://mycolor.space/gradient3" className={inter.className} rel="noopener noreferrer">
        color
      </a>
      <br />
      <a href="https://tailwindcss.com/" className={inter.className} rel="noopener noreferrer">
        tailwindcss
      </a>
    </div>

    <a
      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        Learn <span>-&gt;</span>
      </h2>
      <p className={inter.className}>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    </a>

    <a
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        Templates <span>-&gt;</span>
      </h2>
      <p className={inter.className}>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
    </a>

    <a
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={inter.className}>
        Deploy <span>-&gt;</span>
      </h2>
      <p className={inter.className}>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
    </a>
  </footer>
  );
}
