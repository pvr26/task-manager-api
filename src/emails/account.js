const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'vaibhavreddy57@gmail.com',
		subject: 'Thanks for joining in!',
		text: 'Welcome to the app,'+ name
	})
}

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'vaibhavreddy57@gmail.com',
		subject: 'Sorry to see you go',
		text: 'GoodBye!!,'+ name +'. Hope to see you back soon.'
	})
}

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail
}