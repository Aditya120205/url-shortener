import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  const body = await request.json()

  let { url, shorturl } = body

  // ✅ Fix 1: Add https:// if missing
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url
  }

  const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection("url")

  // ✅ Fix 2: Check if short URL already exists
  const existing = await collection.findOne({ shorturl })

  if (existing) {
    return Response.json({
      success: false,
      error: true,
      message: "Short URL already exists"
    })
  }

  // ✅ Fix 3: Insert correct data
  await collection.insertOne({
    url,
    shorturl
  })

  return Response.json({
    success: true,
    error: false,
    message: "URL generated successfully"
  })
}