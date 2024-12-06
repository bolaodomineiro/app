import styled from "styled-components";

export const MenuContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        align-items: center;
        height: 40px;

        .link {
            text-decoration: none;
            color: #000;
        }
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 15px 0px 15px;
        font-weight: bold;
        cursor: pointer;
        font-weight: bold;
        font-size: 0.8rem;
        height: 100%;
        position: relative;
        text-align: left;
        trasition: all 0.3s ease;

        &:hover {
            color: #AB0519;
        }
    }

    li:nth-child(7) {
        background-color: #AB0519;
        color: #fff;

        &:hover {
            background-color: #e90621;
        }
    
    }


    .chevron_icone{
        margin-left: 5px;
        color: #AB0519;
    }

    .dropdown {
        display:block;
        opacity: 0;
        position: absolute;
        top: 40px;
        left: 0;
        background-color: #fff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        height: 0;
        width: 200px;
        transition: opacity 0.5s ease;
        z-index: -1;
        overflow: hidden;

        li {
            display: flex;
            justify-content: start;
            padding: 10px  15px;
            trasition: all 0.3s ease;
            border-bottom: 1px solid transparent;
            font-weight: 500;
            width: 100%;
            font-size: 0.8rem;
            
        }

        li:hover {
            background-color: #f8f8f8;
            color: #AB0519;
        }

        
    }

    li:hover:nth-child(3) .dropdown,
    li:hover:nth-child(6) .dropdown {
        z-index: 99;
        opacity: 1;
        height: auto;
        color: #000;
    }


    @media (max-width: 880px) {
    
        ul{
            height: calc(100vh - 120px);
            width: 200px;
            flex-direction: column;
            z-index: 99;
            position: absolute;
            top: 40px;
            right: 0;
            background-color: #fff;
            transition: all 0.3s ease;
        }

        li {
            height: 40px;;
            width: 100%;
            justify-content: start;
        
        }
            
        li:nth-child(7) {
            justify-content: center;
        }

    }


`

