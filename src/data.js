import {FaRobot} from 'react-icons/fa'

export const links = [
    {
        name: "Home",
        path: "/"
    },

    {
        name: "About",
        path: "/about"
    },

    {
        name: "Media",
        path: "/media"

    },

    {
        name: "Robots",
        path: "/robots"
    },

    {
        name: "Resources",
        path: "/resources"
    },

    {
        name: "Sponsors",
        path: "/sponsors"
    },

    {
        name: "Event",
        path: "/event"
    },
    
]

export const bblinks = [
    {
        name: "Back to Home",
        path: "/"
    },

]

export const pagesdirect = [
    {
        id: 1,
        icon: <FaRobot/>,
        title:  "Robots",
        info: "Check out the different robots we've made",
        path: "/robots"
    },
    // {
    //     id: 2,
    //     icon: <FaRobot/>,
    //     title: "Blogs",
    //     info: "Keep up with our team news throughout the season",
    //     path: "*"
    // },
    {
        id: 2,
        icon: <FaRobot/>,
        title: "Event",
        info: "Check out details about the Week 2 event hosted by Team 1807",
        path: "/event"
    },

    {
        id: 3,
        icon: <FaRobot/>,
        title: "Resources",
        info: "Check out our resources page for information",
        path: "/bios"
    },
]

export const pagesdirectevent = [
    {
        id: 1,
        icon: <FaRobot/>,
        title:  "Schedule",
        info: "Check out the schedule for all competition days",
        url: "/schedule.pdf"
    },
    {
        id: 2,
        icon: <FaRobot/>,
        title: "Volunteer",
        info: "Sign up to volunteer for our District Event",
        url: "*"
    },
    {
        id: 3,
        icon: <FaRobot/>,
        title: "Information Packet",
        info: "Please read our regulations below",
        url: "/resources"
    },
]

const cover1 = require('./images/main__header.jpeg')
const cover2 = require('./images/blog/hatboro.png')
const cover3 = require('./images/blog/prototype.png')
const avatar = require('./images/logo.png')

export const blogList = [
    {
      id: 1,
      title: 'Week 3 - Build Season',
      category: '2023',
      subCategory: ['frontend', 'ui/ux', 'design'],
      description:
        "nightmare nightmare nightmare nightmare nightmare nightmare nightmare ",
      authorName: 'Business Team',
      authorAvatar: avatar,
      createdAt: 'January 28, 2023',
      cover: cover2,
    },
    {
      id: 2,
      title: 'Week 1 - Build Season',
      category: '2023',
      subCategory: ['vacation', 'holidays', 'sight seeing'],
      description:
        "We have put in a lot of effort since the start of the new season. This week is devoted to prototype design because the game this year poses numerous challenges.",
      authorName: 'Liam Granaghan',
      authorAvatar: avatar,
      createdAt: 'January 14, 2023',
      cover: cover3,
    },
    {
      id: 3,
      title: 'Preseason - 2022/2023 Season',
      category: '2023',
      subCategory: ['skill', 'design', 'passion'],
      description:
        "This preseason, we will be doing what we have never done before, attempting to compete with two robots this year.",
      authorName: 'Business Team',
      authorAvatar: avatar,
      createdAt: 'October 22, 2022',
      cover: cover1,
    },
    {
      id: 4,
      title: 'ADVENTURE IN YOU',
      category: 'adventure',
      subCategory: ['adrenaline', 'stay-fit', 'lifestyle'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: avatar,
      createdAt: 'June 03, 2021',
      cover: cover1,
    },
    {
      id: 5,
      title: 'Loaded BBQ Baked Potatoes',
      category: 'cooking',
      subCategory: ['bbq', 'food', 'lifestyle'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: avatar,
      createdAt: 'June 03, 2021',
      cover: cover1,
    },
    {
      id: 6,
      title: 'Beyond the Beach',
      category: 'travel',
      subCategory: ['beaches', 'sea', 'holidays'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: avatar,
      createdAt: 'June 03, 2021',
      cover: cover1,
    },
    
    {
      id: 7,
      title: 'Online Shopping – An Alternative to Shopping in the Mall',
      category: 'shopping',
      subCategory: ['e-commerce store', 'clothing', 'shopping store'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      authorName: 'John Doe',
      authorAvatar: avatar,
      createdAt: 'June 03, 2021',
      cover: cover1,
    },
  ];

const Robot2011 = require('./images/robots/robot11.JPG')
const Robot2012 = require('./images/robots/robot12.JPG')
const Robot2013 = require('./images/robots/robot13.JPG')
const Robot2018 = require('./images/robots/robot18.JPG')
const Robot2019 = require('./images/robots/robot19.JPG')
const Robot2020 = require('./images/robots/robot20.JPG')
const Robot2021 = require('./images/robots/robot21.jpg')

export const robots = [
    {
        id: 1,
        image: Robot2020,
        game: 'Rapid React',
        year: '2021-22',
        docs: ['https://github.com/AllentownRobotics/2022-1807-RobotCode']
    },
    {
        id: 2,
        image: Robot2021,
        game: 'Infinite Recharge',
        year: '2020-21',
        docs: ['https://github.com/AllentownRobotics']
    },
    {
        id: 3,
        image: Robot2019,
        game: 'Destination: Deep Space',
        year: '2018-19',
        docs: ['https://github.com/AllentownRobotics']
    },
    {
        id: 4,
        image: Robot2018,
        game: 'FIRST Power Up',
        year: '2017-18',
        docs: ['https://github.com/AllentownRobotics/2018-1807-RobotCode']
    },
    {
        id: 5,
        image: Robot2013,
        game: 'Ultimate Ascent',
        year: '2012-13',
        docs: ['https://github.com/AllentownRobotics']
    },
    {
        id: 6,
        image: Robot2012,
        game: 'Rebound Rumble',
        year: '2011-12',
        docs: ['https://github.com/AllentownRobotics']
    },
    {
        id: 7,
        image: Robot2011,
        game: 'Logomotion',
        year: '2010-11',
        docs: ['https://github.com/AllentownRobotics']
    },
]