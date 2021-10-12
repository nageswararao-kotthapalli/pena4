import React  from 'react';
import { Select } from 'antd';

const { Option } = Select;
const provinceData = ['TATA', 'MarutiSuzuki'];
const cityData = {
  TATA: ['Nexon', 'altroz', 'Tiago'],
  MarutiSuzuki: ['swift', 'Dzire', 'alto'],
};

const DropDown= () => {
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = value => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondCity(value);
  };

  return (
    <>
      <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
        {cities.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
    </>
  );
};
export default DropDown