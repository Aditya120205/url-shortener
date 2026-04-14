import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"

export default async function Page({ params }) {
  // ✅ MUST await params in latest Next.js
  const { shorturl } = await params

  const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection("url")

  const doc = await collection.findOne({ shorturl })

  // ❌ If not found
  if (!doc) {
    return redirect(process.env.NEXT_PUBLIC_HOST)
  }

  // ✅ Redirect to original URL
  return redirect(doc.url)
}