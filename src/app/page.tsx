'use client'
import { GetStaticProps } from "next";

import { Image } from "react-bootstrap";
import styles from "./page.module.css"
import { Divider, Row } from 'antd';
import { roboto_mono } from './fonts'
import Col from 'react-bootstrap/Col';
import * as prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import { useState } from "react";
import React from "react";
import BotaoWhatsApp from "./components/Whatsaap/page";
import Rodape  from "./components/Rodape/page";
export default async function Home() {
  const client = prismic.createClient("https://agend.cdn.prismic.io/api/v2");
  const response = await client.getAllByType("post", {
    orderings: {
      field: 'document.first_publication_date',
    }
  });


  response.forEach(document => {
    const data = document.data; // Acessar os dados do documento atual
    // Faça algo com os dados, como exibi-los no console
    // console.log(JSON.stringify(document, null, 2));
  });

  const posts = response.map(document => {
    return {
      slug: document.uid,
      dataEvento: RichText.asText(document.data.dataevento),
      conteudo: RichText.asText(document.data.conteudo)
    }
  });

  // const data = await getData();

  return (
    <>
    
      <div className={styles.imgCentro}>
        <Image
          width="93.8%"
          alt=""
          src="/Mulher.jpg"
        ></Image>
      </div>

      <div>
        <Image className={styles.imgProg}
          width="93.8%"
          alt=""
          src="/Programa.svg"
        ></Image>
      </div>


      <Row >
        {/* Lado Direiro */}
        <Col xs lg="4">
          <Divider className={styles.divisor} />
          <div className={styles.divLogo}>
            <a>
              <Image className={styles.imgLogo} alt="" src="/logo.svg" />
            </a>
            <h4 className={styles.textoData}> 08.09.2023 </h4>
          </div>
          <Divider className={styles.divisor} />
          {posts.map(post => post.dataEvento === '08.09.2023' ? (
            <>
              <p dangerouslySetInnerHTML={{ __html: post.conteudo }} className={styles.textCont}></p>
              <Divider className={styles.divisor} />
            </>
          ) : <p></p>)}
        </Col>

        <Col xe lg='1'>
        </Col>

          {/* Lado Direiro */}
        <Col xs lg="4">
          <Divider className={styles.divisor}/>
          <div className={styles.divLogo}>
            <a>
              <Image className={styles.imgLogo} alt="" src="/logo.svg" />
            </a>
            <h4 className={styles.textoData}> 09.09.2023 </h4>
          </div>
          <Divider className={styles.divisor} />
          {posts.map(post => post.dataEvento === '09.09.2023' ? (
            <>
              <p dangerouslySetInnerHTML={{ __html: post.conteudo }} className={styles.textCont}></p>
              <Divider className={styles.divisor} />
            </>
          ) : <p></p>)}
        </Col>
        <Rodape/>
      </Row>
      
    </>
  )
}