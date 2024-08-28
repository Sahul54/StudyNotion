import React from 'react'
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import timelineImage from '../../../assets/Images/TimelineImage.png'


const timeline = [
    {
        Logo: Logo1,
        Heading: "Leadership",
        Description: "Fully committed to the success company"
    },
    {
        Logo: Logo2,
        Heading: "Responsibility",
        Description: "Students will always be our top priority"
    },
    {
        Logo: Logo3,
        Heading: "Flexibility",
        Description: "The ability to switch is an important skill"
    },
    {
        Logo: Logo4,
        Heading: "Solve the problem",
        Description: "Code your way to a solution"
    },
]
const TimelineSection = () => {
  return (
    <div className='mx-auto w-9/12 max-w-maxContent flex flex-col mt-12 items-center'>
        <div className='flex flex-row gap-15 items-center w-11/12 max-w-maxContent justify-between'>
            <div className='w-[45%] flex flex-col gap-5'>
                {
                    timeline.map( (element, index) => {
                        return (
                            <div className='flex flex-row gap-5' key={index}>
                                <div className='flex w-[50px] h-[50px] bg-white items-center'>
                                    <img src={element.Logo} alt={`${element.Heading} logo`}/>
                                </div>
                                
                                <div>
                                    <h2 className='font-semibold text-[18px] '>{element.Heading}</h2>
                                    <p className='text-base'>{element.Description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='relative shadow-blue-200'>
                <img src={timelineImage}
                alt="Timeline"
                className='shadow-white object-cover h-fit' />

                <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-6
                        translate-x-[9%] translate-y-[-50%]'>
                    <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold'>10</p>
                        <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                    </div>
                    <div className='flex gap-5 items-center px-7'>
                        <p className='text-3xl font-bold'>250</p>
                        <p className='text-caribbeangreen-300 text-sm '>Types of Courses</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default TimelineSection
