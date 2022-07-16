import Users from '../controller/Api.users.controller.js';

const body = document.querySelector('body');

export default class editarPerfil {
    static criarEdit() {
        const fundoPreto = document.createElement('div');
        fundoPreto.classList.add('fundo__preto')

        const form = document.createElement('form');
        form.classList.add('form__modal')

        fundoPreto.append(form)

        const modalHeader = document.createElement('div');
        modalHeader.classList.add('form__modal__header')

        const modalName = document.createElement('h2')
        modalName.classList.add('form__modal__name')
        modalName.innerText = 'Editar perfil'

        const buttonClose = document.createElement('button')
        buttonClose.innerText = 'X'

        modalHeader.append(modalName, buttonClose)
        form.appendChild(modalHeader)

        buttonClose.addEventListener('click', (e) => {
            e.preventDefault()
            fundoPreto.style.display = 'none';
        })

        let modalBody = this.modalBody()
        let titulo = this.modalInputName('Nome')
        const formTitle = document.createElement('input')
        formTitle.classList.add('campo__titulo')
        formTitle.value = JSON.parse(localStorage.getItem('@capstone:username'))
        modalBody.append(titulo, formTitle)
        form.appendChild(modalBody)

        let modalBody2 = this.modalBody()
        let descricao = this.modalInputName('Url da imagem do perfil')
        const textField = document.createElement('input')
        textField.classList.add('campo__titulo')
        textField.value = JSON.parse(localStorage.getItem('@capstone:usr_img'))
        modalBody2.append(descricao, textField)
        form.appendChild(modalBody2)

        const divEdicao = document.createElement('div')
        divEdicao.classList.add('btn__editar')

        const botaoSalvar = document.createElement('button')
        botaoSalvar.classList.add('btn', 'btn--disabled')
        botaoSalvar.innerText = 'Salvar alterações'

        form.addEventListener("submit", async (event) => {
            event.preventDefault()

            const dadosEditados = {
                usr_image: textField.value
            }

            if (textField.value == "" || textField.value == null) {
                console.log("funcionou")
            } else {
                await Users.updateProfile(dadosEditados)
                window.location.reload()
            }
        })
        divEdicao.append(botaoSalvar)
        form.appendChild(divEdicao)

        body.append(fundoPreto)
    }

    static modalBody() {
        const modalBody = document.createElement('div')
        modalBody.classList.add('form__modal__body')

        return modalBody
    }

    static modalInputName(nome) {
        const h5 = document.createElement('h5')
        h5.classList.add('form__input__name')
        h5.innerText = nome

        return h5
    }
}

