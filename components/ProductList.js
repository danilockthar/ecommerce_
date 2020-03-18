import Link from 'next/link'
import { motion } from 'framer-motion'
import { Select } from 'semantic-ui-react'

const ProductList = (props) => {
    
    const countryOptions = [
        { key: 'af', value: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', text: 'Albania' },
        { key: 'dz', value: 'dz', text: 'Algeria' },
        { key: 'as', value: 'as', text: 'American Samoa' },
        { key: 'ad', value: 'ad', text: 'Andorra' },
        { key: 'ao', value: 'ao', text: 'Angola' },
        { key: 'ai', value: 'ai', text: 'Anguilla' },
        { key: 'ag', value: 'ag', text: 'Antigua' },
        { key: 'ar', value: 'ar', text: 'Argentina' },
        { key: 'am', value: 'am', text: 'Armenia' },
        { key: 'aw', value: 'aw', text: 'Aruba' },
        { key: 'au', value: 'au', text: 'Australia' },
        { key: 'at', value: 'at', text: 'Austria' },
        { key: 'az', value: 'az', text: 'Azerbaijan' },
        { key: 'bs', value: 'bs', text: 'Bahamas' },
        { key: 'bh', value: 'bh', text: 'Bahrain' },
        { key: 'bd', value: 'bd', text: 'Bangladesh' },
        { key: 'bb', value: 'bb', text: 'Barbados' },
        { key: 'by', value: 'by', text: 'Belarus' },
        { key: 'be', value: 'be', text: 'Belgium' },
        { key: 'bz', value: 'bz', text: 'Belize' },
        { key: 'bj', value: 'bj', text: 'Benin' },
      ]

    return (
    <motion.div exit={{opacity: 0}} initial={{opacity:0}} animate={{opacity:1}}>
    <div className="all_products">
        <div className="left_product_panel">
            <Select placeholder='Categorías' options={countryOptions} />

        </div>
        <div className="right_product_panel">
            {Object.values(props.items).map(product => (
            <Link key={product.id} href={`/p/[id]`}as={`/p/${product.id}`}>
            <div className="single_product_list"> 
                <img src={product.images[0].src} />
                <h2> {product.name} </h2>
                <h3>$ {product.price}</h3>
            </div>
            </Link>
            ))}
        </div>
       
        <style jsx>{`
            .all_products{
                padding:50px 100px 0px 100px;
                display:grid;
                grid-template-columns:30% 70%;
                grid-column-gap:5px;
                align-items:center;
            }
            .left_product_panel{
                width:100%;
                height:70vh;
                border-radius:6px;
                align-self:baseline;
            }
            .right_product_panel{
                display:grid;
                width:100%;
                grid-template-columns:1fr 1fr 1fr;
                grid-column-gap:55px;
                justify-content:end;
                grid-row-gap:20px;
            }
            .single_product_list{
                cursor:pointer;
                transition:0.3s;
                display:grid;
                grid-template-rows:200px 50px 50px;
                align-items:left;
                justify-items:left;
                padding:10px;
                border-radius:5px;
                border:1px solid #fee7eb;
                background: white;
                box-shadow: rgba(8, 35, 51, 0.05) 0px 3px 6px;

            }
            .single_product_list:hover{
                transform: scale(1.05);
            }
            h3{
                color:#7d7d7d;
            }
            img{
                background:#f1f1f1;
                width:100%;
                align-self:center;
            }
            h2{
                color:#ef3c59;
            }
        `}</style>
    </div>
    </motion.div>
)}

export default ProductList;