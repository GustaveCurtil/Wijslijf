const individueel = document.querySelector("#individueel")
const groepstrajecten = document.querySelector("#groepstrajecten")
const organisaties = document.querySelector("#organisaties")

individueel.addEventListener("click", (e) => {
    document.location.href="aanbod/individueel.html"
})

groepstrajecten.addEventListener("click", (e) => {
    document.location.href="aanbod/groepstrajecten.html"
})

organisaties.addEventListener("click", (e) => {
    document.location.href="aanbod/organisaties.html"
})
