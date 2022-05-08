import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

//spies = espiões

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit Feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Exemple comment',
            screenshot: 'data:image/png;base64,8625345iu'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled(); //Espero que a função createFeedbackSpy tenha sido chamada
        expect(sendMailSpy).toHaveBeenCalled(); //Espero que a função sendMailSpy tenha sido chamada
    })

    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'Exemple comment',
            screenshot: 'data:image/png;base64,8625345iu'
        })).rejects.toThrow();

        
    })

    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,8625345iu'
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback with a invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Comentário',
            screenshot: 'image.jpg'
        })).rejects.toThrow();
    })
})