const Email = require('email-templates');
const path = require('path');
const nodemailer = require('nodemailer');
class MailService {
    async boot() {
        this.email = new Email({
            views: { root: path.join(__dirname, '../utils/emailTemplates') }
        });
    }

    async sendTemplateEmail(templateName, populateData, options) {
        try {
            options.html = await this.email.render(templateName + '/index', populateData);
            return this.sendMail(options);
        } catch (err) {
            log.error('MailService/sendTemplateEmail', err);
            return jsonError(errors.SYSTEM_ERROR);
        }
    }

    async sendMail(options) {
        return await new Promise((resolve) => {
            let transporter = nodemailer.createTransport({
                host: getEnv("EMAIL_HOST"),
                port: getEnv("EMAIL_PORT"),
                auth: {
                    user: getEnv("EMAIL_ADMIN"),
                    pass: getEnv("EMAIL_ADMIN_PASS"),
                }
            });
            transporter.sendMail(options, (err, data) => {
                if (err) {
                    log.error('MailService/sendMail', err);
                    return resolve(jsonError(errors.SYSTEM_ERROR));
                }
                return resolve(jsonSuccess());
            });
        });
    }

}

module.exports = MailService;
