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
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        font-weight: bold;
        font-size: 0.9rem;
        height: 100%;
        position: relative;
        text-align: left;
        trasition: all 0.3s ease;

        &:hover {
            color: #AB0519;
        }
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
        z-index: 111;

       
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
           color: #AB0519;
        }

        
    }

    li:hover:nth-child(3) .dropdown {
        display: block;
        height: auto;
        color: #000;
    }


    @media (max-width: 800px) {
         
        ul{
            height: calc(100vh - 120px);
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
            
        li:nth-child(6) {
            justify-content: center;
        
        }

    }

  

`

