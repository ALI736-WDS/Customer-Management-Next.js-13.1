import HomePage from "../components/templates/HomePage";
import connectDB from "../utils/connectDB";
import Customer from "../models/Customer";

function Index({ customers }) {
  console.log(customers);

  return <HomePage customers={customers} />;
}

export default Index;

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();

    return {
      props: {
        customers: JSON.parse(json.stringify(customers)),
      },
    };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
}
