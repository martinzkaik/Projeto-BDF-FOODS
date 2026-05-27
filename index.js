const linksMenu = document.querySelectorAll(".nav-link")

linksMenu.forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault()

    const idDaSecao = link.getAttribute("href")

    const secao = document.querySelector(idDaSecao)

    secao.scrollIntoView({
      behavior: "smooth"
    })

  })

})

const botaoWhatsapp = document.querySelector(".btn-nav")

botaoWhatsapp.addEventListener("click", () => {

  window.open(
    "https://wa.me/5511999999999",
    "_blank"
  )

})

const botaoAtendimento =
  document.querySelector(".btn-yellow")

botaoAtendimento.addEventListener("click", () => {

  alert("Atendimento solicitado!")

})

const botaoRepresentante =
  document.querySelector(".btn-white")

botaoRepresentante.addEventListener("click", () => {

  alert("Representante disponível!")

})

const header = document.querySelector(".header")

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.style.background = "#111"

    header.style.boxShadow =
      "0px 5px 20px rgba(0,0,0,0.2)"

  }

  else{

    header.style.background = "#000"

    header.style.boxShadow = "none"

  }

})