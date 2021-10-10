
import styles from '../styles/homepage.module.css'
import Head from 'next/head'
import Image from 'next/image'
import hiring from '../public/HiringBird by Skilzen 6.png'
import bigtext from '../public/fi.png'
import man from '../public/man.png'
import wv1 from '../public/Group 2992.png'
import wv2 from '../public/Group 2956.png'
import wv3 from '../public/Group 3056.png'
import wv4 from '../public/Group 2994.png'
import i from '../public/card.png'
import iitr from '../public/iitr.png'
import iima from '../public/iima.png'
import aiims from '../public/aiims.png'
import iitm from '../public/iitm.png'
import iim  from '../public/iim.png'
import w from '../public/wired.png'
import paypal from '../public/paypal.png'
import greenmonke from '../public/greenmonke.png'
import db from '../public/dropbox.png'
import sf from '../public/salesforce.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import idea from '../public/idea.png'
import mc from '../public/mc.png'
import bl from '../public/bluelogo.png'
import slack from '../public/slack.png'
import {Man} from '../Components/Man'
const home = () => {
  return (
    <div>
      
      <div >
        <nav className={styles.navbar}>
          <Image className={styles.logo}src={hiring}></Image>
          <ul className={styles.navbarli}>
            <li className={styles.navbarli}><a className={styles.navbarli1} href="">Post an internship</a></li>
            <li className={styles.navbarli}><a className={styles.navbarli1}href="">Find Internships</a></li>
            <li className={styles.navbarli}><a className={styles.navbarli1}href="">Sign in</a></li>
            <li style={{color:'white'}}className={styles.navbarlibut}><button className={styles.button1}><a className={styles.navbarli2}href="">Sign up</a></button></li>
          </ul>
        </nav>
        
      <div className={styles.container2}>
      
        <div className={styles.image}>
        <Image  src={bigtext}></Image>
        <p className={styles.quote}>The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.”

-Steve Jobs
</p>
       
        
        <li className={styles.getstart}><button className={styles.getsbut}><a className={styles.navbarli2}href="">Get Started</a></button></li>
        
        
        <input className={styles.input}></input><button className={styles.samplebut}></button>
        
        </div>
        
        <div className={styles.man1}>
        <Image  className={styles.man1}src={man}></Image>
        </div>
        <div className={styles.headphones}>

        </div>
        
       
        
      
        
      </div>
      
      <h1 className={styles.lets}></h1>
      <section className={styles.homepage2}>
        <div className={styles.work}>
          <h1 className={styles.work}>How does it work?</h1>
          <p className={styles.nearwork}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer dolor sit amet, consectetur adipiscing elit. Nunc odio in et.</p>
          <div className={styles.workvector}>
           
            <Image className={styles.wv2}src={wv2}></Image>
          </div>
          <div className={styles.workvector1}>
           
            <Image className={styles.wv2}src={wv3}></Image>
          </div>
          <div className={styles.workvector2}>
           
            <Image className={styles.wv2}src={wv4}></Image>
          </div>
        </div><button className={styles.workbtn}></button>
      </section>
      <section className={styles.homepage2}>
      <div className={styles.featured}>
          <h1 className={styles.work}>Featured Internships</h1>
          <p className={styles.nearwork}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer dolor sit amet, consectetur adipiscing elit. Nunc odio in et.</p>
         </div>
         <div className={styles.pagenation}>
         <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
           <div className={styles.int1}>
             
           </div>
           <div className={styles.int2}>
             
           </div>
           <div className={styles.int3}>
             
           </div>
           <div className={styles.int4}>
             
           </div>

         </div>
      </section>
      <section className={styles.homepage2}>
        <div className={styles.cat}>
          <h1>50+<br/>Catagories</h1>
          <h3 className={styles.nearcat}>Explore our handpicked catagory of Internships and unlock your journey with us today! Select one to view the internships</h3>
        </div>
        <div className={styles.manycat1}>
          <Image className={styles.blub} src={idea}></Image>
        </div>
        <div className={styles.manycat2}>
          <Image className={styles.blub} src={idea}></Image>
        </div>
        <div className={styles.manycat3}>
          <Image className={styles.blub} src={idea}></Image>
        </div>
        <div className={styles.manycat4}>
          <Image className={styles.blub} src={idea}></Image>
        </div>
        <div className={styles.manycat4}>
          <Image className={styles.blub} src={idea}></Image>
        </div>
      </section>
      <section className={styles.homepage2}>
      <div className={styles.loc}>
          <h1>Location</h1>
          <p className={styles.nearloc}>We are currently encouraging Work From Home Internships for the safety for all our loved ones. Find the best internship opportunities here to launch your professional career.</p>
          <div className={styles.manyloc1}>
          
        </div>
        <div className={styles.manyloc2}>
          
        </div>
        <div className={styles.manyloc3}>
          
        </div>
        <div className={styles.manyloc4}>
          
        </div>
        <div className={styles.manyloc5}>
          
        </div>

        </div>
      </section>
      <section className={styles.homepage2}>
        <div className={styles.nearphoto}>
          <h3 className={styles.nearphoto1}>
            Get in touch with deserving candidates 
          </h3>
          <p className={styles.nearphoto2}>If you are looking to connect with the best candidates you are at the right place. With over 200 top colleges and many success stories you will have access to the finest talent ! Register your Company and Recruit Interns with Hiring Bird today! </p>
        </div>
        <div className={styles.candi}>

        </div>
        <ul className={styles.none}>
          <li className={styles.belowfoto}></li>
          <li className={styles.belowfoto2}></li>
          <li className={styles.belowfoto3}></li>
          <li className={styles.belowfoto4}></li>
        </ul>
        <div className={styles.topcollege}>
          <h3>Top Colleges</h3>
          
        </div>
        <div  className={styles.clgimg}>
          <Image  className={styles.iitm} src={iitm}></Image>
          
        </div>
        <div className={styles.aiims}>
        <Image  className={styles.clgimg} src={aiims}></Image>
        </div>
        <div className={styles.iitr}>
        <Image  className={styles.clgimg} src={iitr}></Image>
        </div>
        <div className={styles.iima}>
        <Image  className={styles.clgimg} src={iima}></Image>
        </div>
        <div className={styles.iim}>
        <Image  className={styles.clgimg} src={iim}></Image>
        </div>
        <div className={styles.wired}>
        <Image  className={styles.clgimg} src={w}></Image>
        </div>
        
      </section>
      <section className={styles.homepage2}>
        <div className={styles.ourno}>
          <h3 >
          
          </h3>
          
          </div>
          <div className={styles.pinkbar}>

          </div>
          </section>
          <h1 className={styles.topcompres}>Top Companies <br/>Hiring </h1>
          <section className={styles.homepagepurple}>
          
            <div className={styles.topcomp}>
              <h1 >Top Companies Hiring </h1>
              
            <p className={styles.redfont}>Get internships in 
renowned companies</p>
          <p className={styles.belowred}>Choose HiringBird for your next internship opportunity</p>
          <div className={styles.paypal1}>
          <Image src={paypal}></Image>
            </div>
            <div className={styles.paypal2}>
          <Image src={paypal}></Image>
            </div>
            <div className={styles.mc}>
          <Image src={mc}></Image>
            </div>
            <div className={styles.mc2}>
          <Image src={mc}></Image>
            </div>
            <div className={styles.slack}>
          <Image src={slack}></Image>
            </div>
            <div className={styles.blue}>
          <Image src={bl}></Image>
            </div>
            <div className={styles.gm}>
          <Image src={greenmonke}></Image>
            </div>
            <div className={styles.db}>
          <Image src={db}></Image>
            </div>
            <div className={styles.sf}>
          <Image src={sf}></Image>
            </div>
            <div className={styles.sf2}>
          <Image src={sf}></Image>
            </div>
            </div>
            
            <button className={styles.join}>Join skilzen</button>
          
          </section>
          <section >
            <h1 className={styles.chooseres}>Choose HiringBird for your next internship opportunity</h1>
          </section>
          <button className={styles.joinres}>Join skilzen</button>
          
        <footer className={styles.footer}>
          <ul className={styles.footerlist}>
            <li className={styles.fl1}>
            Internship by Field
            </li>
            <li className={styles.fl2}>Computer Science/IT</li>
            <li className={styles.fl3}>Electronics</li>
            <li className={styles.fl4}>Mechanical</li>
            <li className={styles.fl5}>Civil</li>
            <li className={styles.fl6}>Marketing</li>
            <li className={styles.fl7}>Design</li>
            <li className={styles.fl8}>Finance</li>
            <li className={styles.fl9}>Summer Intern</li>

          </ul>
          <ul className={styles.footerlist2}>
            <li className={styles.fl1}>
            Internship by Field
            </li>
            <li className={styles.fl2}>Computer Science/IT</li>
            <li className={styles.fl3}>Electronics</li>
            <li className={styles.fl4}>Mechanical</li>
            <li className={styles.fl5}>Civil</li>
            <li className={styles.fl6}>Marketing</li>
            <li className={styles.fl7}>Design</li>
            <li className={styles.fl8}>Finance</li>
            <li className={styles.fl9}>Summer Intern</li>

          </ul>
          <div className={styles.line}>
            
          </div>
          </footer>
     

      <p className={styles.cross}></p>
    </div>
    <div className={styles.second}>

    </div>
    </div>
    
  )
}

export default home
