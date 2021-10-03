'use strict'

export class Slide {
    constructor(src, info) {
      this._src = src;
      this._info = info;
    }
    get src() {
      return this._src;
    }
    get info() {
      return this._info;
    }
  }