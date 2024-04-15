import React from 'react'
import './Work.css'
import weamse from '../../images/xweamse_newlogo.png.pagespeed.ic.bVzmAVK4aJ.png'
import jspiders from '../../images/logo_jspiders.3b552d0.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsPatchCheckFill } from 'react-icons/bs'


const Work = () => {
  return (
    // <div className='container work-experience'>
    //     <div className="weamse">
    //         <img src={weamse} alt="" />
    //         <h3>WEAMSE Business Solutions</h3>
    //         <p><MdKeyboardArrowRight /> July 2023 - April 2024</p>
    //         <p><MdKeyboardArrowRight /> Frontend Developer</p>
    //         <p><MdKeyboardArrowRight /> <a href="https://weamse.com/">https://weamse.com/</a></p>
    //     </div>
    //     <div className="jspiders">
    //         <img src={jspiders} alt="" />
    //         <h3>JSpiders Basavanagudi</h3>
    //         <p><MdKeyboardArrowRight />  Aug 2022 - Feb 2023</p>
    //         <p><MdKeyboardArrowRight /> MERN Stack Developer</p>
    //         <a href="https://jspiders.com/">https://jspiders.com/</a>
       
    //     </div>
    // </div>
    <section id='work'>
            {/* <h5>Skills</h5> */}
            <h2>Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Weamse Business Solutions</h3>
                    <div className="experience__contents">
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div><h4>July 2023 - April 2024</h4>
                                <small className='text-light'></small></div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div><h4>Frontend Developer</h4>
                                <small className='text-light'></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div><a href="https://weamse.com/">https://weamse.com/</a>
                                <small className='text-light'></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>Live Project : <a href="https://www.ieltsmaster.com/">https://www.ieltsmaster.com/</a>
                                <small className='text-light'></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div>Live Project : <a href="https://www.pteskills.com/">https://www.pteskills.com/</a>
                                <small className='text-light'></small>
                            </div>
                        </article>
                    </div>

                </div>
                <div className="experience__backend">
                    <h3>Jspiders</h3>
                    <div className="experience__contents">
                    <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div><h4>July 2023 - April 2024</h4>
                                <small className='text-light'></small></div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div><h4>Frontend Developer</h4>
                                <small className='text-light'></small>
                            </div>
                        </article>
                        <article className="experience__details">
                            < BsPatchCheckFill className='experience__details-icon' />
                            <div><a href="https://jspiders.com/">https://jspiders.com/</a>
                                <small className='text-light'></small>
                            </div>

                        </article>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default Work