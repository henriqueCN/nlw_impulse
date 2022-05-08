import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton(){ /*Esse Botão ficará dentro do popover e será responsável por fechá-lo */
    return (
        <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário de FeedBack">
            <X weight="bold" className="w-4 h-4"/> {/* Ícone da biblioteca phosphor-react */}
        </Popover.Button>      
    );
}