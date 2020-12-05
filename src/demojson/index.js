import criketIcon from '../assets/images/hobbiesImage/criketIcon.png';
import gameIcon from '../assets/images/hobbiesImage/gameIcon.png';
import meditationIcon from '../assets/images/hobbiesImage/meditationIcon.jpg';
import movieIcon from '../assets/images/hobbiesImage/movieIcon.png';
import photoIcon from '../assets/images/hobbiesImage/photoIcon.png';

const userDetails = {
    userName: 'vishal gohel',
    userTitle: "",
    userSubTitle: '',
    address: '',
    email: '',
    phone: '',
    cv: '',

    skill: [{
        icon: 'fa fa-code',
        skillName: 'Front End',
        skillDec: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt '
    },
    {
        icon: 'fa fa-database',
        skillName: 'Back End',
        skillDec: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt '
    },
    {
        icon: 'fa fa fa-cogs',
        skillName: 'Test Case',
        skillDec: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt '
    }],
    education: [{
        clgName: 'Bachelor of Science in Information Technology. atmiya  Collage',
        clgDec: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
        clgYer: '2018'
    },
    //  {
    //     clgName: 'Bachelor of Science in Information Technology. atmiya  Collage',
    //     clgDec: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
    //     clgYer: '2015'
    // },
    ],
    hobbies: [{
        hobName: 'Criket',
        hobDec: '',
        hobIcon: criketIcon
    }, {
        hobName: 'Game',
        hobDec: '',
        hobIcon: gameIcon
    }, {
        hobName: 'Meditation',
        hobDec: '',
        hobIcon: meditationIcon
    }, {
        hobName: 'Photo Graphish',
        hobDec: '',
        hobIcon: photoIcon
    }, {
        hobName: 'Movie',
        hobDec: '',
        hobIcon: movieIcon
    },
    ],
    skillList: [{
        skillName: 'React js',
        parangat: 100,
    },
    {
        skillName: 'React Native',
        parangat: 70,
    },
    {
        skillName: 'React Hooks',
        parangat: 100,
    }
        ,
    {
        skillName: 'Redux',
        parangat: 100,
    }
        ,
    {
        skillName: 'DND',
        parangat: 25,
    },
    {
        skillName: 'Node js',
        parangat: 25,
    },
    {
        skillName: 'MongoDb',
        parangat: 25,
    },
    {
        skillName: 'Cypress',
        parangat: 25,
    },
    {
        skillName: 'GraphQl',
        parangat: 40,
    },
    {
        skillName: 'ECMAScript',
        parangat: 80,
    },
    {
        skillName: 'Javascript',
        parangat: 90,
    }],
    social: [{
        sName: ''
    }]
};
export default userDetails;