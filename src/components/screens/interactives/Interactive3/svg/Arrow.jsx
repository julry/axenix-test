export const Arrow = (props) => {
    const {degree, ...restProps} = props;
    return (
        <svg {...restProps} viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7146 0.99707L29.0249 25.7833H0.404248L14.7146 0.99707Z" fill="white"/>
        </svg>
    );
}