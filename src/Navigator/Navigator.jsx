import Menu_Bar from "./Menu_Bar/Menu_Bar";
import Top_Head from "./Top_Head/Top_Head";


const Navigator = () => {
    return (
        <div className="xl:px-26 lg:px-20 md:px-16 sm:px-12 px-10 py-8">
            <Top_Head></Top_Head>
            <Menu_Bar></Menu_Bar>
        </div>
    );
};

export default Navigator;
