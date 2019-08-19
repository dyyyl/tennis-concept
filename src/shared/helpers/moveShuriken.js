const moveShuriken = (event, setPosition) => {
  const { clientX, clientY } = event;
  setPosition({
    x: clientX,
    y: clientY,
  });
};

export default moveShuriken;
