import './Contacts.css';
import Title from '../../Components/Title/Title';

function Contacts() {
  return (
    <section className="Contacts">
      <div className="container">
        <Title>Contacting Apple</Title>
        <h3 className="Contacts_tit">Sales and Product Inquiries</h3>
        <div className="Contacts_in">
          <div className="Contacts_block">
            <div className="Contacts_block-tit">Apple Online Store</div>
            <p className="Contacts_block-txt">Apple.com is a convenient place to purchase Apple products and accessories from Apple and other manufacturers. You can buy online or call (800) MY–APPLE (800–692–7753).</p>
            <p className="Contacts_block-txt">You can get information about an order you placed on the Apple Online Store through the Order Status page. If you prefer, you can also get order status or make changes by phone at (800) 692–7753.</p>
          </div>
          <div className="Contacts_block">
            <div className="Contacts_block-tit">Shop with SignTime ASL Support</div>
            <p className="Contacts_block-txt">American Sign Language (ASL) interpreters are available for all your online shopping needs, right in your web browser. Connect to an interpreter</p>
          </div>
          <div className="Contacts_block">
            <div className="Contacts_block-tit">Apple Retail Stores</div>
            <p className="Contacts_block-txt">Experience the digital lifestyle at any of the Apple Retail Stores around the country. Find store hours and contact information for all locations.</p>
            <p className="Contacts_block-txt">Apple Financial Services offers financing on Apple products for consumers, educational institutions, and businesses. Speak with your Apple representative to learn more.</p>
          </div>
          <div className="Contacts_block">
            <div className="Contacts_block-tit">Find Consultants</div>
            <p className="Contacts_block-txt">Visit our Apple Consultants Network page to find a consultant in the U.S. or Canada.</p>
            <p className="Contacts_block-txt">Visit the Apple Training website for information on available courses and Apple Authorized Training Providers worldwide.</p>
          </div>
          <div className="Contacts_block">
            <div className="Contacts_block-tit">How to Buy for Business</div>
            <p className="Contacts_block-txt">If you are a business or professional user, visit the Apple Store for Business or call 1–800–854–3680.</p>
            <p className="Contacts_block-txt">If you are a student or teacher, visit the Apple Store for Education or call 1–800–692–7753.</p>
          </div>
          <div className="Contacts_block">
            <div className="Contacts_block-tit">Find Apple Authorized Resellers</div>
            <p className="Contacts_block-txt">Use our Reseller Locator to find an Apple Authorized Reseller in the U.S.</p>
            <p className="Contacts_block-txt">Apple Authorized Resellers offer industry expertise, multi-platform services, and Mac-based solutions for a wide variety of organizations.</p>
          </div>
        </div>
        <div className="Contacts_map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46793.32304975421!2d74.61601280000001!3d42.860544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1714988710851!5m2!1sru!2skg" title="Контактная информация" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contacts;