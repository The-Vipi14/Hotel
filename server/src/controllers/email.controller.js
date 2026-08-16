const sendEmail = require("../services/email.service");


const sendEmailController = async (req, res) => {

    try {

        const { to, subject, message } = req.body;


        if (!to || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }


        await sendEmail({
            to,
            subject,
            html: `
                <h2>${subject}</h2>
                <p>${message}</p>
            `
        });


        return res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });


    } catch (error) {

        console.log(error);


        return res.status(500).json({
            success: false,
            message: "Email sending failed"
        });

    }

};


module.exports = {
    sendEmailController
};