
import React from 'react'

interface SliderProps {
    data: any,
    text: any
}

const Slider = (props: SliderProps) => {
    const { data } = props
    return (
        <div className='slider_area'>
            <div className='single_slider d-flex align-items-center slider_bg_1'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-xl-12'>
                            <div className='slider_text text-right title-animation'>
                                <h3>
                                    {data.name}
                                </h3>
                                <span>{data.title}</span><br />
                                <span className='slogan'>{data.slogan}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='social_links'>
                    <ul>
                        <li><a href='https://www.facebook.com/mindinme' target='_blank' rel='noopener noreferrer' title='facebook'> <i className='fab fa-facebook'></i> </a></li>
                        <li><a href='https://www.linkedin.com/in/tran-thanh-tai-539250129/' target='_blank' rel='noopener noreferrer' title='linkedin'> <i className='fab fa-linkedin'></i> </a></li>
                        <li><a href='https://www.tttgalaxy.co.uk/about' target='_blank' rel='noopener noreferrer' title='other site'> <i className='fab fa-instagram'></i> </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Slider