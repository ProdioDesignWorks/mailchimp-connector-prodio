export default class MailChimp {
  constructor(config) {
    this.config = config;
  }

  sendEmail(){
  	return 'This is mailchimp send email';
  }

  sendSMS(){
  	return 'This is mailchimp send sms';
  }

  createTemplate(){
  	return 'This is mailchimp create template';
  }
}