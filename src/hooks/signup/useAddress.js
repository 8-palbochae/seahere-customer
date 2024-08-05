import { useState } from 'react';

export const useAddress = () => {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const [postCode, setPostCode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const openPostcode = () => setIsPostcodeOpen(true);
  const closePostcode = () => setIsPostcodeOpen(false);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setPostCode(data.zonecode);
    setAddress(fullAddress);
    closePostcode();
  };

  return {
    isPostcodeOpen,
    postCode,
    address,
    detailAddress,
    setDetailAddress,
    openPostcode,
    closePostcode,
    handleComplete,
  };
};
