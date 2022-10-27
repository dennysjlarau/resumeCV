import { MenuHorizontal } from "./MenuHorizontal"
import { Foto } from "./Foto"
import { Nombre } from "./Nombre"

export const BarraSuperior = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light me-auto">
      <div className="container-fluid">
        <Foto/>
        <Nombre/>
        <MenuHorizontal/>
      </div>
    </nav>
  )
}
