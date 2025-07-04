import './appdownload.css'
import { assets } from '../../assets/frontend_assets/assets'
export const AppDownload = () => {
  return (
    <div className='app-download-container' id='mobile-app'>
        <h2>For Better Experience Download Tomato App</h2>
        <div className='app-download-img'>
            <img src={assets.play_store} alt="playstore" />
            <img src={assets.app_store} alt="appstore" />
        </div>
    </div>
  )
}
