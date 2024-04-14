import image from '../../newsLetter/images/icon-list.svg';

function InfoData() {

    return (
        <div className='text-md flex flex-col gap-5 text-left'>
            <h1 className="text-[43px] font-bold">Stay updated!</h1>
            <p>Join 60,000+ discovery managers receiving monthly updates on:</p>
            <ul className='flex flex-col gap-4'>
                <li className='flex gap-5'><img className='w-6' src={image}></img>Product discovery and building what matters</li>
                <li className='flex gap-5'><img className='w-6' src={image}></img>Measuring to ensure updates are a success</li>
                <li className='flex gap-5'><img className='w-6' src={image}></img>And much more!</li>
            </ul>
        </div>
    )
}

export default InfoData;