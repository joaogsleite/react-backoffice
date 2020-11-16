import React, { FC, memo } from "react";
import Title from "components/Title";
import Button from "components/Button";
import Icon from "components/Icon";
import "./styles.scss";

export interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <div className="home__container">
      <Title fixed>Welcome</Title>
      <p>Please choose a table on the left menu to start</p>
      <Button
        prefix={<Icon name="exclamation" />}
        modifier="warning"
        label="Warning"
        onClick={() => undefined}
      />
      <p style={{ marginTop: 1000 }}>Bottom</p>
    </div>
  );
};

export default memo(Home);
