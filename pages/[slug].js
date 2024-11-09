import { useRouter } from 'next/router';
import React from 'react';
import { HomeLayout } from '../components/layouts/homeLayout';

// Mock data fetching function
const fetchDataBySlug = async (slug) => {
    console.log(slug)
    const data = {
        "faq": {
        title: "FAQ",
        content: `<div>
          <p style="margin-bottom: 1em;"><strong>What services does 27A offer?</strong><br><span style="color: gray;">At 27A, we offer a variety of luxury hair treatments, including hair coloring, keratin treatments, haircuts, styling, and consultations. We also feature exclusive international hair care products in our salon and online store.</span></p>
          <p style="margin-bottom: 1em;"><strong>How do I book an appointment?</strong><br><span style="color: gray;">You can easily book an appointment through our online booking system. Simply visit the "Book Appointment" section, select your desired service, preferred date and time, and complete the booking.</span></p>
          <p style="margin-bottom: 1em;"><strong>Do I need to create an account to make a purchase?</strong><br><span style="color: gray;">Yes, creating an account allows us to keep track of your orders and appointments. It also helps us provide personalized service and exclusive offers for our loyal clients.</span></p>
          <p style="margin-bottom: 1em;"><strong>Can I change or cancel my appointment?</strong><br><span style="color: gray;">Yes, you can reschedule or cancel your appointment through your account dashboard up to 24 hours before the scheduled time. For same-day changes, please contact us directly.</span></p>
          <p style="margin-bottom: 1em;"><strong>What types of hair products are available for purchase?</strong><br><span style="color: gray;">Our e-commerce store offers a curated selection of premium, international hair care products, including shampoos, conditioners, treatments, and styling products tailored to different hair types and needs.</span></p>
          <p style="margin-bottom: 1em;"><strong>Is there a loyalty program or membership for frequent clients?</strong><br><span style="color: gray;">Yes, 27A offers a loyalty program where clients earn points with each service and purchase. Points can be redeemed for discounts on services or products. Sign up in-store or online to start earning points.</span></p>
          <p style="margin-bottom: 1em;"><strong>What should I expect during my first visit?</strong><br><span style="color: gray;">On your first visit, you’ll receive a personalized consultation with one of our stylists to discuss your hair goals, assess your hair type, and recommend the best treatments for your needs.</span></p>
          <p style="margin-bottom: 1em;"><strong>Do you offer consultations before booking a service?</strong><br><span style="color: gray;">Absolutely! We offer complimentary consultations to discuss your hair’s unique needs, color options, and other treatments. You can book a consultation online or contact us directly.</span></p>
          <p style="margin-bottom: 1em;"><strong>How can I track my order?</strong><br><span style="color: gray;">After placing an order, you will receive a confirmation email with tracking information. You can also track your orders through your account dashboard on our website.</span></p>
          <p style="margin-bottom: 1em;"><strong>What payment methods do you accept?</strong><br><span style="color: gray;">We accept all major credit cards, debit cards, and secure payment options like Apple Pay and Google Pay. For in-salon payments, we also accept cash and contactless payments.</span></p>
        </div>`
        },
        "terms": {
    title: "Terms and Conditions",
    content: `<div>
      <p style="margin-bottom: 1em;"><strong>Acceptance of Terms</strong><br><span style="color: gray;">By using this Site, you agree to be bound by these Terms and Conditions, including any additional terms, conditions, and policies referenced herein. If you do not agree, please do not use this Site.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Services</strong><br><span style="color: gray;">27A offers various hair treatments, styling services, and hair care products. All services and products available on our Site are subject to these Terms.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Booking and Appointments</strong><br><span style="color: gray;">Appointments may be canceled or rescheduled up to 24 hours in advance. Arriving more than 15 minutes late may result in a rescheduling of your appointment.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Payments</strong><br><span style="color: gray;">We accept all major credit cards, debit cards, and secure online payment options, including Apple Pay and Google Pay. All prices listed are in [Currency] and are subject to change without notice.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Product Purchases</strong><br><span style="color: gray;">For purchases, you may be required to create an account. Products may be returned within 14 days of receipt if unopened, unused, and in their original packaging. Shipping costs for returns are the customer’s responsibility.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Loyalty Program</strong><br><span style="color: gray;">Our loyalty program allows you to earn points on qualifying purchases and services, which can be redeemed in-store or online. Points are non-transferable and have no cash value.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Intellectual Property Rights</strong><br><span style="color: gray;">All content on this Site, including text, images, logos, and software, is the property of 27A or its licensors and is protected by copyright and other intellectual property laws. Unauthorized use of this content is strictly prohibited.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>User Conduct</strong><br><span style="color: gray;">You agree not to use this Site in a way that could harm, disable, or overburden our services. Unauthorized access to any part of the Site, including attempts to gain unauthorized access to other accounts, computer systems, or networks, is strictly prohibited.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Privacy</strong><br><span style="color: gray;">Your use of this Site is subject to our Privacy Policy, which outlines our practices regarding the collection, use, and disclosure of your personal information. Please review the Privacy Policy before using our Site.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Modification of Terms</strong><br><span style="color: gray;">We reserve the right to update these Terms at any time. Changes will be posted on this page, and your continued use of the Site constitutes acceptance of those changes.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Governing Law</strong><br><span style="color: gray;">These Terms are governed by the laws of [Your Country/State]. Any disputes arising from these Terms or your use of the Site will be resolved in [Your Country/State].</span></p>
    </div>`
        },
        "legal": {
    title: "Legal Information",
    content: `<div>
      <p style="margin-bottom: 1em;"><strong>Business Overview</strong><br><span style="color: gray;">27A is a luxury hair care and styling salon located in Bangalore, India. We provide a wide range of premium hair services, including hair coloring, treatments, styling, and exclusive hair care products sourced internationally. All our services are subject to these terms, conditions, and policies.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Service Availability</strong><br><span style="color: gray;">Our services are offered exclusively at our Bangalore location. Any product purchases made through our website are only available for delivery within India.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Service Liability</strong><br><span style="color: gray;">27A is committed to providing exceptional services. However, we are not liable for any adverse reactions to products or treatments due to pre-existing conditions, allergies, or post-treatment care not followed as instructed. Please consult with our professionals for any known allergies or concerns prior to your service.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Product Liability</strong><br><span style="color: gray;">All products sold on our site are authentic and sourced from reputable brands. 27A is not responsible for any adverse effects arising from the misuse of products, failure to follow instructions, or use of products with ingredients incompatible with known allergies.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Privacy Policy</strong><br><span style="color: gray;">27A respects your privacy and is committed to protecting the personal information you provide us. Our Privacy Policy outlines our practices regarding the collection, use, and protection of your information when you visit our salon or use our website. Please review our Privacy Policy for details.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Intellectual Property</strong><br><span style="color: gray;">All content on our website, including logos, images, text, and software, is the intellectual property of 27A or its licensors and is protected by copyright laws. Unauthorized use or distribution of our content is strictly prohibited.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Third-Party Links</strong><br><span style="color: gray;">Our website may contain links to third-party websites for your convenience. We are not responsible for the content, practices, or policies of these sites, and accessing them is at your own risk. Please review the terms and conditions of any third-party sites you visit.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Disclaimers</strong><br><span style="color: gray;">27A provides all information and services "as is" without any warranties, express or implied. We disclaim any and all warranties, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement to the fullest extent permitted by law.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Limitation of Liability</strong><br><span style="color: gray;">27A shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our services, products, or website. This includes any damages for loss of profits, data, or other intangible losses, even if we were advised of the possibility of such damages.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Governing Law and Jurisdiction</strong><br><span style="color: gray;">These terms and all legal matters concerning 27A are governed by the laws of India. Any disputes arising from these terms or related to our services shall be resolved exclusively in the courts of Bangalore, India.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Contact Information</strong><br><span style="color: gray;">For any legal inquiries, please contact us at:<br>Email: [Your Email Address]<br>Phone: [Your Phone Number]<br>Address: 27A Luxury Hair Salon, [Full Address], Bangalore, India.</span></p>
    </div>`
        },
        "privacy": {
    title: "Privacy Policy",
    content: `<div>
      <p style="margin-bottom: 1em;"><strong>Introduction</strong><br><span style="color: gray;">27A Luxury Hair Salon ("we," "our," or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or avail of our services at our salon in Bangalore.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Information We Collect</strong><br><span style="color: gray;">We may collect personal information you provide directly to us, including your name, contact details, appointment details, and payment information. We also collect information when you interact with our website, such as your IP address, browser type, and usage patterns through cookies and similar technologies.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>How We Use Your Information</strong><br><span style="color: gray;">Your information is used to provide and improve our services, process appointments, handle payments, communicate with you regarding your appointments or purchases, and enhance your experience on our website. We may also use your data for marketing and promotional purposes, with your consent where required by law.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Sharing Your Information</strong><br><span style="color: gray;">We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in providing our services, processing payments, or delivering products. These providers are contractually obligated to keep your information secure. Additionally, we may disclose your information to comply with legal obligations or protect our rights.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Data Security</strong><br><span style="color: gray;">We take reasonable precautions to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no security measures are completely foolproof, and we cannot guarantee the absolute security of your data.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Your Rights and Choices</strong><br><span style="color: gray;">You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by following the unsubscribe instructions in our emails or contacting us directly.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Cookies and Tracking Technologies</strong><br><span style="color: gray;">We use cookies and similar tracking technologies to personalize your experience, analyze usage patterns, and improve our website. You can control cookie settings through your browser; however, disabling cookies may affect your ability to use some features on our site.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Third-Party Links</strong><br><span style="color: gray;">Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites. Please review their privacy policies to understand how they handle your personal information.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Changes to This Privacy Policy</strong><br><span style="color: gray;">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date at the top of this policy will reflect the date of the latest changes. Your continued use of our website or services after such changes signifies your acceptance of the updated policy.</span></p>
      
      <p style="margin-bottom: 1em;"><strong>Contact Us</strong><br><span style="color: gray;">If you have any questions or concerns about this Privacy Policy, please contact us at:<br>Email: [Your Email Address]<br>Phone: [Your Phone Number]<br>Address: 27A Luxury Hair Salon, [Full Address], Bangalore, India.</span></p>
    </div>`
        }
    };
    return data[slug] || null;
};  
  
const SlugPage = ({ pageData }) => {
  const router = useRouter();

  // If the page is not yet generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // If no pageData found, return a 404 page
  if (!pageData) {
    return <div>404 - Page Not Found</div>;
  }

  return (
    <div>
        <HomeLayout pageName={`${pageData.title}`}>
            <div className="min-h-[50vh] max-w-[85%] mx-auto py-16 px-6">
                <h1 className="text-3xl text-gray-500 font-bold mb-6">{pageData.title}</h1>
                <div className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: pageData.content }}></div>
            </div>
        </HomeLayout>
    </div>
  );
};

export async function getStaticPaths() {
  const slugs = ["faq", "terms", "legal", "privacy"];
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true, 
  };
}

export async function getStaticProps({ params }) {
  const pageData = await fetchDataBySlug(params.slug.toLowerCase());

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData,
    },
    revalidate: 10, 
  };
}

export default SlugPage;
