import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3c414ba644fcd1",
      pass: "a9da0fbdc373f6"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){ //é async porque demora um pouco para executar
        await transport.sendMail({
            from: "Equipe Feedget <o@feed.com>",
            to: "Henrique <henriquecostadonascimento@gmail.com>",
            subject,
            html: body,
        });

    };
}

/**[
                `<div style="font-family: sans-serif; font size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`,
            ].join('\n') */