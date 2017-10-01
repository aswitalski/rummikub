window.renderGame = async (container) => {

  // create new app
  const rummikub = opr.Toolkit.create('components/rummikub');

  // preload all resources
  await rummikub.preload();

  // render in body element
  await rummikub.render(container);
};

opr.Toolkit.configure({
  preload: true,
  debug: true,
});

const render = async () => {
  await opr.Toolkit.ready();
  // await new Promise(resolve => window.addEventListener('load', resolve));
  await renderGame(document.body);
};

render();
