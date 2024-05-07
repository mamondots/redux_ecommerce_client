import Products_card from "../../../Products/Products_card/Products_card";


const GridView_products = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-2 py-8">
                <Products_card></Products_card>
                <Products_card></Products_card>
                <Products_card></Products_card>
                <Products_card></Products_card>
                <Products_card></Products_card>
                <Products_card></Products_card>
                <Products_card></Products_card>
                <Products_card></Products_card>
                <Products_card></Products_card>
            </div>
        </div>
    );
};

export default GridView_products;