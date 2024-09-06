import { useState } from "react";

import Form from "../modules/Form";
import { useRouter } from "next/router";

function CustomerEditPage({ data, id }) {
  //vaghti date ro dart database sabt mikonim, bara Edit kardan date ro neshun nemide, pas in format rto ejra mikonim ke neshun bede
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
  console.log({ data, id });

  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || "",
    date: date,
  });

  const router = useRouter();

  const cancelHandler = () => {
    router.push("/");
  };
  const editHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (data.status === "success") router.push("/");
  };

  return (
    <div className="customer-page">
      <h4> Edit Page </h4>
      <Form form={form} setForm={setForm} />

      <div className="customer-page__Buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={editHandler}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default CustomerEditPage;
