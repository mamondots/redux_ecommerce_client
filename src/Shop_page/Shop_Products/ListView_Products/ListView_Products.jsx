import Products_card from "../../../Products/Products_card/Products_card";


const ListView_Products = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-2 py-8">
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

export default ListView_Products;