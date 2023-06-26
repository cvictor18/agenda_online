const form = document.getElementsByTagName('form')[0]
const iptNome = document.getElementById('iptnome')
const iptTel = document.getElementById('ipttel')
const tbody = document.getElementsByTagName('tbody')[0]
let vNome = []
let vTel = []

function cadastrar(event) {
    event.preventDefault()
    if (nomeJaInserido(vNome, iptNome)) {
        window.alert(`O nome "${iptNome.value}" já foi inserido!`)
        iptNome.value = ''
        iptNome.focus()
    } else {
        if (telJaInserido(vTel, iptTel)) {
            window.alert(`O telefone ${iptTel.value} já foi inserido!`)
            iptTel.value = ''  
            iptTel.focus()              
        } else {
            criarLinha()
            inserirLinha()
            vNome.push(iptNome.value.toLowerCase())
            vTel.push(iptTel.value)
            iptNome.value = ''
            iptTel.value = ''                
        }
    }
    iptNome.focus()
}

let linha = ''
function criarLinha() {
    linha = `<tr>`
    linha += `<td>${iptNome.value}</td>`
    linha += `<td>${iptTel.value}</td>`
    linha += `<tr>`
}

let linhas = ''
function inserirLinha() {
    linhas += linha
    tbody.innerHTML = linhas
}

function nomeJaInserido(v,ipt) {
    if (v.includes(ipt.value.toLowerCase())) {
        return true
    } else { 
        return false
    }
}

function telJaInserido(v,ipt) {
    if (v.includes(ipt.value)) {
        return true
    } else {
        return false
    }
}