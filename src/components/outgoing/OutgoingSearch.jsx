import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { tradeIcon } from '../../constants/trade/trade.image';
import { useHeaderText } from '../../stores/headerText';
const OutgoingSearch = ({ searchWord,setSearchWord}) => {
  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };
  const { setHeaderText } = useHeaderText();

  useEffect(() => {
    setHeaderText("출고 내역");
    }, [setHeaderText]);
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='flex w-full h-11 bg-gray-100 justify-around items-center gap-3 m-2 rounded'>
        <img className='w-8 object-cover ml-3 mr-2' src={tradeIcon.searchIcon} alt="Search Icon" />
        <input
          className='w-full h-8 p-2 mr-2 bg-gray-200 rounded'
          type="text"
          value={searchWord}
          onChange={handleChange}
          placeholder='업체 검색'
        />
      </div>
    </div>
  );
};

OutgoingSearch.propTypes = {
  searchWord: PropTypes.string.isRequired,
  setSearchWord: PropTypes.func.isRequired,
};

export default OutgoingSearch;
