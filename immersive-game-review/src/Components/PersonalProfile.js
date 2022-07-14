import styled from "styled-components";
import { useState } from "react";



const Container = styled.div`
    background-color:#281474 ;
    width: 25%;
    float: right;

`

const Modal = styled.div`
    position: fixed;
    background-color: #000000;
    opacity: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content= styled.div`
        background-color: #fff;
        color: black;

    
    .modal-header{
        padding: 10px;
    }

    .modal-body{
        padding: 10px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
`

function Profile(){

    const [openProfile, closedProfile] = useState(false)

    function setProfileToggle(){
        closedProfile(!openProfile)
    }




    return(
        <Container id="profile">
            <img onClick={setProfileToggle} src ="https://st2.depositphotos.com/1288156/49269/v/380/depositphotos_492694300-stock-illustration-blank-placeholder-profile-picture-vector.jpg?forcejpeg=true"
                height={60} 
                width= {60}
                quality={100}
                />
            {openProfile? 
            (<Modal>
                <Content>
                <div className="modal-header">
                    <h4 className="modal-title"> Hello Iris, Keegan, and Isa </h4>
                        <div className="modal-body">
                            <h6>Favorite Game: </h6>
                            <h6> Favorite Score: </h6>
                        </div>
                </div>
                </Content>
            </Modal>) 
            : null}
        </Container>
    )
}
export default Profile