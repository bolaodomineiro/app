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
        trasition: all 0.3s ease;
        
        &:hover {
            color: #AB0519;
        }
    }
    
    .link-bolao {
        height: 100%;
        
        li {
            background-color: #AB0519;
            color: #fff;
            
            &:hover {
                background-color: #e90621;
            } 
        }
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
        
        .link {
            width: 100%;
        }
        
        li {
            height: 40px;
            width: 100%;
            justify-content: start;
            border-bottom: 1px solid #ccc;
        }
            
        .link-bolao {
            width: 100%;
            li {
                width: 100%;
                justify-content: center;
            }
        }
    }

`

