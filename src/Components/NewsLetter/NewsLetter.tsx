import background from '../../Assets/Images/slider/slide1_back.jpg'
const NewsLetter = () => {
    return (
        <section className="NewsLetter flex justify-center items-center flex-col p-12 my-12 text-center" style={{ background: `url(${background})`, backgroundSize: 'cover' }}>
            <h1 className="font-PtsBold text-3xl">Join our newsletter</h1>
            <p className='pb-4 text-sm'>Join over half a million vitamin lovers and get our latest deals, articles, and resources!</p>
            <div className='flex w-full justify-center'>
                <input type="text" placeholder="Email address" className='inpt py-2 rounded-full -mr-6 w-full md:w-1/4 ' />
                <button className="btn-tertiary">Subscribe</button>
            </div>
        </section>
    )
}

export default NewsLetter