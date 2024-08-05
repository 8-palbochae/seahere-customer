import { useState, useEffect } from 'react';

const InputField = ({ type, name, placeholder, value, onChange, onClick, readOnly, className }) => {
    const [isFilled, setIsFilled] = useState(false);

    useEffect(() => {
        setIsFilled(value !== '');
    }, [value]);

    return (
        <div className="relative w-full">
            <input
                className={`w-full px-4 py-2 border border-gray-300 rounded-md font-normal text-black leading-normal ${className}`}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onClick={onClick}
                readOnly={readOnly}
            />
            {isFilled ? (
                <span className="absolute right-2 top-2 text-green-500">
                    &#10003;
                </span>
            ) : (
                <span className="absolute right-2 top-2 text-red-500">
                    &#10007;
                </span>
            )}
        </div>
    );
};

export default InputField;
