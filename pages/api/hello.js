import db from "@/utils/db"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  db.connectDB();
  res.status(200).json({ name: 'John Doe' })
}
