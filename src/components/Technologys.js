import {  Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/React-icon.png"
import angular from "../assets/img/angular.png"
import java from "../assets/img/java.png"
import javascript from "../assets/img/java-script.png"
import springboot from "../assets/img/spring-boot.png"
import mui from "../assets/img/mui.png"
import tailwind from "../assets/img/tailwind.png"
import bootstrap from "../assets/img/Bootstrap.png"
import restapi from "../assets/img/rest-api.png"
import typescript from "../assets/img/typescript.png"
import html from "../assets/img/html.png"
import css from "../assets/img/css.png"
import sql from "../assets/img/sql.png"
import mySQL from "../assets/img/mysql.png"
import mongodb from "../assets/img/mongodb.png"
import postgre from "../assets/img/postgre.png"
import postman from "../assets/img/postman.avif"
import figma from "../assets/img/figma.png"
import github from "../assets/img/github.png"
export const Technology = () =>{
   
      return(
        <section className="technology" id="technology">
            <Container>
                <Row>
                    <div className="col-6">
                        <div className="technology-ct">
                            <h2>
                                Technology
                            </h2>
                      
                            <div className="technology-category">
                                <div className="item ">
                                    <img src={java} alt="Image1"/>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Image23"/>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image3"/> 
                                </div>
                                <div className="item">
                                    <img src={angular} alt="Image4"/> 
                                </div>
                                <div className="item">
                                    <img src={springboot} alt="Image5"/> 
                                </div>
                            </div>
                            <div className="technology-category pt-4">
                                <div className="item" >
                                    <a href='https://www.instagram.com/nguyenhoanglong1006/'>
                                        <img src={mui} alt="Image6" />
                                    </a>
                                </div>
                                <div className="item">
                                    <img src={tailwind} alt="Image7"/>
                                </div>
                                <div className="item">
                                    <img src={bootstrap} alt="Image8"/> 
                                </div>
                                <div className="item">
                                    <img src={restapi} alt="Image9"/> 
                                </div>
                                <div className="item">
                                    <img src={typescript} alt="Image10"/> 
                                </div>
                            </div>
                            <div className="technology-category-1">
                                <div className="item m-3">
                                    <img src={html} alt="Image11"/>
                                </div>
                                <div className="item m-3">
                                    <img src={css} alt="Image12"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="technology-ct1">
                            <h2>
                            Database Management Systems
                            </h2>
                            <div className="technology-category">
                                <div className="item">
                                    <img src={sql} alt="Image13" />
                                </div>
                                <div className="item">
                                    <img src={mySQL} alt="Image14"/>
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt="Image15"/> 
                                </div>
                                <div className="item">
                                    <img src={postgre} alt="Image16"/> 
                                </div>
                                
                            </div>
                        </div>
                        <br/>
                        <div className="technology-ct1">
                            <h2>
                            Technology Orther
                            </h2>
                            <div className="technology-category-1">
                                <div className="item m-3">
                                    <img src={postman} alt="Image17"/>
                                </div>
                                <div className="item m-3">
                                    <img src={figma} alt="Image18"/>
                                </div>
                                <div className="item m-3">
                                    <img src={github} alt="Image19"/>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            
        </section>
      )
}