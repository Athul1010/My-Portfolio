import React from 'react'
import './Projects.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Projects = () => {
  return (
    <section id='project-status'>
      
      <h2>Projects</h2>
      <div className="container project__container"> 
        <article className="projects">
          <div className="projects__heads">
            <div className='edlevels'>
              
              <h3 className='title'>Comapny Live Projects</h3>
            </div>


            

            <div className='live'>
                <hr />
                <p>< BsPatchCheckFill className='count'/> IELTS Master : <a href="https://www.pteskills.com/">Click</a></p>
                <hr />
                <p>< BsPatchCheckFill className='count'/> PTE Skills : <a href="https://www.ieltsmaster.com/">Click</a></p>
                <p>< BsPatchCheckFill className='count'/> Maratha Vivah<a href=""></a></p>
            </div>
          </div>
        </article>
        <article className="projects">
          <div className="projects__heads">
            <div className='edlevels'>
               
              <h3 className='title'>Internal Projects</h3>
            </div>


            
            <div className='live'>
                <hr />
                <p>< BsPatchCheckFill className='count'/> NixVPN</p>
                <hr />
                <p>< BsPatchCheckFill className='count'/> SAAS MANAGEMENT SYSTEM</p>
                <p>< BsPatchCheckFill className='count'/> CHAT APP</p>
            </div>
            
          </div>
        </article>
        <article className="projects">
          <div className="projects__heads">
            <div className='edlevels'>
              
              <h3 className='title'>Personal Projects</h3>
            </div>


            
            <div className='live'>
                <hr />
                <p>< BsPatchCheckFill className='count'/> LIBRARY MANAGEMENT SYSTEM WEBSITE</p>
                <hr />
                <p>< BsPatchCheckFill className='count'/> ADVENTURE TO PERU: <a href="https://661ff95e8132076a8b3bed7e--radiant-babka-813c14.netlify.app/">Click</a></p>
            </div>
            {/* <p>PTE Skills : <a href="https://www.ieltsmaster.com/">https://www.ieltsmaster.com/</a></p>
            <p>Maratha Vivah : <a href="">Maratha Vivah</a></p> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects