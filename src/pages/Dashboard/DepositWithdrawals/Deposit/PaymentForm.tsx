import React, { useEffect, useState } from 'react';

interface PaymentFormProps {
  formHTMLString: string;
  isSmilePayzDeposit?: boolean; 
}

const PaymentForm: React.FC<PaymentFormProps> = ({ formHTMLString, isSmilePayzDeposit }) => {
  const [formHtml, setFormHtml] = useState<string>('');

  useEffect(() => {
    console.log(formHTMLString);
    setFormHtml(formHTMLString);
  }, [formHTMLString]);

  const handleFormSubmit = () => {
    const formElement = document.getElementById('essForm') as HTMLFormElement;
    if (formElement) {
      formElement.submit();
    }
  };

  return (
    <div>
      {isSmilePayzDeposit && formHTMLString ? (
        // If it is a SmilePayz deposit, show the link instead of the form
        <a href={formHTMLString} target="_blank" rel="noopener noreferrer" className="submit-payment-btn">
          Proceed to Payment
        </a>
      ) : (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: formHtml,
            }}
          />
          <button className="submit-payment-btn" onClick={handleFormSubmit}>
            Submit Payment
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentForm;