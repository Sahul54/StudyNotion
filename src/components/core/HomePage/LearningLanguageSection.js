import React from 'react'
import HighlightText from './HighlightText'
import known_your_progress from '../../../assets/Images/Know_your_progress.png'
import compare_with_others from '../../../assets/Images/Compare_with_others.png'
import plan_your_lesson from '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from '../HomePage/Button'

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px]'>
      <div className='flex flex-col gap-5 items-center'>
        <div className='text-richblack-800 text-3xl font-bold '>
          Your Swies Knife for
          <HighlightText text={"learning any language"}/>
        </div>
        <div className='flex items-center justify-center w-[45%] mx-auto text-center'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className='flex flex-row justify-center mt-5 items-center'>
            <img src={known_your_progress} 
            alt="known_your_progress"
            className='translate-x-[30%]'
            
            />
            <img src={compare_with_others}
            alt="compare_with_others"
            className='translate-x-[2%] mt-7'
            />
            <img src={plan_your_lesson}
            alt="plan your lesson"
            className='translate-x-[-27%]'
            />
        </div>

        <div className='mt-7 shadow-lg mb-24'>
          <CTAButton active={true} linkto={"signup"}>
            Learn more
          </CTAButton>
        </div>

      </div>
    </div>
  )
}

export default LearningLanguageSection