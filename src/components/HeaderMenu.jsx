import {Link} from 'react-router-dom'

const HeaderMenu = () => {
  return (
    <>
      {/* <li><Link to={'/category/'}>Limpiadores</Link></li> */}
      {/* <li><Link to={'/category/'}>Exfoliantes</Link></li> */}
      <li><Link to={'/category/tonico'}>Tónico</Link></li>
      <li><Link to={'/category/serum'}>Sérum / Esencia</Link></li>
      <li><Link to={'/category/hidratantes'}>Hidratantes</Link></li>
      <li><Link to={'/category/balsamos'}>Bálsamos</Link></li>
      <li><Link to={'/category/protector-solar'}>Protector solar</Link></li>
    </>
  )
}
export default HeaderMenu