// import React, { useState, useEffect } from 'react';
// import { QRCodeSVG } from 'qrcode.react';
// import { Link } from 'react-router-dom';

// function AntiDrugQR() {
//   const [formUrl, setFormUrl] = useState('');
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [submissionCount, setSubmissionCount] = useState(0);

//   useEffect(() => {
//     // Set QR code target URL to the registration pledge form page
//     const targetUrl = `${window.location.origin}/antidrug/form`;
//     setFormUrl(targetUrl);

//     // Check admin status
//     API.get('/admin/check')
//       .then((res) => setIsAdmin(res.data?.isAdmin || false))
//       .catch(() => setIsAdmin(false));

//     // Fetch total submissions count
//     API.get('/api/antidrug/all')
//       .then((res) => {
//         if (res.data && typeof res.data.count !== 'undefined') {
//           setSubmissionCount(res.data.count);
//         }
//       })
//       .catch((err) => console.error("Error fetching submission count:", err));
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="container py-5" style={{ minHeight: '85vh' }}>
//         <div className="row justify-content-center align-items-center">
          
//           {/* Admin Banner */}
//           {isAdmin && (
//             <div className="col-12 mb-4">
//               <div className="alert alert-success d-flex flex-wrap justify-content-between align-items-center rounded-4 shadow-sm border-0 bg-success bg-opacity-10 text-success p-3 mb-0">
//                 <div className="d-flex align-items-center mb-2 mb-md-0">
//                   <i className="bi bi-shield-lock-fill fs-3 me-3 text-success"></i>
//                   <div>
//                     <h6 className="fw-bold mb-0">Admin Mode Active</h6>
//                     <span className="small text-secondary">You are logged in as Admin. You can view all submitted form responses.</span>
//                   </div>
//                 </div>
//                 <Link to="/antidrug-camp" className="btn btn-success rounded-pill px-4 py-2 fw-bold text-nowrap shadow-sm">
//                   <i className="bi bi-table me-1"></i> View Submitted Details
//                 </Link>
//               </div>
//             </div>
//           )}

//           {/* Right Side: QR Code Display */}
//           <div className="col-lg-5 col-md-6 mb-4 mb-md-0 order-2 order-md-2 text-center">
//             <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white h-100">
//               <div className="mb-3">
//                 <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fs-6 fw-bold">
//                   <i className="bi bi-qr-code-scan me-2"></i> Anti-Drug Signature Campaign QR Code
//                 </span>
//               </div>
//               <h3 className="fw-bold text-dark mb-2">Scan QR Code to Pledge</h3>
//               <p className="text-secondary small mb-4">
//                 Scan the QR Code
//                 Join the Pledge to Say NO to Drugs
//                 <br /><br />
//                 Be a Thinker, Not a Drinker.
//                 <br />
//                 Choose Health. Choose Hope. Choose Life.
//               </p>

//               {/* QR Code Canvas */}
//               <div className="p-4 bg-white rounded-4 border d-inline-block mx-auto mb-4 shadow-sm" style={{ border: '2px dashed #059669' }}>
//                 <QRCodeSVG
//                   value={formUrl || `${window.location.origin}/antidrug/form`}
//                   size={240}
//                   level="H"
//                   includeMargin={true}
//                 />
//               </div>

//               {/* Action Buttons */}
//               <div className="d-flex flex-wrap justify-content-center gap-3 mt-auto">
//                 <Link
//                   to="/antidrug/form"
//                   className="btn btn-success rounded-pill px-4 py-3 fw-bold fs-6 shadow-sm"
//                 >
//                   <i className="bi bi-pencil-square me-2"></i> Fill Pledge Form
//                 </Link>

//                 <button
//                   type="button"
//                   className="btn btn-outline-success rounded-pill px-4 py-3 fw-bold fs-6"
//                   onClick={() => {
//                     navigator.clipboard.writeText(formUrl || `${window.location.origin}/antidrug/form`);
//                     alert('Form Link copied to clipboard!');
//                   }}
//                 >
//                   <i className="bi bi-copy me-2"></i> Copy Form Link
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Left Side: Header & Counts */}
//           <div className="col-lg-7 col-md-6 order-1 order-md-1">
            
//             {/* Header & Hero Section */}
//             <div 
//               className="p-5 rounded-4 shadow-lg text-white mb-4 d-flex flex-column justify-content-center text-center text-md-start position-relative overflow-hidden" 
//               style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)' }}
//             >
//               {/* Decorative Background Elements */}
//               <div className="position-absolute top-0 end-0" style={{ transform: 'translate(10%, -10%)', opacity: 0.15, pointerEvents: 'none' }}>
//                 <i className="bi bi-shield-check text-white" style={{ fontSize: '15rem' }}></i>
//               </div>
              
//               <div className="position-relative" style={{ zIndex: 1 }}>
//                 <div className="mb-3">
//                   <span className="badge bg-warning text-dark px-3 py-2 fs-6 fw-bolder text-uppercase rounded-pill shadow-sm">
//                     <i className="bi bi-megaphone-fill me-2"></i> Official Awareness Campaign
//                   </span>
//                 </div>
//                 <h1 className="fw-bolder display-4 mb-3" style={{ letterSpacing: '-1px' }}>Anti-Drug Signature Campaign</h1>
//                 <p className="lead mb-0 opacity-100 fw-medium" style={{ lineHeight: '1.6' }}>
//                   Say <strong className="text-warning">NO</strong> to Drugs! Scan the QR code on your mobile device to open the official pledge form. Together we can build a drug-free community.
//                 </p>
//               </div>
//             </div>

//             {/* Target and Actual Count Section */}
//             <div className="row g-4">
//               <div className="col-sm-6">
//                 <div 
//                   className="card border-0 shadow rounded-4 overflow-hidden h-100" 
//                   style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'default' }} 
//                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.classList.add('shadow-lg'); }} 
//                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.classList.remove('shadow-lg'); }}
//                 >
//                   <div className="card-body p-4 text-center d-flex flex-column justify-content-center position-relative">
//                     <div className="position-absolute bottom-0 end-0" style={{ transform: 'translate(15%, 20%)', opacity: 0.05, pointerEvents: 'none' }}>
//                       <i className="bi bi-bullseye text-primary" style={{ fontSize: '10rem' }}></i>
//                     </div>
//                     <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm" style={{ width: '60px', height: '60px' }}>
//                       <i className="bi bi-flag-fill fs-3"></i>
//                     </div>
//                     <h5 className="text-secondary fw-bold text-uppercase mb-2" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>Targeted Pledges of the people </h5>
//                     <h2 className="display-5 fw-bolder mb-0" style={{ background: 'linear-gradient(45deg, #0d6efd, #0dcaf0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//                       5,00,000
//                     </h2>
//                   </div>
//                   <div className="bg-primary" style={{ height: '5px' }}></div>
//                 </div>
//               </div>
              
//               <div className="col-sm-6">
//                 <div 
//                   className="card border-0 shadow rounded-4 overflow-hidden h-100" 
//                   style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'default' }} 
//                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.classList.add('shadow-lg'); }} 
//                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.classList.remove('shadow-lg'); }}
//                 >
//                   <div className="card-body p-4 text-center d-flex flex-column justify-content-center position-relative">
//                     <div className="position-absolute bottom-0 end-0" style={{ transform: 'translate(15%, 20%)', opacity: 0.05, pointerEvents: 'none' }}>
//                       <i className="bi bi-people-fill text-success" style={{ fontSize: '10rem' }}></i>
//                     </div>
//                     <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm" style={{ width: '60px', height: '60px' }}>
//                       <i className="bi bi-check-circle-fill fs-3"></i>
//                     </div>
//                     <h5 className="text-secondary fw-bold text-uppercase mb-2" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>Total Pledges</h5>
//                     <h2 className="display-5 fw-bolder mb-0" style={{ background: 'linear-gradient(45deg, #198754, #20c997)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//                       {submissionCount}
//                     </h2>
//                   </div>
//                   <div className="bg-success" style={{ height: '5px' }}></div>
//                 </div>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default AntiDrugQR;




import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router-dom';

function AntiDrugQR() {
  const [formUrl, setFormUrl] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);

  // Dynamic API Base URL definition (identical to AntiDrugForm.jsx)
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

  useEffect(() => {
    // Set QR code target URL
    const targetUrl = `${window.location.origin}/#/antidrug/form`;
    setFormUrl(targetUrl);

    // Fetch total submissions count using the matching backend endpoint
    fetch(`${API_URL}/api/antidrug/count`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && typeof data.count !== 'undefined') {
          setSubmissionCount(data.count);
        }
      })
      .catch((err) => console.error("Error fetching submission count:", err));

    // Fetch and increment visitor count
    const hasVisited = sessionStorage.getItem('has_visited_bothaiellatamilnadu');
    if (!hasVisited) {
      fetch(`${API_URL}/api/antidrug/visitor/increment`, { method: 'POST' })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.success && typeof data.count !== 'undefined') {
            sessionStorage.setItem('has_visited_bothaiellatamilnadu', 'true');
            setVisitorCount(data.count);
          }
        })
        .catch((err) => console.error("Error incrementing visitor count:", err));
    } else {
      fetch(`${API_URL}/api/antidrug/visitor/count`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.success && typeof data.count !== 'undefined') {
            setVisitorCount(data.count);
          }
        })
        .catch((err) => console.error("Error fetching visitor count:", err));
    }
  }, [API_URL]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formUrl || `${window.location.origin}/antidrug/form`);
    alert('Form Link copied to clipboard!');
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes qrFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .qr-shell {
          min-height: 100vh;
          max-width: 1200px;
          background:
            radial-gradient(circle at top left, rgba(148,163,184,0.12), transparent 28%),
            radial-gradient(circle at bottom right, rgba(250,204,21,0.08), transparent 24%),
            linear-gradient(180deg, #f7f4ee 0%, #edf2f8 100%);
          padding-top: 3rem;
          padding-bottom: 3rem;
        }

        .qr-hero-panel,
        .qr-stat-card,
        .qr-card-shell {
          animation: fadeInUp 0.6s ease-out both;
        }

        .qr-hero-panel {
          background: linear-gradient(135deg, #0b1f3a 0%, #173968 45%, #1f4677 100%);
          border: 1px solid rgba(250, 204, 21, 0.42);
          box-shadow: 0 28px 55px -22px rgba(11, 31, 58, 0.42);
          border-radius: 1.5rem;
          backdrop-filter: blur(8px);
          position: relative;
          overflow: hidden;
        }

        .qr-hero-panel::before {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          right: -70px;
          top: -70px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
        }

        .qr-stat-card {
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 1.35rem;
          box-shadow: 0 20px 34px -24px rgba(15, 23, 42, 0.2);
          padding: 1.5rem;
          text-align: center;
          align-items: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .qr-stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 36px -20px rgba(15, 23, 42, 0.18);
        }

        .qr-card-shell {
          background: rgba(255,255,255,0.96);
          border: 1px solid rgba(148, 163, 184, 0.28);
          border-radius: 1.5rem;
          box-shadow: 0 28px 48px -20px rgba(15, 23, 42, 0.12);
          backdrop-filter: blur(10px);
        }

        .qr-code-box {
          animation: qrFloat 3s ease-in-out infinite;
          border: 2px solid rgba(30, 56, 107, 0.3);
          box-shadow: 0 0 0 6px rgba(30, 56, 107, 0.08), 0 18px 32px -18px rgba(30, 56, 107, 0.3);
          background: rgba(255,255,255,0.9);
        }

        .qr-action-btn,
        .qr-action-btn-outline {
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
          will-change: transform;
        }

        .qr-action-btn:hover,
        .qr-action-btn-outline:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 22px rgba(30, 64, 175, 0.16);
        }

        .qr-action-btn-outline:hover {
          color: #2563eb;
          border-color: #93c5fd;
        }

        .qr-action-btn:active,
        .qr-action-btn-outline:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .qr-shell {
            padding: 1.5rem 0.75rem !important;
          }
          .qr-hero-panel {
            padding: 2.2rem 1.25rem !important;
          }
          .qr-hero-panel h1 {
            font-size: 2.2rem !important;
            line-height: 1.15 !important;
          }
          .qr-card-shell {
            padding: 2rem 1.25rem !important;
          }
          .qr-card-shell h2 {
            font-size: 1.6rem !important;
          }
          .qr-code-box {
            padding: 1rem !important;
          }
          .qr-code-box svg {
            width: 170px !important;
            height: 170px !important;
          }
          .qr-stat-card {
            padding: 1.25rem 1rem !important;
            min-height: 140px !important;
          }
          .qr-stat-card h2 {
            font-size: 1.6rem !important;
          }
        }
      `}</style>
      <div className="container py-5 qr-shell">
      
      {isAdmin && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="alert alert-success d-flex flex-wrap justify-content-between align-items-center rounded-4 shadow-sm border-0 p-3 mb-0">
              <div className="d-flex align-items-center mb-2 mb-md-0">
                <i className="bi bi-shield-lock-fill fs-3 me-3 text-success"></i>
                <div>
                  <h6 className="fw-bold mb-0">Admin Mode Active</h6>
                  <span className="small text-secondary">You can view all submitted form responses.</span>
                </div>
              </div>
              <Link to="/antidrug-camp" className="btn btn-success rounded-pill px-4 py-2 fw-bold shadow-sm">
                View Submitted Details
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="row g-4 align-items-stretch">
        
        {/* Left Side: Header & Counts */}
        <div className="col-lg-6 d-flex flex-column gap-4">
          
          {/* Main Hero Banner */}
          <div 
            className="p-5 qr-hero-panel text-white position-relative overflow-hidden d-flex flex-column justify-content-center" 
            style={{ flexGrow: 1 }}
          >
            <div className="position-absolute" style={{ right: '-40px', top: '-40px', opacity: 0.1 }}>
              <i className="bi bi-shield" style={{ fontSize: '18rem' }}></i>
            </div>
            
            <div className="position-relative" style={{ zIndex: 1 }}>
              <span className="badge px-3 py-2 fw-bolder rounded-pill mb-4" style={{ background: 'linear-gradient(135deg, #facc15 0%, #f59e0b 100%)', color: '#111827', fontSize: '0.75rem', letterSpacing: '0.6px', boxShadow: '0 12px 20px -12px rgba(250, 204, 21, 0.6)' }}>
                <i className="bi bi-megaphone-fill me-2"></i> OFFICIAL AWARENESS CAMPAIGN
              </span>
              
              <h1 className="fw-bold mb-4" style={{ fontSize: '3.5rem', lineHeight: '1.05', letterSpacing: '-0.06em', fontFamily: 'Georgia, "Times New Roman", serif', color: '#f8fafc' }}>
                Anti Alcohol-Drug Signature Campaign
              </h1>
              
              <p className="mb-0 fw-medium" style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: '1.6', color: '#dbeafe' }}>
                Say <strong style={{ color: '#facc15' }}>NO</strong> to Drugs! Scan the QR code on your mobile device to open the official pledge form. Together we can build a drug-free community.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="row g-4">
            <div className="col-md-4 col-sm-6">
              <div className="qr-stat-card h-100">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', color: '#1d4ed8', margin: '0 auto 0.85rem auto' }}>
                  <i className="bi bi-flag-fill fs-4"></i>
                </div>
                <h6 className="text-secondary fw-bold text-uppercase mb-2" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                  Targeted Pledges of the people
                </h6>
                <h2 className="fw-bolder mb-0" style={{ color: '#3b82f6' }}>5,00,000</h2>
              </div>
            </div>
            
            <div className="col-md-4 col-sm-6">
              <div className="qr-stat-card h-100">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '56px', height: '56px', background: '#eff6ff', color: '#1e386b', margin: '0 auto 0.85rem auto' }}>
                  <i className="bi bi-check-circle-fill fs-4"></i>
                </div>
                <h6 className="text-secondary fw-bold text-uppercase mb-2" style={{ fontSize: '0.75rem', letterSpacing: '1px', color: '#1e386b' }}>
                  Total Pledges
                </h6>
                <h2 className="fw-bolder mb-0" style={{ color: '#1e386b' }}>{submissionCount.toLocaleString()}</h2>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="qr-stat-card h-100">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{ width: '56px', height: '56px', background: '#eff6ff', color: '#1e386b', margin: '0 auto 0.85rem auto' }}>
                  <i className="bi bi-people-fill fs-4"></i>
                </div>
                <h6 className="text-secondary fw-bold text-uppercase mb-2" style={{ fontSize: '0.75rem', letterSpacing: '1px', color: '#1e386b' }}>
                  Total Visitors
                </h6>
                <h2 className="fw-bolder mb-0" style={{ color: '#1e386b' }}>{visitorCount.toLocaleString()}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: QR Code Display */}
        <div className="col-lg-6">
          <div className="card border-0 p-4 p-md-5 h-100 d-flex flex-column align-items-center justify-content-center text-center qr-card-shell" style={{ border: '1px solid #f1f5f9' }}>
            
            <div className="qr-badge-light" style={{ background: '#eff6ff', border: '1px solid rgba(30, 56, 107, 0.12)', boxShadow: '0 12px 18px -14px rgba(29, 78, 216, 0.28)', color: '#1d4ed8', padding: '0.7rem 1rem', borderRadius: '999px', fontWeight: 700, letterSpacing: '0.02em' }}>
              <i className="bi bi-qr-code-scan me-2"></i> Anti Alcohol -Drug Signature Campaign QR Code
            </div>
            
            <h2 className="fw-bold text-dark mb-2" style={{ fontSize: '2rem' }}>Scan QR Code to Pledge</h2>
            <p className="text-secondary mb-4" style={{ fontSize: '0.95rem' }}>
              Scan the QR Code Join the Pledge to Say NO to Drugs
            </p>
            
            <p className="text-dark fw-medium mb-5">
              Be a Thinker, Not a Drinker.<br />
              Choose Health. Choose Hope. Choose Life.
            </p>

            <div className="p-4 bg-white rounded-4 mb-5 qr-code-box" style={{ display: 'inline-block' }}>
              <QRCodeSVG
                value={formUrl || `${window.location.origin}/antidrug/form`}
                size={220}
                level="H"
                includeMargin={true}
              />
            </div>

            <div className="d-flex flex-column flex-sm-row gap-3 w-100" style={{ maxWidth: '400px' }}>
              <Link 
                to="/antidrug/form" 
                className="btn text-white rounded-3 py-3 fw-bold flex-grow-1 d-flex align-items-center justify-content-center qr-action-btn"
                style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)', borderRadius: '0.9rem', paddingTop: '0.9rem', paddingBottom: '0.9rem' }}
              >
                <i className="bi bi-pencil-square me-2"></i> Fill Pledge Form
              </Link>

              <button
                type="button"
                className="btn qr-btn-outline rounded-3 py-3 fw-bold flex-grow-1 d-flex align-items-center justify-content-center qr-action-btn-outline"
                onClick={copyToClipboard}
                style={{ border: '1px solid #cbd5e1', backgroundColor: '#ffffff', color: '#1d4ed8', borderRadius: '0.9rem', paddingTop: '0.9rem', paddingBottom: '0.9rem' }}
              >
                <i className="bi bi-copy me-2"></i> Copy Form Link
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default AntiDrugQR;