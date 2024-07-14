import styled from "styled-components";

export const MenuContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
  

    ul {
        display: flex;
        align-items: center;
        height: 40px;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        font-size: 0.8rem;
        font-weight: bold;
        cursor: pointer;
        font-weight: bold;
        font-size: 0.9rem;
        height: 100%;
        position: relative;
        text-align: left;
       
    }

    li:nth-child(6) {
        background-color: #AB0519;
        color: #fff;
    }


    .chevron_icone{
        margin-left: 5px;
        color: #AB0519;
    }

    .dropdown {
        display:none;
        position: absolute;
        top: 40px;
        left: 0;
        background-color: #fff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        height: 0;
        width: 150px;
        trasition: all 0.5s ease;

       
        li {
            display: flex;
            justify-content: start;
            padding: 5px 0px 5px 20px;
            trasition: all 0.3s ease;
            border-bottom: 1px solid transparent;
            font-weight: 500;
            width: 100%;
        }

        li:hover {
           background-color: #f8f8f8;
        }

        
    }

    li:hover:nth-child(3) .dropdown {
        display: block;
        height: auto;
    }

`

