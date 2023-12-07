import 'w3-css/3/w3.css'
import './app.css'
import ListProdutos from './componentes/ListProdutos'
import Menu from './componentes/menu'
export default function Home() {
  const trataMenu = (id) => {
    alert(`Menu ${id}`)
  }
  return (
    <>
      <body>
        <Menu onSelect={trataMenu}>
        </Menu>
        <main>
          <div className="w3-container w3-padding-16 w3-margin-top">
            <h1>Catalago KSexshop</h1>
            </div>

          <ListProdutos></ListProdutos>
          <div id="produtos" className="w3-row w3-container w3-margin-top"></div>
        </main>


        <footer className="w3-container w3-margin-top w3-black ">
        </footer>
      </body>
    </>


  )
}