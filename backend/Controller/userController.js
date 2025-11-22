import pool from '../Config/dbconfig.js'

const verifyReq = async(req, res)=>{

    const { name, email, userCalss, rollNo } = req.body.data
    console.log(name, email, userCalss, rollNo)

    try {
      await pool.query(`insert into users (name, email, class, roll_no) values (?,?,?,?)`,
            [name, email, userCalss, rollNo]
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

        res.json(result)
    } catch (error) {
        console.log(error)
        res.json("some error")
    }
}

export { verifyReq, checkVerify } 