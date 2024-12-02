import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function Tax() {
  return (
    <>
      <Header />
      <center>
        <h1 style={{
          fontWeight: 'bold',          // Bold text
          fontFamily: 'Georgia, serif', // Font family (you can change to any preferred font)
          marginTop: '130px'           // Margin top for spacing
        }}>
          Shipping policy
        </h1>
        <p style={{ 
          width: '500px', 
          textAlign: 'justify', 
          margin: '0 auto', 
          color: '#121212BF',   // Lighter black color
          lineHeight: '1.5' // 1px gap between lines (adjust line spacing)
        }}>
          <br />
          Delivery within Pakistan
          <br /><br />
          All orders within Pakistan are routed through TCS and Call Courier. All our domestic clients will be provided with a tracking ID when the order is dispatched.
          <br />
          Upon placing an order, you will receive a verification call or SMS from our Customer Service to confirm the order. If you fail to verify, your order will be automatically cancelled after 3 days (only applicable to purchases made through Cash on Delivery method). Once the order is verified, it will be dispatched the same day and will be delivered to you within 2-3 working days.
          <br /><br />
          We offer free delivery for orders of Rs.4999 or above.
          <br />
          <br />
          We offer free delivery on orders over Rs. 4999 within Pakistan.
          <br />
          <br />
          International orders are routed through DHL. All our international clients will be provided with a tracking ID when the order is dispatched.
          <br />
          International clients shall also receive a sales invoice via email and notification of shipment via email. The customer shall bear any additional charges for custom clearance or any other variation in price beyond our control.
        </p>
      </center>
      <br></br>
      <Footer/>
    </>
  );
}
