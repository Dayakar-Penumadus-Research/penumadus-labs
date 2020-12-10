export default () => {
  const menu = document.querySelector('#nav-mobile .drop-down ul')
  const button = document.querySelector('#bars')

  button.onclick = () => {
    menu.classList.toggle('block')
    console.log(menu.classList)
  }
}
