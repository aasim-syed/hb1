import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import stu from '../public/stu.png'
import rec from '../public/rec.png'
import ri from '../public/rig.png'
import lef from '../public/lef.png'
import stutext from '../public/Student.png'
import rectext from '../public/Recruiter.png'
import skil from '../public/logo1.png'
import Google from './google'
import SignOut from './signout'
import Link from  'next/Link'

export default function Home() {
  return (
    <>
    <div className={styles.rig}>
      
        <Image src={ri} alt="Picture of the author" />
        </div>
        <div className={styles.lef}>
        <Image src={lef} alt="Picture of the author" />
        </div>
    <div className={styles.container1}>
    <Google/>
    <button className={styles.stu}>
        <Image src={stu} alt="Picture of the author" />
        <br/>
        <br/>
        <Image className={styles.belowstu} src={stutext} alt="Picture of the author" />

        </button>
        <button className={styles.stu2}>
        <Image src={rec} alt="Picture of the author" />
        <br/>
        <br/>
        <Image className={styles.belowstu} src={rectext} alt="Picture of the author" />
        </button>
      <p className={styles.cross}>X</p>
      <div className={styles.container2}>
      <Image className={styles.belowstu} src={skil} alt="Picture of the author" />
        <div className={styles.image}>
        
        </div>
        
        
        
        
      
        
      </div>
      
        
      <h1 className={styles.lets}>Lets get you Started!</h1>
      <p className={styles.signin}>Already on Skilzen?Go To<span style={{color:'#F26A7E'}}><Link href="./passwordreset">Sign in</Link></span></p>
      
    </div>
    
    </>
  )
}
