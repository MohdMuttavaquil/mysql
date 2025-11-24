import pool from '../Config/dbconfig.js'

const verifyReq = async(req, res)=>{

    const { name, email, userClass, rollNo } = req.body.data

    try {
      await pool.query(`insert into users (name, email, class, roll_no) values (?,?,?,?)`,
            [name, email, userClass, rollNo]
        )

        res.json("request send succesfully")
    } catch (error) {
        console.log(error)
        res.json("some error")
    }
}

const checkVerify = async (req, res)=>{
    const { email } = req.body

    try {
        const [result] = await pool.execute(`select name, roll_no, class, varify from users where email = ?`,
            [email]
        )

        if (result.length == 0) {
            return res.json({success: false, message:"enter valid email"})
        }

        res.json({ success: true, result})
    } catch (error) {
        console.log(error)
        res.json("some error")
    }
}

export { verifyReq, checkVerify } 