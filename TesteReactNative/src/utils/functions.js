
 export default async function awaiting (url){
    const res =  await fetch(url)
    const char = await res.json()
    return char
  }
  