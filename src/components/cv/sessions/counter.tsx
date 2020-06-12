import React, { useState } from 'react'

interface CounterProps {
  data: any,
  text: any
}

const Counter = (props: CounterProps) => {
  const { data, text } = props
  const [projectData, setProjectData] = useState({ company: '', description: '' })
  return (
    <div className='counter_area' id='projects'>
      <div className='container' style={{ backgroundColor: 'rgb(255, 234, 234)' }}>
        <div className='row'>
          <div className='col-xl-12 text-center' style={{paddingTop: '25px'}}>
            <p style={{ fontSize: '36px', fontWeight: 'bolder' }}>{text.projects} </p>
          </div>
        </div>
        <div className='row'><div className='col-xl-12 text-center'>&nbsp;</div></div>
        <div className='row'>
          <div className='col-xl-12 col-md-12 projects'>
            <ul>
              {data?.projectsList?.map((proj: any, index: Number) => (
                <li title={proj.url} key={`project-${index}`} onMouseOver={() => { setProjectData(proj) }}>
                  <a href={proj.url || '#'} target='_blank' rel='noopener noreferrer'>
                    {proj.name}<br/>
                    <i className={proj.type.indexOf('game') !== -1 ? 'fas fa-gamepad' : 'fad fa-browser'}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
            <div className='row'><div className='col-xl-12 text-center' style={ projectData ? { color: 'violet'} : { display: 'none' }}>
              <span>{projectData?.company || ''}</span> <br />
              <span>{projectData?.description || ''}</span>
            </div>
          </div>
        <div className='row'><div className='col-xl-12 text-center'>&nbsp;</div></div>
      </div>
    </div>
  )
}

export default Counter