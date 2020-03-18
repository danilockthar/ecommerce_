import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import AddToCart from '../../components/AddToCart'
import fetch from 'isomorphic-unfetch'
import { motion } from 'framer-motion'

const Producto = ({product}) => { 

    const router = useRouter();

    return(
    <motion.div exit={{opacity: 0}} initial={{opacity:0}} animate={{opacity:1}}>
    <Layout>
        <div className="single_product">
        <div className="image_single_product">
            <img src={product.images[0].src} />
        </div>
        <div className="info_single_product">
            <AddToCart productInfo={product} />
        </div>
        <pre>{console.log(product)}</pre>
        </div>
        <style jsx>{`
            .single_product{
                padding:100px 100px 50px 100px;
                display:grid;
                grid-template-columns:65% 25%;
                grid-column-gap:10px;

            }
            .image_single_product img{
                max-width:50%;

            }
        `}</style>
    </Layout>
    </motion.div>
    )
}

Producto.getInitialProps = async (context) => {
    let ruta_env = "";
    if(process.env.NODE_ENV !== 'production'){
        ruta_env = "http://localhost:3000";
    }else{
        ruta_env = "https://ecotienda.now.sh";
    }
    const id_product = context.query;
    const data = await fetch(ruta_env+'/api/producto/'+ id_product.id);
    const product = await data.json();
    return {
        product : product
    }
}

export default Producto;