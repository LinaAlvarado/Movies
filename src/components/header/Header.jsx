import './header.css'
import IconSearch from './Icon-search'
const Header = () => {
  return (
    <header>
        <h1>MovieTime</h1>
        <div className='container-input-search'>
          <input type="search" name="" id="" placeholder='¿Qué quieres ver?' className='input-search'/>
          <button className='button-search'><IconSearch></IconSearch></button>
        </div>
    </header>
  )
}

export default Header