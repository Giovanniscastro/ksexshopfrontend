import 'w3-css/3/w3.css'
import './app.css'
import ListProdutos from './componentes/ListProdutos'
import Menu from './componentes/menu'
import Carroussel from './componentes/carrousel'
export default function Home() {
  const trataMenu = (id) => {
    alert(`Menu ${id}`)
  }
  return (
    <>
      <body>
        <Menu>
        </Menu>
        <main>
          <Carroussel></Carroussel>
          <div className="w3-container w3-padding-16 w3-margin-top">
            <h1>Catálogo KSexshop</h1>
            </div>

          <ListProdutos></ListProdutos>
          <div id="produtos" className="w3-row w3-container w3-margin-top"></div>
        </main>


        <footer>
          <p>&copy; 2023 - Todos os direitos reservados</p>
            <nav>
              <ul>
                <li><a href="#">Termos de uso</a></li>
                <li><a href="#">Política de privacidade</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </nav>
         </footer>
      </body>
    </>


  )
}
