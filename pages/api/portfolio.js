const portfolio = [
    {
        id: 0,
        projectName: "Community Cat Coalition",
        url: "https://cat-coalition.vercel.app",
        image: "projects/cat-coalition-mockup.png",
        projectDetail: "This was made in a academic setting. This is a non profit origination website redesign working with a sudo client (AKA our tutor) to give us real world experience. ",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "WordPress"
            },
            {
                tech: "CSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Cat Coalition Custom Theme",
        url: "https://github.com/PSTL-02/Cat-Coalition-custom-theme",
        image: "projects/backend.png",
        projectDetail: "This was made in a academic setting. TThis is the custom them for my Community Cat Coalition site on wordpress ",
        technologiesUsed: [
            {
                tech: "PHP"
            },
            {
                tech: "CSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Platypus MarketPlace",
        url: "",
        image: "projects/palt.png",
        projectDetail: "Sadly this site is not live Sorry for the inconvenience. This was made when i was studying. This is a FullStack application tat had login/out, making, deleting, editing, and posting fetchers  ",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "CSS"
            },
            {
                tech: "MongoDB"
            },
        ]
    },
    {
        id: 0,
        projectName: "Pokedex ",
        url: "https://pokedex-taupe-two.vercel.app",
        image: "projects/pokedex-no-mockup.png",
        projectDetail: "This was made when i was studying. It was my first experience with a api. i make a pokedex that hat all the pokemons on the with a filter by Name, Type, and Number. It also had a single page for each pokemon that had the descriptions for them. ",
        technologiesUsed: [
            {
                tech: "React"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "CSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Bootstrap Portfolio Demo",
        url: "https://bootstrap-portfolio-black.vercel.app/#",
        image: "projects/bootstrapDemo.png",
        projectDetail: "This was made when i was studying. This was made with BootStrap it was a demo for BootStrap so i desided to make a mock portfolio site ",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
        ]
    },
    {
        id: 0,
        projectName: "Property Search",
        url: "https://filtering-hi7sjlr42-neels-projects-98747d6b.vercel.app",
        image: "projects/PropertySearch.png",
        projectDetail: "This was made when i was studying. This was my first time making a sudo in-depth filtering and dynamically populating from a aray from JavaScript.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
        ]
    },
    
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
