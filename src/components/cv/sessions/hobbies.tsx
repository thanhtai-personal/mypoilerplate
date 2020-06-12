import React from 'react'

interface HobbiesProps {
  text: any,
  data: any
}

const Hobbies = (props: HobbiesProps) => {
  const { text, data: { hobbiesList = []} } = props
  return (
    <div className='hobbies_area' id='hobbies'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12 col-md-12'>
            <h4 style={{ textAlign: 'center', paddingTop: '25px' }}>{text.hobbies} &amp; {text.interests}</h4>
          </div>
        </div>
        <div className='row'><div className='col-xl-12 col-md-12'>&nbsp;</div></div>
        <div className='row'>
          <div className='col-xl-2 col-md-2'></div>
          <div className='col-xl-8 col-md-8'>
            <div className='about-extra'>
              <div className='about-extra-icon'>
                <ul>
                  {hobbiesList.map((hobbie: any, index: number) => (<li key={hobbie.key || index}>
                    <p><i className={hobbie.icon}></i><br /><span>{hobbie.text}</span></p>
                  </li>))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className='col-xl-2 col-md-2'></div>
        </div>
      </div>
    </div>
  )
}

export default Hobbies