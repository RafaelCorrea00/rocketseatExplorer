export class Design {

    styles = {}

    add(routeName, style) {
        this.styles[routeName] = style
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const style = this.styles[pathname] || this.styles[404]

        fetch(style)
            .then(data => data.url)
            .then(css => {
                document.querySelector('#design').href = css
            })    
    }
}