import { useState } from 'react';
import './index.css';
import CountryData from './apidata';
import Singledata from './singledata';

const Home = () => {
  const [Data, setData] = useState('');
  const [filter, setFilter] = useState([]);
  const [singleData, setSingleCountryData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setData(value);

    if (!value) {
      setFilter([]);
      setSingleCountryData([]);
      return;
    }

    let SearchData = CountryData.filter((item) => {
      const country = item.country || '';
      return country.toUpperCase().includes(value.toUpperCase());
    });

    setFilter(SearchData);
  };

  const handleClick = (country) => {
    let SingleCountryData = CountryData.filter((item) => {
      return item.country.toUpperCase().includes(country.toUpperCase());
    });

    setSingleCountryData(SingleCountryData);
    setFilter([]);
  };

  return (
    <>
      <div className="container">
        <div className="row" style={{ display: 'flex', justifyContent: 'center', width: '45%', margin: '40px auto' }}>
          <div className="input-group mb-3">
            <span   className="input-group-text" id="basic-addon1">🔍</span>
            <input  
              onChange={handleChange}
              value={Data}
              type="text"
              className="form-control"
              placeholder="Search for countries"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

       
        {Data && filter.length > 0 && (
          <div className="row justify-content-center mt-3">
            <div className="col-md-6 ListGroup">
              <ul className="list-group">
                {filter.map((item, index) => (
                  <li
                    style={{ color: 'blue', cursor: 'pointer' }}
                    key={index}
                    className="list-group-item"
                    onClick={() => handleClick(item.country)}
                  >
                    <svg style={{ marginRight: '10px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    {item.country}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        
        {singleData.length > 0 ? (
          <div className="row">
            <Singledata data={singleData} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
