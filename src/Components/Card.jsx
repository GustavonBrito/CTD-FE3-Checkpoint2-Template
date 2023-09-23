import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";

const Card = () => {
  const [dentistData, setDentistData] = useState(null);

  useEffect(() => {
    // Fazer a chamada à API para obter os dados do dentista
    fetch("https://dhodonto.ctd.academy/dentista")
      .then((response) => response.json())
      .then((data) => {
        // Assumindo que a API retorna um array de objetos, pegamos o primeiro item
        // e atribuímos os campos "nome" e "sobrenome" às variáveis
        if (data.length > 0) {
          const primeiroDentista = data[0];
          setDentistData({
            nome: primeiroDentista.nome,
            sobrenome: primeiroDentista.sobrenome,
            matricula: primeiroDentista.matricula,
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar dados do dentista:", error);
      });
  }, []);

  return (
    <>
      {dentistData && (
        <div className={`card`}>
          <img
            className="card-img-top"
            src="/images/doctor.jpg"
            alt="doctor placeholder"
          />
          <div className={`card-body ${styles.CardBody}`}>
            {/* Usar os dados do dentista para criar o link e mostrar o nome e sobrenome */}
            <a href={`/dentist/${dentistData.matricula}`}>
              <h5 className={`card-title ${styles.title}`}>
                {dentistData.nome} {dentistData.sobrenome}
              </h5>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
