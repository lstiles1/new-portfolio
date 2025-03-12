import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"

export const ContactSection = () => {
  return (
    <section id="contact">
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div className="absolute inset-0 opacity-5 -z-10" 
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s create something amazing together</h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 w-full">
              <a href="mailto:lstiles00@gmail.com" className="w-full max-w-[180px]">
                <button className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-full border border-gray-900 transition duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-700 hover:scale-105">
                  <span className="font-semibold">Email</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/liam-stiles" target="_blank" rel="noopener noreferrer" className="w-full max-w-[180px]">
                <button className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-full border border-gray-900 transition duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-700 hover:scale-105">
                  <span className="font-semibold">LinkedIn</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
              <a href="https://github.com/lstiles1" target="_blank" rel="noopener noreferrer" className="w-full max-w-[180px]">
                <button className="text-white bg-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-full border border-gray-900 transition duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-700 hover:scale-105">
                  <span className="font-semibold">Github</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}