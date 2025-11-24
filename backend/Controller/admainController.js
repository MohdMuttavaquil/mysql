import pool from "../Config/dbconfig.js"

const adamin = (req, res)=>{
    const { password } = req.body
  
    try {
       if(password === process.env.ADMAIN_PASSWORD){
        return res.json({success: true, message:"login successfully"})
       } else{
        return res.json({success: false, message:"enter correct password"})
       }
     
    } catch (error) {
        console.log(error)
        res.json("some error")
    }
}

const getList = async(req, res)=>{

    try {
        const [result] = await pool.execute(`select * from users`)
        res.json(result)
    } catch (error) {
        console.log(error)
        res.json("some error")
    }
}

const verifyUser =  async(req, res)=>{
    const { id } = req.body
    try {
        await pool.execute(`update users set varify = ? where id = ? `, 
            ["verify", id]
        )
        res.json("varify succesfully")
    } catch (error) {
        console.log(error)
        res.json("some error")
    }
}

export { adamin, getList, verifyUser }