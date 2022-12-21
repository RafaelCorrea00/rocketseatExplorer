export class Router {

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        // Evita o carregamento padrão das páginas pelo navegador
        event = event || window.event
        event.preventDefault()
    
        // Coloca o 'href' da tag <a> no histórico do navegador
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle() {
        // Exemplo de desestruturação :
        // const { pathname, href, host, port } = window.location
    
        // Pega o caminho (pathname) do location
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
    
        // Promise - Buscando a rota e retornando o html
        fetch(route)
            .then(data => data.text())
            .then(html => {
                // inserindo o conteúdo html na div #app
                document.querySelector('#app').innerHTML = html
            })
    }
}