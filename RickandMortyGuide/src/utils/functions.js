module.exports = {
    async getData(url,setData){
       try {
        const res = await fetch(url)
        const char = await res.json()
       return  setData(char)
       } catch (error) {
           setData('')
          console.error(error.message)
       }
    }
}