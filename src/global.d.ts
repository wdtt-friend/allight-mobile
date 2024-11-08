declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.module.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module 'swiper/css';
declare module 'swiper/css/pagination';