import React from 'react'
import styles from './megamenu.module.css'

const MegaMenu = () => {
    return (
        <>
            <div className={styles.aboutmegamenudiv}>
                <div className={styles.megamainfirstcontainer}>
                    <div className={styles.megamenuaboutleft}>
                        <h6>About Us</h6>
                        <ul type="circle" className={styles.aboutmegamenu}>
                            <li className={styles.li}><a href="#" className={styles.megalink1}>Company Overview</a></li>
                            <li className={styles.li}><a href="#" className={styles.megalink1}>Client Testimonials</a></li>
                            <li className={styles.li}><a href="#" className={styles.megalink1}>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className={styles.megamenuaboutright}>
                        <h6>Others</h6>
                        <ul type="circle" className={styles.othermegamenu}>
                            <li className={styles.li}><a href="#" className={styles.megalink2}>Life@GTS</a></li>
                            <li className={styles.li}><a href="#" className={styles.megalink2}>FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.aboutmegamenubottom}>
                    <div className = {styles.abountmegamenubottomcontent}>
                        <img src="./img/careersimg.svg" alt="not found" width="18px" style = {{marginLeft:"20px"}}></img>
                        <span style={{ fontSize: "1rem", marginLeft:"18px"}}>Careers</span>
                        <span style={{ display: "block", fontSize: "0.8rem", opacity: "0.5",marginLeft:"56px"}}>We have always vacancies open for skilled developers & designers!</span>
                    </div>
                    <div>
                        <img src = "./img/next.png" width = "24px" style = {{marginRight:"20px"}}></img>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default MegaMenu