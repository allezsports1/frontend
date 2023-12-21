import './checkbox.scss';

const CheckBox = ({
    remindMeText='',
    rememberMe,
    remember,
})=>{

    const generateId = (text)=>{
        return text?.replace(' ','_');
    };

    return(
        <div className="flex items-start">
            <div className="flex items-center h-5">
                <input className="w-4 h-4 border accent-[#e86c60]" id={`id_${generateId(remindMeText)}`} type="checkbox"
                    onClick={rememberMe} value={remember}
                />
            </div>
            {remindMeText && <div className="ml-1 text-sm">
                <label htmlFor={`id_${generateId(remindMeText)}`} className="hover:text-red-400">{remindMeText}</label>
            </div>}
        </div>
    )
}

export default CheckBox;