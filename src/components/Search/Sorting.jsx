import React from 'react'
import SearchResultCard from './SearchResultCard';

function Sorting() {
    const [select, setSelect] = useState("");
    let [veryLowPrice, setVeryLowPrice] = useState([]);
    let [lowPrice, setLowPrice] = useState([]);
    let [mediumPrice, setMediumPrice] = useState([]);
    let [highPrice, setHighPrice] = useState([]);
    let [veryHighPrice, setVeryHighPrice] = useState([]);

    function getSelectValue(e) {
        setSelect(e.target.value);
     
         data.map((price) => {
           if (price.price <= 10) {
              // veryLowPrice.push(price);
              setVeryLowPrice(veryLowPrice.push(price));
              // console.log("Very Low-",veryLowPrice);
           } else if (price.price >= 10 && price.price <= 50) {
              // lowPrice.push(price);
              setLowPrice(lowPrice.push(price))
              // console.log("Low Price-",lowPrice);
           } else if (price.price >= 50 && price.price <= 200) {
              // mediumPrice.push(price);
              setMediumPrice(mediumPrice.push(price));
              // console.log("Medium Price-",mediumPrice);
           } else if (price.price >= 200 && price.price <= 1000) {
              // highPrice.push(price);
              setHighPrice(highPrice.push(price));
              // console.log("High Price-",highPrice);
           } else if (price.price >= 1000) {
              // veryHighPrice.push(price);
              setVeryHighPrice(veryHighPrice.push(price));
              // console.log("Very High Price",veryHighPrice);
           }
        });
  
        console.log(veryHighPrice);
        console.log(veryLowPrice);
        console.log(mediumPrice);
        console.log(lowPrice);
     
     switch (select) {
        case "random":
           data.map((value) => {
              return (
                 <SearchResultCard
                    title={value.title}
                    key={value.id}
                    img={value.thumbnail}
                    brandName={value.brand}
                    desc={value.description}
                    discount={value.discountPercentage}
                    price={value.price}
                    rating={value.rating}
                    warranty={value.warrantyInformation}
                    ship={value.shippingInformation}
                 />
              );
           });
  
           break;
        case "veryLowPrice":
           veryLowPrice.map((value) => {
              return (
                 <SearchResultCard
                    title={value.title}
                    key={value.id}
                    img={value.thumbnail}
                    brandName={value.brand}
                    desc={value.description}
                    discount={value.discountPercentage}
                    price={value.price}
                    rating={value.rating}
                    warranty={value.warrantyInformation}
                    ship={value.shippingInformation}
                 />
              );
           });
  
           break;
        case "lowPrice":
            lowPrice.map((value) => {
                 return (
                    <SearchResultCard
                       title={value.title}
                       key={value.id}
                       img={value.thumbnail}
                       brandName={value.brand}
                       desc={value.description}
                       discount={value.discountPercentage}
                       price={value.price}
                       rating={value.rating}
                       warranty={value.warrantyInformation}
                       ship={value.shippingInformation}
                    />
                 );
              });
           break;
        case "mediumPrice":
            mediumPrice.map((value) => {
                 return (
                    <SearchResultCard
                       title={value.title}
                       key={value.id}
                       img={value.thumbnail}
                       brandName={value.brand}
                       desc={value.description}
                       discount={value.discountPercentage}
                       price={value.price}
                       rating={value.rating}
                       warranty={value.warrantyInformation}
                       ship={value.shippingInformation}
                    />
                 );
              });
           
           break;
        case "highPrice":
            highPrice.map((value) => {
                 return (
                    <SearchResultCard
                       title={value.title}
                       key={value.id}
                       img={value.thumbnail}
                       brandName={value.brand}
                       desc={value.description}
                       discount={value.discountPercentage}
                       price={value.price}
                       rating={value.rating}
                       warranty={value.warrantyInformation}
                       ship={value.shippingInformation}
                    />
                 );
              });
      
           break;
        case "veryHighPrice":
           veryHighPrice.map((value) => {
                 return (
                    <SearchResultCard
                       title={value.title}
                       key={value.id}
                       img={value.thumbnail}
                       brandName={value.brand}
                       desc={value.description}
                       discount={value.discountPercentage}
                       price={value.price}
                       rating={value.rating}
                       warranty={value.warrantyInformation}
                       ship={value.shippingInformation}
                    />
                 );
              });
           
           break;
     }
  }
  
  return (
    <div>
      
    </div>
  )
}

export default Sorting
