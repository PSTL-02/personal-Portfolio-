const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'with a solid foundation in React, JavaScript, CSS, and SCSS, along with hands-on experience using MongoDB. I specialize in creating dynamic and responsive frontends with React and building efficient data-driven applications. Passionate about solving complex problems, I’m always expanding my skills and exploring new tools and technologies. I’m excited to grow further in full-stack development, particularly with backend frameworks like Express and advanced deployment strategies, to deliver seamless and scalable web applications.',
    },
    {
        id: 1,
        title: 'Designing (UI/UX)',
        desc: "skilled in React, JavaScript, CSS, and SCSS, with a strong interest in UI/UX design. I focus on building user-centered, visually engaging, and responsive web applications, bringing together functionality and design. Recently, I’ve been exploring Tailwind CSS to streamline styling and create cohesive, modern interfaces. As I grow in full-stack development, I’m excited to continue refining my UI/UX skills and deepen my backend knowledge to deliver seamless, user-focused applications.",
    },
    // {
    //     id: 2,
    //     title: '',
    //     desc: '',
    // },
    // {
    //     id: 3,
    //     title: '',
    //     desc: "",
    // },
    // {
    //     id: 4,
    //     title: '',
    //     desc: "",
    // },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
