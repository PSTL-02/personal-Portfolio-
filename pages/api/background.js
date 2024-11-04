const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Web and UX Design',
                degree: 'Diploma in Web and UX Design',
                detail: "In this course you will gain specialized knowledge in web interface design, practical skills and a professional mindset, primed to operate in creative and commercials environments. You will also learn invaluable collaboration skills as a user experience (UX) designer, bridging the gap between design concepts and technical implementation.",
                year: '2024'
            },
            {
                id: 1,
                title: 'Digital Design and Graphic Design',
                degree: 'Diploma in Digital Design and Graphic Design, ',
                detail: "Gain a competitive edge in digital design blending flexible learning and industry-standard training for a successful career.",
                year: '2022 - 2023'
            },
            {
                id: 2,
                title: 'Creative Media',
                degree: 'Certificate in Creative Media',
                detail: "Gain essential skills in graphic design, animation, filmmaking, photography, web development, and coding with our comprehensive Creative Media Certificate.",
                year: '2022'
            },
        ]
    },
    {
        expCards: [
            // {
            //     id: 1,
            //     title: '',
            //     role: '',
            //     url: '',
            //     desc: '',
            //     year: '',
            //     location: ''
            // },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
