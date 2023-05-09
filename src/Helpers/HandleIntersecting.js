export const handleContactIntersecting = (el, percentage = 0) => {
  const { elementRef, stateSetter } = el;
  const topSide = elementRef.current.getBoundingClientRect().top;
  const bottomSide = elementRef.current.getBoundingClientRect().bottom;
  const screenIntersect = Math.round(window.innerHeight * (percentage / 100));
  if (topSide <= screenIntersect && bottomSide <= screenIntersect) {
    stateSetter(true);
  } else {
    stateSetter(false);
  }
};

const handleIntersecting = (el, percentage = 0) => {
  const { elementRef, stateSetter } = el;
  const topSide = elementRef.current.getBoundingClientRect().top;
  const bottomSide = elementRef.current.getBoundingClientRect().bottom;
  const screenIntersect = Math.round(window.innerHeight * (percentage / 100));
  if (topSide <= screenIntersect && bottomSide >= screenIntersect) {
    stateSetter(true);
  } else {
    stateSetter(false);
  }
};

export default handleIntersecting;
