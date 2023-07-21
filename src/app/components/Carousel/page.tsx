"use client"

import Carousel from 'react-bootstrap/Carousel';
import styles from './styles.module.scss';

export function CarouselComponent() {
  return (
    <>
      <div className={styles.carouselContainer}>
        <Carousel data-bs-theme="dark" className={styles.sizeComponent}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="carousel/Acucar.svg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className={styles.textcolor}>First slide label</h3>
              <p className={styles.textcolor}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="carousel/bolacha.svg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className={styles.textcolor}>Second slide label</h3>
              <p className={styles.textcolor}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="carousel/trabalhador.svg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className={styles.textcolor}>Third slide label</h3>
              <p className={styles.textcolor}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}