import classes from "./CustomButton.scss";

const CustomButton = ({
    value = '',
    type="button",
    btnClick,
    isDisabled=false
}) => {

    return (
        <button type={type}
        onClick={btnClick} 
        disabled={isDisabled}
        className={`w-auto border-solid border-2 h-12.5 w-40 transition-all rounded-md px-5 py-2.5 text-center ${isDisabled ?
             'bg-gray-300 rounded-md cursor-not-allowed opacity-50 auto'
            :`text-[${classes.bgColor2}] bg-white hover:bg-[${classes.bgColor2}] hover:text-white focus:bg-[${classes.bgColor2}] focus:text-white border-[${classes.bgColor2}]`}`}>
            {value}
        </button>
    )
}

export default CustomButton;


