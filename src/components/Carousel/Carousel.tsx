'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import s from './Carousel.module.scss'
import { ArrowIosBack, ArrowIosForwardOutline } from "../../assets/icons";

export type Props = {
  buttonsClassName?: string
  className: string
  imagesUrl?: { url: string }[]
  onNextClick?: (index: number) => void
  onPrevClick?: (index: number) => void
}

export const Carousel = ({
                             buttonsClassName,
                             className,
                             imagesUrl = [],
                             onNextClick,
                             onPrevClick,
                         }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % imagesUrl.length
        setCurrentIndex(newIndex)
        if (onNextClick) onNextClick(newIndex)
    }

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + imagesUrl.length) % imagesUrl.length
        setCurrentIndex(newIndex)
        if (onPrevClick) onPrevClick(newIndex)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') nextSlide()
            if (event.key === 'ArrowLeft') prevSlide()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [currentIndex])

    if (imagesUrl.length === 0) {
        return null
    }

    return (
        <div className={clsx(s['post-single-slider'], className)}>
            <div className={s['carousel-wrapper']}>
                {imagesUrl.map((image, index) => (
                    <div
                        className={clsx(s['slide'], { [s.active]: index === currentIndex })}
                        key={image.url}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    >
                        <img alt={`Slide ${index}`} className={s.image} src={image.url} loading="lazy" />
                    </div>
                ))}
            </div>
            {imagesUrl.length > 1 && (
                <>
                    <button
                        className={clsx(s['custom-button'], buttonsClassName)}
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        <ArrowIosBack className={s.icon} />
                    </button>
                    <button
                        className={clsx(s['custom-button'], buttonsClassName)}
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        <ArrowIosForwardOutline className={s.icon}/>
                    </button>
                    <div className={s['dots-container']}>
                        {imagesUrl.map((_, index) => (
                            <button
                                key={index}
                                className={clsx(s.dot, { [s.active]: index === currentIndex })}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
