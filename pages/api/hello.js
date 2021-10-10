// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([{ name: 'John Doe', mailid:'Johndoe@gmail.com', password:'122@Fdedw' },{name: 'John', mailid:'John@gmail.com', password:'122@Fdedw'}])
}
