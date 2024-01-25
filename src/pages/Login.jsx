import React, { useState } from "react";
import Form from "../components/common/Form/Form";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <h1 className="text-2xl">LOOKY COOKEY</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="a">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            size="lg"
            name="userId"
            type="text"
            placeholder="아이디 입력"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="b">
          <Form.Label>패스워드</Form.Label>
          <Form.Control
            invalid={true}
            name="userPassword"
            type="password"
            placeholder="비밀번호 입력"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </section>
  );
}
