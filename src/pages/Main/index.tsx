import React from 'react'
import { useRouter } from 'next/router'
import fetcher from '../../api/Fetcher'
import styles from '../../../styles/pages/Main/Main.module.css'

interface Wines {
  id: number;
  name: string,
  img_url: string,
  description: string,
  price: number
}

export default function Main() {
  const router = useRouter()
  const { data } = fetcher<Wines[]>("wines")
  console.log(data)
  
  if(!data) {
    return <h1>Carregando ...</h1>
  }

  return (
    <div>
      <div className={styles.container_list_wines}>
        {data.map((item, index) => (
          <div key={index}>
            <div className={styles.content_wine} >
              <img className={styles.img} src={item.img_url} alt="Image Wine"/>
              
              <div className={styles.texts}>
                <p className={styles.title_wine}>{item.name}</p>
                <p className={styles.desc_wine}>{item.description}</p>
              </div>

              <button 
                onClick={() => router.push(`/Wines?${item.id}`)} 
                className={styles.button}>
                Comprar: R$ {item.price}
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
