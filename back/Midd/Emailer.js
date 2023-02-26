const nodemailer = require("nodemailer");


  const sendmail=async(req,res)=>{

             
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'florida.volkman@ethereal.email',
        pass: 'jtf2sbZB8SbT1YDG7Q'
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
 
  res.json({info})


}

module.exports=sendmail;