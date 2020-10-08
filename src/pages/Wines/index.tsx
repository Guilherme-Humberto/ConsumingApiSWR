import React from 'react'
import { useRouter } from 'next/router'
import fetcher from '../../api/Fetcher'
import styles from '../../../styles/pages/Wines/Wine.module.css'

interface Wines {
  id: number;
  name: string,
  img_url: string,
  description: string,
  price: number
}

export default function Users() {
  const router = useRouter()
  const id = router.asPath.substr(7)
  // 
  const { data } = fetcher<Wines>(`wines/${id}`)
  
  if(!data) {
    return <h1>Carregando ...</h1>
  }

  return (
    <div>
        <div className={styles.container_wine}>
          <img className={styles.img_wine} src={data.img_url} alt=""/>
          <div className={styles.texts}>
            <p className={styles.title_wine}>{data.name}</p>
            <p className={styles.desc_wine}>{data.description}</p>
            <button className={styles.button}>Comprar: R$ {data.price}</button>
          </div>
        </div>
    </div>
  )
}
