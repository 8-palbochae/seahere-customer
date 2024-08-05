import React, { useState } from 'react';
import { axiosInstance } from '../../api/common/axiosInstance';

const AxiosInstanceTest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get('/test');
      setData(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Axios Instance Test</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AxiosInstanceTest;
