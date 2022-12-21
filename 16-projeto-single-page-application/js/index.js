import { Router } from './router.js'

// Mapeamento das Rotas
const router = new Router()
router.add("/", "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact", "/pages/contact.html")
router.add(404, "/pages/404.html")

router.handle()

// ativar a nevegação pelas setas do navegador
window.onpopstate = () => router.handle()

// preventDefault direto na janela do navegador
window.route = () => router.route()