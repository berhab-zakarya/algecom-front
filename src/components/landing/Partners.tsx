import Image from "next/image"
import styles from './Partners.module.css'

const Partners = () => {
  return (
    <section className="py-8 bg-[#1E3A8A] h-[114px] overflow-hidden">
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {/* First set of images */}
          <div className={styles.slide}>
            <Image src="/logo/png/ptr_1.png" alt="HubSpot" width={109} height={30} />
          </div>
          <div className={styles.slide}>
            <Image src="/logo/png/ptr_2.png" alt="Buffer" width={109} height={30} />
          </div>
          <div className={styles.slide}>
            <Image src="/logo/png/ptr_3.png" alt="Stripe" width={100} height={30} />
          </div>
          <div className={styles.slide}>
            <Image src="/logo/png/ptr_4.png" alt="Framer" width={109} height={30} />
          </div>
          <div className={styles.slide}>
            <Image src="/logo/png/ptr_5.png" alt="Dropbox" width={109} height={30} />
          </div>
          
          {/* Duplicate set of images for seamless loop */}
          <div className={styles.slide}>
            <Image src="/logo/png/ptr_1.png" alt="HubSpot" width={109} height={30} />
          </div>
          <div className={styles.slide}>
            <Image src="/logo/png/ptr_2.png" alt="Buffer" width={109} height={30} />
          </div>
          <div className={styles.slide}>
            <Image src="/logo/png/ptr_3.png" alt="Stripe" width={100} height={30} />
          </div>
          <div className={styles.slide}>
            <Image src="/logo/png/ptr_4.png" alt="Framer" width={109} height={30} />
          </div>
          <div className={styles.slide}>
            <Image src="/logo/png/ptr_5.png" alt="Dropbox" width={109} height={30} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners

