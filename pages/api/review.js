const review = [
    // {
    //     id: 0,
    //     clientName: '',
    //     clientLocation: '',
    //     clientSource: '',
    //     clientReview: ''
    // },
    
]
export default function handler(req, res) {
    res.status(200).json(review)
}