const scrollTo = () => {
  const height = document.documentElement.scrollHeight;
  const scroll = {
    top: height,
    behavior: "smooth"
  };

  window.scrollTo(scroll);
};

export default scrollTo;