import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/forgotpass.module.css'
import stu from '../public/stu.png'
import rec from '../public/rec.png'
import ri from '../public/rig.png'
import lef from '../public/lef.png'
import stutext from '../public/Student.png'
import rectext from '../public/Recruiter.png'
import skil from '../public/logo1.png'
import Link from 'next/link'
import Google from './google'
export default function Home() {
  
 
  return (
    <>
    <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com"></meta>
    <div className={styles.rig}><div class="g-signin2" data-onsuccess="onSignIn"></div>
   
        <Image src={ri} alt="Picture of the author" />
        </div>
        <div className={styles.lef}>
        <Image src={lef} alt="Picture of the author" />
        </div>
    <div className={styles.container1}>
    <h2 className={styles.fp}>Forgot Password</h2>
    <h4 className={styles.belowfp}>Mention your Registered Email/mobile number to get the verification code. </h4>
    <h4 className={styles.reg}>Registered Email</h4>
    <input className={styles.firstinput} placeholder="someone@gmail.com"></input>
        <p className={styles.line}></p>
        <h2 className={styles.or}>OR</h2>
        <h4 className={styles.con}>Contact Number</h4>
        <input className={styles.secondinput} placeholder="98XXXX"></input>
        <p className={styles.line2}></p>
        <h3 className={styles.checkmail}>Check you Email/Text to get the code</h3>
        
        <button className={styles.enter}>ENTER</button>
      <p className={styles.cross}>X</p>
      <div className={styles.container2}>
      <Image className={styles.belowstu} src={skil} alt="Picture of the author" />
        <div className={styles.image}>

        </div>
        
        
        
        
      
        
      </div>
      
        
      <h1 className={styles.lets}>Let us help</h1>
      <Google/>
      
    </div>
    
    </>
  )
}
