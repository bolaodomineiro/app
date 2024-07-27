import styled from "styled-components";

export const HeaderContainer = styled.header`

    width: 100%;
    background-color: #fff;    
   
    .header_top_area {

        display: flex;
        height: 105px;
        width: 100%;
        justify-content: flex-end;
        padding: 0px 70px;
        position: relative;

        @media (max-width: 930px) {
            padding: 0px 20px;
        }

      

        @media (max-width: 420px) {
           padding: 0px 10px;
        }

        a{

            display: flex;
            height: 35px;
            align-items: center;
            color: #000;
            font-size: 1rem;
            font-weight: bold;
            padding: 20px;
            border-right: 1px solid #AB0519;
            border-left: 1px solid #AB0519;

            .userName {
                color: #AB0519;
            }

            @media (max-width: 630px) {

                padding: 0px 8px;
                text-align: center;
                font-size: 0.8rem;
                
            }      

        }
        
        a:nth-child(2) {

            padding-right: 0px;
            border: none;

        }

        .logo {

            width: 140px;
            height: 130px;
            position: absolute;
            top: 12px;
            left: 70px;
            z-index: 3;

            @media (max-width: 930px) {
                left: 20px;
            }
            
            @media (max-width: 420px) {
                left: 10px;
            }
        }   
    }

    .header_top_area_right {

        display: flex;
        align-items: center;
        gap: 20px;

        .user_area {

            border-right: 1px solid #AB0519;
            border-left: 1px solid #AB0519;
            padding: 0px 20px;

            img {
                width: 40px;
                height: 40px;

                @media (max-width: 580px) {
                    width: 35px;
                    height: 35px;
                }
            }
            
            @media (max-width: 376px) {

                padding: 0px 10px;
      
            }

        }

        @media (max-width: 630px) {
            gap: 0px;
        }

        @media (max-width: 580px) {
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
        }
    }

    .header_top_area_right  div{

        display: flex;
        align-items: center;

        @media (max-width: 800px) {
            padding: 2px 0px;
        }
            
    }

     .header_top_area_right .cart_area .cart_info {
    
        flex-direction: column;
        justify-content: center;
        height: 80px;

        button {
            font-size: 0.7rem;
        }

        @media (max-width: 800px) {
              height: 75px;
        }
            
        @media (max-width: 580px) {
            height:auto;
        }

     }
    
    .cart_icone {

        margin-right: 20px;
        margin-left: 20px;
        width: 45px;
        height: 40px;
        color: #AB0519;
        position: relative;

        @media (max-width: 470px) {
            margin-right: 10px;
            margin-left: 10px;
          
        }

    }

    .header_top_area_right .cart_area {

        
        p {
            font-size: 14px;
            font-weight: 400;
            text-align: center;
            margin-bottom: 2px;
        }
       
    }

    .header_footer_area {

        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0px 70px;
        width: 100%;
        height: 40px;
        background-color: #F3EED9;
        position: relative;
   
        .menu_icone {
            display: none;
            height: 30px;
            width: 30px;
            color: #AB0519;
            cursor: pointer;
            transition: all 0.3s ease;
    
        }

        @media (max-width: 930px) {
            padding: 0px 20px;
        }

        @media (max-width: 800px) {
            .menu_icone {
                display:block;
            }
        }

        @media (max-width: 420px) {

           padding: 0px 10px;

        }

    }

       
`
export const Search_area = styled.div`

    display: flex;
    align-items: center;
    gap: 10px;
    width: 175px;
    height: 35px;
    border-radius: 30px;
    border: 1px solid #AB0519;
    position: relative;

    .search_icone {

        width: 20px;
        height: 20px;
        color: #AB0519;
        cursor: pointer;
        position: absolute;
        right: 10px;
        z-index: 1;

        @media (max-width: 800px) {

            width: 25px;
            height: 25px;
            margin-right: 0px;

        }

    }

    input {

        width: 100%;
        height: 100%;
        border-radius: 30px;
        background-color: transparent;
        border: none;
        outline: none;
        padding-left: 10px;
        z-index: 2;
        cursor: pointer;
        font-size: 0.7rem;
        color: #000;
    }

    @media (max-width: 800px) {

        height: 30px;
        justify-content: flex-end;
        position: absolute;
        top: 110px;
        right: 60px;
        z-index: 2;

        .search_icone {

            height: 20px;

        }

    }

    @media (max-width: 420px) {

      right: 45px;

    }

    @media (max-width: 376px) {

      width: 130px;
      
    }

  
`

