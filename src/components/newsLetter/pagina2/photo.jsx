import imagePage from '../images/illustration-sign-up-mobile.svg';
import imageMDPage from '../images/illustration-sign-up-desktop.svg';

function PhotoSection() {

    return (
        <div className='col-start-2'>
            <img className='max-h-65 w-96 md:hidden' src={imagePage} alt="foto" />
            <img className='max-h-65 w-96 md:block md:h-full sm:hidden' src={imageMDPage} alt="foto" />
        </div>
    )
}

export default PhotoSection;