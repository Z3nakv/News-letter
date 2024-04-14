import Pagina1 from "./pagina1";
import PhotoSection from "./pagina2/photo";


function NewsLetter({ handleStatus, status }) {

    return (
        <div className={`font-roboto bg-white h-full w-96 m-auto relative overflow-hidden md:w-[820px] md:h-[600px] md:rounded-3xl ${status ? 'hidden' : ''}`}>
            <div className="h-full md:grid md:grid-cols-2 md:gap-5 ">
                <PhotoSection />
                <Pagina1 handleStatus = {handleStatus} />
            </div>
        </div>
    )
}

export default NewsLetter;