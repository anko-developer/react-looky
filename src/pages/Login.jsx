import React, { useState } from "react";
import Form from "../components/common/Form/Form";
import SocialButton from "../components/SocialButton/SocialButton";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="px-6">
      <h1 className="text-2xl text-center">LOOKY COOKEY</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="a">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            className="mt-1"
            size="lg"
            name="userId"
            type="text"
            placeholder="아이디(4~16자, 영문/숫자)"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="b">
          <Form.Label>패스워드</Form.Label>
          <Form.Control
            size="lg"
            name="userPassword"
            type="password"
            placeholder="비밀번호(8~16자, 영문/숫자/특수문자)"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <button>로그인</button>
      </Form>

      <h2 className="mt-10 text-center">SNS 간편 로그인</h2>
      <div className="flex justify-center mt-2">
        <SocialButton social="goggle" />
      </div>
    </section>
  );
}
