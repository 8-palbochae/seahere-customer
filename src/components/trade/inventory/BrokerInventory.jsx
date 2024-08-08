import React, { useEffect, useRef, useState } from "react";
import CartModal from "../cart/CartModal";
import BrokerInventoryItem from "./BrokerInventoryItem";
import { useNavigate } from "react-router-dom";
import { url } from '../../../constants/defaultUrl';
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import useCartStore from '../../../stores/cart';
import { SyncLoader } from 'react-spinners';

const fetchCompanies = async ({ pageParam = 1, size = 10, companyId = null }) => {
  try {
    const response = await axios.get(`${url}/inventories/${companyId}`, {
      params: { page: pageParam, size },
    });

    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error(`Unexpected response code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

const BrokerInventory = ({ id , company}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const navigate = useNavigate();
  const loadMoreRef = useRef(null);

   const { cartItems } = useCartStore(state => ({
        cartItems: state.cartItems,
    }));


  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ['brokerInventory', id],
    queryFn: ({ pageParam = 1 }) => fetchCompanies({ pageParam, size: 5, companyId: id }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length > 0 ? pages.length + 1 : undefined;
    },
    enabled: !!id,
  });

  const handleOpenModal = (inventory) => {
    setSelectedInventory(inventory);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

 const handleClickCart = () => {
    const currentPath = window.location.pathname;
    localStorage.setItem('previousPath', currentPath);
    navigate("/carts"  , { state: { company } });
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loadMoreRef.current, hasNextPage]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <SyncLoader/>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Error loading data: {error.message}</p>
      </div>
    );
  }

  const inventoryItems = data?.pages.flatMap(page => page) || [];

  return (
    <>
      <div className="relative min-h-screen pb-16 w-full">
        <div className="w-full cursor-pointer flex flex-col gap-2">
          {inventoryItems.map((inventory) => (
            <div key={`${inventory.inventoryId}`} onClick={() => handleOpenModal(inventory)}>
              <BrokerInventoryItem inventory={inventory} />
            </div>
          ))}
          <div ref={loadMoreRef} className="h-10 flex justify-center items-center">
            {isFetchingNextPage && <p>Loading more...</p>}
          </div>
        </div>

        {isModalOpen && selectedInventory && (
          <CartModal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            inventory={selectedInventory}
            companyId={id} // inventory가 null이 아닐 때만
          >
            <div className="p-4 w-full">
              {selectedInventory && <BrokerInventoryItem inventory={selectedInventory} />}
            </div>
          </CartModal>
        )}
      </div>

      <div className="fixed bottom-16 left-0 w-full px-4 pb-3 z-50 bg-white outline-none">
        <button
          className="bg-blue-600 w-full text-white h-full p-3 font-bold rounded-md"
          onClick={handleClickCart}
        >
          {`출고 요청 목록 (${cartItems.length})건`}
        </button>
      </div>
    </>
  );
};

export default BrokerInventory;
