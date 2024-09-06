import Link from "next/link";
import { useRouter } from "next/router";

// import { connect } from "react-redux";

export const Card = ({ customer }) => {
  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${customer._id}`, {
      method: "delete",
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") router.reload();
  };

  return (
    <div className="card">
      <div className="card__details">
        <p>
          {customer.name} {cus.customer.lastName}
        </p>
        <p> {customer.email} </p>
      </div>
      <div className="card__buttons">
        <button onClick={deleteHandler}> Delete </button>
        <Link href={`/edit/${customer._id}`}> Edit </Link>
        <Link href={`/customer/${customer._id}`}> Details </Link>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
