import React from 'react'

interface AboutMeProps {
  data: any,
  text: any
}

const AboutMe = (props: AboutMeProps) => {
  const { data, text } = props
  return (
    <div className='about_me' id='about-me'>
      <div className='container'>
        <div className='row' style={{backgroundColor: 'lightgray'}}>
          <div className='col-xl-9 col-md-9'>
            <div className='row align-items-center'>&nbsp;</div>
            <div className='row align-items-center'>
              <div className='col-xl-12 col-md-12' style={{ textAlign: 'center' }}>
                <h3>{text.contact}</h3>
              </div>
            </div>
            <div className='row'>&nbsp;</div>
            <div className='row align-items-center'>
              <div className='col-xl-2 col-md-3' style={{ float: 'right' }}>
                <span>{text.birthday}: </span>
              </div>
              <div className='col-xl-8 col-md-10'>
                <span>{data.birthDay}</span>
              </div>
            </div>
            <div className='row align-items-center'>
              <div className='col-xl-2 col-md-3'>
                <span>{text.address}: </span>
              </div>
              <div className='col-xl-8 col-md-10'>
                <span>{data.address}</span>
              </div>
            </div>
            <div className='row align-items-center'>
              <div className='col-xl-2 col-md-3'>
                <span>{text.phone}: </span>
              </div>
              <div className='col-xl-8 col-md-10'>
                <span>{data.phone}</span>
              </div>
            </div>
            <div className='row align-items-center'>&nbsp;</div>
          </div>
          <div className='col-xl-3 col-md-3 align-items-center' style={{borderLeft: '2px solid', textAlign: 'center'}}>
            <div className='download_cv' style={{ marginTop: '60px'}}>
              <a className='boxed-btn3' href='https://drive.google.com/file/d/1gr_lrqIomuZ4MiKtXYq6Lfinbtnkef1i/view?usp=sharing' target='_blank' rel='noopener noreferrer'>{text.getMyCV}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe