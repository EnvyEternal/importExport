'use strict'

export class Slider {
    constructor(slides, currentIndex = 0) {
      this._slides = slides;
      this._currentIndex = currentIndex;
    }
    set currentIndex(value) {
      if (value > 0 && value < this._slides.length) {
        this._currentIndex = value;
      }
    }
    get currentIndex() {
      return this._currentIndex;
    }
    get prevIndex() {
      return (this._currentIndex - 1 + this._slides.length) % this._slides.length;
    }
    get nextIndex() {
      return (this._currentIndex + 1) % this._slides.length;
    }
    get currentSlide() {
      return this._slides[this._currentIndex];
    }
    get prevSlide() {
      return this._slides[this.prevIndex];
    }
    get nextSlide() {
      return this._slides[this.nextIndex];
    }
  }