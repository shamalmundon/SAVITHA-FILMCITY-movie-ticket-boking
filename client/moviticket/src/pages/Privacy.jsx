import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Privacy() {
  return (
    <div style={{ backgroundColor: '#333', color: '#fff'}}>
      <Header />
      <h1 style={{ 
        color: '#fff',
        padding: '20px',
        backgroundColor: '#333', 
        fontWeight: 'bold', 
        textTransform: 'uppercase', 
        color: 'red',
      }}>PRIVACY POLICY</h1>
      <p style={{ 
        color: '#fff',
        padding: '20px',
        backgroundColor: '#333', 
        fontWeight: 'bold', 
        textTransform: 'uppercase', 
        color: 'red',
        padding:'20px'
      }}>
        For more insight, you may also want to read terms and conditions of Easebuzz on https://easebuzz.in
        <br />
        <br />
        SECTION 5 - THIRD-PARTY SERVICES 
        <br />
        In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. 
        <br />
        <br />
        However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions. 
        <br />
        <br />
        For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.
        <br />
        <br />
        In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
        <br />
        <br />
        Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.
        <br />
        <br />
        Links
        <br />
        When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
        <br />
        <br />
        SECTION 6 - SECURITY
        <br />
        To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
        <br />
        <br />
        SECTION 7 - COOKIES
        <br />
        We use cookies to maintain session of your user. It is not used to personally identify you on other websites.
        <br />
        <br />
        SECTION 8 - AGE OF CONSENT
        <br />
        By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
        <br />
        <br />
        SECTION 9 - CHANGES TO THIS PRIVACY POLICY
        <br />
        We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
        <br />
        <br />
        If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
        <br />
        <br />
        QUESTIONS AND CONTACT INFORMATION
        <br />
        If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at onlinesavitha@gmail.com or by mail at 
      </p>
      <ScrollToTop/>
      <Footer />
    </div>
  )
}

export default Privacy
