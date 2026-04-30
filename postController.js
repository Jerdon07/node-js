const posts = [
    {
        id: 1,
        title: 'First Post',
    }, {
        id: 2,
        title: 'Second Post',   
    }
]

const getPost = () => posts
const postLength = () => posts.length

export { postLength }
export default getPost