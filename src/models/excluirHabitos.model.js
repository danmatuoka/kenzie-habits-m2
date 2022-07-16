import Habits from '../controller/Api.habits.controller.js'
import editarHabito from '../models/editarHabitos.models.js'

const body = document.querySelector('body');

export default class deletaHabito {
    static excluirHabito(habitId) {
        const fundoPreto = document.createElement('div');
        fundoPreto.classList.add('fundo__preto')

        const form = document.createElement('form');
        form.classList.add('form__modal', 'excluir')

        fundoPreto.append(form)

        const modalHeader = document.createElement('div');
        modalHeader.classList.add('form__modal__header')

        const modalName  = document.createElement('h2')
        modalName.classList.add('form__modal__name')
        modalName.innerText = 'Excluir hábito'

        const buttonClose = document.createElement('button')
        buttonClose.innerText = 'X'
        modalHeader.append(modalName, buttonClose)
        form.appendChild(modalHeader)

        buttonClose.addEventListener('click', (e) => {
            e.preventDefault()
            fundoPreto.style.display = 'none';
        })

        let modalBody = this.modalBody()
        const h2 = document.createElement('h2')
        h2.classList.add('form__modal__name')
        h2.innerText = 'Certeza que deseja excluir este hábito?'

        const h5 = document.createElement('h5')
        h5.classList.add('form__input__name')
        h5.innerText = 'Após executar essa ação não será possível desfazer'

        modalBody.append(h2, h5)
        form.appendChild(modalBody)

        const divExcluir = document.createElement('div')
        divExcluir.classList.add('btn__excluir')

        const botaoCancelar = document.createElement('button')
        botaoCancelar.classList.add('btn', 'btn--cinza-claro')
        botaoCancelar.innerText = 'Cancelar'

        botaoCancelar.addEventListener('click', (e) => {
            e.preventDefault();
            fundoPreto.style.display = 'none';
            editarHabito.criarEdit();
        })

        const botaoExcluir = document.createElement('button')
        botaoExcluir.classList.add('btn', 'btn--vermelho')
        botaoExcluir.innerText = 'Sim, excluir este habíto'

        botaoExcluir.addEventListener('click', async (e) => {
            e.preventDefault();
            await Habits.deleteHabit(JSON.parse(localStorage.getItem('@capstone:habitId')))
            window.location.reload()
        })

        divExcluir.append(botaoCancelar, botaoExcluir)
        form.append(divExcluir)

        body.append(fundoPreto)
    }

    static modalBody() {
        const modalBody = document.createElement('div')
        modalBody.classList.add('form__modal__body')

        return modalBody
    }
}