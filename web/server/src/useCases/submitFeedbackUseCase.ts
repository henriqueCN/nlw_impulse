import { MailAdapter } from "../adapters/mailAdapter";
import { FeedbacksRepository } from "../repositories/feedbacksRepository";

interface SubmitFeedbackUseCaseRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase{
    //Baseado no princípio de inversão de dependências, vamos utilizar um constructor, pois, caso queiramos mudar a biblioteca do prisma, só mudamos uma variável do constructor
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) {}


    //caso de uso tem apenas uma funcionalidade
    async execute(request: SubmitFeedbackUseCaseRequest){
        const {type, comment, screenshot} = request;

        if (screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid screenshot format.')
        }

        if(!type){
            throw new Error('Type is required.');
        }

        if(!comment){
            throw new Error('comment is required.');
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: "Novo Feedback",
            body: [
                `<div style="font-family: sans-serif; font size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`,
            ].join('\n')
        })
    }
}