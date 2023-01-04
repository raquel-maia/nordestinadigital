function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar  a tag img
  const img = document.querySelector("#profile  img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode.adIcionar a imagem light
    img.setAttribute("src", "./assets/Avatar.light.png")
    img.setAttribute(
      "alt",
      "foto de Raquel Maia, mulher de cabelo preto, com fundo azul"
    )
  } else {
    // se tiver sem light mode manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto de Raquel Maia, mulher, sorrindo, de blusa azul e cabelo preto"
    )
  }
}
