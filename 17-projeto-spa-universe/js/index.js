import { Router } from './router.js'
import { Design } from './design.js'

// Mapeando as Rotas
const router = new Router() 
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")


// Mapeando os Estilos
const design = new Design()
design.add("/", "/styles/home.css")
design.add("/universe", "/styles/universe.css")
design.add("/exploration", "/styles/exploration.css")
design.add(404, "/styles/404.css")


router.handle()
design.handle()

window.onpopstate = () => {
    router.handle()
    design.handle()
}

window.route = () => {
    router.route()
    design.route()
}