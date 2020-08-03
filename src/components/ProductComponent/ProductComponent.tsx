import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import { getShopifyProductsAction} from "../../actions";
import { Card,Row,Col,CardImg,InputGroup ,FormControl} from "react-bootstrap";
import Moment from 'moment';
import { string } from "prop-types";

 const ProductCard  = (props :  any) => { 
  
    
    return <> {props.products.map((productData : any,index:number)=>{
        return (<><Row style={{padding:"1%"}}><Col><Card  key={index}  >
            <Row key={index+1}><Col md="8">
        <Card.Body>
        <div style={{float:"right",fontSize:"14px",font:"roboto",color:"#909090"}}> {Moment(productData.created_at).format('DD-MM-YYYY')}</div>
        <Card.Title style={{fontSize:"15px",font:"roboto"}}>{`${productData.title} - ${productData.id}`}</Card.Title>
           <hr />
    <div key={index+2}>{`Brand - ${productData.handle}`}</div>
            <hr/>
          <Card.Text style={{float:"right",fontSize:"14px",font:"roboto",color:"#909090"}}>
           <div dangerouslySetInnerHTML={{__html:productData.body_html}}></div>
          </Card.Text>  
        </Card.Body></Col>
        <Col  >
            <CardImg style={{padding:"1%",float:"right", height:"300px",width:"350px"}} src={productData.image ? productData.image.src : props.products[0].image.src} alt="Product Image" />
        </Col>
        </Row>
      </Card></Col></Row></>)
    })} </>
   
  
  
}

export const ProductData = () => {
    
    const [Products,SetProducts] = useState([])
   const productData =  useSelector((state:any) => state.shopifyProducts)
   const [textValue,setTextValue] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getShopifyProductsAction())
       SetProducts(productData);
    },[])
   
    
    const finalData =  Products.length > 0 ? Products : productData.length > 0 ? productData : [];
   
        
    const handleChange = (e:any) => {
        setTextValue(e.target.value);

        
        const filteredDataChange = productData.filter((product:any) => product.title.toLowerCase().includes(e.target.value.toLowerCase()));
       
        SetProducts(filteredDataChange);
    }

    const handleKeyPress = (e:any) => {
      
        if(e.charCode === 13){
            const filteredData = productData.filter((product:any) => product.title.toLowerCase().includes(e.target.value.toLowerCase()));
            console.log(filteredData);
            SetProducts(filteredData);
        }
    }
    return (<div style={{display:"flex",width:"100%",height:"100%",padding:"5%",justifyContent:"center",alignItems:"center"}}>
        <div>
         <InputGroup style={{padding:"1%",border:"none"}} className="mb-1">
    
    <FormControl
      placeholder="Search for products"
      aria-label="Products"
      aria-describedby="basic-addon1" value={textValue} onChange={handleChange} onKeyPress = {handleKeyPress}
    />
  </InputGroup>
        <ProductCard key="product_card" products={finalData} /></div></div>)
}

