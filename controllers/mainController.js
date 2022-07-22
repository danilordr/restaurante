const about = {
  titulo: 'Pimenta & Sal',
  descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.',
  historia: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}
const listaPratos = [
  {
      id:1,
      titulo: 'Carpaccio fresco',
      descripcionCorta: 'Entrada Carpaccio de salmoão com cítricos',
      descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      precio: '65.50',
      img: 'carpaccio-de-salmao.jpg'
  },
  {
      id:2,
      titulo: 'Risotto de berinjela',
      descripcionCorta: 'Risotto de berinjela e queijo de cabra',
      descripcionDetallada: '',
      precio: '47.00',
      img: 'risotto-berinjela-queijo-cabra.jpg'
  },
  {
      id:3,
      titulo: 'Mousse de arroz',
      descripcionCorta: 'Mousse de arroz com leite e aroma de flor de laranjeira',
      descripcionDetallada: '',
      precio: '27.50',
      img: 'mousse-de-arroz-com-leite.jpg'
  },
  {
      id:4,
      titulo: 'Aspargos brancos',
      descripcionCorta: 'Aspargos brancos com vinagrete de legumes e presunto ibérico',
      descripcionDetallada: '',
      precio: '37.50',
      img: 'aspargos.png'
  }
]

const mainController = {
index: (req, res) => {
  res.render("index", { about: about, menu: listaPratos });
},
detalle: (req, res) => {
  let prato = listaPratos.find(prato => prato.id == req.params.menuId);
  console.log(prato)
  res.render("detalheMenu", { prato: prato });
},
};

module.exports = mainController;
