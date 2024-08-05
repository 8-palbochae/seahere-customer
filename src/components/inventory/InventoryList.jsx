import React, { useEffect, useState, useCallback } from 'react';
import InventoryListItem from './InventoryListItem';
import { useInView } from 'react-intersection-observer';
import { getInventoryList } from '../../api/inventory/inventoryApi';

const InventoryList = ({ companyId, size, searchOption }) => {
    const [products, setProducts] = useState([]);
    const [pageNum, setPageNum] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [currentSearchOption, setCurrentSearchOption] = useState(searchOption);

    const { ref, inView } = useInView();

    const fetchData = useCallback(async (reset = false) => {
        setLoading(true);
        try {
            const newProducts = await getInventoryList(companyId, reset ? 0 : pageNum, size, reset ? searchOption : currentSearchOption);
            setProducts(prevProducts => reset ? newProducts : [...prevProducts, ...newProducts]);
            setHasMore(newProducts.length > 0);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    }, [companyId, pageNum, size, currentSearchOption, searchOption]);

    useEffect(() => {
        if (searchOption !== currentSearchOption) {
            setCurrentSearchOption(searchOption);
            setPageNum(0);
            setProducts([]);
            fetchData(true);
        } else if (pageNum === 0) {
            fetchData(true);
        } else {
            fetchData();
        }
    }, [searchOption, currentSearchOption, fetchData, pageNum]);

    useEffect(() => {
        if (inView && hasMore && !loading) {
            setPageNum(prevPageNum => prevPageNum + 1);
        }
    }, [inView, hasMore, loading]);

    return (
        <div className="h-full overflow-y-auto">
            {products.map((product, index) => (
                <InventoryListItem
                    key={`${product.productId}-${index}`} // 고유한 key 생성
                    product={product}
                />
            ))}
            {loading && <p>Loading...</p>}
            <div ref={ref} style={{ height: '20px' }}></div>
        </div>
    );
};

export default InventoryList;
