import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps{
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps){
    return (

        <>
        <header>
            <span className="text-xl leading-6"> Deixe seu FeedBack</span>

            <CloseButton /> {/* Se refere ao componente CloseButton em CloseButton.tsx */}
        </header>

            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => { /**Itera sobre os objetos dentro do feedbackTypes e os exibe */
                    return (
                        <button
                            key={key} /**Propriedade exclusiva do react js para identificar cada componente iterado, seria como o id de cada objeto */
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus: outline-none"
                            onClick = {() => onFeedbackTypeChanged(key as FeedbackType)} /** colocar o () => setFeedbackType pois o onclick espera uma função, como parâmetro, restringe o key a ser um tipo de FeedbackType -> BUG, IDEA ou OTHER*/
                            type="button"

                        >
                            <img src={value.image.source} alt={value.image.alt} /> {/* Entrará no objeto e buscará as informações sobre o caminho da imagem e seu alt */}
                            <span>{value.title}</span> 
                        </button>
                    )
                }) }
            </div>
        </>    
    )
}