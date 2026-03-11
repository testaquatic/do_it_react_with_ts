import {
  useCallback,
  useState,
  type ChangeEvent,
  type SubmitEvent,
} from "react";
import { Title } from "../components";

type FormType = {
  name: string;
  email: string;
};

export default function ObjectState() {
  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
  });

  const onSubmit = useCallback((e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(JSON.stringify(form, null, 2));
  }, []);

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((form) => ({
      ...form,
      name: e.target.value,
    }));
  }, []);

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((form) => ({
      ...form,
      email: e.target.value,
    }));
  }, []);

  return (
    <section className="mt-4">
      <Title>Objectstate</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="enter your name"
              value={form.name}
              onChange={onChangeName}
              className="input input-primary"
            />
            <div className="fom-control">
              <label htmlFor="email" className="label">
                <span className="label-text">email</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="enter your email"
                value={form.email}
                onChange={onChangeEmail}
                className="input input-primary"
              />
            </div>
            <div className="flex justify-center mt-4">
              <input
                type="submit"
                value="submit"
                className="w-1/2 btn btn-sm btn-primary"
              />
              <input defaultValue="cancel" className="w-1/2 ml-4 btn btn-sm" />
            </div>
          </div>
        </form>
      </div>
      <div className="mt-4"></div>
    </section>
  );
}
