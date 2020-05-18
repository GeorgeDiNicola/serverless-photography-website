import React, { Component } from 'react';
import "../css/carousel.css";

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={ `slide-arrow ${direction}` }
    onClick={ clickFunction }>
    { glyph }
  </div>
);
export default Arrow;