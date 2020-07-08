import nodemailer from 'nodemailer';
import exphbs from 'express-handlebars';
import nodemailerhbs from 'nodemailer-express-handlebars';
import { resolve } from 'path';
import configMail from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = configMail;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    });

    this.configTemplate();
  }

  configTemplate() {
    const viewPath = resolve(__dirname, '../app/views/emails');

    this.transporter.use(
      'compile',
      nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          defaultLayout: 'default',
          extname: '.hbs',
        }),
        viewPath,
        extname: '.hbs',
      })
    );
  }

  sendMail(menssage) {
    this.transporter.sendMail({
      ...configMail.default,
      ...menssage,
    });
  }
}

export default new Mail();
