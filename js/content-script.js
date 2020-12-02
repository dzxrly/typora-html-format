document.addEventListener('DOMContentLoaded', function () {
  let write = document.querySelector("#write")
  let toc = document.querySelector(".md-toc")
  write.parentNode.insertBefore(toc, write)

  toc = null
  write = null
})
