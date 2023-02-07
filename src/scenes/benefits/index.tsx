import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion'
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
   {
    icon: <HomeModernIcon className='h-6 w-6'/>,
    title: "State of the Art Facilites",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
   },
   {
    icon: <UserGroupIcon className='h-6 w-6'/>,
    title: "100's of diverse classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
   },
   {
    icon: <AcademicCapIcon className='h-6 w-6'/>,
    title: "Expert and Pro Trainers",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "
   },
]

const container = {
    hidden : {},
    visible: {
      transition:{staggerChildren:0.2}
    }
  }

type Props = {
 setSelectedPage : (value: SelectedPage) => void;
}

export default function Benefits({setSelectedPage}: Props) {
  return (
    <section id='benefits' className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
             onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
          {/* HEADER */}
            <div className="md:my-5 md:w-3/5 ">
               <HText>MORE THAN JUST A GYM.</HText>
               <p className="my-5 text-sm">
                    We provide the world class fitness equipment, trainers and classes to 
                    get you to your ultimate fitness goals with ease. We provide true care
                    into each and every member.
               </p>
            </div>
            {/* BENEFITS */}
            <motion.div 
              className   = "md:flex items-center justify-between gap-8 "
              initial     = "hidden"
              whileInView = "visible"
              viewport    = {{once: true, amount: 0.5}}
              variants    = {container}
            >
              {benefits.map((benefit : BenefitType) => (
                <Benefit
                  key         = {benefit.title}
                  icon        = {benefit.icon}
                  title       = {benefit.title}
                  description = {benefit.description}
                  setSelectedPage={setSelectedPage}
                />
              
              ))}

            </motion.div>
        </motion.div>       
    </section>
  )
}