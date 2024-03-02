import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import Footer from '../../components/Footer'

import './sponsors.css'

const Media = () => {
    const sponsorGalleryLength = 9;
    const sponsors = []

    for(let i = 1; i <= sponsorGalleryLength; i++) {
      sponsors.push(require(`../../images/sponsors/sponsor/${i}.png`))
    }

    return (
        <>
        <Header title="Sponsors" image={HeaderImage}>
            Check out some photos that we've gathered over the years at our competitions!
        </Header>
        <h1 className='head'>Sponsors</h1>
        <section className="sponsors">
            <div className="container sponsors__container">
                {
                    sponsors.map((image, index) => {
                        return <article key={index}>
                            <img src={image} alt={`Media Image ${index + 1}`} />
                        </article>
                    })
                }
            </div>
        </section> 
        <Footer/>
        </>
    )
}

export default Media