//Esse arquivo que vai dizer quais operações podem ser realizadas no banco de dados mas ele não implementa elas

export interface FeedbackCreateData{
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository{
    create: (data: FeedbackCreateData) => Promise<void>;
}