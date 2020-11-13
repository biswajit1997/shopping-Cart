import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";

const Stripe = () => {
  let history = useHistory();

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className="text-center m-5">
      <StripeCheckout
        token={onToken}
        amount={100000}
        currency="INR"
        stripeKey="pk_test_51HgpZYBnx8e6AZN4k6CZJsf26GxX7zF9iO0glUZUgyiMyRnbigcaRC7Yi0TNaP9GLDDq3goleH5Q9ut8pbbgO2gs005KMa1h5h"
      />
    </div>
  );
};
export default Stripe;
