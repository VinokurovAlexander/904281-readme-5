declare const API_BASE_URL: string;

declare module '*.module.css' {
    const styles: { [className: string]: string };
    export = styles;
}
