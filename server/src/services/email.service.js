const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// console.log(process.env.EMAIL_USER , "email user-----");
// console.log(process.env.EMAIL_PASS, "email password");

const sendEmail = async ({ to, subject, html }) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            html,
        });
        return info;

    } catch (error) {
        throw error;
    }
};


module.exports = sendEmail;