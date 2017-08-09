function decorateBackground() {
// set up the base pattern
  const pattern = Trianglify({
    height: window.innerHeight,
    width: window.innerWidth,
    cell_size: 30 + Math.random() * 100
  });
  // canvas
  // document.body.appendChild(pattern.canvas());
  // svg
  // document.body.appendChild(pattern.svg());
  // png
  // const png = document.createElement('img');
  // png.src = pattern.png();
  // document.body.appendChild(png);

  $('.flex-container').css('background-image', `url(${pattern.png()})`);
}