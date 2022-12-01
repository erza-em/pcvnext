import AppContext from '../AppContext'
import { useContext  } from 'react'

export default function Popup({title}) {
    
    const contextPopUp = useContext(AppContext)

    function closePopup () {
        let popUpWrapper = document.querySelector('.wrapper-popup')
        // popUpWrapper.classList.add('d-none')
        contextPopUp.setshowPopup(false)
    }

    return (
        <div className="wrapper-popup bg-gradient-black" onClick={closePopup}>
            <div className="popup-custom box-wrapper bg-white">
                <h2>Alert!</h2>
                <hr />
                <button className="close" type="button" onClick={closePopup}>x</button>
                <p className="mb-3 mt-2">{title}</p>
                
            </div>
        </div>
    )
}