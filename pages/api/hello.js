// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import name from '../../database/hello.json'

export default function handler(req, res) {
  console.log(`${req.method} ${req.url}`)
  res.status(200).json(name)
}
