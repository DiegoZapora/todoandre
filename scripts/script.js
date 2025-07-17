const fInput = document.getElementById("f_text")
const btnA = document.getElementById("btnADD")
let res = document.getElementById("res")
let feitas = document.getElementById("feitas")

let tarefas = []

const ADD = () => {
    res.innerHTML = ""
    tarefas.map((e) => {
        let p = document.createElement("p")
        p.innerHTML = `${e.getTarefa()}`
        p.classList.add("novo")
        res.appendChild(p)
    })
}

class novaTarefa {
    constructor (tf) {
        this.tarefa = tf
    }

    setTarefa = (tarefa) => {
        this.tarefa = tarefa
    }

    getTarefa = () => {
        return this.tarefa
    }
}

btnA.addEventListener("click", () => {
    if (fInput.value == "") {
        window.alert("ERRO! FALTAM DADOS!")
        return
    } else {
        let t1 = new novaTarefa (fInput.value)
        tarefas.push(t1)
        fInput.value = ""
        fInput.focus()
        ADD()
    }
})