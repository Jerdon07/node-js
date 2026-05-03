import { createServer } from 'http'

const PORT = process.env.PORT

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'}
]

const server = createServer((req, res) => {
    if (req.url === 'api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(users))
        res.end()
    } else if (req.url.match(/\/api\/users\/\d+/) && req.method === 'GET') {
        const id = parseInt(req.url.split('/')[3])
        const user = users.find(user => user.id === id)

        if (user) {
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(user))
            res.end()
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.statusCode = 404
            res.write(JSON.stringify({ message: 'Route not found' }))
            res.end('User not found')
        }
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})