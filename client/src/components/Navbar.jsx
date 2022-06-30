import React  from 'react';
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { mobile } from "../responsive";
import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";

const Container = styled.div `
height: 70px;
background-color: white;
${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({ padding: "15px 0px" })}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;`

const Language = styled.span`
font-size: 14px;
cursor: pointer;
 ${mobile({ display: "none" })}`

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
 ${mobile({ width: "50px" })}
`

const Center = styled.div`
flex: 1;
text-align: center;`

const Logo = styled.h1`
font-weight: bold;
color: black;
cursor: pointer;
  ${mobile({ fontSize: "14px" })}`
const Logo1 = styled.h1`
font-weight: bold;
font-size: 15px;
  ${mobile({ fontSize: "14px" })}
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
 ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input/>
              <Search style={{color: "gray", fontSize: 16}}/>
            </SearchContainer>
          </Left>
          <Center>
            <Logo >
            <NavLink to={'/'} exact style={{color: "black"}} >Evîn.</NavLink>
          </Logo>
            <Logo1>
              Jewelry House
            </Logo1>
          </Center>
          <Right>
            <MenuItem >
              <NavLink to={'/register'} exact style={{color: "black"}} >REGISTER</NavLink>
            </MenuItem>

            <MenuItem>
              <NavLink to={'/login'} exact style={{color: "black"}} >SIGN IN</NavLink>
            </MenuItem>
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>

      </Container>
  )
}

export default Navbar