const scroll = (key) => {
    const element = document.querySelector(`#${key}`);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
};

export {
    scroll
};

export default {
    scroll
};