import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async create ({type, comment, screenshot}: FeedbackCreateData) {
        await prisma.feedback.create({ //Express espera a operação no banco terminar para então executar o return 
            data: {
                type,
                comment,
                screenshot,
            }
        });
    }

}