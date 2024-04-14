import InfoData from "../pagina1/info";
import FormData from "../pagina1/form";

function Pagina1({ handleStatus }) {

    return (
        <div className="h-4/6 px-8 py-4 flex flex-col justify-around md:row-start-1 md:h-full md:justify-center md:gap-10">
            <InfoData />
            <FormData handleStatus={handleStatus} />
        </div>
    )
}

export default Pagina1;