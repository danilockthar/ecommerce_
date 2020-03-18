import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'
import fetch from 'isomorphic-unfetch'

const Home = ({products}) => (
    <motion.div exit={{opacity: 0}} initial={"initial"} animate={"animate"} >
        <Layout>
            <div className="index_bloque">

            </div>
            <ProductList items={products}/>
            <pre>{JSON.stringify(products, '\t', 2)}</pre>
        </Layout>
    </motion.div>
)
Home.getInitialProps = async () => {
    let ruta_env = "";
    if(process.env.NODE_ENV !== 'production'){
        ruta_env = "http://localhost:3000";
    }else{
        ruta_env = "https://ecotienda.now.sh";
    }
    const data = await fetch(ruta_env+'/api/productos');
    const products = await data.json();
    return {
        products
    }
}

export default Home;