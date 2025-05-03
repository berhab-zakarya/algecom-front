import Image from "next/image"

const Partners = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <Image src="/logo/svg/logo.svg?height=30&width=100" alt="HubSpot" width={100} height={30} />
          <Image src="/logo/svg/logo.svg?height=30&width=80" alt="Buffer" width={80} height={30} />
          <Image src="/logo/svg/logo.svg?height=30&width=80" alt="Stripe" width={80} height={30} />
          <Image src="/logo/svg/logo.svg?height=30&width=80" alt="Framer" width={80} height={30} />
          <Image src="/logo/svg/logo.svg?height=30&width=100" alt="Dropbox" width={100} height={30} />
          <Image src="/logo/svg/logo.svg?height=30&width=100" alt="HubSpot" width={100} height={30} />
        </div>
      </div>
    </section>
  )
}

export default Partners

