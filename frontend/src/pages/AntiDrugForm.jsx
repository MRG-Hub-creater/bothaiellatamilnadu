// import { useState } from 'react'

// const TN_DISTRICTS = [
//   'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore',
//   'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram',
//   'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai',
//   'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai',
//   'Ramanathapuram', 'Ranipet', 'Salem', 'Sivagangai', 'Tenkasi',
//   'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli',
//   'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur',
//   'Vellore', 'Viluppuram', 'Virudhunagar'
// ]

// function AntiDrugForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     whatsappNumber: '',
//     email: '',
//     district: 'Chennai',
//     place: '',
//     acknowledgement: true
//   })

//   const [loading, setLoading] = useState(false)
//   const [submitted, setSubmitted] = useState(false)
//   const [error, setError] = useState(null)

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setError(null)
//     setLoading(true)

//     try {
//       const response = await fetch('http://localhost:5000/api/antidrug', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       })

//       const data = await response.json()

//       if (response.ok && data.success) {
//         setSubmitted(true)
//       } else {
//         setError(data.message || 'Submission failed. Please try again.')
//       }
//     } catch (err) {
//       console.error('Anti-Drug submission error:', err)
//       setError('Server error. Please try again later.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const resetForm = () => {
//     setFormData({
//       name: '',
//       whatsappNumber: '',
//       email: '',
//       district: 'Chennai',
//       place: '',
//       acknowledgement: true
//     })
//     setSubmitted(false)
//     setError(null)
//   }

//   return (
//     <div className="anti-drug-page">
//       <header className="app-header">
//         <div className="brand">
//           <span className="brand-icon">✦</span>
//           <span>Anti-Drug Awareness</span>
//         </div>
//       </header>

//       <main className="container py-5">
//         <section className="hero-banner">
//           <span className="badge">Official Awareness Campaign</span>
//           <h1>Anti-Drug Awareness Pledge</h1>
//           <p>
//             Say NO to Drugs! Fill out your details below to submit your official acknowledgement pledge.
//           </p>
//         </section>

//         <section className="form-card">
//           <div className="form-head">
//             <h2>{submitted ? 'Pledge Submitted!' : 'Anti-Drug Registration'}</h2>
//             <p>
//               {submitted
//                 ? 'Thank you for committing to a drug-free Tamil Nadu'
//                 : 'Please provide your contact and location details'}
//             </p>
//           </div>

//           <div className="form-body">
//             {error && <div className="error-box">{error}</div>}

//             {submitted ? (
//               <div className="success-panel">
//                 <div className="success-icon">✓</div>
//                 <h3>Acknowledgement Received!</h3>
//                 <p>
//                   Your commitment against drug abuse has been registered successfully in the Anti-Drug database.
//                 </p>
//                 <div className="submitted-details">
//                   <div><strong>Name:</strong> {formData.name || 'N/A'}</div>
//                   <div><strong>WhatsApp:</strong> {formData.whatsappNumber || 'N/A'}</div>
//                   <div><strong>District:</strong> {formData.district || 'N/A'}</div>
//                   <div><strong>Place:</strong> {formData.place || 'N/A'}</div>
//                 </div>
//                 <button className="primary-button" onClick={resetForm}>
//                   Submit Another Response
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="anti-form">
//                 <div className="quote-panel">
//                   <p className="quote-main">“உங்களை நீங்களே அழிவின் பால் தள்ளிக்கொள்ளாதீர்கள்.”</p>
//                   <p className="quote-sub">“உங்கள் எதிர்காலம் உங்கள் கைகளில். போதையைத் தவிர்ப்போம்!”</p>
//                   <p>
//                     “நானும், என் குடும்பமும், என் சமூகமும் போதைப்பொருட்களிலிருந்து முற்றிலுமாக விலகி இருப்போம் என உறுதி கூறுகிறேன்.”
//                   </p>
//                 </div>

//                 <label className="field-label">
//                   <span>Full Name</span>
//                   <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
//                 </label>

//                 <label className="field-label">
//                   <span>WhatsApp Number</span>
//                   <input type="tel" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} placeholder="Enter 10-digit WhatsApp number" />
//                 </label>

//                 <label className="field-label">
//                   <span>Email ID (Optional)</span>
//                   <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
//                 </label>

//                 <label className="field-label">
//                   <span>District</span>
//                   <select name="district" value={formData.district} onChange={handleChange}>
//                     {TN_DISTRICTS.map((d) => (
//                       <option key={d} value={d}>{d}</option>
//                     ))}
//                   </select>
//                 </label>

//                 <label className="field-label">
//                   <span>Place / Town</span>
//                   <input type="text" name="place" value={formData.place} onChange={handleChange} placeholder="Enter village, area or city" />
//                 </label>

//                 <label className="acknowledgement">
//                   <input type="checkbox" name="acknowledgement" checked={formData.acknowledgement} onChange={handleChange} />
//                   <span>I hereby pledge to say <strong>NO to drugs</strong>, spread awareness, and work towards a safe, drug-free Tamil Nadu.</span>
//                 </label>

//                 <button type="submit" className="primary-button submit-button" disabled={loading}>
//                   {loading ? 'Submitting Pledge...' : 'Submit Anti-Drug Pledge'}
//                 </button>
//               </form>
//             )}
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

// export default AntiDrugForm



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const TN_DISTRICTS = [
//   'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore',
//   'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram',
//   'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai',
//   'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai',
//   'Ramanathapuram', 'Ranipet', 'Salem', 'Sivagangai', 'Tenkasi',
//   'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli',
//   'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur',
//   'Vellore', 'Viluppuram', 'Virudhunagar'
// ];

// function AntiDrugForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     whatsappNumber: '',
//     email: '',
//     district: '',
//     place: '',
//     acknowledgement: true
//   });

//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(null);
//   const [fieldErrors, setFieldErrors] = useState({});
//   const [pledgeCount, setPledgeCount] = useState(0);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     let finalValue = value;

//     if (name === 'whatsappNumber') {
//       finalValue = value.replace(/\D/g, '').slice(0, 10);
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : finalValue
//     }));

//     if (fieldErrors[name]) {
//       setFieldErrors((prev) => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const API_URL = (() => {
//     const configuredUrl = (import.meta.env.VITE_API_URL || '').trim();
//     if (configuredUrl) {
//       return configuredUrl.replace(/\/?$/, '');
//     }

//     if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
//       return window.location.origin.replace(/\/?$/, '');
//     }

//     return 'http://localhost:5000';
//   })();

//   const fetchPledgeCount = async () => {
//     try {
//       const response = await fetch(`${API_URL}/api/antidrug/count`);
//       const data = await response.json();

//       if (response.ok && data.success) {
//         setPledgeCount(data.count || 0);
//       }
//     } catch (err) {
//       console.error('Error fetching pledge count:', err);
//     }
//   };

//   useEffect(() => {
//     fetchPledgeCount();
//   }, [API_URL]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const requiredFields = ['name', 'district', 'place'];
//     const nextFieldErrors = {};

//     requiredFields.forEach((field) => {
//       const value = formData[field]?.trim?.() ?? '';
//       if (!value) {
//         nextFieldErrors[field] = 'This is mandatory';
//       }
//     });

//     const whatsappNumber = formData.whatsappNumber?.trim() ?? '';
//     if (whatsappNumber && !/^\d{10}$/.test(whatsappNumber)) {
//       nextFieldErrors.whatsappNumber = 'WhatsApp number must be 10 digits';
//     }

//     const email = formData.email?.trim() ?? '';
//     if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       nextFieldErrors.email = 'Enter a valid email address';
//     }

//     if (Object.keys(nextFieldErrors).length > 0) {
//       setFieldErrors(nextFieldErrors);
//       setError('Please complete the required fields correctly.');
//       return;
//     }

//     if (!formData.acknowledgement) {
//       setError('Please check the acknowledgement box to proceed.');
//       return;
//     }

//     setFieldErrors({});
//     setError(null);
//     setLoading(true);

//     try {
//       const response = await fetch(`${API_URL}/api/antidrug`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setSubmitted(true);
//         await fetchPledgeCount();
//       } else {
//         setError(data.message || 'Submission failed. Please try again.');
//       }
//     } catch (err) {
//       console.error('Anti-Drug submission error:', err);
//       setError('Server error. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       name: '',
//       whatsappNumber: '',
//       email: '',
//       district: '',
//       place: '',
//       acknowledgement: true
//     });
//     setSubmitted(false);
//     setError(null);
//     setFieldErrors({});
//   };

//   return (
//     <div className="anti-drug-page">
//       <section className="hero-banner">
//         <span className="badge-yellow">
//           <i className="bi bi-shield-fill me-2"></i> OFFICIAL AWARENESS CAMPAIGN
//         </span>
//         <h1 style={{ margin: '0 0 0.75rem 0', fontSize: '2.5rem', fontWeight: '800' }}>
//           Anti-Drug Awareness Pledge
//         </h1>
//         <p style={{ margin: 0, opacity: 0.9, fontSize: '1.1rem' }}>
//           Say NO to Drugs! Fill out your details below to submit your official acknowledgement pledge.
//         </p>
//       </section>

//       <section className="form-card">
//         <div className="form-head">
//           <h2>
//             <i className="bi bi-shield-check"></i> Anti-Drug Registration
//           </h2>
//           <p>Please provide your contact and location details</p>
//         </div>

//         <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
//           <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', width: '100%', maxWidth: '640px' }}>
//             <div style={{ flex: '1 1 240px', minWidth: '220px', padding: '1.25rem', borderRadius: '1rem', background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(15, 23, 42, 0.06)', textAlign: 'center' }}>
//               <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#eff6ff', color: '#3b82f6', marginBottom: '0.75rem' }}>
//                 <i className="bi bi-flag-fill" style={{ fontSize: '1.25rem' }}></i>
//               </div>
//               <h6 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#64748b', margin: '0 0 0.4rem' }}>
//                 Targeted Pledges of the people
//               </h6>
//               <h2 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#3b82f6', margin: 0 }}>
//                 5,00,000
//               </h2>
//             </div>

//             <div style={{ flex: '1 1 240px', minWidth: '220px', padding: '1.25rem', borderRadius: '1rem', background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(15, 23, 42, 0.06)', textAlign: 'center' }}>
//               <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#f0fdf4', color: '#0d825b', marginBottom: '0.75rem' }}>
//                 <i className="bi bi-check-circle-fill" style={{ fontSize: '1.25rem' }}></i>
//               </div>
//               <h6 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#64748b', margin: '0 0 0.4rem' }}>
//                 Total Pledges
//               </h6>
//               <h2 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#0d825b', margin: 0 }}>
//                 {pledgeCount.toLocaleString()}
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div className="form-body">
//           {error && (
//             <div className="alert alert-danger" style={{ color: '#dc2626', backgroundColor: '#fef2f2', border: '1px solid #f87171', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
//               {error}
//             </div>
//           )}

//           {submitted ? (
//             <div className="success-panel" style={{ textAlign: 'center', padding: '2rem 0' }}>
//               <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '82px', height: '82px', borderRadius: '50%', backgroundColor: '#ffffff', boxShadow: '0 10px 25px rgba(15, 23, 42, 0.08)', margin: '0 auto 1rem', color: '#0d825b' }}>
//                 <i className="bi bi-check-circle-fill" style={{ fontSize: '3rem' }}></i>
//               </div>
//               <h2 style={{ fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>Pledge Submitted!</h2>
//               <p style={{ color: '#475569', marginBottom: '2rem', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
//                 Thank you for committing to a drug-free Tamil Nadu. Your acknowledgement has been received and registered successfully in the Anti-Drug database.
//               </p>

//               <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '520px', margin: '0 auto 2rem', textAlign: 'left' }}>
//                 <div style={{ backgroundColor: '#f8fafc', border: '1px solid #d1d5db', borderRadius: '1rem', padding: '1.25rem' }}>
//                   <div style={{ marginBottom: '0.75rem', color: '#334155', fontWeight: '700' }}>Submission Details</div>
//                   <div style={{ color: '#475569', lineHeight: '1.8' }}>
//                     <div><strong>Name:</strong> {formData.name || 'N/A'}</div>
//                     <div><strong>WhatsApp:</strong> {formData.whatsappNumber || 'N/A'}</div>
//                     <div><strong>District:</strong> {formData.district || 'N/A'}</div>
//                     <div><strong>Place:</strong> {formData.place || 'N/A'}</div>
//                   </div>
//                 </div>
//               </div>

//               <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
//                 <button className="submit-button" onClick={resetForm} style={{ maxWidth: '300px', width: '100%' }}>
//                   Submit Another Response
//                 </button>
//                 <Link to="/antidrug/qr" className="btn btn-outline-secondary rounded-pill px-4 py-3" style={{ maxWidth: '300px', width: '100%', borderColor: '#0d825b', color: '#0d825b' }}>
//                   View Campaign QR
//                 </Link>
//               </div>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="anti-form">
//               <div className="quote-panel">
//                 <p className="quote-main">"உங்களை நீங்களே அழிவின் பால் தள்ளிக்கொள்ளாதீர்கள்."</p>
//                 <p className="quote-sub">"உங்கள் எதிர்காலம் உங்கள் கைகளில். போதையைத் தவிர்ப்போம்! சுவனத்தின் வழியைத் தேர்ந்தெடுப்போம்!"</p>
//                 <p>
//                   "நானும், என் குடும்பமும், என் சமூகமும் போதைப்பொருட்களிலிருந்து முற்றிலுமாக விலகி இருப்போம் என உறுதி கூறுகிறேன். 
//                   போதைக்கு எதிராகப் போராடுபவர்களுக்கு ஆதரவளித்து, தீமைகளைத் தடுக்க என் பங்களிப்பை வழங்குவேன்."
//                 </p>
//               </div>

//               <label className="field-label">
//                 <span>
//                   Full Name <span className="required-marker">*</span>
//                 </span>
//                 <div className={`input-wrapper ${fieldErrors.name ? 'input-error' : ''}`}>
//                   <div className="input-icon"><i className="bi bi-person"></i></div>
//                   <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
//                 </div>
//                 {fieldErrors.name && <div className="field-error-message">{fieldErrors.name}</div>}
//               </label>

//               <label className="field-label">
//                 <span>
//                   District <span className="required-marker">*</span>
//                 </span>
//                 <div className={`input-wrapper ${fieldErrors.district ? 'input-error' : ''}`}>
//                   <div className="input-icon"><i className="bi bi-geo-alt"></i></div>
//                   <select name="district" value={formData.district} onChange={handleChange}>
//                     <option value="">Select District</option>
//                     {TN_DISTRICTS.map((d) => (
//                       <option key={d} value={d}>{d}</option>
//                     ))}
//                   </select>
//                 </div>
//                 {fieldErrors.district && <div className="field-error-message">{fieldErrors.district}</div>}
//               </label>

//               <label className="field-label">
//                 <span>
//                   Place / Town <span className="required-marker">*</span>
//                 </span>
//                 <div className={`input-wrapper ${fieldErrors.place ? 'input-error' : ''}`}>
//                   <div className="input-icon"><i className="bi bi-building"></i></div>
//                   <input type="text" name="place" value={formData.place} onChange={handleChange} placeholder="Enter village, area or city" />
//                 </div>
//                 {fieldErrors.place && <div className="field-error-message">{fieldErrors.place}</div>}
//               </label>

//               <label className="field-label">
//                 <span>WhatsApp Number</span>
//                 <div className={`input-wrapper ${fieldErrors.whatsappNumber ? 'input-error' : ''}`}>
//                   <div className="input-icon"><i className="bi bi-whatsapp"></i></div>
//                   <input
//                     type="tel"
//                     name="whatsappNumber"
//                     value={formData.whatsappNumber}
//                     onChange={handleChange}
//                     placeholder="Enter 10-digit WhatsApp number"
//                     inputMode="numeric"
//                     maxLength={10}
//                   />
//                 </div>
//                 {fieldErrors.whatsappNumber && <div className="field-error-message">{fieldErrors.whatsappNumber}</div>}
//               </label>

//               <label className="field-label">
//                 <span>Email ID (Optional)</span>
//                 <div className={`input-wrapper ${fieldErrors.email ? 'input-error' : ''}`}>
//                   <div className="input-icon"><i className="bi bi-envelope"></i></div>
//                   <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
//                 </div>
//                 {fieldErrors.email && <div className="field-error-message">{fieldErrors.email}</div>}
//               </label>

//               <label className="acknowledgement">
//                 <input type="checkbox" name="acknowledgement" checked={formData.acknowledgement} onChange={handleChange} />
//                 <span>
//                   I hereby pledge to say <strong style={{ color: '#000' }}>NO to drugs</strong>, spread awareness, and work towards a safe, drug-free Tamil Nadu.
//                 </span>
//               </label>

//               <button type="submit" className="submit-button" disabled={loading}>
//                 <i className="bi bi-send-fill"></i> {loading ? 'Submitting...' : 'Submit Anti-Drug Pledge'}
//               </button>
//             </form>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default AntiDrugForm;



import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TN_DISTRICTS = [
  'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore',
  'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram',
  'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai',
  'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai',
  'Ramanathapuram', 'Ranipet', 'Salem', 'Sivagangai', 'Tenkasi',
  'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli',
  'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur',
  'Vellore', 'Viluppuram', 'Virudhunagar'
];

const TN_DISTRICTS_MAP = {
  'Ariyalur': 'அரியலூர்',
  'Chengalpattu': 'செங்கல்பட்டு',
  'Chennai': 'சென்னை',
  'Coimbatore': 'கோயம்புத்தூர்',
  'Cuddalore': 'கடலூர்',
  'Dharmapuri': 'தருமபுரி',
  'Dindigul': 'திண்டுக்கல்',
  'Erode': 'ஈரோடு',
  'Kallakurichi': 'கள்ளக்குறிச்சி',
  'Kanchipuram': 'காஞ்சிபுரம்',
  'Kanyakumari': 'கன்னியாகுமரி',
  'Karur': 'கரூர்',
  'Krishnagiri': 'கிருஷ்ணகிரி',
  'Madurai': 'மதுரை',
  'Mayiladuthurai': 'மயிலாடுதுறை',
  'Nagapattinam': 'நாகப்பட்டினம்',
  'Namakkal': 'நாமக்கல்',
  'Nilgiris': 'நீலகிரி',
  'Perambalur': 'பெரம்பலூர்',
  'Pudukkottai': 'புதுக்கோட்டை',
  'Ramanathapuram': 'இராமநாதபுரம்',
  'Ranipet': 'ராணிப்பேட்டை',
  'Salem': 'சேலம்',
  'Sivagangai': 'சிவகங்கை',
  'Tenkasi': 'தென்காசி',
  'Thanjavur': 'தஞ்சாவூர்',
  'Theni': 'தேனி',
  'Thoothukudi': 'தூத்துக்குடி',
  'Tiruchirappalli': 'திருச்சிராப்பள்ளி',
  'Tirunelveli': 'திருநெல்வேலி',
  'Tirupathur': 'திருப்பத்தூர்',
  'Tiruppur': 'திருப்பூர்',
  'Tiruvallur': 'திருவள்ளூர்',
  'Tiruvannamalai': 'திருவண்ணாமலை',
  'Tiruvarur': 'திருவாரூர்',
  'Vellore': 'வேலூர்',
  'Viluppuram': 'விழுப்புரம்',
  'Virudhunagar': 'விருதுநகர்'
};

function AntiDrugForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    email: '',
    district: '',
    place: '',
    acknowledgement: true
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refString, setRefString] = useState('');
  const [referenceId, setReferenceId] = useState('TN202647763457');
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [pledgeCount, setPledgeCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);
  const [showPopup, setShowPopup] = useState(true);
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);
  const [honeypot, setHoneypot] = useState('');
  const [showCertModal, setShowCertModal] = useState(false);
  const [certStage, setCertStage] = useState('processing');
  const [districtSearch, setDistrictSearch] = useState('');
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);
  const districtRef = useRef(null);
  
  const [placesByDistrict, setPlacesByDistrict] = useState({});
  const [showPlacesDropdown, setShowPlacesDropdown] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const placeRef = useRef(null);

  const CERTIFICATE_REF_ID = 'TN202647763457';
  const WHATSAPP_CERTIFICATE_URL = `https://wa.me/919876543210?text=${encodeURIComponent(
    `Hello, I would like to receive my Anti-Drug campaign certificate. Reference ID: ${CERTIFICATE_REF_ID}`
  )}`;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let finalValue = value;

    if (name === 'whatsappNumber') {
      finalValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : finalValue
    }));

    if (name === 'place') {
      const currentAvailablePlaces = placesByDistrict[formData.district] || [];
      const filtered = currentAvailablePlaces.filter(p => 
        p.toLowerCase().includes(finalValue.toLowerCase())
      );
      setFilteredPlaces(filtered);
      setShowPlacesDropdown(true);
    }

    if (name === 'district') {
       setFilteredPlaces([]);
       setShowPlacesDropdown(false);
    }

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const API_URL = (() => {
    const configuredUrl = (import.meta.env.VITE_API_URL || '').trim();
    if (configuredUrl) {
      return configuredUrl.replace(/\/?$/, '');
    }

    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      return window.location.origin.replace(/\/?$/, '');
    }

    return 'http://localhost:5000';
  })();

  const fetchPlaces = async () => {
    try {
      const res = await fetch(`${API_URL}/api/antidrug/places`);
      const data = await res.json();
      if (data && data.success && data.data) {
        setPlacesByDistrict(data.data);
        return data.data;
      }
    } catch (err) {
      console.error("Error fetching Anti-Drug places:", err);
    }
    return placesByDistrict;
  };

  const fetchPledgeCount = async () => {
    try {
      const response = await fetch(`${API_URL}/api/antidrug/count`);
      const data = await response.json();

      if (response.ok && data.success) {
        setPledgeCount(data.count || 0);
      }
    } catch (err) {
      console.error('Error fetching pledge count:', err);
    }
  };

  const handleVisitorCount = async () => {
    try {
      const hasVisited = sessionStorage.getItem('has_visited_bothaiellatamilnadu');
      if (!hasVisited) {
        const response = await fetch(`${API_URL}/api/antidrug/visitor/increment`, {
          method: 'POST',
        });
        const data = await response.json();
        if (response.ok && data.success) {
          sessionStorage.setItem('has_visited_bothaiellatamilnadu', 'true');
          setVisitorCount(data.count || 0);
          return;
        }
      }

      const response = await fetch(`${API_URL}/api/antidrug/visitor/count`);
      const data = await response.json();
      if (response.ok && data.success) {
        setVisitorCount(data.count || 0);
      }
    } catch (err) {
      console.error('Error handling visitor count:', err);
    }
  };

  useEffect(() => {
    fetchPledgeCount();
    handleVisitorCount();
  }, [API_URL]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (districtRef.current && !districtRef.current.contains(event.target)) {
        setShowDistrictDropdown(false);
      }
      if (placeRef.current && !placeRef.current.contains(event.target)) {
        setShowPlacesDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const scriptId = 'google-recaptcha-script';
    let script = document.getElementById(scriptId);

    window.onRecaptchaLoad = () => {
      if (window.grecaptcha && recaptchaRef.current) {
        try {
          window.grecaptcha.render(recaptchaRef.current, {
            sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LdToIUtAAAAAFkhV5yawaGG9Wz5nbOzpcp2NtJH',
            callback: (token) => {
              setRecaptchaToken(token);
              setIsRobotChecked(true);
            },
            'expired-callback': () => {
              setRecaptchaToken(null);
              setIsRobotChecked(false);
            },
            'error-callback': () => {
              setRecaptchaToken(null);
              setIsRobotChecked(false);
            }
          });
        } catch (e) {
          console.error("grecaptcha render error:", e);
        }
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if (window.grecaptcha && window.grecaptcha.render) {
      window.onRecaptchaLoad();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['name', 'district', 'place', 'whatsappNumber'];
    const nextFieldErrors = {};

    requiredFields.forEach((field) => {
      const value = formData[field]?.trim?.() ?? '';
      if (!value) {
        nextFieldErrors[field] = 'This is mandatory';
      }
    });

    const whatsappNumber = formData.whatsappNumber?.trim() ?? '';
    if (whatsappNumber && !/^\d{10}$/.test(whatsappNumber)) {
      nextFieldErrors.whatsappNumber = 'WhatsApp number must be 10 digits';
    }

    const email = formData.email?.trim() ?? '';
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextFieldErrors.email = 'Enter a valid email address';
    }

    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors);
      setError('Please complete the required fields correctly.');
      return;
    }

    if (!formData.acknowledgement) {
      setError('Please check the acknowledgement box to proceed.');
      return;
    }

    if (!isRobotChecked) {
      setError('Please verify that you are not a robot / நீங்கள் ஒரு ரோபோ அல்ல என்பதை உறுதிப்படுத்தவும்.');
      return;
    }

    setFieldErrors({});
    setError(null);
    setLoading(true);

    try {
      const payload = {
        ...formData,
        websiteEmail: honeypot,
        isRobotChecked: isRobotChecked,
        recaptchaToken: recaptchaToken,
        websiteSource: typeof window !== 'undefined' ? window.location.hostname : 'bothaiellatamilnadu.in'
      };

      const response = await fetch(`${API_URL}/api/antidrug`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        const generatedRef = data.refString || data.data?.refString || 'TN202647763457';
        setRefString(generatedRef);
        setReferenceId(generatedRef);
        await fetchPledgeCount();
      } else {
        setError(data.message || 'Submission failed. Please try again.');
        setIsRobotChecked(false);
        setRecaptchaToken(null);
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      }
    } catch (err) {
      console.error('Anti-Drug submission error:', err);
      setError('Server error. Please try again later.');
      setIsRobotChecked(false);
      setRecaptchaToken(null);
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleContinueToWhatsApp = () => {
    const fullName = (formData.fullName || formData.name || '').trim();
    const district = (formData.district || '').trim();
    const effectiveReferenceId = (referenceId || refString || 'TN202647763457').trim();

    const message = [
      'I proudly support the Anti-Drug Campaign and actively participate in spreading awareness for a drug-free society.',
      '',
      `#SignForNoDrugs ${fullName} from ${district}`,
      '',
      `#ref:${effectiveReferenceId}`
    ].join('\n');

    const url = `https://wa.me/919790655520?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setShowCertModal(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      whatsappNumber: '',
      email: '',
      district: '',
      place: '',
      acknowledgement: true
    });
    setSubmitted(false);
    setRefString('');
    setReferenceId('TN202647763457');
    setError(null);
    setFieldErrors({});
    setIsRobotChecked(false);
    setRecaptchaToken(null);
    if (window.grecaptcha) {
      window.grecaptcha.reset();
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes successCheckPop {
          0% { opacity: 0; transform: scale(0.6); }
          65% { opacity: 1; transform: scale(1.12); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes refBadgeGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(37, 99, 235, 0.18); }
          50% { box-shadow: 0 0 18px rgba(37, 99, 235, 0.26), 0 0 28px rgba(96, 165, 250, 0.18); }
        }

        .anti-drug-page {
          background: linear-gradient(180deg, #f3f4f6 0%, #eef2f7 100%);
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        .hero-banner,
        .form-card,
        .qr-stat-card,
        .glass-panel {
          animation: fadeInUp 0.55s ease-out both;
        }

        .hero-banner {
          background: linear-gradient(135deg, #1e386b 0%, #0d1b3e 100%);
          box-shadow: 0 28px 60px -30px rgba(13, 27, 62, 0.7);
          border: 1px solid rgba(245, 158, 11, 0.3);
          backdrop-filter: blur(8px);
          position: relative;
          overflow: hidden;
          text-align: center;
          padding: 2.4rem 2rem 2rem;
          border-radius: 1.5rem;
          max-width: 920px;
          margin: 0 auto 1.75rem;
        }

        .hero-banner::before {
          content: "";
          position: absolute;
          inset: -30% auto auto -10%;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          filter: blur(6px);
        }

        .form-card {
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 1.5rem;
          box-shadow: 0 24px 48px -30px rgba(15, 23, 42, 0.2);
          backdrop-filter: blur(8px);
          max-width: 920px;
          margin: 0 auto;
        }

        .form-head {
          padding: 0.25rem 0 1rem;
        }

        .form-head h2 {
          color: #0f172a;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem);
        }

        .tamil-badge {
          background-color: #e8f5e9;
          color: #2e7d32;
          border: 1px solid #c8e6c9;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          margin-left: 0.6rem;
          display: inline-flex;
          align-items: center;
          vertical-align: middle;
        }

        /* reCAPTCHA style mimics */
        .recaptcha-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 1.5rem 0 1rem;
        }

        .recaptcha-card {
          width: 302px;
          height: 76px;
          background: #f9f9f9;
          border: 1px solid #d3d3d3;
          border-radius: 3px;
          box-shadow: 0 0 4px rgba(0,0,0,0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 12px;
          margin: 1.5rem auto 1rem;
          align-self: center;
          font-family: Roboto, helvetica, arial, sans-serif;
          user-select: none;
        }

        .recaptcha-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .recaptcha-checkbox-container {
          width: 24px;
          height: 24px;
          background: #fff;
          border: 2px solid #c1c1c1;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: border-color 0.2s;
        }

        .recaptcha-checkbox-container:hover {
          border-color: #b2b2b2;
        }

        .recaptcha-checkbox-container.checked {
          border: none;
          background: transparent;
        }

        .recaptcha-label {
          font-size: 13px;
          color: #2b2b2b;
          font-weight: 500;
        }

        .recaptcha-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }

        .recaptcha-logo-text {
          font-size: 8px;
          color: #555;
          font-weight: 600;
          text-align: center;
          line-height: 1;
        }

        .recaptcha-links {
          font-size: 8px;
          color: #9b9b9b;
          text-align: center;
          margin-top: 2px;
        }

        .recaptcha-links a {
          color: #9b9b9b;
          text-decoration: none;
        }

        .recaptcha-links a:hover {
          text-decoration: underline;
        }

        .recaptcha-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #4d90fe;
          border-right-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .recaptcha-checkmark {
          color: #00aa4b;
          font-size: 22px;
          font-weight: 900;
          animation: scalePop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .input-wrapper {
          position: relative;
          transition: all 0.25s ease;
          border: 1px solid #dbe2ea;
          background: rgba(255,255,255,0.85);
        }

        .dynamic-placeholder {
          position: absolute;
          left: 50px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          display: flex;
          align-items: center;
          white-space: nowrap;
          z-index: 10;
          color: #94a3b8;
          font-size: 14.5px;
        }

        .dp-desktop { display: block; }
        .dp-mobile { display: none; }

        @media (max-width: 768px) {
          .dp-desktop { display: none; }
          .dp-mobile { 
            display: flex; 
            flex-direction: column; 
            font-size: 11.5px;
            letter-spacing: -0.2px;
            line-height: 1.25;
            white-space: normal;
          }
          .dp-tamil { color: #475569; font-weight: 500; }
          .dp-english { color: #94a3b8; margin-top: 1px; }
        }

        .input-wrapper:hover {
          border-color: #bfe4d7;
        }

        .input-wrapper:focus-within {
          transform: translateY(-1px);
          box-shadow: 0 0 0 4px rgba(5, 150, 105, 0.15);
          border-color: #059669;
        }

        .input-wrapper input,
        .input-wrapper select {
          color: #0f172a;
          font-weight: 500;
        }

        .submit-button,
        .anti-submit-button {
          border: none;
          border-radius: 0.9rem;
          background: #15803d;
          color: white;
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
          will-change: transform;
          letter-spacing: 0.01em;
        }

        .submit-button:hover,
        .anti-submit-button:hover {
          background: #166534;
          transform: translateY(-2px);
          box-shadow: 0 18px 24px rgba(5, 150, 105, 0.18);
          filter: brightness(1.04);
        }

        .submit-button:active,
        .anti-submit-button:active {
          transform: translateY(0);
          box-shadow: 0 8px 18px rgba(5, 150, 105, 0.18);
        }

        .success-checkmark {
          animation: successCheckPop 0.5s cubic-bezier(0.2, 0.9, 0.2, 1);
          background: linear-gradient(135deg, #ffffff 0%, #fef9c3 100%);
          border: 1px solid rgba(234, 179, 8, 0.2);
        }

        .reference-code-badge {
          animation: refBadgeGlow 2s ease-in-out infinite, fadeInUp 0.5s ease-out both;
          background: linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%);
          border: 2px dashed rgba(30, 64, 175, 0.75);
        }

        .campaign-popup-backdrop {
          position: fixed;
          inset: 0;
          box-sizing: border-box;
          background: rgba(13, 27, 62, 0.75);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: flex-start;
          overflow-y: auto;
          z-index: 2000;
          padding: 1.5rem;
        }

        .campaign-popup-card {
          position: relative;
          width: min(100%, 620px);
          margin: auto;
          box-sizing: border-box;
          background: linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(239,246,255,0.97) 100%);
          border: 1px solid rgba(148, 163, 184, 0.45);
          border-radius: 1.5rem;
          box-shadow: 0 30px 80px rgba(15, 23, 42, 0.35);
          padding: 2rem 2rem 1.6rem;
          text-align: center;
        }

        .campaign-popup-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 2.2rem;
          height: 2.2rem;
          border: none;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.08);
          color: #0f172a;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .campaign-popup-close:hover {
          background: rgba(30, 64, 175, 0.12);
          transform: scale(1.04);
        }

        .campaign-popup-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          color: #1d4ed8;
          font-size: 2rem;
          margin-bottom: 1rem;
          box-shadow: 0 18px 30px -22px rgba(30, 64, 175, 0.8);
        }

        .campaign-popup-title {
          margin: 0 0 1rem;
          font-size: clamp(2rem, 4vw, 2.7rem);
          line-height: 1.15;
          letter-spacing: -0.05em;
          color: #0f172a;
          font-weight: 800;
        }

        .campaign-popup-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.6rem;
          display: grid;
          gap: 0.9rem;
          text-align: left;
        }

        .campaign-popup-list li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 0.8rem;
          padding: 0.85rem 1rem;
          color: #1e293b;
          font-weight: 600;
          line-height: 1.4;
        }

        .campaign-popup-list li i {
          color: #16a34a;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .campaign-popup-button {
          border: none;
          background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%);
          color: #ffffff;
          border-radius: 0.9rem;
          padding: 0.9rem 1.5rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .campaign-popup-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 34px -18px rgba(30, 64, 175, 0.8);
        }

        .cert-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2100;
          padding: 1rem;
        }

        .cert-modal-card {
          width: min(100%, 480px);
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 1.5rem;
          box-shadow: 0 30px 70px rgba(15, 23, 42, 0.22);
          padding: 1.35rem 1.1rem 1.15rem;
          text-align: center;
        }

        .cert-icon-wrap {
          width: 78px;
          height: 78px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 2.1rem;
          margin-bottom: 0.9rem;
          box-shadow: 0 0 0 8px rgba(96, 165, 250, 0.12), 0 18px 28px -18px rgba(29, 78, 216, 0.8);
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          color: #1d4ed8;
        }

        .cert-icon-wrap.success {
          background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
          color: #15803d;
          box-shadow: 0 0 0 8px rgba(34, 197, 94, 0.12), 0 18px 28px -18px rgba(22, 163, 74, 0.8);
        }

        .cert-modal-title {
          margin: 0 0 0.45rem;
          color: #0f172a;
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          letter-spacing: -0.04em;
          font-weight: 800;
        }

        .cert-modal-subtitle {
          margin: 0 0 1rem;
          color: #475569;
          line-height: 1.6;
          font-size: 0.98rem;
        }

        .cert-loader {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 3px solid rgba(37, 99, 235, 0.12);
          border-top-color: #2563eb;
          margin: 0.7rem auto 1rem;
          animation: certSpin 0.9s linear infinite;
        }

        @keyframes certSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .cert-stage-indicator {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          max-width: 300px;
          margin: 0 auto 1.2rem;
          text-align: left;
          font-size: 0.86rem;
          font-weight: 600;
          color: #475569;
        }

        .cert-stage-indicator span {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          border-radius: 999px;
          padding: 0.5rem 0.7rem;
          border: 1px solid rgba(226, 232, 240, 0.9);
          background: rgba(248, 250, 252, 0.9);
        }

        .cert-stage-indicator .current {
          color: #1d4ed8;
          background: rgba(239, 246, 255, 0.9);
          border-color: rgba(147, 197, 253, 0.7);
          font-weight: 700;
        }

        .cert-stage-indicator .complete {
          color: #166534;
          background: rgba(240, 253, 244, 0.9);
          border-color: rgba(134, 239, 172, 0.6);
        }

        .cert-ref-box {
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border: 1px solid rgba(96, 165, 250, 0.3);
          border-radius: 0.9rem;
          padding: 0.8rem 0.9rem;
          margin: 0.8rem auto 1rem;
          text-align: left;
          max-width: 300px;
        }

        .cert-ref-label {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #475569;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .cert-ref-value {
          font-size: 1.06rem;
          font-weight: 800;
          color: #1d4ed8;
          letter-spacing: 0.08em;
        }

        .cert-next-step {
          margin: 0 auto 1rem;
          max-width: 300px;
          padding: 0.75rem 0.8rem;
          border-radius: 0.9rem;
          background: rgba(248, 250, 252, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.2);
          text-align: left;
        }

        .cert-next-step-label {
          display: block;
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #475569;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .cert-next-step strong {
          color: #0f172a;
          font-size: 0.95rem;
        }

        .cert-actions {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          margin-top: 0.5rem;
        }

        .cert-primary-btn,
        .cert-secondary-btn {
          border: none;
          border-radius: 0.9rem;
          padding: 0.9rem 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cert-primary-btn {
          background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%);
          color: #fff;
          box-shadow: 0 18px 24px -18px rgba(30, 64, 175, 0.75);
        }

        .cert-primary-btn:hover,
        .cert-secondary-btn:hover {
          transform: translateY(-1px);
        }

        .cert-secondary-btn {
          background: #e2e8f0;
          color: #0f172a;
        }

        @media (max-width: 576px) {
          .field-label > span {
            display: inline-flex !important;
            flex-wrap: wrap !important;
            align-items: center !important;
            gap: 0.35rem !important;
            line-height: 1.4 !important;
          }
          .tamil-badge {
            margin-left: 0 !important;
            padding: 0.15rem 0.45rem !important;
            font-size: 0.68rem !important;
          }
          .recaptcha-wrapper {
            margin: 1rem 0 !important;
            height: 66px !important;
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
            overflow: hidden !important;
          }
          .recaptcha-wrapper > div {
            flex-shrink: 0 !important;
            width: 304px !important;
            display: flex !important;
            justify-content: center !important;
          }
          .recaptcha-card {
            transform: scale(0.86) !important;
            transform-origin: center !important;
            margin: 0 !important;
            align-self: auto !important;
          }
          .recaptcha-label {
            font-size: 11px !important;
          }
          .anti-drug-page {
            padding: 1rem 0.5rem;
          }
          .hero-banner {
            padding: 1.5rem 1rem 1.25rem;
            border-radius: 1rem;
            margin-bottom: 1.25rem;
          }
          .hero-banner h1 {
            font-size: 1.8rem !important;
            line-height: 1.15 !important;
          }
          .form-card {
            padding: 1.25rem 1rem;
            border-radius: 1.2rem;
          }
          .quote-panel {
            padding: 1rem !important;
            margin-bottom: 1.25rem !important;
          }
          .quote-main {
            font-size: 1rem !important;
          }
          .quote-sub {
            font-size: 0.85rem !important;
          }
          .submit-button,
          .anti-submit-button {
            padding: 1rem !important;
            font-size: 0.95rem !important;
          }
          .success-panel {
            padding: 1rem 0 !important;
          }
          .campaign-popup-card {
            padding: 1.5rem 1rem 1.25rem !important;
            border-radius: 1.2rem !important;
          }
          .campaign-popup-title {
            font-size: 1.6rem !important;
          }
          .cert-modal-card {
            padding: 1.25rem 1rem !important;
            border-radius: 1.25rem !important;
          }
        }

        /* custom district dropdown styling */
        .custom-district-dropdown {
          position: absolute;
          top: 105%;
          left: 0;
          right: 0;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.15), 0 8px 16px -6px rgba(15, 23, 42, 0.1);
          z-index: 1000;
          overflow: hidden;
          animation: fadeInUp 0.15s ease-out;
        }

        .dropdown-search-wrapper {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .dropdown-search-wrapper i {
          color: #64748b;
          margin-right: 0.5rem;
          font-size: 0.95rem;
        }

        .dropdown-search-wrapper input {
          border: none !important;
          background: transparent !important;
          width: 100% !important;
          outline: none !important;
          font-size: 0.95rem !important;
          font-weight: 500 !important;
          color: #0f172a !important;
          box-shadow: none !important;
          padding: 0 !important;
          margin: 0 !important;
          min-height: auto !important;
        }

        .dropdown-options-list {
          max-height: 250px;
          overflow-y: auto;
          scrollbar-width: thin;
        }

        .dropdown-option-item {
          padding: 0.75rem 1.25rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: #334155;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          text-align: left;
        }

        .dropdown-option-item:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .dropdown-option-item.selected {
          background: #e0f2fe;
          color: #0369a1;
          font-weight: 700;
        }

        .dropdown-no-results {
          padding: 1.5rem;
          font-size: 0.9rem;
          color: #64748b;
          text-align: center;
        }

        .dropdown-options-list::-webkit-scrollbar {
          width: 6px;
        }
        .dropdown-options-list::-webkit-scrollbar-track {
          background: transparent;
        }
        .dropdown-options-list::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 99px;
        }

        /* Input field sizing upgrades for mobile-first layout */
        .input-wrapper {
          min-height: 54px !important;
          border-radius: 12px !important;
          align-items: center;
          background: #ffffff;
        }

        .input-wrapper input,
        .input-wrapper select {
          font-size: 16px !important;
          padding: 0.85rem 1.1rem !important;
          min-height: 54px !important;
          box-sizing: border-box !important;
          width: 100% !important;
        }

        .input-wrapper input::placeholder,
        .input-wrapper select::placeholder {
          font-size: 11px !important;
          letter-spacing: -0.3px;
        }

        .input-icon {
          width: 52px !important;
          min-width: 52px !important;
          flex-shrink: 0 !important;
          padding: 0 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          border-right: 1px solid #cbd5e1 !important;
        }

        /* Label font updates and spacings */
        .field-label {
          margin-bottom: 20px !important;
        }

        .field-label > span {
          display: block;
          font-size: 16px !important;
          font-weight: 700 !important;
          color: #1e293b !important;
          margin-bottom: 8px !important;
          font-family: 'Noto Sans Tamil', 'Mukta Malar', 'Segoe UI', sans-serif !important;
          line-height: 1.4 !important;
        }

        .security-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 1.5rem 0 0.5rem;
          font-size: 15px;
          font-weight: bold;
          color: #1f2937;
        }
        .tamil-badge-security {
          font-size: 12px;
          font-weight: normal;
          color: #047857;
          background-color: #d1fae5;
          border: 1px solid #a7f3d0;
          border-radius: 12px;
          padding: 2px 8px;
        }
        .acknowledgement {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .acknowledgement-container {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
          min-width: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .acknowledgement-text-tamil {
          font-size: 15px;
          font-weight: bold;
          color: #1f2937;
          line-height: 1.4;
        }
        .acknowledgement-text-english {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.4;
        }

        /* Mobile specific fixes to override padding and card widths */
        @media (max-width: 576px) {
          .field-label > span {
            font-size: 15px !important;
            line-height: 1.35 !important;
          }
          .tamil-badge {
            font-size: 0.72rem !important;
            padding: 0.15rem 0.5rem !important;
          }
          .security-header {
            flex-wrap: wrap !important;
            gap: 6px !important;
            font-size: 13px !important;
            margin: 1rem 0 0.35rem !important;
          }
          .security-header span {
            font-size: 13px !important;
          }
          .security-header .tamil-badge-security {
            font-size: 10px !important;
            padding: 1px 6px !important;
          }
          .recaptcha-wrapper {
            margin: 0.5rem 0 1rem !important;
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
            overflow: hidden !important;
          }
          .recaptcha-wrapper > div {
            flex-shrink: 0 !important;
            width: 304px !important;
            transform: scale(0.85) !important;
            transform-origin: center center !important;
            display: flex !important;
            justify-content: center !important;
          }
          .acknowledgement {
            padding: 0.85rem !important;
            gap: 8px !important;
          }
          .acknowledgement-text-tamil {
            font-size: 13px !important;
          }
          .acknowledgement-text-english {
            font-size: 11px !important;
          }
        }
      `}</style>
      {showPopup && (
        <div className="campaign-popup-backdrop" onClick={() => setShowPopup(false)}>
          <div className="campaign-popup-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="campaign-popup-close"
              aria-label="Close popup"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>

            <div className="campaign-popup-mark">
              <i className="bi bi-shield-check"></i>
            </div>

            <h2 className="campaign-popup-title">Break the Chain of Addiction—Add Your Name Today.</h2>

            <ul className="campaign-popup-list">
              <li><i className="bi bi-check-circle-fill"></i><span>One Signature. Thousands of Lives Saved.</span></li>
              <li><i className="bi bi-check-circle-fill"></i><span>Your Voice is the Shield. Sign for a Drug-Free Community.</span></li>
              <li><i className="bi bi-check-circle-fill"></i><span>Reject Addiction. Reclaim Our Future.</span></li>
            </ul>

            <button
              type="button"
              className="campaign-popup-button"
              onClick={() => setShowPopup(false)}
            >
              Take the Pledge Now
            </button>
          </div>
        </div>
      )}

      {showCertModal && (
        <div className="cert-modal-backdrop" onClick={() => setShowCertModal(false)}>
          <div className="cert-modal-card" onClick={(e) => e.stopPropagation()}>
            {certStage === 'processing' ? (
              <>
                <div className="cert-icon-wrap" aria-label="certificate icon">
                  <span>🎓</span>
                </div>

                <h3 className="cert-modal-title">Preparing Your Certificate</h3>
                <p className="cert-modal-subtitle">Your certificate is being generated. Please wait a moment…</p>

                <div className="cert-loader" aria-label="loading" />

                <div className="cert-stage-indicator">
                  <span className="current">● Preparing Certificate</span>
                  <span>○ Certificate Ready</span>
                  <span>○ Continue to WhatsApp</span>
                </div>
              </>
            ) : (
              <>
                <div className="cert-icon-wrap success" aria-label="success icon">
                  <span>✓</span>
                </div>

                <h3 className="cert-modal-title">Your Certificate is Ready!</h3>
                <p className="cert-modal-subtitle">Your certificate has been successfully prepared.</p>

                <div className="cert-ref-box">
                  <span className="cert-ref-label">Reference ID</span>
                  <div className="cert-ref-value">{CERTIFICATE_REF_ID}</div>
                </div>

                <div className="cert-next-step">
                  <span className="cert-next-step-label">Next Step</span>
                  <strong>Receive your certificate through WhatsApp.</strong>
                </div>

                <div className="cert-stage-indicator">
                  <span className="complete">✓ Certificate Prepared</span>
                  <span className="complete">✓ Certificate Ready</span>
                  <span className="current">→ Continue to WhatsApp</span>
                </div>

                <div className="cert-actions">
                  <button
                    type="button"
                    className="cert-primary-btn"
                    onClick={handleContinueToWhatsApp}
                  >
                    Continue to WhatsApp
                  </button>
                  <button type="button" className="cert-secondary-btn" onClick={() => setShowCertModal(false)}>
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div className="anti-drug-page">
      <section className="hero-banner">
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
          <span className="badge-yellow" style={{ background: '#f59e0b', color: '#111827', boxShadow: '0 12px 20px -12px rgba(245, 158, 11, 0.8)', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '0.7rem 1rem', fontWeight: 800, letterSpacing: '0.04em' }}>
            <i className="bi bi-megaphone-fill me-2"></i> OFFICIAL AWARENESS CAMPAIGN
          </span>
        </div>
        <h1 style={{ margin: '0 0 0.75rem 0', fontSize: '3rem', fontWeight: '800', letterSpacing: '-0.04em', fontFamily: 'Playfair Display, Georgia, serif', color: '#ffffff', textTransform: 'uppercase' }}>
          Anti-Drug Registration
        </h1>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '1.1rem', color: '#e2e8f0', fontWeight: 500 }}>
          Say <strong style={{ color: '#fbbf24' }}>NO</strong> to Drugs! Fill out your details below to submit your official acknowledgement pledge.
        </p>
      </section>

      <section className="form-card">
        <div className="form-head">
          <h2>
            <i className="bi bi-shield-check"></i> Anti-Drug Registration
          </h2>
          <p>Please provide your contact and location details</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', width: '100%', maxWidth: '860px' }}>
            <div style={{ flex: '1 1 200px', minWidth: '200px', padding: '1.5rem 1.25rem', borderRadius: '1.2rem', background: '#ffffff', border: '1px solid rgba(148, 163, 184, 0.2)', boxShadow: '0 12px 25px rgba(15, 23, 42, 0.04)', textAlign: 'center', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#eff6ff', color: '#1e386b', margin: '0 auto 0.85rem auto', border: '1px solid rgba(30, 56, 107, 0.08)' }}>
                <i className="bi bi-flag-fill" style={{ fontSize: '1.25rem' }}></i>
              </div>
              <h6 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#1e386b', margin: '0 0 0.4rem' }}>
                Targeted Pledges of the people
              </h6>
              <h2 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#1e386b', margin: 0 }}>
                5,00,000
              </h2>
            </div>

            <div style={{ flex: '1 1 200px', minWidth: '200px', padding: '1.5rem 1.25rem', borderRadius: '1.2rem', background: '#ffffff', border: '1px solid rgba(148, 163, 184, 0.2)', boxShadow: '0 12px 25px rgba(15, 23, 42, 0.04)', textAlign: 'center', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#eff6ff', color: '#1e386b', margin: '0 auto 0.85rem auto', border: '1px solid rgba(30, 56, 107, 0.08)' }}>
                <i className="bi bi-check-circle-fill" style={{ fontSize: '1.25rem' }}></i>
              </div>
              <h6 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#1e386b', margin: '0 0 0.4rem' }}>
                Total Pledges
              </h6>
              <h2 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#1e386b', margin: 0 }}>
                {pledgeCount.toLocaleString()}
              </h2>
            </div>

            <div style={{ flex: '1 1 200px', minWidth: '200px', padding: '1.5rem 1.25rem', borderRadius: '1.2rem', background: '#ffffff', border: '1px solid rgba(148, 163, 184, 0.2)', boxShadow: '0 12px 25px rgba(15, 23, 42, 0.04)', textAlign: 'center', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: '#eff6ff', color: '#1e386b', margin: '0 auto 0.85rem auto', border: '1px solid rgba(30, 56, 107, 0.08)' }}>
                <i className="bi bi-people-fill" style={{ fontSize: '1.25rem' }}></i>
              </div>
              <h6 style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', color: '#1e386b', margin: '0 0 0.4rem' }}>
                Total Visitors
              </h6>
              <h2 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#1e386b', margin: 0 }}>
                {visitorCount.toLocaleString()}
              </h2>
            </div>
          </div>
        </div>

        <div className="form-body">
          {error && (
            <div className="alert alert-danger" style={{ color: '#dc2626', background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)', border: '1px solid #fca5a5', padding: '1rem', borderRadius: '0.75rem', marginBottom: '1.5rem', boxShadow: '0 12px 22px -18px rgba(220, 38, 38, 0.3)' }}>
              {error}
            </div>
          )}

          {submitted ? (
            <div className="success-panel" style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div className="success-checkmark" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '82px', height: '82px', borderRadius: '50%', background: 'linear-gradient(135deg, #ffffff 0%, #ecfdf5 100%)', boxShadow: '0 14px 30px rgba(16, 185, 129, 0.18)', margin: '0 auto 1rem', color: '#059669' }}>
                <i className="bi bi-check-circle-fill" style={{ fontSize: '3rem' }}></i>
              </div>
              <h2 style={{ fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>Pledge Submitted!</h2>
              <p style={{ color: '#475569', marginBottom: '1.5rem', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
                Thank you for committing to a drug-free Tamil Nadu. Your acknowledgement has been received and registered successfully in the Anti-Drug database.
              </p>

              {/* Reference ID Banner */}
              {refString && (
                <div className="reference-code-badge" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', border: '2px dashed rgba(37, 99, 235, 0.7)', borderRadius: '0.85rem', padding: '1rem', maxWidth: '520px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', color: '#475569', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Reference Code
                  </div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1d4ed8', letterSpacing: '1px', marginTop: '0.2rem' }}>
                    {refString}
                  </div>
                </div>
              )}

              <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '520px', margin: '0 auto 2rem', textAlign: 'left' }}>
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #d1d5db', borderRadius: '1rem', padding: '1.25rem' }}>
                  <div style={{ marginBottom: '0.75rem', color: '#334155', fontWeight: '700' }}>Submission Details</div>
                  <div style={{ color: '#475569', lineHeight: '1.8' }}>
                    <div><strong>Reference ID:</strong> {refString || 'N/A'}</div>
                    <div><strong>Name:</strong> {formData.name || 'N/A'}</div>
                    <div><strong>WhatsApp:</strong> {formData.whatsappNumber || 'N/A'}</div>
                    <div><strong>District:</strong> {formData.district || 'N/A'}</div>
                    <div><strong>Place:</strong> {formData.place || 'N/A'}</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                <button
                  type="button"
                  className="submit-button anti-submit-button"
                  onClick={() => {
                    setCertStage('processing');
                    setShowCertModal(true);
                    window.setTimeout(() => setCertStage('ready'), 2400);
                  }}
                  style={{ maxWidth: '320px', width: '100%' }}
                >
                  🎓 Get Your Free Certificate
                </button>
                <button className="submit-button anti-submit-button" onClick={resetForm} style={{ maxWidth: '300px', width: '100%' }}>
                  Submit Another Response
                </button>
                <Link to="/antidrug/qr" className="btn btn-outline-secondary rounded-pill px-4 py-3" style={{ maxWidth: '300px', width: '100%', borderColor: '#0d825b', color: '#0d825b' }}>
                  View Campaign QR
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="anti-form">
              <div className="quote-panel">
                <p className="quote-main">"உங்களை நீங்களே அழிவின் பால் தள்ளிக்கொள்ளாதீர்கள்."</p>
                <p className="quote-sub">"உங்கள் எதிர்காலம் உங்கள் கைகளில். போதையைத் தவிர்ப்போம்! சுவனத்தின் வழியைத் தேர்ந்தெடுப்போம்!"</p>
                <p>
                  "நானும், என் குடும்பமும், என் சமூகமும் போதைப்பொருட்களிலிருந்து முற்றிலுமாக விலகி இருப்போம் என உறுதி கூறுகிறேன். 
                  போதைக்கு எதிராகப் போராடுபவர்களுக்கு ஆதரவளித்து, தீமைகளைத் தடுக்க என் பங்களிப்பை வழங்குவேன்."
                </p>
              </div>

              <label className="field-label">
                <span>
                  Full Name <span className="tamil-badge">முழுப் பெயர்</span> <span className="required-marker">*</span>
                </span>
                <div className={`input-wrapper ${fieldErrors.name ? 'input-error' : ''}`}>
                  <div className="input-icon"><i className="bi bi-person"></i></div>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder=" " />
                  {!formData.name && (
                    <div className="dynamic-placeholder">
                      <span className="dp-desktop">Enter your full name / உங்கள் முழுப் பெயரை உள்ளிடவும்</span>
                      <span className="dp-mobile">
                        <span className="dp-tamil">உங்கள் முழுப் பெயரை உள்ளிடவும்</span>
                        <span className="dp-english">Enter your full name</span>
                      </span>
                    </div>
                  )}
                </div>
                {fieldErrors.name && <div className="field-error-message">{fieldErrors.name}</div>}
              </label>

              <label className="field-label">
                <span>
                  WhatsApp Number <span className="tamil-badge">வாட்ஸ்அப் எண்</span> <span className="required-marker">*</span>
                </span>
                <div className={`input-wrapper ${fieldErrors.whatsappNumber ? 'input-error' : ''}`}>
                  <div className="input-icon"><i className="bi bi-whatsapp"></i></div>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder=" "
                    inputMode="numeric"
                    maxLength={10}
                  />
                  {!formData.whatsappNumber && (
                    <div className="dynamic-placeholder">
                      <span className="dp-desktop">Enter 10-digit WhatsApp number / 10 இலக்க எண்</span>
                      <span className="dp-mobile">
                        <span className="dp-tamil">10 இலக்க எண்</span>
                        <span className="dp-english">Enter 10-digit WhatsApp number</span>
                      </span>
                    </div>
                  )}
                </div>
                {fieldErrors.whatsappNumber && <div className="field-error-message">{fieldErrors.whatsappNumber}</div>}
              </label>

              <label className="field-label">
                <span>
                  Email ID <span className="tamil-badge">மின்னஞ்சல்</span> <span style={{ color: '#64748b', fontSize: '0.85rem', marginLeft: '0.4rem', fontWeight: 'normal', whiteSpace: 'nowrap', display: 'inline-block' }}>(Optional / விருப்பத்தேர்வு)</span>
                </span>
                <div className={`input-wrapper ${fieldErrors.email ? 'input-error' : ''}`}>
                  <div className="input-icon"><i className="bi bi-envelope"></i></div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " />
                  {!formData.email && (
                    <div className="dynamic-placeholder">
                      <span className="dp-desktop">Enter your email address / மின்னஞ்சல் முகவரி</span>
                      <span className="dp-mobile">
                        <span className="dp-tamil">மின்னஞ்சல் முகவரி</span>
                        <span className="dp-english">Enter your email address</span>
                      </span>
                    </div>
                  )}
                </div>
                {fieldErrors.email && <div className="field-error-message">{fieldErrors.email}</div>}
              </label>

              <label className="field-label">
                <span>
                  District <span className="tamil-badge">மாவட்டம்</span> <span className="required-marker">*</span>
                </span>
                <div ref={districtRef} style={{ position: 'relative' }}>
                  <div 
                    className={`input-wrapper ${fieldErrors.district ? 'input-error' : ''}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowDistrictDropdown(!showDistrictDropdown)}
                  >
                    <div className="input-icon"><i className="bi bi-geo-alt"></i></div>
                    <div style={{ flex: 1, padding: '0.75rem 1rem', fontSize: '16px', color: formData.district ? '#0f172a' : '#94a3b8', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 500, minHeight: '54px', boxSizing: 'border-box' }}>
                      {formData.district 
                        ? `${formData.district} (${TN_DISTRICTS_MAP[formData.district] || ''})` 
                        : 'Select District / மாவட்டம்'}
                      <i className={`bi bi-chevron-${showDistrictDropdown ? 'up' : 'down'}`} style={{ fontSize: '0.85rem', color: '#64748b' }}></i>
                    </div>
                  </div>
                  
                  {showDistrictDropdown && (
                    <div className="custom-district-dropdown">
                      <div className="dropdown-search-wrapper" onClick={(e) => e.stopPropagation()}>
                        <i className="bi bi-search"></i>
                        <input
                          type="text"
                          placeholder="Search / தேடுக..."
                          value={districtSearch}
                          onChange={(e) => setDistrictSearch(e.target.value)}
                          autoFocus
                        />
                      </div>
                      <div className="dropdown-options-list">
                        <div 
                          className="dropdown-option-item placeholder-option"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, district: '' }));
                            if (fieldErrors.district) {
                              setFieldErrors(prev => ({ ...prev, district: '' }));
                            }
                            setShowDistrictDropdown(false);
                            setDistrictSearch('');
                          }}
                        >
                          Select District / மாவட்டம்
                        </div>
                        {TN_DISTRICTS.filter(d => 
                          d.toLowerCase().includes(districtSearch.toLowerCase()) || 
                          (TN_DISTRICTS_MAP[d] && TN_DISTRICTS_MAP[d].includes(districtSearch))
                        ).map((d) => (
                          <div 
                            key={d} 
                            className={`dropdown-option-item ${formData.district === d ? 'selected' : ''}`}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, district: d }));
                              if (fieldErrors.district) {
                                setFieldErrors(prev => ({ ...prev, district: '' }));
                              }
                              setShowDistrictDropdown(false);
                              setDistrictSearch('');
                            }}
                          >
                            {d} ({TN_DISTRICTS_MAP[d] || ''})
                          </div>
                        ))}
                        {TN_DISTRICTS.filter(d => 
                          d.toLowerCase().includes(districtSearch.toLowerCase()) || 
                          (TN_DISTRICTS_MAP[d] && TN_DISTRICTS_MAP[d].includes(districtSearch))
                        ).length === 0 && (
                          <div className="dropdown-no-results">
                            No districts found / மாவட்டங்கள் எதுவும் இல்லை
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                {fieldErrors.district && <div className="field-error-message">{fieldErrors.district}</div>}
              </label>

              <label className="field-label">
                <span>
                  Place / Town <span className="tamil-badge">ஊர் / நகரம்</span> <span className="required-marker">*</span>
                </span>
                <div className={`input-wrapper ${fieldErrors.place ? 'input-error' : ''}`} ref={placeRef} style={{ position: 'relative', overflow: 'visible', zIndex: 100 }}>
                  <div className="input-icon"><i className="bi bi-building"></i></div>
                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    onFocus={async () => {
                      const latestPlaces = await fetchPlaces();
                      const currentAvailablePlaces = latestPlaces[formData.district] || [];
                      setFilteredPlaces(currentAvailablePlaces.filter(p => p.toLowerCase().includes(formData.place.toLowerCase())));
                      setShowPlacesDropdown(true);
                    }}
                    placeholder=" "
                    autoComplete="off"
                    style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.8rem', border: 'none', background: 'transparent', outline: 'none' }}
                  />
                  {!formData.place && (
                    <div className="dynamic-placeholder" style={{ left: '50px' }}>
                      <span className="dp-desktop">Enter village, area or city / கிராமம், பகுதி அல்லது ஊர்</span>
                      <span className="dp-mobile">
                        <span className="dp-tamil">கிராமம், பகுதி அல்லது ஊர்</span>
                        <span className="dp-english">Enter village, area or city</span>
                      </span>
                    </div>
                  )}
                  
                  {/* Dropdown for Places */}
                  {showPlacesDropdown && filteredPlaces.length > 0 && (
                    <div className="district-dropdown" style={{
                      position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 9999,
                      background: '#fff', borderRadius: '0.75rem', marginTop: '0.5rem',
                      boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.2)', maxHeight: '250px',
                      overflowY: 'auto'
                    }}>
                      {filteredPlaces.map((place, index) => (
                        <div
                          key={index}
                          className="district-option"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, place: place }));
                            setShowPlacesDropdown(false);
                          }}
                          style={{
                            padding: '0.75rem 1rem', display: 'flex', alignItems: 'center',
                            gap: '0.75rem', cursor: 'pointer', transition: 'all 0.2s ease',
                            borderBottom: index < filteredPlaces.length - 1 ? '1px solid #f1f5f9' : 'none'
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ecfdf5'; e.currentTarget.style.color = '#059669'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#334155'; }}
                        >
                          <i className="bi bi-geo-alt" style={{ color: '#10b981', opacity: 0.8 }}></i>
                          <span style={{ fontWeight: 500 }}>{place}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {fieldErrors.place && <div className="field-error-message">{fieldErrors.place}</div>}
              </label>

              {/* Honeypot field (invisible to users) */}
              <div style={{ display: 'none' }}>
                <input
                  type="text"
                  name="websiteEmail"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className="security-header">
                <i className="bi bi-shield-check" style={{ color: '#10b981', fontSize: '18px' }}></i>
                <span>Security Verification</span>
                <span className="tamil-badge-security">
                  பாதுகாப்பு சரிபார்ப்பு
                </span>
              </div>

              <div className="recaptcha-wrapper">
                <div ref={recaptchaRef}></div>
              </div>

              <label className="acknowledgement">
                <input type="checkbox" name="acknowledgement" checked={formData.acknowledgement} onChange={handleChange} style={{ marginTop: '4px' }} />
                <div className="acknowledgement-container">
                  <span className="acknowledgement-text-tamil">
                    போதைப்பொருள்களுக்கு <span style={{ color: '#dc2626' }}>வேண்டாம்</span> என்று சொல்லவும், விழிப்புணர்வை ஏற்படுத்தவும், பாதுகாப்பான போதையற்ற தமிழகம் உருவாக பாடுபடவும் உறுதியளிக்கிறேன்.
                  </span>
                  <span className="acknowledgement-text-english">
                    I hereby pledge to say <strong style={{ color: '#4b5563' }}>NO to drugs</strong>, spread awareness, and work towards a safe, drug-free Tamil Nadu.
                  </span>
                </div>
              </label>

              <button type="submit" className="submit-button anti-submit-button" disabled={loading} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  <i className="bi bi-send-fill"></i>
                  <span>{loading ? 'Submitting...' : 'Submit Pledge'}</span>
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 500, opacity: 0.9 }}>
                  {loading ? 'சமர்ப்பிக்கப்படுகிறது...' : 'உறுதிமொழியைச் சமர்ப்பிக்கவும்'}
                </span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
    </>
  );
}

export default AntiDrugForm;