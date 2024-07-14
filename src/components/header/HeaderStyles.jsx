import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: #fff;
   
    .reader_top_area {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        padding: 0px 35px;
        position: relative;

        a{
            color: #000;
            font-size: 0.9rem;
            font-weight: bold;
            padding: 0px 20px;
            border-left: 1px solid #AB0519;
            border-right: 1px solid #AB0519;
        }
        
        a:nth-child(1) {
            border-right: none;}
        }

        .logo {
            width: 110px;
            height: 100px;
            position: absolute;
            top: 10px;
            left: 35px;
        }   
    }

    .reader_top_area_right {
        display: flex;
        align-items: center;
        padding: 0px 0px;
    }

    .reader_top_area_right  div{
        height: 80px;
        display: flex;
        align-items: center;
    }

     .reader_top_area_right div:nth-child(3) div {
        flex-direction: column;
        justify-content: center;
     }

    .search_icone {
       margin-right: 20px;
       width: 30px;
       height: 30px;
       color: #AB0519;
       cursor: pointer;
    }
    
    .cart_icone {
        margin-right: 20px;
        margin-left: 20px;
        width: 45px;
        height: 40px;
        color: #AB0519;
    }

    .cart_area {
        display: flex;
      
        p {
            font-size: 14px;
            font-weight: 400;
            text-align: center;
            margin-bottom: 2px;
        }
       
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #AB0519;
            color: #fff;
            border: none;
            width: 110px;
            height: 25px;
            border-radius: 10px;
            font-weight: bold;
            font-size: 12px;
            cursor: pointer;
        }
    }

    .header_footer_area {
        display: flex;
        justify-content: flex-end;
        padding: 0px 35px;
        width: 100%;
        height: 40px;
        background-color: #F3EED9;
    }
`

