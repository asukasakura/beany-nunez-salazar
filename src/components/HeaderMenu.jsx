import {Link} from 'react-router-dom'

const HeaderMenu = () => {
  return (
    <>
      {/* <li><Link to={'/category/'}>Limpiadores</Link></li> */}
      {/* <li><Link to={'/category/'}>Exfoliantes</Link></li> */}
      <li><Link to={'/category/2'}>Tónico</Link></li>
      <li><Link to={'/category/3'}>Sérum / Esencia</Link></li>
      <li><Link to={'/category/1'}>Hidratantes</Link></li>
      <li><Link to={'/category/5'}>Bálsamos</Link></li>
      <li><Link to={'/category/4'}>Protector solar</Link></li>
      <li><Link to={'/category/6'}>Contorno ojos</Link></li>
    </>
  )
}
export default HeaderMenu