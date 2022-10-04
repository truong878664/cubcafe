
const start =  () => {
    renderHeader()
    renderFooter()
}

function renderHeader() {
    const header = document.querySelector('#header')
    fetch('/layout/header.html')
    .then(res => res.text())
    .then(data => {header.innerHTML=data
        const parser = new DOMParser()
        const doc = parser.parseFromString(data,'text/html')
        eval(doc.querySelector('script').textContent)})
}

function renderFooter () {
    const footer = document.querySelector('#footer')
    fetch('/layout/footer.html')
    .then(res => res.text())
    .then(data => {
        footer.innerHTML=data
})
}


start()


