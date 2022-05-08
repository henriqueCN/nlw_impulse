import { CloseButton } from "../CloseButton"
import bugImageUrl from '../../assets/bug.png'; /**A Importação de imagens ou arquivos sempre é feita pelo js e atribuida a uma variável */
import ideaImageUrl from '../../assets/idea.png';
import thoughtImageUrl from '../../assets/thought.png';
import { useDebugValue, useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep as FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

 export const feedbackTypes = { /**Declraação de tipos de feedback que podem ser selecionados através de um array de arrays*/
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem de pensamento'
        },
    },
};

 export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null); /**Declara qual será o tipo de dado que a função receberá, baseado no array feedbackType */
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback(){ {/** Essa função será responsável por limpar o array de feedback, fazendo assim, com que o usuário volte para a tela inicial */}
        setFeedbackSent(false);
        setFeedbackType(null);
        
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
           
            { feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                {!feedbackType ? ( /** Identifica se uma pessoa já selecionou o tipo de feedback */
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                ) : ( /**Se ela já selecionou o tipo de feedback, aparecerá a mensagem abaixo */
                        <FeedbackContentStep feedbackType={feedbackType} 
                        onFeedbackRestartRequest={handleRestartFeedback}
                        onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>             
            )}
            
            
            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="https://hnasc.com.br" >Nascimento</a>
            </footer>
        </div>
    )
}