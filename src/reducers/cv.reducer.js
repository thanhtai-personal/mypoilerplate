import React from 'react'
// import actionType from 'root/actionTypes'
const initialState = {
  service: {
    firstCharacter: 'I',
    content: `am a highly motivated front end who loves creating apps and bringing ideas into life.
    I'm not a good communicated person but passion and focusing on source code more than talk to other people.
    If you want me for your company or just to make friend with me, you can find me in contact. I will be an open person while i am not in coding mode.`
  },
  projects: {
    projectsList: [
      {
        name: 'TankVN',
        url: 'https://www.youtube.com/watch?v=LwJa69CBARk',
        type: 'Game',
        language: 'Microsoft XNA 4.0',
        description: 'A classical video game - Battle city',
        company: 'Ho Chi Minh City University of Science'
      },
      {
        name: 'Online Shop',
        url: 'https://www.youtube.com/watch?v=QkPch76obeM',
        type: 'Web App',
        language: 'ASP.net MVC 4 - LINQ database',
        description: 'A commercial website - shopping online',
        company: 'Gameloft company'
      },
      {
        name: 'Pro Evolution Soccer 2015',
        url: '#',
        type: 'Game',
        language: 'java/c++',
        description: 'A sport game',
        company: 'Gameloft company'
      },
      {
        name: 'Delorean',
        url: '#',
        type: 'ERP outsourcing',
        language: 'Scala & ReactJS',
        description: 'ERP',
        company: 'CityNow company'
      },
      {
        name: 'Swallow',
        url: 'http://citynow.vn/citynowsa',
        type: 'Web Product',
        language: 'Scala & ReactJS',
        description: 'Vietnam-Japan job brokerage',
        company: 'CityNow company'
      },
      {
        name: 'Maestro',
        url: '#',
        type: 'Web',
        language: '.Net & ReactJS',
        description: 'Event organization and management for celebrities.',
        company: 'KoLabs company'
      },
      {
        name: 'WorkID',
        url: '#',
        type: 'Web',
        language: '.Net & ReactJS',
        description: 'Finding user profile for jobs',
        company: 'KoLabs company'
      },
      {
        name: '7Sport and UFA',
        url: '#',
        type: '2 Web',
        language: '.Net & ReactJS',
        description: 'Sports betting page',
        company: 'KoLabs company'
      },
      {
        name: 'Auvenir',
        url: '#',
        type: 'Web',
        language: '.Net & ReactJS',
        description: 'Engagement management',
        company: 'TiTan Technology'
      }
    ]
  },
  portfolio: {
    listSkills: [
      {
        name: 'ReactJS',
        percent: 90,
        isNote: true
      },
      {
        name: 'HTML/CSS/Jquery',
        percent: 90,
        isNote: true
      },
      {
        name: '.Net Core',
        percent: 50
      },
      {
        name: 'ExpressJS',
        percent: 50
      },
      {
        name: 'PostgresSQL',
        percent: 60
      },
      {
        name: 'Jira',
        percent: 70
      },
      {
        name: 'Trello',
        percent: 70
      },
      {
        name: 'Git',
        percent: 90,
        isNote: true
      },
      {
        name: 'Heroku',
        percent: 50
      },
      {
        name: 'AWS',
        percent: 50
      },
      {
        name: 'Docker',
        percent: 50
      }
    ],
    experiences: [
      {
        title: 'Now',
        createdAt: new Date().toDateString(),
        content: 'Titan Technology',
        style: {
          boxShadow: '0 0 6px 1px #BD3B36'
        },
        cardHeaderStyle: {
          backgroundColor: 'lightblue'
        }
      },
      {
        title: 'TiTan Technology',
        createdAt: '07/01/2019',
        content: 'Fullstack developer with .Net Core and ReactJS'
      },
      {
        title: 'KoLabs LLC',
        createdAt: '01/04/2017',
        content: 'Frontend developer with ReactJS'
      },
      {
        title: 'CityNow Company',
        createdAt: '01/10/2016',
        content: 'FullStack developer with Scala and ReactJS'
      },
      {
        title: 'Gameloft Company',
        createdAt: '01/10/2015',
        content: 'Game Fresher with Java/c++'
      },
      {
        title: 'Fujinet Company',
        createdAt: '01/07/2015',
        content: 'Web intern with java'
      },
      {
        title: 'Ho Chi Minh City University of Science',
        createdAt: '02/09/2011',
        content: 'Specialized in software engineering',
        icon: <i className='fas fa-school'></i>,
        cardHeaderStyle: {
          backgroundColor: 'lightgreen'
        }
      }
    ]
  },
  slider: {
    name: 'Trần Thanh Tài',
    title: 'Web developer',
    slogan: 'Follow your passion & Success will follow you'
  },
  contact: {
    birthDay: '05/06/1993',
    address: '643/16 Xo Viet Nghe Tinh, 25Ward, Binh Thanh district, Ho Chi Minh city',
    phone: '0972828264'
  },
  hobbies: {
    hobbiesList: [
      {
        key: 'code',
        icon: 'fa fa-code',
        text: 'Code'
      },
      {
        key: 'football',
        icon: 'fas fa-futbol',
        text: 'Football'
      },
      {
        key: 'game',
        icon: 'fab fa-steam',
        text: 'Game'
      },
      {
        key: 'music',
        icon: 'fa fa-headphones',
        text: 'Music'
      },
      {
        key: 'girls',
        icon: 'fa fa-female',
        text: 'Girls and Girl'
      },
      {
        key: 'money',
        icon: 'fas fa-money-bill-alt',
        text: 'Money'
      }
    ]
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}