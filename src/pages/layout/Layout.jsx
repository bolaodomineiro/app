import Header from '../../components/header/Header';
import Baseboard from '../../components/footer/Baseboard';
import { Outlet } from 'react-router-dom';


const Layout = () => { 
    return (
        <>
            <Header />
                <Outlet />
            <Baseboard />
        </>
    ) 

};

export default Layout
