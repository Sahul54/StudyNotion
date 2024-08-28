import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import Footer from '../components/common/Footer'
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/common/ReviewSlider';


const Home = () => {
  return (
    <div>
        {/* section 1 */}
        <div className='relative mx-auto flex flex-col max-w-maxContent w-9/12 items-center text-white justify-between '>
            <Link to={"/signup"}>

                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-100
                transition-all duration-200 hover:scale-95 w-fit'>
                    <div className='flex flex-row items-center gap-3 rounded-full px-10 py-[5px]  transition-all duration-200
                     group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight />
                    </div>   
                </div>

            </Link>
        

        <div className='mt-7 font-bold text-white text-4xl text-center text-cyan-600 '>
            Empower Your Future with 
            <HighlightText text={"coding Skills"}/>
        </div>

        <div className='text-center text-sm w-[90%] text-richblack-400 mt-4 font-bold'>
         With our online coding courses, you can learn at your own pace, from anywhere in the world, and 
         get access to a wealth of resources, including hands-on projects, quizzes, and personalized 
         feedback from instructors. 
        </div>

        <div className='flex flex-row gap-7 mt-8 '>
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/signup"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className='shadow-blue-200 mx-3 my-12'>
            <video
            muted
            loop
            autoPlay
            >
                <source src={Banner} type="video/mp4" />

            </video>
        </div>

        {/* Code section-1 */}
        <div>
            <CodeBlocks
              position={"lg:flex-row"}
              heading={
                <div className="text-4xl font-semibold">
                  Unlock your
                  <HighlightText text={"coding potential"} /> with our online
                  courses.
                </div>
              }
              subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              ctabtn1={{
                btnText: "Try it Yourself",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-yellow-25"}
              codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
              backgroundGradient={<div className="codeblock1 absolute"></div>}
            />
        </div>

        {/*  code section-2 */}
        <div>
            <CodeBlocks
              position={"lg:flex-row-reverse"}
              heading={
                <div className="text-4xl font-semibold">
                  some change
                  <HighlightText text={"coding potential"} /> with our online
                  courses.
                </div>
              }
              subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              ctabtn1={{
                btnText: "Try it Yourself",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-yellow-25"}
              codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
              backgroundGradient={<div className="codeblock1 absolute"></div>}
            />
        </div>

        {/*  ExploreMore */}
        <ExploreMore/>

        </div>


        {/* section 2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>

          <div className='homepage_bg h-[100%]  '>
            <div className='h-[150px]'> </div>
            <div className='w-9/12 max-w-maxContent flex items-center
             gap-5 mx-auto justify-center mt-[100px]'>
              <CTAButton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-3'>
                  Explore Full catalog
                  <FaArrowRight/>
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div className='text-white'>
                  Learn more
                </div>
              </CTAButton>

             </div>

             <div className='mx-auto w-9/12 max-w-maxContent flex flex-col items-center 
             justify-between gap-10 mt-[130px]'>
                <div className='flex flex-row gap-7'>
                  <div className='text-3xl font-semibold w-[45%]'>
                    Get the Skills you need for a 
                    <HighlightText text={"Job that is in demand"} />
                  </div>

                  <div className='flex flex-col gap-10 w-[50%] items-start'>
                    <div className='text-lg'>
                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                    </div>
                      <CTAButton active={true} linkto={"Signup"}>
                        <div>
                          Learn more
                        </div>
                      </CTAButton>
                  </div>

                </div>
             </div>
          
              <TimelineSection/>

              <LearningLanguageSection/>
          </div>

        </div>

        {/* section 3 */}

        <div className='w-9/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>

              <InstructorSection/>

              <h2 className='text-4xl text-center mt-28 font-semibold'>Reviews from other Learans</h2>
               <div>
                <ReviewSlider/>
               </div>
        </div>

        {/* footer */}
        <div>
          <Footer/>
        </div>

    </div>
  )
}

export default Home