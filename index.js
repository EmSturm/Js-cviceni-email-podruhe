const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const formalGoodbye = (name) => {
  return 'S uctivoou poklonou' + name;
}

const rudeGoodbye = (name) => {
  return 'Se měj' + name;
}

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbyeFunction) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbyeFunction(name);
};

document.body.innerHTML = fillSubject('Obchodní sdělení')

document.body.innerHTML = fillBody('Píši vám ohledně', 'Ema Šturmová', formalGoodbye)