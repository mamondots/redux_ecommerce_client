
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Brand_box from "../Brand_box/Brand_box";
import Categories from "../Categories/Categories";
import Featured_Products from "../Featured_Products/Featured_Products";
import Feed_back from "../Feed_back/Feed_back";
import Find_shop from "../Find_shop/Find_shop";
import Instagram from "../Instagram/Instagram";
import Short_banner from "../Short_banner/Short_banner";
import Subscribe from "../Subscribe/Subscribe";
import Summer_collection from "../Summer_collection/Summer_collection";
import Trendy_collection from "../Trendy_collection/Trendy_collection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Short_banner></Short_banner>
            <Categories></Categories>
            <Trendy_collection></Trendy_collection>
            <Find_shop></Find_shop>
            <Summer_collection></Summer_collection>
            <Brand_box></Brand_box>
            <Featured_Products></Featured_Products>
            <Feed_back></Feed_back>
            <Blog></Blog>
            <Instagram></Instagram>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;