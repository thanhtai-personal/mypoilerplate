import React from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline'

interface PortfolioProp {
  data: any,
  text: any
}

const Portfolio = (props: PortfolioProp) => {
  const { data, text } = props
  return (
    <React.Fragment>
      <div className='portfolio_area' id='skills'>
        <div className='container'>
          <div className='row' style={{ marginTop: '50px' }}>
            <div className='col-xl-9'>
              <div style={{ backgroundColor: 'rgb(255, 234, 234)', boxShadow: '0px 0px 10px 10px' }}>
                <Timeline>
                  <p style={{ fontSize: 26, textAlign: 'center', paddingBottom: '15px', fontWeight: 'bolder' }}>{text.experiences}</p>
                  {data?.experiences?.map((exp: any, index: number) => (
                    <TimelineEvent
                      key={`time-line-event-${index}`}
                      title={exp.title}
                      createdAt={exp.createdAt}
                      icon={exp.icon || <i className='fas fa-briefcase' />}
                      iconColor={exp.iconColor || '#757575'}
                      buttons={exp.button || <i />}
                      container={exp.container || 'card'}
                      style={{
                        boxShadow: '0 0 0 0',
                        border: '1px solid #777',
                        borderRadius: 3,
                        fontSize: '14px', color: 'black', fontWeight: '400',
                        ...exp.style
                      }}
                      cardHeaderStyle={{ fontSize: '16px', color: 'black', fontWeight: '600', ...exp.cardHeaderStyle }}
                    >
                      {exp.content}
                    </TimelineEvent>
                  ))}
                </Timeline>
              </div>

            </div>
            <div className='col-xl-3' style={{ borderRight: 'double 4px darkblue', borderTop: 'solid 4px darkblue', backgroundColor: 'rgb(255, 234, 234)' }}>
              <h2 className='h4 mb-4' style={{ paddingTop: '15px' }}>{text.skills}</h2>
              {data?.listSkills?.map((skill: any, index: number) => (
                <div className='progress-wrap mb-4 skill-item' key={`skill-${index}`} >
                  <div className='d-flex'>
                    <span style={skill.isNote ? { color: 'red' } : {}}>{skill.name}</span>
                    <span className='ml-auto'>{skill.percent}%</span>
                  </div>
                  <div className='progress rounded-0' style={{ height: '7px' }}>
                    <div className='progress-bar' role='progressbar' style={{ width: `${skill.percent}%` }}
                      aria-valuenow={skill.percent} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Portfolio