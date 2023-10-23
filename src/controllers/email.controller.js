const moment = require("moment");
const db = require("../models");
const nodemailer = require('nodemailer');
const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD } = require('../common')

const { email : Email } = db;

const transporter = nodemailer.createTransport({
    service: 'gmail',   // 메일 보내는 곳
    prot: 587,
    host: 'http://localhost:8080',  
    secure: false,  
    requireTLS: true ,
    auth: {
      user: EMAIL_USER,  // 보내는 메일의 주소
      pass: EMAIL_PASSWORD   // 보내는 메일의 비밀번호
    }
});

exports.postEmail = async (req, res) => {
    console.log(EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD)
    const { name, company, phone, email, products } = req.body
    await transporter.sendMail({
        from: EMAIL_USER, // sender address
        to: EMAIL_USER, // list of receivers
        subject: "TKTrade Product Inquiries", // Subject line
        // text: `name : ${ name }, company : ${ company }, phone : ${ phone }, email : ${ email }, products : ${ products }`, // plain text body
        html: `<p>name : ${ name }</p>
        <p>company : ${ company }</p> 
        <p>phone : ${ phone }</p> 
        <p>email : ${ email }</p> 
        <p>products : ${ products }</p>`, // html body
    })
    .then(response => {
        console.log('Email sent: ' + response.response)
        res.status(200).json({message : 'Success'})
    })
    .catch(error=>console.log(error))
  
}
