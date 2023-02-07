import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
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
            <motion.div 
              className="md:my-5 md:w-3/5 "
              initial='hidden'
              whileInView='visible'
              viewport={{ once : true, amount : 0.5 }}
              transition={{duration: 0.5}}
              variants={{
                  hidden: {opacity: 0, x:-50},
                  visible:{opacity:1 , x: 0},
              }}
            >
               <HText>MORE THAN JUST A GYM.</HText>
               <p className="my-5 text-sm">
                    We provide the world class fitness equipment, trainers and classes to 
                    get you to your ultimate fitness goals with ease. We provide true care
                    into each and every member.
               </p>
            </motion.div>
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
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
              {/* GRAPHIC */}
              <img
                className="mx-auto" 
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic} 
              />
                {/* DESCRIPTION */}
                <div>
                  {/* TITLE */}
                  <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves ">
                      <motion.div
                          initial='hidden'
                          whileInView='visible'
                          viewport={{ once : true, amount : 0.5 }}
                          transition={{duration: 0.5}}
                          variants={{
                              hidden: {opacity: 0, x:-50},
                              visible:{opacity:1 , x: 0},
                          }}
                      >
                          <HText>
                            MILLIONS OF HAPPY MEMEBERS GETTING{" "}
                            <span className="text-primary-500">FIT</span> 
                          </HText>
                      </motion.div>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once : true, amount : 0.5 }}
                    transition={{delay:0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:-50},
                        visible:{opacity:1 , x: 0},
                    }}
                  >
                    <p className="my-5 ">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    </p>
                    <p className="mn-5 ">
                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
                    </p>
                  </motion.div>
                  {/* BUTTON */}
                  <div className="relative mt-16 ">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkes">
                      <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                    </div>
                  </div>
                </div>
            </div>
        </motion.div>       
    </section>
  )
}