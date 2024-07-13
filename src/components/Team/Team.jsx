import Image from "next/image";
import React from "react";
import teamImg from "../../assets/svg/team.svg";
import style from "./Team.module.scss";

const Team = () => {
  return (
    <section className={style.team}>
      <div className={style.container}>
        <div className={style.team_wrapper}>
          <h1>Выделенная команда</h1>
          <div className={style.team_body}>
            <div className={style.team_left}>
              <p className={style.team_left_text}>
                Для каждого проекта мы формируем команду, в которую входят
                проект менеджер, бизнес-аналитик, UI/UX дизайнер, DevOps,
                QA-инженер, бэкенд и фронтенд разработчики
              </p>
              <div>
                <span>100</span>
                <span>+</span>
              </div>
              <p className={style.team_left_text1}>Сотрудников</p>
            </div>

            <div className={style.team_right}>
              <Image src={teamImg} alt="teamImg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
