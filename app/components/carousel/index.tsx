import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options,[Autoplay()])

  return (
    <div className="embla">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
          <div className="embla__slide" key={0}>
            <img
            className="embla__slide__img"
            src="/images/slider_slide1.png"
            alt="Second slide"
             />
          </div>
          <div className="embla__slide" key={1}>
            <img
            className="embla__slide__img"
            src="/images/slider_slide2.png"
            alt="Second slide"
             />
          </div>
          <div className="embla__slide" key={2}>
            <img
            className="embla__slide__img"
            src="/images/slider_slide3.png"
            alt="Second slide"
             />
          </div>
      </div>
    </div>
  </div>
  );
}

export default EmblaCarousel;