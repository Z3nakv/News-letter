import iconSucces from '../images/icon-success.svg'; 

function SubThanks({ handleStatus }) {

    function handleClick() {
        handleStatus();
    }

    return (
        <div className='bg-white h-screen w-96 md:h-[500px] md:w-[500px] md:rounded-3xl m-auto'>
            <div className='h-full w-full px-7 py-10 flex flex-col justify-between md:py-0 md:px-14 md:block'>
                <div className='mt-24 md:mt-10'>
                    <div>
                        <img src={iconSucces} alt="success" />
                    </div>
                    <div className='mt-10 md:mt-5'>
                        <h1 className='text-5xl font-bold'>Thanks for subscribing!</h1>
                        <p className='mt-8'>A confirmation email has been sent to <span className='font-bold'>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.</p>
                    </div>
                </div>
                <div className='md:mt-10'>
                    <button className='w-full bg-darkSlateGrey rounded-md p-4 text-lg text-white font-bold hover:bg-tomato hover:shadow-shadowCustom'
                    onClick={handleClick}
                    >Dismiss message</button>
                </div>
            </div>
        </div>
    )
}

export default SubThanks;