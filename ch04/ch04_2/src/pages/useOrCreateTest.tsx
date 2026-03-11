import { useOrCreate } from "./useOrCreate";
import * as D from "../data";
import { Avatar, Title } from "../components";

export default function createOrUseTest() {
  const headTexts = useOrCreate("headTexts", () => [
    "No",
    "Name",
    "Job Title",
    "Email Address",
  ]);

  const users = useOrCreate("users", () =>
    D.makeArray(100).map(D.makeRandomUser),
  );

  const head = useOrCreate("head", () =>
    headTexts.map((text) => <th key={text}>{text}</th>),
  );

  const body = useOrCreate("children", () =>
    users.map((user, index) => (
      <tr key={user.uuid}>
        <th>{index + 1}</th>
        <td className="flex items-center">
          <Avatar src={user.avatar} size="1.5rem"></Avatar>
          <p className="ml-2">{user.name}</p>
        </td>
        <td>{user.jobTitle}</td>
        <td>{user.email}</td>
      </tr>
    )),
  );

  return (
    <div className="mt-4">
      <Title>CreateOrUseTest</Title>
      <div className="overflow-x-auto mt-4 p-4">
        <table className="table table-zebra r w-full">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  );
}
