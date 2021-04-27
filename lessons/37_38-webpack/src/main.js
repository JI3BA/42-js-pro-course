import './styles/index.css'
import Header from './components/Header'
import Content from './components/Content'
import Contacts from './components/Contacts'


const render = () => {
  const root = document.querySelector('#app')
  root.innerHTML = ''

  root.appendChild(
    Header()
  )
  if (window.location.pathname === '/home' || window.location.pathname === '/') {
    root.appendChild(
      Content()
    )
  }
  if (window.location.pathname === '/contacts') {
    import('./components/Contacts')
        .then(({ default: contactsModule }) => {
          console.log(contactsModule)
          root.appendChild(contactsModule())
        })
    root.appendChild(
      Contacts()
    )
  }
}

render()
