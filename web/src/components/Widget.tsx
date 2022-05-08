import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget(){
/* Os popovers são perfeitos para painéis flutuantes com conteúdo arbitrário, como menus de navegação, menus móveis e menus suspensos. */
    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-10 flex flex-col items-end'> {/*Popover é uma biblioteca utilizada para a acessibilidade do usuário, ele abre
        uma janela referente a um botão ou link, veja ele como uma div */}

            <Popover.Panel> {/* O conteúdo do popover ficará aqui */}
                <WidgetForm /> {/*Componente localizado em WidgetForm.tsx */}
            </Popover.Panel>


            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" size="200"/> {/** O ChatTeardropDots é uma biblioteca de ícones*/}

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button >
        </Popover>
        
    )
}