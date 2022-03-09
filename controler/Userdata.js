// const { required } = require("nodemon/lib/config");

const UserScheema = require("../model/sign-up");
const bcrypt = require("bcryptjs");

module.exports = {
    createUserData: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const Hashpasword = await bcrypt.hash(req.body.Password, salt);

            let data = new UserScheema({
                Name: req.body.Name,
                Email: req.body.Email,
                Password: Hashpasword,
                Number: req.body.Number

            })
            await data.save()
            res.send({
                status: 200,
                sucess: true,
                msg: "user Created",
            })            // console.log(data)

        }
        catch (err) {
            res.send({
                status: 500,
                sucess: true,
                msg: "Server Error",
            })      
        }

    }
}