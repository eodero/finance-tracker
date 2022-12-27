
import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import TransactionForm from './TransactionForm'
import styles from './Home.module.css'
import { useCollection } from '../../hooks/useCollection'
import TransactionList from './Transactionlist'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('transactions')
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}></div>
      <TransactionForm uid={user.id} />
    </div>
  )
}

