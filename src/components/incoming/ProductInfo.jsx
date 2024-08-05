import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { country, natural, category } from '../../constants/income/ProductType';
import productImg from '../../assets/income/product.svg';

const ProductInfo = ({ selectedProduct, setSelectedProductDetails }) => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedNatural, setSelectedNatural] = useState("");

    // useEffect to update selectedProductDetails when any of the selected values change
    useEffect(() => {
        setSelectedProductDetails({
            country: selectedCountry,
            natural: selectedNatural,
            category: selectedCategory
        })

    }, [selectedCountry, selectedCategory, selectedNatural, setSelectedProductDetails]);

    const handleSelectChange = (type, value) => {
        if (type === 'country') {
            const selectedOption = country.find(option => option.value === value);
            console.log(selectedOption.label);            
            setSelectedCountry(selectedOption.label);
        } else if (type === 'category') {
            const selectedOption = category.find(option => option.value === value);
            setSelectedCategory(selectedOption.label);
        } else if (type === 'natural') {        
            const selectedOption = natural.find(option => option.value === value);
            setSelectedNatural(selectedOption.label);
        }
    };

    return (
        <div className='shadow-md border border-gray-200 rounded-lg p-6 mt-6 mx-6'>
            <div className='flex justify-center'>
                <span className='text-black font-bold text-2xl mb-6'>{selectedProduct}</span>
            </div>
            <div className='flex justify-around '>
                <div className='w-36 h-36 flex justify-center items-center overflow-hidden rounded-xl'>
                    <img src={productImg} alt="" className='w-36 h-36 object-cover' />
                </div>
                <div className='w-3/5 flex flex-col pl-4 gap-4 justify-between'>
                    <Select
                        className='w-full h-full'
                        showSearch
                        placeholder="원산지"
                        optionFilterProp="label"
                        options={country}
                        onChange={(value) => handleSelectChange('country', value)}
                    />
                    <Select
                        className='w-full h-full'
                        showSearch
                        placeholder="상태"
                        optionFilterProp="label"
                        options={category}
                        onChange={(value) => handleSelectChange('category', value)}
                    />
                    <Select
                        className='w-full h-full'
                        showSearch
                        placeholder="양식 유무"
                        optionFilterProp="label"
                        options={natural}
                        onChange={(value) => handleSelectChange('natural', value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
